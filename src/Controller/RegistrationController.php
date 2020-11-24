<?php

namespace App\Controller;

use App\Entity\Candidat;
use App\Entity\Entreprise;
use App\Entity\Recruteur;
use App\Entity\User;
use App\Form\CandidatRegistrationFormType;
use App\Form\ProRegistrationFormType;
use App\Repository\EntrepriseRepository;
use App\Repository\UserRepository;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Container\ContainerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use App\Service\MailService;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;


class RegistrationController extends AbstractController
{
    protected $ms;
    protected $session;
    protected $security;
    protected $em;
    protected $enRepo;

    public function __construct(MailService $ms, SessionInterface $session, Security $security, EntityManagerInterface $em, EntrepriseRepository $enRepo)
    {
        $this->ms = $ms;
        $this->session = $session;
        $this->security = $security;
        $this->em = $em;
        $this->enRepo = $enRepo;
    }

    /**
     * @Route("/candidat/inscription/", name="candidat_inscription")
     * @Route("/entreprise/inscription", name="entreprise_inscription")
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $user = new User();
        $route = $request->attributes->get('_route');

//        INSCRIPTION CANDIDAT
        if($route == "candidat_inscription") {
            $regForm = $this->createForm(CandidatRegistrationFormType::class, $user);
            $regForm->handleRequest($request);

            if ($regForm->isSubmitted() && $regForm->isValid()) {
                // encode the plain password
                $user->setPassword(
                    $passwordEncoder->encodePassword(
                        $user,
                        $regForm->get('plainPassword')->getData()
                    )
                );
                $cd = new Candidat();
                $cd->setNom($regForm->get('nom')->getData());
                $cd->setPrenom($regForm->get('prenom')->getData());
                $user->setCandidat($cd);
                $user->setRoles(["ROLE_USER", "ROLE_CANDIDAT"]);
                $this->em->persist($cd);
                $this->em->persist($user);
                $this->em->flush();

                // Generate authToken
                $authToken = $this->ms->generateToken($user->getId(), $user->getEmail());

                $user->setAuthToken($authToken);
                $this->em->flush();

                $url = $this->generateUrl('app_confirm', ['token' => $authToken], UrlGeneratorInterface::ABSOLUTE_URL);

                // send an email
                $nom = $cd->getNom();
                $prenom = $cd->getPrenom();
                $mail = $user->getEmail();

                $this->ms->sendAccountActivationMessage($user, $mail, $url, $nom, $prenom);

                $this->addFlash("success", "Votre compte utilisateur a été créé! Pour l'activer, veuillez suivre les instructions contenues dans l'email que nous venons de vous envoyer");
                return $this->redirectToRoute('app_login');

            }

            return $this->render('registration/cdt_register.html.twig', [
                'regForm' => $regForm->createView(),
                'route' => $route,
               
            ]);
//            TODO vérif entreprise->employé avant activation de compte


//            INSCRIPTION ENTREPRISE
        }elseif($route == "entreprise_inscription") {

            $proForm = $this->createForm(ProRegistrationFormType::class, $user);
            $proForm->handleRequest($request);

            if ($proForm->isSubmitted() && $proForm->isValid()) {
                //search for company in db
                $siret = $proForm->get('siret')->getData();
                $en = $this->enRepo->findOneBy(["siret" => $siret]);

                if($en && $en->getRecruteurs()->count() > 0){
                    $this->addFlash("danger", "Une inscription a déjà été faite pour le compte de votre entreprise. Merci de vous rapprocher de votre société pour plus d'informations.");
                    return $this->redirectToRoute('entreprise_inscription');
                }
            // else insert User, Recruteur, Entreprise

            // encode the plain password
                $user->setPassword(
                    $passwordEncoder->encodePassword(
                        $user,
                        $proForm->get('plainPassword')->getData()
                    )
                );
            // set Recruteur
                $rc = new Recruteur();
                $user->setRecruteur($rc);
                $rc->setNom($proForm->get('nom')->getData());
                $rc->setPrenom($proForm->get('prenom')->getData());

            // create Entreprise

                $en = new Entreprise();
                $rc->setEntreprise($en);
                $en->setRaisonSociale($proForm->get('raisonSociale')->getData());
                $en->setSiret($siret);
                $en->setTelephone($proForm->get('telephone')->getData());
                $en->setEmail($proForm->get('socMail')->getData());

                $user->setRoles(["ROLE_USER", "ROLE_RECRUTEUR", "ROLE_TO_VERIFY"]);

//                dd($proForm);
                $this->em->persist($en);
                $this->em->persist($rc);
                $this->em->persist($user);
                $this->em->flush();

                // Generate authToken
                $authToken = $this->ms->generateToken($user->getId(), $user->getEmail());

                $user->setAuthToken($authToken);
                $this->em->flush();

                $url = $this->generateUrl('app_confirm', ['token' => $authToken], UrlGeneratorInterface::ABSOLUTE_URL);

                // TODO SEND AN EMAIL TO ADMIN AFTER REGISTRATION
                $nom = $rc->getNom();
                $prenom = $rc->getPrenom();
                $mail = $user->getEmail();

                $this->addFlash("success", "Votre demande d'inscription pour le compte de votre entreprise a bien été enregistrée. Après l'étude de celle-ci et confirmation de la part de votre société, un lien d'activation vous sera envoyé par email.");

                $this->ms->sendAlertMessage($rc, $mail, $url);
                return $this->redirectToRoute('app_login');

            }

            return $this->render('registration/pro_register.html.twig', [
                'proForm' => $proForm->createView(),
                'route' => $route
            ]);

        }
    }


    /**
     * @Route("/confirm/{token}", name="app_confirm")
     */

    public function confirmUser($token, UserRepository $uRepo)
    {
        $user = $uRepo->findOneBy(['authToken' => $token]);

        if(!$user){
            throw $this->createNotFoundException("Cet utilisateur n'existe pas!");
        }

        $user_token = json_decode(base64_decode($token));
//        dd($user_token[3]);

        if ($user_token[1] != $user->getId()) {
            $user = null;
            $this->addFlash('danger', 'Jeton invalide ');
        }

//        if (time() > ($user_token[3]+48*3600)) {
//            $user = null;
//            $this->addFlash('danger', 'Le lien a expiré');
//        }
//        if($user->getRoles() === ["ROLE_USER", "ROLE_RECRUTEUR", "ROLE_TO_VERIFY"]){
//            $user->setRoles(["ROLE_USER", "ROLE_RECRUTEUR"]);
//        }

        $user->setAuthToken(null);
        $user->setActif(true);
        $this->em->flush();
        $this->addFlash('success', 'Votre compte est actif! Vous pouvez vous connecter.');

            return $this->redirectToRoute("app_login");

    }

}

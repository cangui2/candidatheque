<?php

namespace App\Controller;

use App\Entity\Candidat;
use App\Entity\Recruteur;
use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Form\RegistrationProFormType;
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

    public function __construct(MailService $ms, SessionInterface $session, Security $security, EntityManagerInterface $em)
    {
        $this->ms = $ms;
        $this->session = $session;
        $this->security = $security;
        $this->em = $em;

    }

    /**
     * @Route("/candidat/inscription/", name="candidat_inscription")
     * @Route("/professionnel/inscription", name="professionnel_inscription")
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $user = new User();
        $route = $request->attributes->get('_route');

//        INSCRIPTION CANDIDAT
        if($route == "candidat_inscription") {
            $regForm = $this->createForm(RegistrationFormType::class, $user);
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

                $this->addFlash("success", "Votre compte utilisateur a été créé! Pour l'activer, veuillez suivre les instructions contenues dans l'e-mail que nous venons de vous envoyer");
                return $this->redirectToRoute('app_login');

            }

            return $this->render('registration/register.html.twig', [
                'regForm' => $regForm->createView(),
                'route' => $route
            ]);


//            INSCRIPTION ENTREPRISE
        }elseif($route == "professionnel_inscription") {

            $regForm = $this->createForm(RegistrationFormType::class, $user);
            $regForm->handleRequest($request);

            if ($regForm->isSubmitted() && $regForm->isValid()) {
                // encode the plain password
                $user->setPassword(
                    $passwordEncoder->encodePassword(
                        $user,
                        $regForm->get('plainPassword')->getData()
                    )
                );
                $rc = new Recruteur();
                $user->setRecruteur($rc);
                $rc->setNom($regForm->get('nom')->getData());
                $rc->setPrenom($regForm->get('prenom')->getData());
//                $en = new Entreprise();
                $user->setRoles(["ROLE_USER", "ROLE_RECRUTEUR"]);

                $this->em->persist($rc);
                $this->em->persist($user);
                $this->em->flush();

                // Generate authToken
                $authToken = $this->ms->generateToken($user->getId(), $user->getEmail());

                $user->setAuthToken($authToken);
                $this->em->flush();

                $url = $this->generateUrl('app_confirm', ['token' => $authToken], UrlGeneratorInterface::ABSOLUTE_URL);

                // send an email
                $nom = $rc->getNom();
                $prenom = $rc->getPrenom();
                $mail = $user->getEmail();

                $this->ms->sendAccountActivationMessage($user, $mail, $url, $nom, $prenom);

                $this->addFlash("success", "Votre compte utilisateur a été créé! Pour l'activer, veuillez suivre les instructions contenues dans l'e-mail que nous venons de vous envoyer");
                return $this->redirectToRoute('app_login');
            }

            return $this->render('registration/register.html.twig', [
                'regForm' => $regForm->createView(),
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

        if (time() > ($user_token[3]+6*3600)) {
            $user = null;
            $this->addFlash('danger', 'Le lien a expiré');
        }

        $user->setAuthToken(null);
        $user->setActif(true);
        $this->em->flush();
        $this->addFlash('success', 'Votre compte est actif! Vous pouvez vous connecter');
        return $this->redirectToRoute("app_login");
    }

}

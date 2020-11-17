<?php

namespace App\Controller;

use App\Entity\Offre;
use App\Form\OffreType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

class OffreController extends AbstractController
{
    protected $em;
    protected $session;
    protected $security;


    public function __construct(EntityManagerInterface $em, SessionInterface $session, Security $security){
        $this->em = $em;
        $this->session = $session;
        $this->security = $security;
    }

    /**
     * @Route("/entreprise/offre_creation", name="offre_creation")
     */
    public function create(Request $request)
    {
        $offre = new Offre();
        $offreForm = $this->createForm(OffreType::class, $offre);
        $recruteur = $this->security->getUser()->getRecruteur();
        $entreprise = $this->security->getUser()->getRecruteur()->getEntreprise();

        $offreForm->handleRequest($request);

        if($offreForm->isSubmitted() && $offreForm->isValid()){

            $offre->setRecruteur($recruteur);
            $offre->setEntreprise($entreprise);

            $this->em->persist($offre);
            $this->em->flush();
            $this->addFlash('success', 'Publication réussie! Votre offre est dès à présent consultable sur notre site.');

//            TODO
            return $this->redirectToRoute('/entreprise/offre_creation');
        }

        return $this->render('offre/offre_creation.html.twig', [
            'offre' => $offre,
            'offreForm' => $offreForm->createView()

        ]);
    }
}

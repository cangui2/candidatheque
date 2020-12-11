<?php

namespace App\Controller;




use App\Entity\CV;
use App\Entity\Entreprise;
use App\Entity\Metier;
use App\Entity\Offre;
use App\Entity\Postule;
use App\Repository\CVRepository;
use App\Repository\MetierRepository;
use App\Repository\PostuleRepository;
use App\Service\MatchingService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\OffreRepository;


class EntrepriseController extends AbstractController
{
    protected $offreRepo;
    protected $postuleRepo;
    protected $cvRepo;

    public function __construct(OffreRepository $offreRepo, PostuleRepository $postuleRepo,CVRepository $cvRepo){

        $this->offreRepo=$offreRepo;
        $this->postuleRepo=$postuleRepo;
        $this->cvRepo=$cvRepo;

    }


    /**
     * @Route("/entreprise/espace_entreprise", name="espace_entreprise")
     */
    public function index(): Response {

        // Laisser le recruteur connecté voir l'espace entreprise
//        if ($this->isGranted("IS_AUTHENTICATED_REMEMBERED"))
//        {
//            return $this->redirectToRoute("login_success");
//        }


        return $this->render('entreprise/espace_entreprise.html.twig', [
            'error' => null
        ]);
    }

    /**
     * @Route("/entreprise/dashboard/test/{offre}", name="dashboard_entreprise_test")
     *
     */
    public function dashboard_test(MatchingService $matchingService, Offre $offre): Response
    {




        $resultat = $matchingService->matchingAlgo1($offre);
        //$resultat2 = $matchingService->matchingAlgo2($offre);
dd($resultat);


    }

    /**
     * @Route("/entreprise/dashboard", name="dashboard_entreprise")
     *
     */
    public function dashboard(): Response {


        $entreprise = $this->getUser()->getRecruteur()->getEntreprise()->getId();


        $offres=$this->offreRepo->findByCompany($entreprise);
        //$offres=$recruteur->getOffres(); //$this->offreRepo->findCustomOfferByIdRecruteur($recruteurId);
        $cvs=$this->cvRepo->findAll();



        return $this->render('entreprise/dashboard_entreprise.html.twig',[


            'offres'=>$offres,
            'cvs'=>count($cvs),




        ]);
    }




}

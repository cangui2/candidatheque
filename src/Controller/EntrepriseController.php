<?php

namespace App\Controller;



use App\Entity\Offre;
use App\Repository\CVRepository;
use App\Repository\PostuleRepository;
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
     * @Route("/entreprise/dashboard", name="dashboard_entreprise")
     *
     */
    public function dashboard(): Response {


        $recruteurId = $this->getUser()->getRecruteur()->getId();

        $result = $this->offreRepo->findCustomOfferByIdRecruteur($recruteurId);

        $lastCanditature=$this->postuleRepo->findViewsCandidatForRecruteur($recruteurId);


        $cvs=$this->cvRepo->findAll();

        $test=$this->offreRepo->findCompetenceByOffer(5);

        foreach ($test as $key=> $value){

                $test2[]=$value['competence_id'];
        }




        $globalData = [];
        $globalLabel = [];
        foreach ($result as $ligne) {
            $globalData[] = $ligne["compteur"];
            $globalLabel[] = $ligne["libelle"];
        }
        $limitOffer = $this->offreRepo->findAllOfferByIdRecruteurLimit5($recruteurId);









        return $this->render('entreprise/dashboard_entreprise.html.twig',[

            'offerNumber' => array_sum($globalData),
            'limitOffer'=>$limitOffer,
            'candidateReturn'=> count($lastCanditature),
            'lastCanditature'=>$lastCanditature,
            'cvs'=>$cvs,



        ]);
    }




}

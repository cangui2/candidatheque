<?php

namespace App\Controller;




use App\Entity\Metier;
use App\Entity\Offre;
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
        $skillCvCandidat = array (
            "gilles" => array("103163", "106963", "119000"),
            "alex" => array("100007", "103163", "100010"),
            "claire" => array("119000", "A1108", "A1109"),
            "marine" => array("102216", "102631", "115962","115974","120617"),
            "julien" => array("101360", "102788", "104564"),
            "pierre" => array("119000", "A1108", "A1109")
        );

        $resultat = $matchingService->matchingAlgo1($offre,$skillCvCandidat);
        dd($resultat);
//        foreach ($resultat as $ligne) {
//            $ligne["score"]
//            $ligne["cv"]->getCandidat()->getNom() == // ligne.cv.candidat.nom
//            $ligne["cv"]->getCV()->getTitre()
//        }

    }


        /**
     * @Route("/entreprise/dashboard", name="dashboard_entreprise")
     *
     */
    public function dashboard(): Response {


        $recruteurId = $this->getUser()->getRecruteur()->getId();

        $result = $this->offreRepo->findCustomOfferByIdRecruteur($recruteurId);

        $postules=$this->postuleRepo->findViewsCandidatForRecruteur($recruteurId);

        $cvs=$this->cvRepo->findAll();
        /*
        // algo en test
        $idOffert=5;
        $skillCvCandidat = array (
            "gilles" => array("103163", "106963", "119000"),
            "alex" => array("A1104", "103163", "A1101"),
            "claire" => array("119000", "A1108", "A1109")
        );
            */
        //$test=$matchingService->matchingOfferVsCvCandidat($postules);
        //-------------------------------------------------------------------------------//

        $globalData = [];
        $globalLabel = [];
        foreach ($result as $ligne) {
            $globalData[] = $ligne["compteur"];
            $globalLabel[] = $ligne["libelle"];
        }
        $limitOffer = $this->offreRepo->findAllOfferByIdRecruteurLimit5($recruteurId);

/*
        $test=$metier->getLibelle();
        $test2=json_encode($test);
        dd($test);
*/


        return $this->render('entreprise/dashboard_entreprise.html.twig',[

            'offerNumber' => array_sum($globalData),
            'limitOffer'=>$limitOffer,
            'candidateReturn'=> count($postules),
            'lastCanditature'=>$postules,
            'cvs'=>$cvs,




        ]);
    }




}

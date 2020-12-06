<?php

namespace App\Controller;

use App\Entity\Rome;
use App\Entity\User;
use App\Repository\PostuleRepository;
use App\Repository\CandidatRepository;
use App\Form\CandidatRegistrationFormType;
use App\Form\FicheMetierSearchType;
use App\Repository\CompetenceRepository;
use App\Repository\DescriptionRepository;
use App\Repository\MetierRepository;
use App\Repository\RomeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CandidatController extends AbstractController
{

    protected $romeRepo;
    protected $metierRepo;
    protected $compRepo;
    protected $descRepo;

    public function __construct(RomeRepository $romeRepo, MetierRepository $metierRepo, CompetenceRepository $compRepo, DescriptionRepository $descRepo){
        $this->romeRepo = $romeRepo;
        $this->metierRepo = $metierRepo;
        $this->compRepo = $compRepo;
        $this->descRepo = $descRepo;
    }



    /**
     * @Route("/candidat/dashboard", name="dashboard_candidat")
     */
    public function accueilCandidat(): Response {


        return $this->render('candidat/dashboard_candidat.html.twig');
    }


// ROUTE MOVED TO HOME CONTROLLER

//     /**
//      * @Route("/candidat/metier/fiche_recherche", name="fiche_recherche")
//      */
//     public function recherche(Request $request){
//
//         $searchForm = $this->createForm(FicheMetierSearchType::class);
//         $searchForm->handleRequest($request);
//
//         if($searchForm->isSubmitted() && $searchForm->isValid())
//         {
//
//             $filtre = $searchForm->getData()['filtre'];
////             dd($filtre);
//             $codesRome = $this->romeRepo->findBySearchTerm(preg_split("/[\s,]+/" ,$filtre));
//
//            return $this->render('metier/liste_fiches_metier.html.twig', [
//                'codesRome' =>$codesRome,
//                'filtre' => $filtre
//            ]);
//
//         }
//             return $this->render('metier/fiche_recherche.html.twig', [
//                 "searchForm" =>$searchForm ->createView()
//             ]);
//
//     }

    /**
     * @Route("/candidat/metier/fiche_metier/{codeRome}", name="fiche_metier")
     */
    public function afficheMetier($codeRome): Response
    {
//        dd($codeRome);
        $rome = $this->romeRepo->findOneBy(['code' =>$codeRome]);

        $savoirs = $this->compRepo->findCompetencesByRome($rome);
        $svFaire = $this->compRepo->findCompetences2ByRome($rome);
        $definitions = $this->descRepo->findDefinitionsByRome($rome);
        $acces = $this->descRepo->findAccesMetierByRome($rome);
        $conditions = $this->descRepo->findConditionsByRome($rome);



        return $this->render('metier/fiche_metier.html.twig', [
            'rome' => $rome,
            'savoirs' => $savoirs,
            'svFaire' => $svFaire,
            'definitions' => $definitions,
            'acces' => $acces,
            'conditions'=> $conditions
        ]);
    }

    /**
     * @Route("/candidat/dashboard", name="dashboard_candidat")
     */
    public function dashboard(PostuleRepository $repo,CandidatRepository $repo2): Response
    {

        $candidat_id = $this->getUser()->getCandidat()->getId();

        $compteur = $repo->countByCandidat($candidat_id);

        //dd($compteur);

        //$test = $repo2 ->countByCV($candidat_id);
        //dd($test);

        return $this->render('candidat/dashboard_candidat.html.twig',[
            'compteur'=>$compteur,
        ]);
    }



}

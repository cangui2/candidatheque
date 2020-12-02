<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\CandidatRegistrationFormType;
use App\Repository\CompetenceRepository;
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

    public function __construct(RomeRepository $romeRepo, MetierRepository $metierRepo, CompetenceRepository $compRepo){
        $this->romeRepo = $romeRepo;
        $this->metierRepo = $metierRepo;
        $this->compRepo = $compRepo;
    }



    /**
     * @Route("/candidat/fiche_metier", name="fiche_metier")
     */
    public function afficheMetier(): Response
    {
        $rome = $this->romeRepo->findOneBy(["code" => "m1805"]);
        $savoirs = $this->compRepo->findCompetencesByRome($rome);
        $svFaire = $this->compRepo->findCompetences2ByRome($rome);



        return $this->render('metier/fiche_metier.html.twig', [
            'rome' => $rome,
            'savoirs' => $savoirs,
            'svFaire' => $svFaire,

        ]);
    }


    /**
     * @Route("/candidat/dashboard", name="dashboard_candidat")
     */
    public function dashboard(): Response {


        return $this->render('candidat/dashboard_candidat.html.twig');
    }
}

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
    public function dashboard(PostuleRepository $repo,CandidatRepository $repo2): Response
    {

        $candidat = $this->getUser()->getCandidat();



        return $this->render('candidat/dashboard_candidat.html.twig');
    }



}

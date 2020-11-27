<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\PostuleRepository;
use App\Repository\CandidatRepository;
use App\Form\CandidatRegistrationFormType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CandidatController extends AbstractController
{

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

<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\CandidatRegistrationFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CandidatController extends AbstractController
{

    /**
     * @Route("/candidat/dashboard", name="dashboard_candidat")
     */
    public function dashboard(): Response {


        return $this->render('candidat/dashboard_candidat.html.twig');
    }
}

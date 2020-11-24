<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EntrepriseController extends AbstractController
{
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
     */
    public function dashboard(): Response {


        return $this->render('entreprise/dashboard_entreprise.html.twig');
    }


}

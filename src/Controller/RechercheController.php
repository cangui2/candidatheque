<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RechercheController extends AbstractController
{
    /**
     * @Route("/recherche", name="recherche")
     */
    public function index(): Response
    {
        return $this->render('recherche/index.html.twig', [
            'controller_name' => 'RechercheController',
        ]);
    }


    /**
     * @Route("/recherche_details", name="recherche_details")
     */
    public function details(): Response
    {
        return $this->render('recherche/details.html.twig', [
            'controller_name' => 'RechercheController',
        ]);
    }
}

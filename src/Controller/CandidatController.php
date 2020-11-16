<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CandidatController extends AbstractController
{
    /**
     * @Route("/candidat/espace_candidat", name="espace_candidat")
     */
    public function espaceCandidat(): Response
    {
        return $this->render('candidat/espace_candidat.html.twig', [
            'controller_name' => 'CandidatController',
        ]);
    }
}

<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CVController extends AbstractController
{
    /**
     * @Route("/candidat/cv", name="candidat_cv")
     */
    public function index(): Response
    {
        //55555
        return $this->render('cv/index.html.twig');
    }
}

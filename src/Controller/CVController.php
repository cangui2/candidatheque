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
    public function candidat_cv(): Response
    {
        $user = $this->getUser();
        dump($user);
        
        return $this->render('cv/candidat_cv.html.twig', [
        ]);
    }

    /**
     * @Route("/public/cv", name="public_cv")
     */
    public function public_cv(): Response
    {
        
        return $this->render('cv/public_cv.html.twig', [
        ]);
    }
}

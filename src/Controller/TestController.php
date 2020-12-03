<?php

namespace App\Controller;

use App\Repository\RomeRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TestController extends AbstractController
{
    /**
     * @Route("/api/test", name="test")
     */
    public function index(): Response
    {
        //222
        return new JsonResponse("{ 'message': 'ok' }");
    }

    /**
     * @Route("/test1", name="test1")
     */
    public function test1(RomeRepository $repo): Response
    {
        $rome = $repo->findOneBy(["code" => "m1805"]);

        
        return $this->render('test/test1.html.twig', [
            'rome' => $rome,
           
        ]);
    }


}

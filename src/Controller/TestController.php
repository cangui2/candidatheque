<?php

namespace App\Controller;

use App\Repository\RomeRepository;
use App\Repository\VilleRepository;
use http\Env\Request;
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
     * @Route("/api/test1/{id}/{rayon}", name="test1")
     * @param VilleRepository $repoVille
     * @param $id
     * @param $rayon
     * @return Response
     */
    public function test1(VilleRepository $repoVille,$id,$rayon): Response
    {

        $result=$repoVille->searchAround($id,$rayon);
        dd($result);

        return new JsonResponse("{ 'message': 'ok' }");
    }


}

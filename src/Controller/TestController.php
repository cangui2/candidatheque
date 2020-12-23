<?php

namespace App\Controller;

use App\Repository\DepartementRepository;
use App\Repository\RomeRepository;
use App\Repository\VilleRepository;
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
        $cpt = $this->getUser()->getRecruteur()->getOffres()->count();

        return new JsonResponse("{ 'message': $cpt }");
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

    /**
     * @Route("/test2", name="test2")
     */
    public function test2(VilleRepository $repo, DepartementRepository $repo2): Response
    {
        $ville1 = $repo->find(31722);

        $tab = [];

        $villes = $repo2->find(81)->getVilles();
        dd($repo->findBy([ "departement" => 32]));

        foreach($repo->findBy([ "departement" => 32]) as $v) {

        }

        $ville2 = $repo->find(31704);

        //$tab[] = $ville1;
        
        $distance = sqrt(pow($ville1->getLongitude()-$ville2->getLongitude(), 2) + pow($ville1->getLatitude()-$ville2->getLatitude(), 2)) * 111.16;
        
        $tab[] = $distance;
        
        return $this->json($tab);
    }


}

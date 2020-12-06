<?php

namespace App\Controller;

use App\Form\FicheMetierSearchType;
use App\Repository\RomeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    protected $romeRepo;

    public function __construct(RomeRepository $romeRepo){
        $this->romeRepo = $romeRepo;
    }

    /**
     * @Route("/", name="home")
     */
    public function index(Request $request): Response
    {

//        SEARCH FORM "FICHE METIER"
        $searchForm = $this->createForm(FicheMetierSearchType::class);
        $searchForm->handleRequest($request);

        if($searchForm->isSubmitted() && $searchForm->isValid())
        {

            $filtre = $searchForm->getData()['filtre'];
//             dd($filtre);
            $codesRome = $this->romeRepo->findBySearchTerm(preg_split("/[\s,]+/" ,$filtre));

            return $this->render('metier/liste_fiches_metier.html.twig', [
                'codesRome' =>$codesRome,
                'filtre' => $filtre
            ]);

        }

        return $this->render('home/index.html.twig', [
            'variaTest' => rand(0, 9),
            "searchForm" =>$searchForm ->createView()
        ]);
    }
}

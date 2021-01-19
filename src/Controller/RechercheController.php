<?php

namespace App\Controller;


use App\Repository\CVRepository;
use App\Repository\MetierRepository;
use App\Repository\OffreRepository;

use App\Repository\PostuleRepository;
use App\Repository\TypeContratRepository;
use App\Repository\VilleRepository;
use phpDocumentor\Reflection\Type;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RechercheController extends AbstractController
{

    protected $offreRepo;
    protected $postuleRepo;
    protected $villeRepo;
    protected $metierRepo;
    protected $secteurRepo;
    protected $typeContratRepo;



    public function __construct(OffreRepository $offreRepo, PostuleRepository $postuleRepo,VilleRepository $villeRepo,MetierRepository $metierRepo,TypeContratRepository $typeContratRepo){

        $this->offreRepo=$offreRepo;
        $this->postuleRepo=$postuleRepo;
        $this->metierRepo=$metierRepo;
        $this->villeRepo=$villeRepo;
        $this->typeContratRepo=$typeContratRepo;


    }


    /**
     * @Route("/recherche", name="recherche")
     */
    public function index(): Response
    {
        //test
        return $this->render('recherche/index.html.twig', [
            'controller_name' => 'RechercheController',
        ]);
    }


    /**
     * @Route("/recherche_liste/", name="recherche_liste")
     */
    public function liste(OffreRepository $offreRepo, Request $request): Response
    {

        $metier = $request->query->get("metier");
        $ville = $request->query->get("ville");
        $secteur = $request->query->get("secteur");
        $typeContrat=$request->query->get("contrat");

        $query = $offreRepo->createQueryBuilder('o')
            ->select('o','met','vil','typ')
            ->leftJoin('o.metier','met')
            ->leftJoin('o.ville','vil')
            ->leftJoin('o.type','typ')
            ->andWhere('met.id like :metier and vil.id like :ville and typ.id like :contrat ')
            ->setParameters(array(
                'metier'=>'%'.$metier.'%',
                'ville'=>'%'.$ville.'%',
                'contrat'=>'%'.$typeContrat.'%',
            ));

        $offreListeResult=$query->distinct()->getQuery()
            ->setMaxResults(30)
            ->getResult();

        //return new JsonResponse("{ 'message': 'ok' }");


        $v1=$this->metierRepo->find($metier);

        $v2=$this->villeRepo->find($ville);

        $v3=$this->typeContratRepo->find($typeContrat);





        return $this->render('recherche/liste.html.twig', [
            'controller_name' => 'RechercheController',
            'variaTest' => rand(0, 9),
            'offreListeResult'=>$offreListeResult,
            'test'=>$v1,
            'test2'=>$v2,
            'test3'=>$v3

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


        /**
     * @Route("/recherche_moteur", name="recherche_moteur")
     */
  //  public function search(Request $request, ObjectManager $manager)
   /* {
        $moteur = new Moteur();

        $form = $this->createFormBuilder($moteur)
                     ->add('profession')
                     ->add('lieu')
                     ->add('secteur')
                     ->add('contrat')
                     ->getForm();

        return $this->render('recherche_index.html.twig', [
            'formMoteur' => $form->createView()
        ]);
    }

}*/

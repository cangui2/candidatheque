<?php

namespace App\Controller;


use App\Repository\OffreRepository;

use phpDocumentor\Reflection\Type;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RechercheController extends AbstractController
{




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
     * @Route("/recherche_liste/{metier}/{ville}/{secteur}/{contrat}", name="recherche_liste")
     */
    public function liste(OffreRepository $offreRepo, Request $request): Response
    {

        $metier = $request->query->get("metier");
        $ville = $request->query->get("ville");
        $secteur = $request->query->get("secteur");
        $typeContrat=$request->query->get("contrat");

        $query = $offreRepo->createQueryBuilder('o')
            ->select('o.id', 'o.titre as titre', 'o.datePublication as publication','met.id as idmetier')
            ->leftJoin('o.metier','met')
            ->leftJoin('o.ville','vil')
            ->leftJoin('o.type','typ')
            ->andWhere('met.id like :metier and vil.id like :ville and typ.id like :contrat ')
            ->setParameters(array(
                'metier'=>'%'.$metier.'%',
                'ville'=>'%'.$ville.'%',
                'contrat'=>'%'.$typeContrat.'%',
            ));

        $entities=$query->distinct()->getQuery()
            ->setMaxResults(30)
            ->getResult();
        $test=new JsonResponse($entities);



        return $this->render('recherche/liste.html.twig', [
            'controller_name' => 'RechercheController',
            'variaTest' => rand(0, 9),
            'test'=>$test,
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

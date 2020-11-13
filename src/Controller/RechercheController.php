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
        //test
        return $this->render('recherche/index.html.twig', [
            'controller_name' => 'RechercheController',
        ]);
    }


    /**
     * @Route("/recherche_liste", name="recherche_liste")
     */
    public function liste(): Response
    {
        return $this->render('recherche/liste.html.twig', [
            'controller_name' => 'RechercheController',
            'variaTest' => rand(0, 9),
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
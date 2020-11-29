<?php

namespace App\Controller;


use App\Repository\PostuleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\OffreRepository;


class EntrepriseController extends AbstractController
{
    /**
     * @Route("/entreprise/espace_entreprise", name="espace_entreprise")
     */
    public function index(): Response {

        // Laisser le recruteur connecté voir l'espace entreprise
//        if ($this->isGranted("IS_AUTHENTICATED_REMEMBERED"))
//        {
//            return $this->redirectToRoute("login_success");
//        }


        return $this->render('entreprise/espace_entreprise.html.twig', [
            'error' => null
        ]);
    }

    /**
     * @Route("/entreprise/dashboard", name="dashboard_entreprise")
     *
     */
    public function dashboard(OffreRepository $repo, PostuleRepository $repo2): Response {


        $recruteur_id = $this->getUser()->getRecruteur()->getId();
        $name_recruteur=$this->getUser();
        $result = $repo->findCustomOfferByIdRecruteur($recruteur_id);

        $global_data = [];
        $global_label = [];
        foreach ($result as $ligne) {
            $global_data[] = $ligne["compteur"];
            $global_label[] = $ligne["libelle"];
        }
         $offreLimite = $repo->findAllOfferByIdRecruteurLimit5($recruteur_id);

         $test = $repo2->findViewsCandidatForRecruteur($recruteur_id);

         // algorithme de comparaison des competence offre vs candidat(s) //
         // En attente de de mise en place fonction et des varibales via la tables.
        // Test ok vi a dd()
        $idOffre = "offre n°150";

        $competenceOffre = array( "A1101", "A1102", "A1120","A1115");



        $competenceCvCandidat = array (
            "cv1" => array("A1102", "A1101", "A1115"),
            "cv2" => array("A1104", "A1103", "A1101"),
            "cv3" => array("A1102", "A1108", "A1109")
        );
        $results=[];
        foreach ($competenceCvCandidat as $key => $value) {

            for ($i=0; $i <1 ; $i++) {
                $result = array_intersect($value, $competenceOffre);
                $results[$idOffre][$key]=ceil((count($result)*100)/count($competenceOffre));

            }
        }




        return $this->render('entreprise/dashboard_entreprise.html.twig',[
            'global_data' => json_encode($global_data),
            'global_label' => json_encode($global_label),
            'NombreOffre' => array_sum($global_data),
            'offreLimite'=>$offreLimite,
            'name'=>$name_recruteur,


        ]);
    }




}

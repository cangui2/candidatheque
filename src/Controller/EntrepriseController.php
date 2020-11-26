<?php

namespace App\Controller;

use CMEN\GoogleChartsBundle\GoogleCharts\Charts\PieChart;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

use Symfony\Component\Routing\Annotation\Route;
use App\Repository\OffreRepository;
use Symfony\Component\Security\Core\User\UserInterface;

class EntrepriseController extends AbstractController
{
    /**
     * @Route("/entreprise/espace_entreprise", name="espace_entreprise")
     */
    public function index(): Response {

    if($this->isGranted("IS_AUTHENTICATED_REMEMBERED"))
        {
            return $this->redirectToRoute("login_success");
        }


        return $this->render('entreprise/espace_entreprise.html.twig', [
            'error' => null
        ]);
    }

    /**
     * @Route("/entreprise/dashboard", name="dashboard_entreprise")
     *
     */
    public function dashboard(OffreRepository $repo): Response {


        $recruteur_id = $this->getUser()->getRecruteur()->getId();
        $result = $repo->findCustomOfferByIdRecruteur($recruteur_id);

        $global_data = [];
        $global_label = [];
        foreach ($result as $ligne) {
            $global_data[] = $ligne["compteur"];
            $global_label[] = $ligne["libelle"];
        }


        return $this->render('entreprise/dashboard_entreprise.html.twig',[
            'global_data' => json_encode($global_data),
            'global_label' => json_encode($global_label),

        ]);
    }


}

<?php

namespace App\Controller;

use App\Entity\Competence;
use App\Repository\CompetenceRepository;
use App\Repository\CVRepository;
use ContainerJ85uVSC\getExperienceRepositoryService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{

    protected $competenceRepo;


    public function __construct(CompetenceRepository $competenceRepo){
        $this->competenceRepo = $competenceRepo;
    }

    /**
     * @Route("/api/cv/competences/{id_rome}/{libelle}", name="api_cv_competences")
     */
    public function searchCompetenceByRomeAndLibelle(string $id_rome, string $libelle)
    {
        $entities = $this->competenceRepo->createQueryBuilder('c')
            ->select('c.libelle as libelle')
            ->join('c.romes', 'r')
            ->where('c.libelle LIKE :libelle')
            ->andWhere('r.id = :id_rome')
            ->setParameter('libelle', '%'.$libelle.'%')
            ->setParameter('id_rome', $id_rome)
            ->getQuery()
            ->getResult();

        // $resultats = [];
        // foreach ($entities as $e) {
        //     $resultats[] = $e->getLibelle();
        // }

       
        return new JsonResponse($entities);

    }

    /**
     * @Route("/api/sourcing", name="api_sourcing_recherche")
     */
    public function api_sourcing_recherche(CVRepository $cv_repo, Request $request)
    {
        $keyword = $request->query->get("keyword");
        $ville = $request->query->get("ville");
        $source = $request->query->get("source");

        $query = $cv_repo->createQueryBuilder('c')
            ->select('c.id', 'can.nom as nom', 'can.prenom as prenom', 'can.adresse as adresse','c.titre as titre')
            ->join('c.candidat', 'can');




        if ($keyword) {
            $query
                ->select('c.id', 'can.nom as nom', 'can.prenom as prenom', 'can.adresse as adresse','c.titre as titre','met.libelle as metier')
                ->join('c.metier','met')
                ->join("c.competences" ,'com')
                ->andwhere('met.libelle like :keyword')
                ->setParameter('keyword', '%' . $keyword . '%');
        }



        $entities=$query->getQuery()
            ->setMaxResults(30)
            ->getResult();

        return new JsonResponse($entities);

    }
}

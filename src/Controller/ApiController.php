<?php

namespace App\Controller;

use App\Entity\Competence;
use App\Repository\CompetenceRepository;
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
}

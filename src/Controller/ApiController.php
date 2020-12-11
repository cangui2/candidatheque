<?php

namespace App\Controller;

use App\Entity\Competence;
use App\Repository\CompetenceRepository;
use App\Repository\MetierRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{

    protected $competenceRepo;
    protected $metierRepo;


    public function __construct(CompetenceRepository $competenceRepo, MetierRepository $metierRepo){
        $this->competenceRepo = $competenceRepo;
        $this->metierRepo = $metierRepo;
    }

    /**
     * @Route("/api/cv/metiers/{libelle}", name="api_cv_metiers")
     *
     * use in react-cv
     */
    public function searchMetierAndLibelle(string $libelle = "")
    {
        $resultat = $this->metierRepo->createQueryBuilder('m')
            ->select('m.id as id', 'm.libelle as libelle')
            ->where('m.libelle LIKE :libelle')
            ->setParameter('libelle', '%'.$libelle.'%')
            ->setMaxResults(50)
            ->getQuery()
            ->getResult();

        // }
        return new JsonResponse($resultat);
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

        // }
        return new JsonResponse($entities);
    }



}

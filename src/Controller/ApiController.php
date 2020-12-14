<?php

namespace App\Controller;

use App\Entity\Competence;
use App\Repository\CompetenceRepository;
use App\Repository\MetierRepository;
use App\Repository\CVRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{

    protected $competenceRepo;
    protected $metierRepo;
    protected $cvRepo;


    public function __construct(CompetenceRepository $competenceRepo, MetierRepository $metierRepo, CVRepository $cvRepo){
        $this->competenceRepo = $competenceRepo;
        $this->metierRepo = $metierRepo;
        $this->cvRepo = $cvRepo;
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

        return new JsonResponse($resultat);
    }

    /**
     * @Route("/api/cv/competences/{id_metier}/{libelle}", name="api_cv_competences")
     */
    public function searchCompetenceByRomeAndLibelle(string $id_metier, string $libelle="")
    {
        $entities = $this->competenceRepo->createQueryBuilder('c')
            ->select('c.id as id', 'c.libelle as libelle')
            ->join('c.romes', 'r')
            ->join('r.metiers', 'm')
            ->where('c.libelle LIKE :libelle')
            ->andWhere('m.id = :id_metier')
            ->setParameter('libelle', '%'.$libelle.'%')
            ->setParameter('id_metier', $id_metier)
            ->setMaxResults(50)
            ->getQuery()
            ->getResult();

        return new JsonResponse($entities);
    }


    /**
     * @Route("/api/sourcing/recherche/", name="api_sourcing_recherche")
     */
    public function searchCV(Request $request)
    {
        $term= $request->query->get("term");
        $region= $request->query->get("region");
        $departement= $request->query->get("departement");
        $ville= $request->query->get("ville");

        $query = $this->cvRepo->createQueryBuilder('c')
            ->select('c.id as id', 'c.titre as titre', 'ca.nom as nom', 'ca.prenom as prenom')
            ->distinct('c')
            ->join('c.candidat', 'ca')
            ->join('c.competences', 'co');

        if ($term) $query->andWhere('co.libelle like :term')->setParameter('term', '%'.$term.'%'); 
        if ($region) $query->andWhere('ca.region = :region')->setParameter('region', '%'.$region.'%'); 
        if ($departement) $query->andWhere('ca.departement = :departement')->setParameter('departement', '%'.$departement.'%'); 
        if ($ville) $query->andWhere('ca.ville = :ville')->setParameter('ville', '%'.$ville.'%'); 

        $entities = $query->setMaxResults(50)
            ->getQuery()
            ->getResult();

        return new JsonResponse($entities);
    }



}

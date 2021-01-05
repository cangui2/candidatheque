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
        $recruteur = $request->query->get("recruteur");

        $query = $cv_repo->createQueryBuilder('c')
            ->select('c.id', 'can.nom as nom', 'can.prenom as prenom', 'can.adresse as adresse','can.telephone as telephone','c.titre as titre','can.ville as ville','met.libelle as metier','dep.id as recruteur')
            ->join('c.candidat', 'can')
            ->join('c.metier','met')
            ->leftJoin('c.competences','comp')
            ->leftJoin('c.deposePar','dep');



        if ($keyword) {
            $query
//                ->select('c.id', 'can.nom as nom', 'can.prenom as prenom', 'can.adresse as adresse','c.titre as titre','met.libelle as metier','comp.libelle as competence')
                ->andWhere('(c.titre like :keyword or met.libelle like :keyword or comp.libelle like :keyword)')
                ->setParameter('keyword', '%' . $keyword . '%');

        }
        if ($ville){
            $query
//                ->select('c.id', 'can.nom as nom', 'can.prenom as prenom', 'can.adresse as adresse','c.titre as titre','met.libelle as metier','comp.libelle as competence')
                ->andWhere('can.ville like :ville ')
                ->setParameter('ville', '%' . $ville . '%');
        }
        if ($recruteur){
            $query
//                ->select('c.id', 'can.nom as nom', 'can.prenom as prenom', 'can.adresse as adresse','c.titre as titre','met.libelle as metier','comp.libelle as competence')
                ->andWhere('dep.id like :recruteur ')
                ->setParameter('recruteur', '%' . $recruteur . '%');

        }
        $entities=$query->distinct()->getQuery()
            ->setMaxResults(30)
            ->getResult();




        return new JsonResponse($entities);

    }
}

<?php

namespace App\Controller;

use App\Entity\Competence;
use App\Entity\Ville;
use App\Repository\CVRepository;
use App\Repository\MetierRepository;
use App\Repository\CompetenceRepository;
use Doctrine\ORM\EntityManagerInterface;
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
    protected $em;


    public function __construct(EntityManagerInterface $em, CompetenceRepository $competenceRepo, MetierRepository $metierRepo, CVRepository $cvRepo)
    {
        $this->competenceRepo = $competenceRepo;
        $this->metierRepo = $metierRepo;
        $this->cvRepo = $cvRepo;
        $this->em = $em;
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
            ->setParameter('libelle', '%' . $libelle . '%')
            ->setMaxResults(50)
            ->getQuery()
            ->getResult();

        return new JsonResponse($resultat);
    }

    /**
     * @Route("/api/cv/competences/{id_metier}/{libelle}", name="api_cv_competences")
     */
    public function searchCompetenceByRomeAndLibelle(string $id_metier, string $libelle = "")
    {
        $entities = $this->competenceRepo->createQueryBuilder('c')
            ->select('c.id as id', 'c.libelle as libelle')
            ->join('c.romes', 'r')
            ->join('r.metiers', 'm')
            ->where('c.libelle LIKE :libelle')
            ->andWhere('m.id = :id_metier')
            ->setParameter('libelle', '%' . $libelle . '%')
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
        $term = $request->query->get("term");
        $region = $request->query->get("region");
        $departement = $request->query->get("departement");
        $ville = $request->query->get("ville");

        $query = $this->cvRepo->createQueryBuilder('c')
            ->select('c.id as id', 'c.titre as titre', 'ca.nom as nom', 'ca.prenom as prenom')
            ->distinct('c')
            ->join('c.candidat', 'ca')
            ->join('c.competences', 'co');

        if ($term) $query->andWhere('co.libelle like :term')->setParameter('term', '%' . $term . '%');
        if ($region) $query->andWhere('ca.region = :region')->setParameter('region', '%' . $region . '%');
        if ($departement) $query->andWhere('ca.departement = :departement')->setParameter('departement', '%' . $departement . '%');
        if ($ville) $query->andWhere('ca.ville = :ville')->setParameter('ville', '%' . $ville . '%');

        $entities = $query->setMaxResults(50)
            ->getQuery()
            ->getResult();

        return new JsonResponse($entities);
    }



    /**
     * @Route("/api/sourcing/lieu/{lieu}", name="api_sourcing_recherche")
     */
    public function search_lieu(string $lieu = "")
    {

        $villes = $this->em->createQuery("
            select CONCAT('v_', v.id) as value, v.nom as label
            from App\Entity\Ville v
            where v.nom like ?1
            order by v.nom
        ")
            ->setMaxResults(100)
            ->setParameter(1, '%' . $lieu . '%')
            ->getArrayResult();

        $departements = $this->em->createQuery("
            select CONCAT('d_', d.id) as value, d.nom as label
            from App\Entity\Departement d
            where d.nom like :lieu
            order by d.nom
        ")
            ->setParameter('lieu', '%' . $lieu . '%')
            ->getResult();

        $regions = $this->em->createQuery("
            select CONCAT('r_', r.id) as value, r.nom as label
            from App\Entity\Region r
            where r.nom like :lieu
            order by r.nom
        ")
            ->setParameter('lieu', '%' . $lieu . '%')
            ->getResult();

        $resultats = [];
        if (count($regions) > 0) $resultats[] = [
            "label" => "Régions",
            "options" => $regions
        ];
        if (count($departements) > 0) $resultats[] = [
            "label" => "Départements",
            "options" => $departements
        ];
        if (count($villes) > 0) $resultats[] = [
            "label" => "Villes",
            "options" => $villes
        ];

        return $this->json($resultats);
    }
}

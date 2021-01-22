<?php

namespace App\Controller;

use App\Entity\Ville;
use App\Entity\User;
use App\Entity\Candidat;
use App\Entity\Competence;
use App\Repository\CVRepository;
use App\Repository\VilleRepository;
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
     * @Route("/api/sourcing/recherche", name="api_sourcing_recherche")
     */
    public function api_sourcing_recherche(CVRepository $cv_repo, Request $request,VilleRepository $repoVille)
    {
        $keyword = $request->query->get("keyword");
        $ville = $request->query->get("ville");
        $metier = $request->query->get("metier");
        $favoris = $request->query->get("favoris");
        $rayon=$request->query->get('rayon');


        $query = $cv_repo->createQueryBuilder('c')
            ->select('c.id', 'can.nom as nom', 'can.prenom as prenom', 'can.adresse as adresse','can.telephone as telephone','c.titre as titre','met.id as idmetier','met.libelle as metLibele','dep.id as idrecruteur','vil.id as idville','vil.nom as ville')
            ->join('c.candidat', 'can')
            ->join('c.metier','met')
            ->leftjoin('can.ville','vil')
            ->leftJoin('c.competences','comp')
            ->leftJoin('c.deposePar','dep');


        if ($keyword) {
            $query
                ->andWhere('(c.titre like :keyword or met.libelle like :keyword or comp.libelle like :keyword)')
                ->setParameter('keyword', '%' . $keyword . '%');

        }

        if ($favoris){
            $query
                ->andWhere('dep.id like :recruteur ')
                ->setParameter('recruteur',  $this->getUser()->getRecruteur()->getId() );

        }

        if ($metier){
            $query
                ->andWhere('met.id like :metier ')
                ->setParameter('metier',  $metier );

        }

        if ($rayon){

            $query
                ->andWhere('vil.id IN (:result)')
                ->setParameter(
                    'result', $repoVille->searchAround($ville,$rayon)
                );


        }




        $entities=$query->distinct()->getQuery()
            ->setMaxResults(30)
            ->getResult();

        return new JsonResponse($entities);
    }



    /**
     * @Route("/api/sourcing/lieu/{lieu}", name="api_sourcing_recherche_lieu")
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

    /**
     * @Route("/api/post_cv", name="post_cv")
     */
    public function post_cv(Request $request)
    {
        $resultats = [];

        if ($request->isMethod('post')) {
            $data = json_decode($request->getContent());

            print_r($data);
        }
        
        return $this->json($resultats);
    }


    /**
     * @Route("/api/get_cv/{id}", name="get_cv")
     */
    public function get_cv(Request $request, $id)
    {
        $resultat = [];


        if ($request->isMethod('get')) {
            $user = $this->getUser();
            $candidat = $user->getCandidat();
            $cv = $this->cvRepo->findOneBy(['candidat'=>$candidat, 'id'=> $id]);
            $resultat["profil"] = [
                "nom" => $cv->getCandidat()->getNom(),
                "prenom" => $cv->getCandidat()->getPrenom(),
                "adresse" => $cv->getCandidat()->getAdresse(),
                "ville" => $cv->getCandidat()->getVille()->getNom(),
                "phone" => $cv->getCandidat()->getTelephone(),
                "email" => $cv->getCandidat()->getUser()->getEmail(),
                "photo" => $cv->getCandidat()->getPhoto(),
                "titre" => $cv->getTitre(),
                "description" => $cv->getDescription(),
                "metier" => [ "id" => $cv->getMetier()->getId(), "libelle" => $cv->getMetier()->getLibelle() ]
            ];
            $resultat["experiences"] = [];
            foreach ($cv->getExperiences() as $exp) {
                $resultat["experiences"][] = [
                    
                ];
            }
            

            //dd($cv);
        }
        
        return $this->json($resultat);
    }
}

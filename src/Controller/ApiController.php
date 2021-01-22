<?php

namespace App\Controller;

use App\Entity\Competence;
use App\Repository\CompetenceRepository;
use App\Repository\CVRepository;
use App\Repository\OffreRepository;
use App\Repository\PostuleRepository;
use App\Repository\TypeContratRepository;
use App\Repository\VilleRepository;
use ContainerJ85uVSC\getExperienceRepositoryService;
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
    protected $cvRepo;
    protected $offreRepo;
    protected $postuleRepo;
    protected $villeRepo;
    protected $secteurRepo;
    protected $typeContratRepo;


    public function __construct(CompetenceRepository $competenceRepo, MetierRepository $metierRepo, CVRepository $cvRepo,TypeContratRepository $typeContratRepo,OffreRepository $offreRepo, PostuleRepository $postuleRepo,VilleRepository $villeRepo){
        $this->competenceRepo = $competenceRepo;
        $this->metierRepo = $metierRepo;
        $this->cvRepo = $cvRepo;
        $this->offreRepo=$offreRepo;
        $this->postuleRepo=$postuleRepo;
        $this->villeRepo=$villeRepo;
        $this->typeContratRepo=$typeContratRepo;
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


        return new JsonResponse($entities);

    }

    /**
     * @Route("/api/sourcing", name="api_sourcing_recherche")
     */
    public function api_sourcing_recherche(CVRepository $cv_repo, Request $request,VilleRepository $repoVille)
    {
        $keyword = $request->query->get("keyword");
        $ville = $request->query->get("ville");
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
//                ->select('c.id', 'can.nom as nom', 'can.prenom as prenom', 'can.adresse as adresse','c.titre as titre','met.libelle as metier','comp.libelle as competence')
                ->andWhere('(c.titre like :keyword or met.libelle like :keyword or comp.libelle like :keyword)')
                ->setParameter('keyword', '%' . $keyword . '%');

        }

        if ($favoris){
            $query
//                ->select('c.id', 'can.nom as nom', 'can.prenom as prenom', 'can.adresse as adresse','c.titre as titre','met.libelle as metier','comp.libelle as competence')
                ->andWhere('dep.id like :recruteur ')
                ->setParameter('recruteur',  $this->getUser()->getRecruteur()->getId() );

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
     * @Route("/api/sourcing/ville", name="api_sourcing_recherche_ville")
     * @param VilleRepository $villeRepo
     * @param Request $request
     * @return JsonResponse
     */
    public function searchVille(VilleRepository $villeRepo, Request $request)
    {


        $ville=$request->query->get('ville');
        $kilometre=$request->query->get('kilometre');
        $latitude=$request->query->get('latitude');
        $longitude=$request->query->get('longitude');

        $query = $villeRepo->createQueryBuilder('v');

        if($ville) {
            $query
            ->select('v.id as id','v.nom as nom ','v.latitude as latitude','v.longitude as longitude')
            ->andWhere('v.nom like :ville')
            ->setParameter('ville','%'.$ville.'%');
        }
        if($kilometre){
            $query
                ->select('v.id as id','v.nom as nom ','v.latitude as latitude','v.longitude as longitude')
                ->addSelect('(6371 * acos(cos(radians('.$latitude.')) * cos(radians(v.latitude)) * cos(radians(v.longitude) - radians('.$longitude.')) + sin(radians('.$latitude.')) * sin(radians(v.latitude)))) as distance')
                ->having('distance < :km')
                ->setParameter('km', $kilometre);

        }
        $entities=$query->distinct()->getQuery()
                        ->setMaxResults(30)
                        ->getResult();


        if ($term) $query->andWhere('co.libelle like :term')->setParameter('term', '%'.$term.'%');
        if ($region) $query->andWhere('ca.region = :region')->setParameter('region', '%'.$region.'%');
        if ($departement) $query->andWhere('ca.departement = :departement')->setParameter('departement', '%'.$departement.'%');
        if ($ville) $query->andWhere('ca.ville = :ville')->setParameter('ville', '%'.$ville.'%');

        $entities = $query->setMaxResults(50)
            ->getQuery()
            ->getResult();

        return new JsonResponse($entities);
    }

    /**
     * @Route("/api/search", name="api_recherche")
     * @param OffreRepository $offreRepository
     * @param Request $request
     * @return JsonResponse
     */

    public function search (OffreRepository $offreRepository ,Request $request){

        $metier = $request->query->get("metier");
        $ville = $request->query->get("ville");
        $secteur = $request->query->get("secteur");
        $typeContrat=$request->query->get("contrat");

        $query = $offreRepository->createQueryBuilder('o')
            ->select('o','met','vil','typ')
            ->leftJoin('o.metier','met')
            ->leftJoin('o.ville','vil')
            ->leftJoin('o.type','typ')
            ->andWhere('met.id like :metier and vil.id like :ville and typ.id like :contrat ')
            ->setParameters(array(
                'metier'=>'%'.$metier.'%',
                'ville'=>'%'.$ville.'%',
                'contrat'=>'%'.$typeContrat.'%',
            ));

        $offreListeResult=$query->distinct()->getQuery()
            ->setMaxResults(30)
            ->getResult();
dd($offreListeResult);
        return new JsonResponse($offreListeResult);

    }

}



<?php

namespace App\Controller;

use App\Entity\Ville;
use App\Entity\User;
use App\Entity\Candidat;
use App\Entity\Competence;
use App\Repository\CVRepository;
use App\Repository\OffreRepository;
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
    protected $offreRepo;
    protected $villeRepo;


    public function __construct(EntityManagerInterface $em, CompetenceRepository $competenceRepo, MetierRepository $metierRepo, CVRepository $cvRepo,OffreRepository $offreRepository,VilleRepository $villeRepository)
    {
        $this->competenceRepo = $competenceRepo;
        $this->metierRepo = $metierRepo;
        $this->cvRepo = $cvRepo;
        $this->em = $em;
        $this->offreRepo=$offreRepository;
        $this->villeRepo=$villeRepository;
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
     * @Route("/api/search", name="api_recherche")
     * @param OffreRepository $offreRepository
     * @param Request $request
     *
     * @return JsonResponse
     */

    public function search(OffreRepository $offreRepository, Request $request)
    {

        $metier = $request->query->get("metier");
        $villeId = $request->query->get("ville");
        $keyword = $request->query->get("keyword");
        $filtre1=$request->query->get('filtre1');
        $filtreCollection=array_map('intval',explode(',',$filtre1));
        $possibleCdi=$request->query->get('cdi');
        $urgent=$request->query->get('urgent');
        $rayon=$request->query->get('rayon');
        $salaire=$request->query->get('salaire');
        $salaireCollection=array_map('intval',explode(',',$salaire));

        //$filtre2=$request->query->get("filtre2");

        $query = $offreRepository->createQueryBuilder('o')
            ->select('o', 'met', 'vil', 'typ', 'rec', 'ent')
            ->join('o.metier', 'met')
            ->join('o.ville', 'vil')
            ->join('o.typeContrat', 'typ')
            ->join('o.recruteur', 'rec')
            ->join('o.entreprise', 'ent')
            ->andWhere('met.id like :metier  AND o.titre like :keyword ')
            ->setParameters(array(
                'metier' => '%' . $metier . '%',
                //'ville' =>  $villeId,
                'keyword' => '%' . $keyword . '%',
            ));

       if ($filtre1){
           $query
                ->andWhere('typ.id IN (:idContratCollection)')
                ->setParameter('idContratCollection',$filtreCollection );
        }

       if($possibleCdi){
           $query
               ->andWhere('o.possibiliteCDI=:possibiliteCdi')
               ->setParameter('possibiliteCdi',$possibleCdi);
       }
       if($possibleCdi === 1 || $possibleCdi === null){
           $query
               ->andWhere('o.possibiliteCDI= null AND o.possibiliteCDI = false')
               ->setParameter('possibiliteCdi',$possibleCdi);

       }

       if ($urgent){
           $query
               ->andWhere('o.urgent=:urgent')
               ->setParameter('urgent',$urgent);
       }
        if ($rayon && $villeId) {

            $query
                ->andWhere('vil.id IN (:result)')
                ->setParameter(
                    'result', $this->villeRepo->searchAround($villeId, $rayon)
                );
        }
        if ($salaire){
           // dd(andWhere($query->expr()->between('o.typeSalaire ',':start','end' )));



            $query

              ->andWhere('o.salaire between :valeurMin and :$valeurMax')

               // ->where('o.salaireType BETWEEN (:start) AND (:end)')
                ->setParameters(array(
                      'valeurMin' => $salaire,
                      'valeurMax' => $salaire,
                  ));


        }



            $offreListeResult = $query->getQuery()

            ->setMaxResults(30)
            ->getArrayResult();

            return new JsonResponse($offreListeResult);

    }

    /**
     * @Route("/api/sourcing/lieu/{lieu}", name="api_sourcing_recherche_lieu")
     */
    public function search_lieu(string $lieu = "")
    {

        $villes = $this->em->createQuery("
            select 'ville' as type, v.id as id, v.nom as nom
            from App\Entity\Ville v
            where v.nom like ?1
            order by v.nom
        ")
            ->setMaxResults(100)
            ->setParameter(1, '%' . $lieu . '%')
            ->getArrayResult();

        $departements = $this->em->createQuery("
            select 'departement' as type, d.id as id, d.nom as nom
            from App\Entity\Departement d
            where d.nom like :lieu
            order by d.nom
        ")
            ->setParameter('lieu', '%' . $lieu . '%')
            ->getResult();

        $regions = $this->em->createQuery("
            select 'region' as type, r.id as id, r.nom as nom
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

            //dd($data);
            $user = $this->getUser();
            $candidat = $user->getCandidat();
            if (property_exists($data->profil, "id")) {
                $cv = $this->cvRepo->findOneBy(['candidat' => $candidat, 'id' => $data->profil->id]);
            } else {
                $cv = new CV();
                $cv->setCandidat($candidat);
            }

            //$candidat->setNom($data->profil->nom);
            //$candidat->setPrenom($data->profil->prenom);

            $cv->setTitre($data->profil->titre);
            $cv->setDescription($data->profil->description);
            $cv->setMetier($this->metierRepo->find($data->profil->metier->id));

            foreach ($data->formations as $for) {
                if (property_exists($for, "id")) {
                    $formation = $this->formationRepo->find($for->id);
                } else {
                    $formation = new Formation();
                    $formation->setCv($cv);
                    $this->em->persist($formation);
                }
                $formation->setDateDebut($for->dateDebut);
                $formation->setDateFin($for->dateFin);
                $formation->setDescription($for->description);
                $formation->setDiplome($for->diplome);
                $formation->setEcole($for->ecole);
                $formation->setNiveau($for->niveau);
            }


            $this->em->flush();
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
            $cv = $this->cvRepo->findOneBy(['candidat' => $candidat, 'id' => $id]);
            $resultat["profil"] = [
                "id" => $cv->getId(),
                "nom" => $cv->getCandidat()->getNom(),
                "prenom" => $cv->getCandidat()->getPrenom(),
                "adresse" => $cv->getCandidat()->getAdresse() ? $cv->getCandidat()->getAdresse() : '',
                "ville" => $cv->getCandidat()->getVille()->getNom(),
                "phone" => $cv->getCandidat()->getTelephone() ? $cv->getCandidat()->getTelephone() : '',
                "email" => $cv->getCandidat()->getUser()->getEmail(),
                "photo" => $cv->getCandidat()->getPhoto() ? $cv->getCandidat()->getPhoto() : '',
                "titre" => $cv->getTitre() ? $cv->getTitre() : '',
                "description" => $cv->getDescription() ? $cv->getDescription() : '',
                "metier" => ["id" => $cv->getMetier()->getId(), "libelle" => $cv->getMetier()->getLibelle()]
            ];
            $resultat["competences"] = [];
            $resultat["experiences"] = [];
            foreach ($cv->getExperiences() as $exp) {
                $resultat["experiences"][] = [
                    "id" => $exp->getId(),
                    "dateDebut" => $exp->getDateDebut()->format("d/m/Y"),
                    "dateFin" => $exp->getDateFin()->format("d/m/Y"),
                    "titre" => $exp->getTitre(),
                    "entreprise" => $exp->getEntreprise(),
                    "logo" => $exp->getLogo(),
                    "description" => $exp->getDescription(),
                    "ville" => $exp->getVille()
                ];
            }
            $resultat["formations"] = [];
            foreach ($cv->getFormations() as $for) {
                $resultat["formations"][] = [
                    "id" => $for->getId(),
                    "dateDebut" => $for->getDateDebut(),
                    "dateFin" => $for->getDateFin(),
                    "ecole" => $for->getEcole(),
                    "niveau" => $for->getNiveau(),
                    "diplome" => $for->getDiplome(),
                    "description" => $for->getDescription(),
                ];
            }
            $resultat["langues"] = [];
            foreach ($cv->getLangues() as $lan) {
                $resultat["langues"][] = [
                    "id" => $lan->getId(),
                    "nom" => $lan->getNom(),
                    "niveau" => $lan->getNiveau(),
                ];
            }
            $resultat["reseaux"] = [];
            foreach ($cv->getReseaux() as $res) {
                $resultat["reseaux"][] = [
                    "id" => $res->getId(),
                    "type" => $res->getType(),
                    "url" => $res->getUrl(),
                ];
            }


            //dd($cv);
        }

        return $this->json($resultat);
    }

    /**
     * @Route("/api/frc/recherche", name="api_frc_recherche")
     */
    public function api_frc_recherche()
    {
        $entities = $this->offreRepo->createQueryBuilder('o')
            ->select('o')
            ->setMaxResults(50)
            ->getQuery()
            ->getArrayResult();

        return $this->json($entities);
    }
}

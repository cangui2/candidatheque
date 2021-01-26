<?php

namespace App\Service;




use App\Entity\CV;
use App\Entity\Offre;
use App\Repository\CVRepository;
use App\Repository\OffreRepository;
use App\Repository\VilleRepository;


class RechercheService {

    protected $offreRepo;
    protected $villeRepo;
    protected $cvRepo;

    public function __construct(OffreRepository $offreRepo, VilleRepository $villeRepo, CVRepository $cvRepo){

        $this->offreRepo=$offreRepo;
        $this->villeRepo=$villeRepo;
        $this->cvRepo=$cvRepo;
    }


    public function matchingOfferVsCvCandidat($postules){


     /* jeux de test local


        $skillOffer = array( "A1101", "A1102", "A1120","A1115");
        $skillCvCandidat = array (
            "cv1" => array("A1102", "A1101", "A1115"),
            "cv2" => array("A1104", "A1103", "A1101"),
            "cv3" => array("A1102", "A1108", "A1109")
        );
        */
        // On recupere le tableau des competence par rapport a l'ID
        //$skillOffer=$this->offreRepo->findCompetenceByOffer($idOffer);

       //dd($postules);
        $idOffer = 1;
        $skillOffer2 = $this->offreRepo->find($idOffer)->getCompetences();
        $skillOffer2->count();


        // On lis le tableau tableau competence offre pour extraire juste les données de competences
        $offer=[];
        foreach ($skillOffer2 as $key =>$value){
            $offer[]=$value->getId();

        }

        // on lit les competences du cv et on le compare avec les competences offres
        $results=array('id'=>$idOffer);
        //        foreach ($skillCvCandidat as $key2 => $value2) {
        //
        //                    $candidat=$value2;
        //                    $result[$key2] = array_intersect($offer, $candidat);
        //
        //                    $results['name'][$key2]=(count($result[$key2])*100)/(count($offer));
        //
        //                    //$results[]=array($idOffer=>array((count($result[$key2])*100)/(count($offer))));
        //        }

        $test =(object)$results;


        return $test;
    }


    /**
     * @param Offre $offre
     *
     * Retourne la liste des cvs "classés" par rapport aux cadidats qui ont postulés
     */
    public function matchingAlgo1 (Offre $offre)
    {
        $postules = $offre->getPostules();
    }


    /**
     * Recherche des Offres par rapport à un CV
     *
     * 
     *
     * @param CV $cv Cv qui sert de base à la recherche
     * @return Offre[]
     * 
     **/
    public function rechercheOffres(CV $cv, $rayon = 10)
    {
        $entities = $this->offreRepo->createQueryBuilder('o')
        ->select ('v.nom, m.libelle')
        ->join('o.ville', 'v')
        ->join('o.metier', 'm')
        ->where('o.ville in (:ville)')
        ->andWhere('o.metier=:metier')
        ->setParameter('ville', $this->villeRepo->searchAround($cv->getCandidat()->getVille(), $rayon))
        ->setParameter('metier', $cv->getMetier())
        ->getQuery()
        ->getResult();

        return $entities;
    }

    /**
     * Recherche des CVs par rapport à une offre
     *
     * 
     *
     **/
    public function rechercheCVs(Offre $offre, $rayon = 10)
    {
        $query = $this->cvRepo->createQueryBuilder('cv')
        ->select ('v.nom, m.libelle')
        ->join('c.candidat', 'can')
        ->join('can.ville', 'v')
        ->join('cv.metier', 'm')
        ->andWhere('o.metier=:metier')
        ->setParameter('metier', $offre->getMetier());
        
        if ($offre->getVille()) {
            $query
            ->where('o.ville in (:ville)')
            ->setParameter('ville', $this->villeRepo->searchAround($offre->getVille(), $rayon));
        }
        
        $entities = $query->getQuery()->getResult();

        return $entities;
    }
}




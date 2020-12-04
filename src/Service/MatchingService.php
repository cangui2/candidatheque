<?php

namespace App\Service;




use App\Repository\OffreRepository;


class MatchingService {

    protected $offreRepo;


    public function __construct(OffreRepository $offreRepo){

        $this->offreRepo=$offreRepo;

    }

    /**
     * @param $idOffer
     * @param $skillCvCandidat
     * @return array
     */
    public function matchingOfferVsCvCandidat($postules){


     /* jeux de test local

        $idOffer = "offre n°150";
        $skillOffer = array( "A1101", "A1102", "A1120","A1115");
        $skillCvCandidat = array (
            "cv1" => array("A1102", "A1101", "A1115"),
            "cv2" => array("A1104", "A1103", "A1101"),
            "cv3" => array("A1102", "A1108", "A1109")
        );
        */
        // On recupere le tableau des competence par rapport a l'ID
        //$skillOffer=$this->offreRepo->findCompetenceByOffer($idOffer);

       dd($postules);

        $skillOffer2 = $this->offreRepo->find($idOffer)->getCompetences();
        $skillOffer2->count();




        // On lis le tableau tableau competence offre pour extraire juste les données de competences
        $offer=[];
        foreach ($skillOffer2 as $key =>$value){
            $offer[]=$value->getId();

        }

        // on lit les competences du cv et on le compare avec les competences offres
        $results=array('id'=>$idOffer);
        foreach ($skillCvCandidat as $key2 => $value2) {

                    $candidat=$value2;
                    $result[$key2] = array_intersect($offer, $candidat);

                    $results['name'][$key2]=(count($result[$key2])*100)/(count($offer));

                    //$results[]=array($idOffer=>array((count($result[$key2])*100)/(count($offer))));


        }

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



}




<?php

namespace App\Service;



use App\Repository\CVRepository;
use App\Repository\OffreRepository;
use App\Repository\PostuleRepository;

class MatchingService {

    protected $offreRepo;
    protected $postuleRepo;
    protected $cvRepo;

    public function __construct(OffreRepository $offreRepo, PostuleRepository $postuleRepo,CVRepository $cvRepo){

        $this->offreRepo=$offreRepo;
        $this->postuleRepo=$postuleRepo;
        $this->cvRepo=$cvRepo;

    }

    public function matchingOfferVsCvCandidat($idOffer,$skillCvCandidat){


        // algorithme de comparaison des competences offre(s) vs candidat(s) //
        // En attente de  mise en place fonction et des varibales via la tables.
        // Test
        /*
        $idOffer = "offre n°150";

        $skillOffer = array( "A1101", "A1102", "A1120","A1115");



        $skillCvCandidat = array (
            "cv1" => array("A1102", "A1101", "A1115"),
            "cv2" => array("A1104", "A1103", "A1101"),
            "cv3" => array("A1102", "A1108", "A1109")
        );
        */
        $skillOffer=$this->offreRepo->findCompetenceByOffer($idOffer);


        $test1=[];
        foreach ($skillOffer as $key =>$value){
            $test1[]=$value['competence_id'];

        }
        $results=[];
        foreach ($skillCvCandidat as $key2 => $value2) {

                    $test2=$value2;
                    $result[$key2] = array_intersect($test1, $test2);

                    $results[$idOffer][$key2]=(count($result[$key2])*100)/(count($test1));

        }



        return $results;
    }



}




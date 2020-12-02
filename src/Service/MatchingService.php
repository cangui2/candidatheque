<?php

namespace App\Service;



class MatchingService {

    public function matchingOfferVsCvCandidat($idOffer,$skillOffer,$skillCvCandidat){


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
        $results=[];
        foreach ($skillCvCandidat as $key => $value) {

            for ($i=0; $i <1 ; $i++) {
                $result = array_intersect($value, $skillOffer);
                $results[$idOffer][$key]=ceil((count($result)*100)/count($skillOffer));

            }
        }

    }



}




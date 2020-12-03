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
    public function matchingOfferVsCvCandidat($idOffer, $skillCvCandidat){


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
        $skillOffer=$this->offreRepo->findCompetenceByOffer($idOffer);

        // On lis le tableau tableau competence offre pour extraire juste les données de competences
        $offer=[];
        foreach ($skillOffer as $key =>$value){
            $offer[]=$value['competence_id'];

        }
        // on lit les competences du cv et on le compare avec les competences offres
        $results=[];
        foreach ($skillCvCandidat as $key2 => $value2) {

                    $candidat=$value2;
                    $result[$key2] = array_intersect($offer, $candidat);

                    $results ['idOffre'][$idOffer]['idCandidat'][$key2]=(count($result[$key2])*100)/(count($offer));

        }
        return $results;
    }



}




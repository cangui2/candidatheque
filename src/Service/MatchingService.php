<?php

namespace App\Service;




use App\Entity\CV;
use App\Entity\Offre;
use App\Repository\OffreRepository;


class MatchingService {

    protected $offreRepo;


    public function __construct(OffreRepository $offreRepo){

        $this->offreRepo=$offreRepo;

    }


    /**
     * @param Offre $offre
     * @param $skillCandidat
     * @return array
     * Retourne la liste des cvs "classés" par rapport aux cadidats qui ont postulés
     */
    public function matchingAlgo1 (Offre $offre, $skillCandidat)
    {
        $skillOffer2 = $this->offreRepo->find($offre)->getCompetences();
        $skillOffer2->count();

        // On lis le tableau tableau competence offre pour extraire juste les données de competences
        $offer=[];
        foreach ($skillOffer2 as $key =>$value){
            $offer[]=$value->getId();

        }

        // on lit les competences du cv et on le compare avec les competences offres
        $results=array('id'=> $offre->getId());
        foreach ($skillCandidat as $key2 => $value2) {

            $candidat=$value2;
            $result[$key2] = array_intersect($offer, $candidat);

            $results['cv'][$key2]=(count($result[$key2])*100)/(count($offer));
        }

        return $results;
    }


    /**
     * @param Offre $offre
     *
     * Retourne la liste des cvs "classés" par rapport aux cadidats qui n'ont pas postulés
     */
    public function matchingAlgo2 (Offre $offre)
    {
        $postules = $offre->getPostules();
    }


    /**
     * @param Offre $offre
     *
     * Retourne la liste des cvs "classés" pour tous les cadidats (postulés ou non)
     */
    public function matchingAlgo3 (Offre $offre)
    {
        $postules = $offre->getPostules();
    }



}




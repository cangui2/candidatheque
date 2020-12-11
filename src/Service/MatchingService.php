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
    public function matchingAlgo1 (Offre $offre)
    {
        // quels sont les cvs qui ont postulés à cetfe offre ?
        foreach ($offre->getPostules() as $postule) {
            $cvs=$postule->getCandidat()->getCVs();
            $nom=$postule->getCandidat()->getNom();

            foreach ($cvs as $cv) {
                $t= $cv->getCompetences()->getValues();

                foreach ($t as $competence){

                    $skill[$nom][]=$competence->getId();

                }
            }
        }
        $skillOffer2 = $offre->getCompetences();



        // On lis le tableau tableau competence offre pour extraire juste les données de competences
        $competences_offre=[];
        foreach ($skillOffer2 as $key =>$value){
            $competences_offre[]=$value->getId();

        }

        // on lit les competences du cv et on le compare avec les competences offres
        $results= []; //array('id'=> $offre->getId());
        foreach ($skill as $nom => $competences_candidat) {

            $pourcentage = (count(array_intersect($competences_offre, $competences_candidat))*100)/(count($competences_offre)); ;
            $results[] = [
                "nom" => $nom,
                "score" => $pourcentage
            ];
        }

        return $results;
    }


    /**
     * @param Offre $offre
     *
     * Retourne la liste des cvs "classés" par rapport aux candidats qui n'ont pas postulés
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




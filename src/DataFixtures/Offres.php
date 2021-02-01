<?php

namespace App\DataFixtures;

use App\Entity\CV;
use App\Entity\APE;
use App\Entity\User;
use App\Entity\Offre;
use App\Entity\Ville;
use App\Entity\Metier;
use App\Entity\Region;
use App\Entity\Candidat;
use App\Entity\Recruteur;
use App\Entity\Competence;
use App\Entity\Entreprise;
use App\Entity\Departement;
use App\Entity\TypeContrat;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class Offres extends Fixture implements FixtureGroupInterface
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {


        

        $rec1 = $manager->getRepository(Recruteur::class)->find(1);


        $tab_metiers = [14156, 16084, 17856, 16090, 11363];
        $keyword = [
            "14156" => explode(" ", "programmation react sql php developpement angular javascript html bootstrap java nosql python delphi windev abap sap vue.js jquery ajax"),
            "16084" => explode(" ", "redaction enquete publication théâtre reporter Journaliste presse radio Photojournaliste"),
            "17856" => explode(" ", "Photographie dessin rédactionnelles Littérature intellectuelle oeuvres réécriture improvisation dramatique"),
            "16090" => explode(" ", "redaction enquete publication théâtre reporter Journaliste presse radio Photojournaliste"),
            "11363" => explode(" ", "planete matiere solaire etoile gaz nebuleuse galaxie"),
        ];

        for ($i=0; $i < 100000; $i++) { 
            $met = $manager->getRepository(Metier::class)->find($tab_metiers[rand(0, count($tab_metiers)-1)]);
            $ville = $manager->getRepository(Ville::class)->find(rand(1, 30000));
            $type = $manager->getRepository(TypeContrat::class)->find(rand(1, 11));

            $profil = "";
            $nb = rand(5, 15);
            for ($j=0; $j < $nb; $j++) { 
                $t = $keyword[$met->getId()];
                $profil .= $t[rand(0, count($t)-1)] . " ";
            }
            
            $of = new Offre();
            $of->setRecruteur($rec1);
            $of->setDatePublication(new \DateTime());
            $of->setDescription("Nous recherchons des " . $met->getLibelle());
            $of->setMetier($met);
            $of->setVille($ville);
            $of->setProfil($profil);
            $of->setSalaire(rand(20000, 60000));
            $of->setTitre($met->getLibelle());
            $of->setTypeContrat($type);

            $manager->persist($of);
        }


        $manager->flush();

    }


    public static function getGroups(): array
     {
       return ['offres'];
    }

}
<?php

namespace App\DataFixtures;

use App\Entity\APE;
use App\Entity\CV;
use App\Entity\Departement;
use App\Entity\Entreprise;
use App\Entity\Metier;
use App\Entity\Offre;
use App\Entity\Region;
use App\Entity\TypeContrat;
use App\Entity\Ville;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class BaseData extends Fixture implements FixtureGroupInterface
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        /////////////////////////////////////////////////////////////////////////////////
        /// Rome
        ////////////////////////////////////////////////////////////////////////////////

//        $csv = fopen(dirname(__FILE__).'/../../doc/ROME/coderome.csv', 'r');
//
//        while (!feof($csv)) {
//            $line = fgetcsv($csv);
//            if ($line) {
//                $ro = new Rome();
//                $ro->setCode($line[0]);
//                $ro->setLibelle($line[1]);
//
//                $manager->persist($ro);
//            }
//        }
//
//        fclose($csv);
//
//        $manager->flush();


        /////////////////////////////////////////////////////////////////////////////////
        /// Metiers
        ////////////////////////////////////////////////////////////////////////////////

        $csv = fopen(dirname(__FILE__).'/../../doc/ROME/rome.csv', 'r');
        $line = fgetcsv($csv);

        while (!feof($csv)) {
            $line = fgetcsv($csv, 0, ",", '"');
            if ($line) {
                $me = new Metier();
                $c1 = $line[0];
                $c2 = $line[1];
                $c3 = $line[2];
                $libelle = $line[3];
                if ($c1 && $c2 && $c3) {
                    $me->setLibelle($libelle);
                    $me->setRome($c1.$c2.$c3);
                    $manager->persist($me);
                }
            }
        }

        fclose($csv);

        $manager->flush();


        /////////////////////////////////////////////////////////////////////////////////
        /// APE
        ////////////////////////////////////////////////////////////////////////////////

        $csv = fopen(dirname(__FILE__).'/../../doc/ROME/naf.csv', 'r');
        $line = fgetcsv($csv);

        while (!feof($csv)) {
            $line = fgetcsv($csv, 0, ";", '"');
            if ($line) {
                $co = $line[0];
                if (strlen($co)==5) {
                    $li = $line[1];
                    $ape = new APE($co, $li);

                    $manager->persist($ape);
                }
            }
        }

        fclose($csv);

        $manager->flush();


        /////////////////////////////////////////////////////////////////////////////////
        /// Region
        ////////////////////////////////////////////////////////////////////////////////

        $csv = fopen(dirname(__FILE__).'/../../doc/ROME/regions.csv', 'r');
        $line = fgetcsv($csv);

        while (!feof($csv)) {
            $line = fgetcsv($csv, 0, ",", '"');
            if (count($line)>1) {
                $co = $line[1];
                $li = $line[2];
                $reg = new Region($co, $li);
                $manager->persist($reg);
            }
        }

        fclose($csv);

        $manager->flush();


        /////////////////////////////////////////////////////////////////////////////////
        /// Departement
        ////////////////////////////////////////////////////////////////////////////////
        ///
        $repo = $manager->getRepository(Region::class);

        $csv = fopen(dirname(__FILE__).'/../../doc/ROME/departements.csv', 'r');
        $line = fgetcsv($csv);

        while (!feof($csv)) {
            $line = fgetcsv($csv, 0, ",", '"');
            if ($line && count($line)>1) {
                $co = $line[2];
                $li = $line[3];
                $re = $line[1];
                $region = $repo->find($re);
                $dep = new Departement($co, $li);
                $dep->setRegion($region);
                $manager->persist($dep);
            }
        }

        fclose($csv);

        $manager->flush();


        /////////////////////////////////////////////////////////////////////////////////
        /// Villes
        ////////////////////////////////////////////////////////////////////////////////
        ///
        $repo = $manager->getRepository(Departement::class);

        $csv = fopen(dirname(__FILE__).'/../../doc/ROME/villes.csv', 'r');
        $line = fgetcsv($csv);

        while (!feof($csv)) {
            $line = fgetcsv($csv, 0, ",", '"');
            if ($line && count($line)>1) {
                $cp = $line[3];
                $nom = $line[4];
                $dep = $line[1];
                $lon = $line[6];
                $lat = $line[7];
                $departement = $repo->find($dep);
                $ville = new Ville();
                $ville->setNom($nom);
                $ville->setCodePostal($cp);
                $ville->setLongitude($lon);
                $ville->setLatitude($lat);
                $ville->setDepartement($departement);
                $manager->persist($ville);
            }
        }

        fclose($csv);

        $manager->flush();


        /////////////////////////////////////////////////////////////////////////////////
        /// Pays
        ////////////////////////////////////////////////////////////////////////////////
        ///
        $repo = $manager->getRepository(Departement::class);

        $csv = fopen(dirname(__FILE__).'/../../doc/ROME/villes.csv', 'r');
        $line = fgetcsv($csv);

        while (!feof($csv)) {
            $line = fgetcsv($csv, 0, ",", '"');
            if ($line && count($line)>1) {
                $cp = $line[3];
                $nom = $line[4];
                $dep = $line[1];
                $lon = $line[6];
                $lat = $line[7];
                $departement = $repo->find($dep);
                $ville = new Ville();
                $ville->setNom($nom);
                $ville->setCodePostal($cp);
                $ville->setLongitude($lon);
                $ville->setLatitude($lat);
                $ville->setDepartement($departement);
                $manager->persist($ville);
            }
        }

        fclose($csv);

        $manager->flush();



        $tc1 = new TypeContrat(1, "CDI");
        $manager->persist($tc1);
        $tc2 = new TypeContrat(2, "CDD < 5 mois");
        $manager->persist($tc2);
        $tc3 = new TypeContrat(3, "CDD > 5 mois");
        $manager->persist($tc3);
        $tc4 = new TypeContrat(4, "CTT/Interim");
        $manager->persist($tc4);
        $tc5 = new TypeContrat(5, "Freelance");
        $manager->persist($tc5);
        $tc6 = new TypeContrat(6, "Alternance");
        $manager->persist($tc6);
        $tc7 = new TypeContrat(7, "CUI – Contrat unique d’insertion");
        $manager->persist($tc7);
        $tc8 = new TypeContrat(8, "CAE – Contrat d’accompagnement dans l’emploi");
        $manager->persist($tc8);
        $tc9 = new TypeContrat(9, "CIE – Contrat initiative emploi");
        $manager->persist($tc9);
        $tc10 = new TypeContrat(10, "Service civique");
        $manager->persist($tc10);


        $ent1 = new Entreprise();
        $ent1->setRaisonSociale("Entreprise1");
        $manager->persist($ent1);

        $cv1 = new CV();
        $cv1->addFavori($ent1);
        $manager->persist($cv1);



        $of1 = new Offre();
        $of1->getDuree("6 mois");
        $of1->setType($tc3);

        $manager->persist($of1);



        $manager->flush();

    }


    public static function getGroups(): array
     {
       return ['base'];
    }

}
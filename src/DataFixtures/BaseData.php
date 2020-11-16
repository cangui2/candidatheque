<?php

namespace App\DataFixtures;

use App\Entity\APE;
use App\Entity\CV;
use App\Entity\Departement;
use App\Entity\Entreprise;
use App\Entity\Metier;
use App\Entity\Offre;
use App\Entity\Recruteur;
use App\Entity\Region;
use App\Entity\TypeContrat;
use App\Entity\User;
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

        $u1 = new User();
        $u1->setEmail('admin@candidatheque.com');
        $password = $this->encoder->encodePassword($u1, 'LaVieEstBelle');
        $u1->setPassword($password);
        $u1->setRoles(['ROLE_USER', 'ROLE_ADMIN']);
        $u1->setActif(true);
        $manager->persist($u1);
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
        $ent1->setSiret("654321987");
        $ent1->setAdresse1("rue du bas");
        $ent1->setAdresse2("");
        $ent1->setCodePostal("75003");
        $ent1->setVille("Paris");
        $manager->persist($ent1);

        $rec1 = new Recruteur();
        $rec1->setNom("Gates");
        $rec1->setPrenom("Bill");
        $rec1->setEntreprise($ent1);
        $manager->persist($rec1);

        $u2 = new User();
        $u2->setEmail('rec1@be4web.fr');
        $password = $this->encoder->encodePassword($u2, '123456');
        $u2->setPassword($password);
        $u2->setRoles(["ROLE_USER", "ROLE_RECRUTEUR", "ROLE_TO_VERIFY"]);
        $u2->setAuthToken("654654654654");
        $u2->setRecruteur($rec1);
        //$u2->setActif(true);
        $manager->persist($u2);

        $rec2 = new Recruteur();
        $rec2->setNom("Gates");
        $rec2->setPrenom("Bill");
        $rec2->setEntreprise($ent1);
        $manager->persist($rec2);

        $u3 = new User();
        $u3->setEmail('rec2@be4web.fr');
        $password = $this->encoder->encodePassword($u3, '123456');
        $u3->setPassword($password);
        $u3->setRoles(["ROLE_USER", "ROLE_RECRUTEUR", "ROLE_TO_VERIFY"]);
        $u3->setAuthToken("654654654654987");
        $u3->setRecruteur($rec2);
        //$u2->setActif(true);
        $manager->persist($u3);


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
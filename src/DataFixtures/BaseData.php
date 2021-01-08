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
        $tc2 = new TypeContrat(2, "CDD");
        $manager->persist($tc2);
        $tc3 = new TypeContrat(3, "Contrat de Travail Temporaire/Mission intérim");
        $manager->persist($tc3);
        $tc4 = new TypeContrat(4, "Contrat de professionnalisation");
        $manager->persist($tc4);
        $tc5 = new TypeContrat(5, "Contrat d'apprentissage");
        $manager->persist($tc5);
        $tc6 = new TypeContrat(6, "Stage");
        $manager->persist($tc6);
        $tc7 = new TypeContrat(7, "Freelance");
        $manager->persist($tc7);
        $tc8 = new TypeContrat(8, "CDI Intérimaire");
        $manager->persist($tc8);
        $tc9 = new TypeContrat(9, "CUI–CAE");
        $manager->persist($tc9);
        $tc10 = new TypeContrat(10, "CUI-CIE");
        $manager->persist($tc10);
        $tc11 = new TypeContrat(11, "Service civique");
        $manager->persist($tc11);

        $manager->flush();

    }


    public static function getGroups(): array
     {
       return ['base'];
    }

}
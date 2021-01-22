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

class ExtendedData extends Fixture implements FixtureGroupInterface
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {


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
        $u2->setAuthToken(null);
        $u2->setRecruteur($rec1);
        $u2->setActif(true);
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
        $u3->setAuthToken(null);
        $u3->setRecruteur($rec2);
        $u3->setActif(true);
        $manager->persist($u3);


        $cv1 = new CV();
        $cv1->addFavori($ent1);
        $manager->persist($cv1);


        $ent2 = new Entreprise();
        $ent2->setRaisonSociale("Entreprise2");
        $ent2->setSiret("654321987");
        $ent2->setAdresse1("rue du haut");
        $ent2->setAdresse2("");
        $ent2->setCodePostal("80100");
        $ent2->setVille("Abbeville");
        $manager->persist($ent2);

        $rec3 = new Recruteur();
        $rec3->setNom("Muray");
        $rec3->setPrenom("Bill");
        $rec3->setEntreprise($ent2);
        $manager->persist($rec3);

        $u4 = new User();
        $u4->setEmail('rec3@be4web.fr');
        $password = $this->encoder->encodePassword($u4, '123456');
        $u4->setPassword($password);
        $u4->setRoles(["ROLE_USER", "ROLE_RECRUTEUR", "ROLE_TO_VERIFY"]);
        $u4->setAuthToken(null);
        $u4->setRecruteur($rec3);
        $u4->setActif(true);
        $manager->persist($u4);

        $of1 = new Offre();
        $of1->setRecruteur($rec3);
        $of1->setDatePublication(new \DateTime());
        $of1->setDescription("Nous recherchons des développeurs Web...");
        $of1->setMetier($manager->getRepository(Metier::class)->findOneBy([ "libelle" => "Développeur / Développeuse web"]));
        $of1->setProfil("De formation supérieure BAC+5, vous justifiez d'une expérience de minimum trois ans sur un poste similaire");
        $of1->setSalaire(45632);
        $of1->setTitre("Développeur");
        $of1->setTypeContrat($manager->getRepository(TypeContrat::class)->findOneBy([ "libelle" => "CDI"]));
        $manager->persist($of1);

        $of2 = new Offre();
        $of2->setRecruteur($rec3);
        $of2->setDatePublication(new \DateTime());
        $of2->setDescription("Nous recherchons des ...");
        $of2->setMetier($manager->getRepository(Metier::class)->findOneBy([ "libelle" => "Développeur / Développeuse web"]));
        $of2->setProfil("");
        $of2->setSalaire(45632);
        $of2->setTitre("Développeur");
        $of2->setTypeContrat($manager->getRepository(TypeContrat::class)->findOneBy([ "libelle" => "CDI"]));
        $manager->persist($of2);

        $of3 = new Offre();
        $of3->setRecruteur($rec3);
        $of3->setDatePublication(new \DateTime());
        $of3->setDescription("Nous recherchons des ...");
        $of3->setMetier($manager->getRepository(Metier::class)->findOneBy([ "libelle" => "Développeur / Développeuse web"]));
        $of3->setProfil("");
        $of3->setSalaire(45632);
        $of3->setTitre("Développeur");
        $of3->setTypeContrat($manager->getRepository(TypeContrat::class)->findOneBy([ "libelle" => "CDI"]));
        $manager->persist($of3);

        $of4 = new Offre();
        $of4->setRecruteur($rec3);
        $of4->setDatePublication(new \DateTime());
        $of4->setDescription("Nous recherchons des ...");
        $of4->setMetier($manager->getRepository(Metier::class)->findOneBy([ "libelle" => "Développeur / Développeuse web"]));
        $of4->setProfil("");
        $of4->setSalaire(45632);
        $of4->setTitre("Développeur");
        $of4->setTypeContrat($manager->getRepository(TypeContrat::class)->findOneBy([ "libelle" => "CDI"]));
        $manager->persist($of4);


        $can1 = new Candidat();
        $can1->setNom("Muray");
        $can1->setPrenom("Bill");
        $can1->setVille($manager->getRepository(Ville::class)->find(31722));
        $manager->persist($can1);

        $u5 = new User();
        $u5->setEmail('can1@be4web.fr');
        $password = $this->encoder->encodePassword($u5, '123456');
        $u5->setPassword($password);
        $u5->setRoles(["ROLE_USER", "ROLE_CANDIDAT"]);
        $u5->setAuthToken(null);
        $u5->setCandidat($can1);
        $u5->setActif(true);
        $manager->persist($u5);

        $cv1=new CV();
        $cv1->setCandidat($can1);
        $cv1->setMetier($manager->getRepository(Metier::class)->find(14250));
        $comp = 
        $cv1->addCompetence($manager->getRepository(Competence::class)->find(100011));
        $cv1->addCompetence($manager->getRepository(Competence::class)->find(100075));
        $cv1->addCompetence($manager->getRepository(Competence::class)->find(100078));
        $cv1->addCompetence($manager->getRepository(Competence::class)->find(100077));
        $manager->persist($cv1);

        $cv2=new CV();
        $cv2->setCandidat($can1);
        $cv2->setMetier($manager->getRepository(Metier::class)->find(17302));
        $cv2->addCompetence($manager->getRepository(Competence::class)->find(100078));
        $cv2->addCompetence($manager->getRepository(Competence::class)->find(100087));
        $cv2->addCompetence($manager->getRepository(Competence::class)->find(100088));
        $cv2->addCompetence($manager->getRepository(Competence::class)->find(100089));
        $cv2->addCompetence($manager->getRepository(Competence::class)->find(100090));
        $manager->persist($cv2);


        $manager->flush();

    }


    public static function getGroups(): array
     {
       return ['extend'];
    }

}
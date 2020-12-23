<?php

namespace App\DataFixtures;

use App\Entity\APE;
use App\Entity\Candidat;
use App\Entity\Competence;
use App\Entity\CV;
use App\Entity\Departement;
use App\Entity\Entreprise;
use App\Entity\Formation;
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
        $of1->setType($manager->getRepository(TypeContrat::class)->findOneBy([ "libelle" => "CDI"]));
        $manager->persist($of1);

        $of2 = new Offre();
        $of2->setRecruteur($rec3);
        $of2->setDatePublication(new \DateTime());
        $of2->setDescription("Nous recherchons des ...");
        $of2->setMetier($manager->getRepository(Metier::class)->findOneBy([ "libelle" => "Développeur / Développeuse web"]));
        $of2->setProfil("");
        $of2->setSalaire(45632);
        $of2->setTitre("Développeur");
        $of2->setType($manager->getRepository(TypeContrat::class)->findOneBy([ "libelle" => "CDI"]));
        $manager->persist($of2);

        $of3 = new Offre();
        $of3->setRecruteur($rec3);
        $of3->setDatePublication(new \DateTime());
        $of3->setDescription("Nous recherchons des ...");
        $of3->setMetier($manager->getRepository(Metier::class)->findOneBy([ "libelle" => "Développeur / Développeuse web"]));
        $of3->setProfil("");
        $of3->setSalaire(45632);
        $of3->setTitre("Développeur");
        $of3->setType($manager->getRepository(TypeContrat::class)->findOneBy([ "libelle" => "CDI"]));
        $manager->persist($of3);

        $of4 = new Offre();
        $of4->setRecruteur($rec3);
        $of4->setDatePublication(new \DateTime());
        $of4->setDescription("Nous recherchons des ...");
        $of4->setMetier($manager->getRepository(Metier::class)->findOneBy([ "libelle" => "Développeur / Développeuse web"]));
        $of4->setProfil("");
        $of4->setSalaire(45632);
        $of4->setTitre("Développeur");
        $of4->setType($manager->getRepository(TypeContrat::class)->findOneBy([ "libelle" => "CDI"]));
        $manager->persist($of4);


        $cand1= new Candidat();
        $cand1->setNom('alice');
        $cand1->setPrenom('never');
        $cand1->setAdresse('153 rue de paris');
        $cand1->setCodePostal('60700');
        $cand1->setMobilite(true);
        $cand1->setTelephone('0312543352');
        $cand1->setVille('Paris (75014)');
        $manager->persist($cand1);

        $u5 = new User();
        $u5->setEmail('can1@be4web.fr');
        $password = $this->encoder->encodePassword($u5, '123456');
        $u5->setPassword($password);
        $u5->setRoles(["ROLE_USER", "ROLE_CANDIDAT"]);
        $u5->setAuthToken(null);
        $u5->setCandidat($cand1);
        $u5->setActif(true);
        $manager->persist($u5);

        $cv1=new CV();
        $cv1->setCandidat($cand1);
        $cv1->setMetier($manager->getRepository(Metier::class)->find(14250));
        $cv1->setTitre('Après une thèse de biochimie et un post-doc en chimiométrie ');
        $manager->persist($cv1);
        $cv1=new CV();
        $cv1->setCandidat($cand1);
        $cv1->setMetier($manager->getRepository(Metier::class)->find(17302));
        $cv1->setTitre('Après une thèse de biochimie et un post-doc en chimiométrie ');
        $manager->persist($cv1);

        $formation= new Formation();
        $formation->setCv($cv1);
        $formation->setDateDebut(new \DateTime('06/04/2014'));
        $formation->setDateFin(new \DateTime('06/04/2016'));
        $formation->setDescription('test');
        $formation->setDiplome('diplome superieur');
        $formation->setEcole('Acor Alternance');
        $formation->setNiveau('bac+2');
        $manager->persist($formation);

        $formation= new Formation();
        $formation->setCv($cv1);
        $formation->setDateDebut(new \DateTime('06/04/2014'));
        $formation->setDateFin(new \DateTime('06/04/2012'));
        $formation->setDescription('diplome professionelle ');
        $formation->setDiplome('diplome fin d etude');
        $formation->setEcole('lycee notre dame');
        $formation->setNiveau('bac pro commerce');
        $manager->persist($formation);

        $formation= new Formation();
        $formation->setCv($cv1);
        $formation->setDateDebut(new \DateTime('06/04/2014'));
        $formation->setDateFin(new \DateTime('06/04/2014'));
        $formation->setDescription('brevet');
        $formation->setDiplome('brevet professionnel');
        $formation->setEcole('lycee notre dames');
        $formation->setNiveau('bep vente');
        $manager->persist($formation);

        $comptA=($manager->getRepository(Competence::class)->find(200039));
        $comptB=($manager->getRepository(Competence::class)->find(200059));
        $comptC=($manager->getRepository(Competence::class)->find(103163));
        $comptD=($manager->getRepository(Competence::class)->find(106963));
        $comptE=($manager->getRepository(Competence::class)->find(119000));
        $comptA->addCV($cv1);
        $comptB->addCV($cv1);
        $comptC->addCV($cv1);
        $comptD->addCV($cv1);
        $comptE->addCV($cv1);
        $manager->persist($comptA);
        $manager->persist($comptB);
        $manager->persist($comptC);
        $manager->persist($comptD);
        $manager->persist($comptE);

        $manager->flush();

    }


    public static function getGroups(): array
     {
       return ['extend'];
    }

}

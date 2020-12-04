<?php

namespace App\DataFixtures;


use App\Entity\Candidat;
use App\Entity\Competence;
use App\Entity\Consulte;
use App\Entity\CV;
use App\Entity\Departement;
use App\Entity\Entreprise;
use App\Entity\Formation;
use App\Entity\Metier;
use App\Entity\Offre;
use App\Entity\Pays;
use App\Entity\Postule;
use App\Entity\Recruteur;
use App\Entity\Region;
use App\Entity\Rome;
use App\Entity\TypeContrat;
use App\Entity\User;
use App\Entity\Ville;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class JulienData extends Fixture implements FixtureGroupInterface
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {

        $ent1 = new Entreprise();
        $ent1->setRaisonSociale("Entreprise18");
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

        $rec2 = new Recruteur();
        $rec2->setNom("Gates");
        $rec2->setPrenom("Bill");
        $rec2->setEntreprise($ent1);
        $manager->persist($rec2);

        $rec3 = new Recruteur();
        $rec3->setNom("Gates");
        $rec3->setPrenom("Bill");
        $rec3->setEntreprise($ent1);
        $manager->persist($rec3);

        $rec4 = new Recruteur();
        $rec4->setNom("Gates");
        $rec4->setPrenom("Bill");
        $rec4->setEntreprise($ent1);
        $manager->persist($rec4);

        $rec5 = new Recruteur();
        $rec5->setNom("Gates");
        $rec5->setPrenom("Bill");
        $rec5->setEntreprise($ent1);
        $manager->persist($rec5);



        $u2 = new User();
        $u2->setEmail('rec15@be4web.fr');
        $password = $this->encoder->encodePassword($u2,
            '123456');
        $u2->setPassword($password);
        $u2->setRoles(["ROLE_USER", "ROLE_RECRUTEUR", "ROLE_TO_VERIFY"]);
        $u2->setAuthToken(null);
        $u2->setRecruteur($rec1);
        $u2->setActif(true);
        $manager->persist($u2);

        $u3 = new User();
        $u3->setEmail('rec16@be4web.fr');
        $password = $this->encoder->encodePassword($u3,
            '123456');
        $u3->setPassword($password);
        $u3->setRoles(["ROLE_USER", "ROLE_RECRUTEUR", "ROLE_TO_VERIFY"]);
        $u3->setAuthToken(null);
        $u3->setRecruteur($rec2);
        $u3->setActif(true);
        $manager->persist($u3);

        $u4 = new User();
        $u4->setEmail('rec17@be4web.fr');
        $password = $this->encoder->encodePassword($u4,
            '123456');
        $u4->setPassword($password);
        $u4->setRoles(["ROLE_USER", "ROLE_RECRUTEUR", "ROLE_TO_VERIFY"]);
        $u4->setAuthToken(null);
        $u4->setRecruteur($rec3);
        $u4->setActif(true);
        $manager->persist($u4);

        $u5 = new User();
        $u5->setEmail('rec18@be4web.fr');
        $password = $this->encoder->encodePassword($u5,
            '123456');
        $u5->setPassword($password);
        $u5->setRoles(["ROLE_USER", "ROLE_RECRUTEUR", "ROLE_TO_VERIFY"]);
        $u5->setAuthToken(null);
        $u5->setRecruteur($rec4);
        $u5->setActif(true);
        $manager->persist($u5);

        $u6 = new User();
        $u6->setEmail('rec19@be4web.fr');
        $password = $this->encoder->encodePassword($u6,
            '123456');
        $u6->setPassword($password);
        $u6->setRoles(["ROLE_USER", "ROLE_RECRUTEUR", "ROLE_TO_VERIFY"]);
        $u6->setAuthToken(null);
        $u6->setRecruteur($rec5);
        $u6->setActif(true);
        $manager->persist($u6);

        // Candidat numero 1
        $cand1= new Candidat();
        $cand1->setNom('ff');
        $cand1->setPrenom('ff');
        $cand1->setAdresse(152);
        $cand1->setCodePostal('60700');
        $cand1->setMobilite(true);
        $cand1->setTelephone('0312543352');
        $cand1->setVille(296);
        $manager->persist($cand1);

        $usCandid = new User();
        $usCandid->setEmail('cand15@be4web.fr');
        $password = $this->encoder->encodePassword($usCandid,
            '123456');
        $usCandid->setPassword($password);
        $usCandid->setRoles(["ROLE_USER", "ROLE_CANDIDAT"]);
        $usCandid->setAuthToken(null);
        $usCandid->setCandidat($cand1);
        $usCandid->setActif(true);
        $manager->persist($usCandid);
        // Candidat numero 2

        $cand2= new Candidat();
        $cand2->setNom('giles');
        $cand2->setPrenom('simons');
        $cand2->setAdresse('rue de paris');
        $cand2->setCodePostal('60700');
        $cand2->setMobilite(true);
        $cand2->setTelephone('0312543352');
        $cand2->setVille(296);
        $manager->persist($cand2);

        $usCandid1 = new User();
        $usCandid1->setEmail('cand16@be4web.fr');
        $password = $this->encoder->encodePassword($usCandid1,
            '123456');
        $usCandid1->setPassword($password);
        $usCandid1->setRoles(["ROLE_USER", "ROLE_CANDIDAT"]);
        $usCandid1->setAuthToken(null);
        $usCandid1->setCandidat($cand2);
        $usCandid1->setActif(true);
        $manager->persist($usCandid1);

        // Candidat numero 3
        $cand3= new Candidat();
        $cand3->setNom('pierre');
        $cand3->setPrenom('louis');
        $cand3->setAdresse('rue de fontaine');
        $cand3->setCodePostal('80000');
        $cand3->setMobilite(true);
        $cand3->setTelephone('0312543352');
        $cand3->setVille(296);
        $manager->persist($cand3);

        $usCandid2 = new User();
        $usCandid2->setEmail('cand17@be4web.fr');
        $password = $this->encoder->encodePassword($usCandid2,
            '123456');
        $usCandid2->setPassword($password);
        $usCandid2->setRoles(["ROLE_USER", "ROLE_CANDIDAT"]);
        $usCandid2->setAuthToken(null);
        $usCandid2->setCandidat($cand3);
        $usCandid2->setActif(true);
        $manager->persist($usCandid2);

        // candidat numero 4

        $cand4= new Candidat();
        $cand4->setNom('giles');
        $cand4->setPrenom('simons');
        $cand4->setAdresse('rue de paris');
        $cand4->setCodePostal('60700');
        $cand4->setMobilite(true);
        $cand4->setTelephone('0312543352');
        $cand4->setVille(296);
        $manager->persist($cand4);

        $usCandid3 = new User();
        $usCandid3->setEmail('cand18@be4web.fr');
        $password = $this->encoder->encodePassword($usCandid3,
            '123456');
        $usCandid3->setPassword($password);
        $usCandid3->setRoles(["ROLE_USER", "ROLE_CANDIDAT"]);
        $usCandid3->setAuthToken(null);
        $usCandid3->setCandidat($cand4);
        $usCandid3->setActif(true);
        $manager->persist($usCandid3);

        // candidat numero 5

        $cand5= new Candidat();
        $cand5->setNom('giles');
        $cand5->setPrenom('simons');
        $cand5->setAdresse('rue de paris');
        $cand5->setCodePostal('60700');
        $cand5->setMobilite(true);
        $cand5->setTelephone('0312543352');
        $cand5->setVille(296);
        $manager->persist($cand5);

        $usCandid4 = new User();
        $usCandid4->setEmail('cand19@be4web.fr');
        $password = $this->encoder->encodePassword($usCandid4,
            '123456');
        $usCandid4->setPassword($password);
        $usCandid4->setRoles(["ROLE_USER", "ROLE_CANDIDAT"]);
        $usCandid4->setAuthToken(null);
        $usCandid4->setCandidat($cand5);
        $usCandid4->setActif(true);
        $manager->persist($usCandid4);

         // Cv x2 candidat  1
        $cv1=new CV();
        $cv1->setCandidat($cand1);
        $cv1->setMetier($manager->getRepository(Metier::class)->find(14250));
        $manager->persist($cv1);
        $cv1=new CV();
        $cv1->setCandidat($cand1);
        $cv1->setMetier($manager->getRepository(Metier::class)->find(17302));
        $manager->persist($cv1);


        // Cv x2 candidat  2
        $cv2=new CV();
        $cv2->setCandidat($cand2);
        $cv2->setMetier($manager->getRepository(Metier::class)->find(14250));
        $manager->persist($cv2);
        $cv2=new CV();
        $cv2->setCandidat($cand2);
        $cv2->setMetier($manager->getRepository(Metier::class)->find(20381));
        $manager->persist($cv2);

        //Cv x2 candidat  3
        $cv3=new CV();
        $cv3->setCandidat($cand3);
        $cv3->setMetier($manager->getRepository(Metier::class)->find(12550));
        $manager->persist($cv3);
        $cv3=new CV();
        $cv3->setCandidat($cand3);
        $cv3->setMetier($manager->getRepository(Metier::class)->find(126547));
        $manager->persist($cv3);

        //Cv x2 candidat  4

        $cv4=new CV();
        $cv4->setDeposePar($rec3);
        $cv4->setMetier($manager->getRepository(Metier::class)->find(12556));
        $manager->persist($cv4);
        $cv4=new CV();
        $cv4->setDeposePar($rec3);
        $cv4->setMetier($manager->getRepository(Metier::class)->find(140884));
        $manager->persist($cv4);

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

        $formation2= new Formation();
        $formation2->setCv($cv2);
        $formation2->setDateDebut(new \DateTime('06/04/2014'));
        $formation2->setDateFin(new \DateTime('06/04/2016'));
        $formation2->setDescription('test');
        $formation2->setDiplome('diplome superieur');
        $formation2->setEcole('Acor Alternance');
        $formation2->setNiveau('bac+2');
        $manager->persist($formation2);

        $formation2= new Formation();
        $formation2->setCv($cv2);
        $formation2->setDateDebut(new \DateTime('06/04/2014'));
        $formation2->setDateFin(new \DateTime('06/04/2012'));
        $formation2->setDescription('diplome professionelle ');
        $formation2->setDiplome('diplome fin d etude');
        $formation2->setEcole('lycee notre dame');
        $formation2->setNiveau('bac pro commerce');
        $manager->persist($formation2);

        $formation= new Formation();
        $formation->setCv($cv2);
        $formation->setDateDebut(new \DateTime('06/04/2014'));
        $formation->setDateFin(new \DateTime('06/04/2014'));
        $formation->setDescription('brevet');
        $formation->setDiplome('brevet professionnel');
        $formation->setEcole('lycee notre dames');
        $formation->setNiveau('bep vente');
        $manager->persist($formation);
        // offre 1
        $offre1=new Offre();
        $offre1->setMetier($manager->getRepository(Metier::class)->find(10200));
        $offre1->setType($manager->getRepository(TypeContrat::class)->find(2));
        $offre1->setDescription('Le numérique dynamise les effets systémiques du métacontexte.');
        $offre1->setRecruteur($rec1);
        $offre1->setEntreprise($ent1);
        $offre1->setVille($manager->getRepository(Ville::class)->find(1));
        $offre1->setDepartement($manager->getRepository(Departement::class)->find(1));
        $offre1->setRegion($manager->getRepository(Region::class)->find(84));
        $offre1->setPays($manager->getRepository(Pays::class)->find(67)) ;
        $offre1->setTitre('test annonce 1');
        $offre1->setDatePublication(new \DateTime());
        $offre1->setSalaire('45000');
        $offre1->setDateDebut(new \DateTime('06/04/2014'));

        $manager->persist($offre1);


        // offre 2
        $offre2=new Offre();
        $offre2->setMetier($manager->getRepository(Metier::class)->find(10500));
        $offre2->setType($manager->getRepository(TypeContrat::class)->find(2));
        $offre2->setDescription('Le numérique dynamise les effets systémiques du métacontexte.');
        $offre2->setRecruteur($rec2);
        $offre2->setEntreprise($ent1);
        $offre2->setVille($manager->getRepository(Ville::class)->find(1));
        $offre2->setDepartement($manager->getRepository(Departement::class)->find(1));
        $offre2->setRegion($manager->getRepository(Region::class)->find(84));
        $offre2->setPays($manager->getRepository(Pays::class)->find(67)) ;
        $offre2->setTitre('test annonce 2');
        $offre2->setDatePublication(new \DateTime());
        $offre2->setSalaire('20000');
        $offre2->setDateDebut(new \DateTime('06/04/2014'));

        $manager->persist($offre2);
        // offre 3
        $offre3=new Offre();
        $offre3->setMetier($manager->getRepository(Metier::class)->find(10600));
        $offre3->setType($manager->getRepository(TypeContrat::class)->find(2));
        $offre3->setDescription("L'objectif dynamise les paradoxes caractéristiques du dispositif.");
        $offre3->setRecruteur($rec3);
        $offre3->setEntreprise($ent1);
        $offre3->setVille($manager->getRepository(Ville::class)->find(1));
        $offre3->setDepartement($manager->getRepository(Departement::class)->find(1));
        $offre3->setRegion($manager->getRepository(Region::class)->find(84));
        $offre3->setPays($manager->getRepository(Pays::class)->find(67)) ;
        $offre3->setTitre('test annonce 3');
        $offre3->setDatePublication(new \DateTime());
        $offre3->setSalaire('35000');
        $offre3->setDateDebut(new \DateTime('06/04/2014'));

        $manager->persist($offre3);
        // offre 4
        $offre4=new Offre();
        $offre4->setMetier($manager->getRepository(Metier::class)->find(10250));
        $offre4->setType($manager->getRepository(TypeContrat::class)->find(2));
        $offre4->setDescription('Le numérique dynamise les effets systémiques du métacontexte.');
        $offre4->setRecruteur($rec1);
        $offre4->setEntreprise($ent1);
        $offre4->setVille($manager->getRepository(Ville::class)->find(1));
        $offre4->setDepartement($manager->getRepository(Departement::class)->find(1));
        $offre4->setRegion($manager->getRepository(Region::class)->find(84));
        $offre4->setPays($manager->getRepository(Pays::class)->find(67)) ;
        $offre4->setTitre('test annonce 4');
        $offre4->setDatePublication(new \DateTime());
        $offre4->setSalaire('27000');
        $offre4->setDateDebut(new \DateTime('06/04/2014'));

        $manager->persist($offre4);
        // offre 5
        $offre5=new Offre();
        $offre5->setMetier($manager->getRepository(Metier::class)->find(14500));
        $offre5->setType($manager->getRepository(TypeContrat::class)->find(2));
        $offre5->setDescription('Le numérique dynamise les effets systémiques du métacontexte.');
        $offre5->setRecruteur($rec4);
        $offre5->setEntreprise($ent1);
        $offre5->setVille($manager->getRepository(Ville::class)->find(1));
        $offre5->setDepartement($manager->getRepository(Departement::class)->find(1));
        $offre5->setRegion($manager->getRepository(Region::class)->find(84));
        $offre5->setPays($manager->getRepository(Pays::class)->find(67)) ;
        $offre5->setTitre('test annonce 5');
        $offre5->setDatePublication(new \DateTime());
        $offre5->setSalaire('35000');
        $offre5->setDateDebut(new \DateTime('06/04/2014'));

        $manager->persist($offre5);

        //COMPETENCE OFFRE 1

        $comptA=($manager->getRepository(Competence::class)->find(200039));
        $comptB=($manager->getRepository(Competence::class)->find(200059));
        $comptC=($manager->getRepository(Competence::class)->find(103163));
        $comptD=($manager->getRepository(Competence::class)->find(106963));
        $comptE=($manager->getRepository(Competence::class)->find(119000));
        $comptA->addOffre($offre1);
        $comptB->addOffre($offre1);
        $comptC->addOffre($offre1);
        $comptD->addOffre($offre1);
        $comptE->addOffre($offre1);
        $manager->persist($comptA);
        $manager->persist($comptB);
        $manager->persist($comptC);
        $manager->persist($comptD);
        $manager->persist($comptE);

        // COMPETENCE OFFRE 2

        $compt1=($manager->getRepository(Competence::class)->find(100007));
        $compt2=($manager->getRepository(Competence::class)->find(100010));
        $compt3=($manager->getRepository(Competence::class)->find(100015));
        $compt4=($manager->getRepository(Competence::class)->find(100018));
        $compt5=($manager->getRepository(Competence::class)->find(100019));
        $compt1->addOffre($offre2);
        $compt2->addOffre($offre2);
        $compt3->addOffre($offre2);
        $compt4->addOffre($offre2);
        $compt5->addOffre($offre2);
        $manager->persist($compt1);
        $manager->persist($compt2);
        $manager->persist($compt3);
        $manager->persist($compt4);
        $manager->persist($compt5);

        // COMPETENCE OFFRE 3
        $compt1=($manager->getRepository(Competence::class)->find(102216));
        $compt2=($manager->getRepository(Competence::class)->find(120617));
        $compt3=($manager->getRepository(Competence::class)->find(102631));
        $compt4=($manager->getRepository(Competence::class)->find(115962));
        $compt5=($manager->getRepository(Competence::class)->find(115974));
        $compt1->addOffre($offre3);
        $compt2->addOffre($offre3);
        $compt3->addOffre($offre3);
        $compt4->addOffre($offre3);
        $compt5->addOffre($offre3);
        $manager->persist($compt1);
        $manager->persist($compt2);
        $manager->persist($compt3);
        $manager->persist($compt4);
        $manager->persist($compt5);

        // COMPETENCE OFFRE 4
        $compt1=($manager->getRepository(Competence::class)->find(116448));
        $compt2=($manager->getRepository(Competence::class)->find(116449));
        $compt3=($manager->getRepository(Competence::class)->find(116447));
        $compt4=($manager->getRepository(Competence::class)->find(116446));
        $compt5=($manager->getRepository(Competence::class)->find(116445));
        $compt1->addOffre($offre4);
        $compt2->addOffre($offre4);
        $compt3->addOffre($offre4);
        $compt4->addOffre($offre4);
        $compt5->addOffre($offre4);
        $manager->persist($compt1);
        $manager->persist($compt2);
        $manager->persist($compt3);
        $manager->persist($compt4);
        $manager->persist($compt5);

        // COMPETENCE OFFRE 5

        $compt1=($manager->getRepository(Competence::class)->find(117879));
        $compt2=($manager->getRepository(Competence::class)->find(118975));
        $compt3=($manager->getRepository(Competence::class)->find(119258));
        $compt4=($manager->getRepository(Competence::class)->find(120433));
        $compt5=($manager->getRepository(Competence::class)->find(122685));
        $compt1->addOffre($offre5);
        $compt2->addOffre($offre5);
        $compt3->addOffre($offre5);
        $compt4->addOffre($offre5);
        $compt5->addOffre($offre5);
        $manager->persist($compt1);
        $manager->persist($compt2);
        $manager->persist($compt3);
        $manager->persist($compt4);
        $manager->persist($compt5);

        



        $postule1=new Postule();
        $postule1->setCandidat($cand1);
        $postule1->setAgence($ent1);
        $postule1->setOffre($offre1);
        $postule1->setDateSelection(new \DateTime());
        $manager->persist($postule1);

        $postule1=new Postule();
        $postule1->setCandidat($cand1);
        $postule1->setAgence($ent1);
        $postule1->setOffre($offre3);
        $postule1->setDateSelection(new \DateTime());
        $manager->persist($postule1);

        $postule1=new Postule();
        $postule1->setCandidat($cand2);
        $postule1->setAgence($ent1);
        $postule1->setOffre($offre2);
        $postule1->setDateSelection(new \DateTime());
        $manager->persist($postule1);

        $postule1=new Postule();
        $postule1->setCandidat($cand3);
        $postule1->setAgence($ent1);
        $postule1->setOffre($offre3);
        $postule1->setDateSelection(new \DateTime());
        $manager->persist($postule1);

        $postule1=new Postule();
        $postule1->setCandidat($cand4);
        $postule1->setAgence($ent1);
        $postule1->setOffre($offre4);
        $postule1->setDateSelection(new \DateTime());
        $manager->persist($postule1);

        $postule1=new Postule();
        $postule1->setCandidat($cand4);
        $postule1->setAgence($ent1);
        $postule1->setOffre($offre1);
        $postule1->setDateSelection(new \DateTime());
        $manager->persist($postule1);

        $postule1=new Postule();
        $postule1->setCandidat($cand5);
        $postule1->setAgence($ent1);
        $postule1->setOffre($offre5);
        $postule1->setDateSelection(new \DateTime());
        $manager->persist($postule1);

        $consult=new Consulte();
        $consult->setEntreprise($ent1);
        $consult->setCv($cv2);
        $manager->persist($consult);

        $consult=new Consulte();
        $consult->setEntreprise($ent1);
        $consult->setCv($cv1);
        $manager->persist($consult);

        $consult=new Consulte();
        $consult->setEntreprise($ent1);
        $consult->setCv($cv3);
        $manager->persist($consult);




        $manager->flush();







    }


    public static function getGroups(): array
    {
        return ['julien'];
    }

}
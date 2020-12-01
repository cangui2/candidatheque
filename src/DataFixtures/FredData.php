<?php

namespace App\DataFixtures;

use App\Entity\APE;
use App\Entity\Candidat;
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
use App\Entity\Postule;
use App\Entity\Consulte;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class FredData extends Fixture implements FixtureGroupInterface
{
    private $encoder;


    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $ent1 = new Entreprise();
        $ent1->setRaisonSociale("Jarditou");
        $ent1->setSiret("123456789");
        $ent1->setAdresse1("Rue de labas");
        $ent1->setAdresse2("");
        $ent1->setCodePostal("80000");
        $ent1->setVille("Amiens");
        $manager->persist($ent1);

        $rec1 = new Recruteur();
        $rec1->setNom("Gaga");
        $rec1->SetPrenom("Lady");
        $rec1->setTelephone("0327890506");
        $rec1->setEntreprise($ent1);
        $manager->persist($rec1);

        $u2 = new User();
        $u2->setEmail('rec4@be4web.fr');
        $password = $this->encoder->encodePassword($u2, '987456');
        $u2->setPassword($password);
        $u2->setRoles(["ROLE_USER", "ROLE_RECRUTEUR", "ROLE_TO_VERIFY"]);
        $u2->setAuthToken(null);
        $u2->setRecruteur($rec1);
        $u2->setActif(true);
        $manager->persist($u2);

        $of1 = new Offre();
        $of1->setRecruteur($rec1);
        $of1->setDatePublication(new \DateTime());
        $of1->setDescription("Nous recherchons des developpeurs Web...");
        $of1->setMetier($manager->getRepository(Metier::class)->findOneBy(["libelle" =>"Développeur / Développeuse web"]));
        $of1->setProfil("De formation bac+5, vous justifiez d'une expérience de 1 an");
        $of1->setSalaire(25000);
        $of1->setTitre("Developpeurs web");
        $of1->setType($manager->getRepository(TypeContrat::class)->findOneBy(["libelle" =>"CDD < 5 mois"]));
        $manager->persist($of1);


        $of2 = new Offre();
        $of2->setRecruteur($rec1);
        $of2->setDatePublication(new \DateTime());
        $of2->setDescription("Nous recherchons des ...");
        $of2->setMetier($manager->getRepository(Metier::class)->findOneBy(["libelle" =>"Développeur / Développeuse web"]));
        $of2->setProfil("");
        $of2->setSalaire(25000);
        $of2->setTitre("Developpeurs web...");
        $of2->setType($manager->getRepository(TypeContrat::class)->findOneBy(["libelle" =>"CDD < 5 mois"]));
        $manager->persist($of2);

        $of3 = new Offre();
        $of3->setRecruteur($rec1);
        $of3->setDatePublication(new \DateTime());
        $of3->setDescription("Nous recherchons des ...");
        $of3->setMetier($manager->getRepository(Metier::class)->findOneBy(["libelle" =>"Développeur / Développeuse web"]));
        $of3->setProfil("");
        $of3->setSalaire(25000);
        $of3->setTitre("Developpeurs Web");
        $of3->setType($manager->getRepository(TypeContrat::class)->findOneBy(["libelle" =>"CDD < 5 mois"]));
        $manager->persist($of3);

        $of4 = new Offre();
        $of4->setRecruteur($rec1);
        $of4->setDatePublication(new \DateTime());
        $of4->setDescription("Nous recherchons des dev");
        $of4->setMetier($manager->getRepository(Metier::class)->findOneBy(["libelle" =>"Développeur / Développeuse web"]));
        $of4->setProfil("");
        $of4->setSalaire(25000);
        $of4->setTitre("Developpeurs Web");
        $of4->setType($manager->getRepository(TypeContrat::class)->findOneBy(["libelle" =>"CDD < 5 mois"]));
        $manager->persist($of4);

        $of5 = new Offre();
        $of5->setRecruteur($rec1);
        $of5->setDatePublication(new \DateTime());
        $of5->setDescription("Nous recherchons des paysagistes");
        $of5->setMetier($manager->getRepository(Metier::class)->findOneBy(["libelle" =>"Développeur / Développeuse web"]));
        $of5->setProfil("");
        $of5->setSalaire(25000);
        $of5->setTitre("Developpeurs Web");
        $of5->setType($manager->getRepository(TypeContrat::class)->findOneBy(["libelle" =>"CDD < 5 mois"]));
        $manager->persist($of5);

       


        $can1 = new Candidat();
        $can1->setNom("Leo");
        $can1->setPrenom("Paul");
        $can1->setAdresse("Boulevard de la liberté");
        $can1->setVille("Cambrai");
        $can1->setCodePostal("59400");
        $manager->persist($can1);


        $can2 = new Candidat();
        $can2->setNom("Paul");
        $can2->setPrenom("Leo");
        $can2->setAdresse("Rue du haut");
        $can2->setVille("Amiens");
        $can2->setCodePostal("80000");
        $manager->persist($can2);

        $can3 = new Candidat();
        $can3->setNom("Laurent");
        $can3->setPrenom("Leo");
        $can3->setAdresse("Rue du haut");
        $can3->setVille("Amiens");
        $can3->setCodePostal("80000");
        $manager->persist($can3);


        $can4 = new Candidat();
        $can4->setNom("Paul");
        $can4->setPrenom("Laurent");
        $can4->setAdresse("Rue du bas");
        $can4->setVille("Amiens");
        $can4->setCodePostal("80000");
        $manager->persist($can4);

        $can5 = new Candidat();
        $can5->setNom("Laurent");
        $can5->setPrenom("Paul");
        $can5->setAdresse("Rue du sud ouest");
        $can5->setVille("Amiens");
        $can5->setCodePostal("80000");
        $manager->persist($can5);

        $cv1 = new CV();
        
        $cv1->setCandidat($can1);
        $manager->persist($cv1);

        $cv2 = new CV();
        $cv2->setCandidat($can1);
        $manager->persist($cv2);

        $pos1 = new postule();
        $pos1->setCandidat($can1);
        $pos1->setAgence($ent1);
        $pos1->setOffre($of1);
        $manager->persist($pos1);

        $cons1 = new Consulte();
        $cons1 ->setCv($cv1);
        $cons1 ->setEntreprise($ent1);
        $manager->persist($cons1);


        $manager->flush();
    }

    public static function getGroups(): array
     {
       return ['fred'];
    }
}
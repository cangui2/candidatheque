<?php

namespace App\Command;

use App\Entity\APE;
use App\Entity\Pcs;
use App\Entity\Pays;
use App\Entity\Rome;
use App\Entity\Ville;
use App\Entity\Metier;
use App\Entity\Region;
use App\Entity\Competence;
use App\Entity\Departement;
use App\Entity\Description;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class DBLoadCommand extends Command
{
    protected static $defaultName = 'db:load';

    private $manager;

    public function __construct(EntityManagerInterface $manager)
    {
        $this->manager = $manager;
        $this->manager->getConnection()->getConfiguration()->setSQLLogger(null);

        parent::__construct();
    }

    protected function configure()
    {
        $this
            ->setDescription('Charge le jeu de test à partir des fichiers csv')
            ->addArgument('entite', InputArgument::REQUIRED, 'Nom de l\'entite à charger');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $group = $input->getArgument("entite");

        switch (strtolower($group)) {
            case "rome":
                $this->loadRome($output);
                break;
            case "metier":
                //$this->loadMetier($output);
                break;
            case "pcs":
                $this->loadPCS($output);
                break;
            case "competence":
                $this->loadCompetence($output);
                break;
            case "description":
                $this->loadDescription($output);
                break;
            case "pays":
                $this->loadPays($output);
                break;
            case "region":
                $this->loadRegion($output);
                break;
            case "departement":
                $this->loadDepartement($output);
                break;
            case "ville":
                $this->loadVille($output);
                break;
            case "ape":
                $this->loadAPE($output);
                break;
            case "base":
                $this->loadBaseData($output);
                break;
            case "extend":
                $this->loadExtendedData($output);
                break;
            case "all":
                $this->loadBaseData($output);
                $this->loadAPE($output);
                $this->loadRome($output);
                $this->loadPCS($output);
                $this->loadCompetence($output);
                $this->loadDescription($output);
                $this->loadPays($output);
                $this->loadRegion($output);
                $this->loadDepartement($output);
                $this->loadVille($output);
                $this->loadExtendedData($output);
                break;
        }



        return Command::SUCCESS;
    }

    protected function loadBaseData(OutputInterface $output) {
        $command = $this->getApplication()->find('doctrine:fixtures:load');

        $arguments = [
            '--no-interaction' => true,
            '--append' => true,
            '--group' => array("base")
        ];

        $greetInput = new ArrayInput($arguments);
        return $command->run($greetInput, $output);
    }

    protected function loadExtendedData(OutputInterface $output) {
        $command = $this->getApplication()->find('doctrine:fixtures:load');

        $arguments = [
            '--no-interaction' => true,
            '--append' => true,
            '--group' => array("extend")
        ];

        $greetInput = new ArrayInput($arguments);
        return $command->run($greetInput, $output);
    }

    protected function loadAPE(OutputInterface $output)
    {
        $csv_file = 'naf.csv';
        $output->write("Loading <info>APE</info> from <info>" . $csv_file . "</info>");
        $counter=0;

        $csv = fopen(dirname(__FILE__).'/../../doc/csv/' . $csv_file, 'r');
        $line = fgetcsv($csv);

        while (!feof($csv)) {
            $line = fgetcsv($csv, 0, ";", '"');
            if ($line) {
                $co = $line[0];
                if (strlen($co)==5) {
                    $li = $line[1];
                    $ape = new APE($co, $li);
                    
                    $this->manager->persist($ape);
                    $counter++;
                }
            }
        }

        fclose($csv);
        $this->manager->flush();
        $output->writeln(" ... <question>" . $counter . "</question> lines inserted");
    }

    //charge les table rome et metier (appelation) les ids sont chargés avec les codes ogr du Rome
    protected function loadRome(OutputInterface $output)
    {

        $csv_file = '23-cr_gd_dp_appellations_v344_utf8.csv';
        $output->write("Loading <info>Rome & Appelations</info> from <info>" . $csv_file . "</info>");
        $csv = fopen(dirname(__FILE__).'/../../doc/csv/RefRomeCsv/'.$csv_file , 'r');
        $line = fgetcsv($csv);
        $counter1=0;
        $counter2=0;

        while (!feof($csv)) {
            $line = fgetcsv($csv);
            if ($line && count($line)>4) {
                $co1 = $line[0];
                $co2 = $line[1];
                $co3 = $line[2];
                $libelle_rome = $line[3];
                $libelle_metier = $line[4];
                $ogr_rome = $line[8];
                $ogr_metier = $line[9];
                if ($co1 && $co2 && $co3) {
                    $ro = new Rome($ogr_rome, $co1.$co2.$co3, $libelle_rome);
                    $this->manager->persist($ro);
                    $counter1++;
                }
                elseif (!$co1 && !$co2 && !$co3 && $libelle_metier) {
                    $me = new Metier($ogr_metier, $libelle_metier);
                    $this->manager->persist($me);
                    $me->setRome($ro);
                    $counter2++;
                }
            }
        }
        $this->manager->flush();
        fclose($csv);
        $this->manager->flush();
        $output->writeln(" ... <question>" . $counter1 . "</question> Rome <question>" . $counter2 . "</question> Metier lines inserted");
    }

    protected function loadMetier(OutputInterface $output)
    {
        $csv_file = 'rome.csv';
        $output->write("Loading <info>Metier</info> from <info>" . $csv_file . "</info>");
        $csv = fopen(dirname(__FILE__).'/../../doc/csv/'.$csv_file, 'r');
        $line = fgetcsv($csv);
        $counter=0;
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
                    $this->manager->persist($me);
                    $counter++;
                }
            }
        }

        fclose($csv);

        $this->manager->flush();
        $output->writeln(" ... <question>" . $counter . "</question> lines inserted");
    }

    protected function loadPCS(OutputInterface $output)
    {
        $csv_file = 'pcs.csv';
        $output->write("Loading <info>PCS</info> from <info>" . $csv_file . "</info>");
        $counter=0;

        $csv = fopen(dirname(__FILE__).'/../../doc/csv/' . $csv_file, 'r');

        while (!feof($csv)) {
            $line = fgetcsv($csv, 0, ";", '"');
            if ($line) {
                $code = $line[0];
                $libelle = $line[1];
                $pcs = new Pcs();
                $pcs->setCode($code);
                $pcs->setLibelle($libelle);
                $this->manager->persist($pcs);
                $counter++;
            }
        }

        fclose($csv);
        $this->manager->flush();
        $output->writeln(" ... <question>" . $counter . "</question> lines inserted");


        $repo_rome = $this->manager->getRepository(Rome::class);
        $repo_pcs = $this->manager->getRepository(Pcs::class);

        $csv_file = 'pcs_rome.csv';
        $output->write("Loading <info>PCS-ROME</info> from <info>" . $csv_file . "</info>");
        $counter=0;

        $csv = fopen(dirname(__FILE__).'/../../doc/csv/' . $csv_file, 'r');
        
        $precedent_code_pcs = "";
        while (!feof($csv)) {
            $line = fgetcsv($csv, 0, ";", '"');
            if ($line) {
                $code_pcs = $line[0];
                $code_rome = $line[1];
                if ($code_pcs && $code_rome) {
                    $rome = $repo_rome->findOneBy([ "code" => $code_rome ]);
                    $pcs = $repo_pcs->findOneBy([ "code" => $code_pcs ]);
                    $rome->addCodesPc($pcs);
                    $precedent_code_pcs = $code_pcs;
                    $this->manager->flush();
                }
                elseif ($code_rome && $code_pcs=="") {
                    $rome = $repo_rome->findOneBy([ "code" => $code_rome ]);
                    $pcs = $repo_pcs->findOneBy([ "code" => $precedent_code_pcs ]);
                    $rome->addCodesPc($pcs);
                    $this->manager->flush();
                }
            }
        }

        fclose($csv);

        $this->manager->flush();

        $output->writeln(" ... <question>" . $counter . "</question> lines inserted");
    }

    protected function loadCompetence(OutputInterface $output)
    {
        $repo_rome = $this->manager->getRepository(Rome::class);
        $repo_competence = $this->manager->getRepository(Competence::class);

        $csv_file = '6-referentiel_competence_v344_utf8.csv';
        $output->writeln("Loading <info>Référentiel compétences ROME</info> from <info>" . $csv_file . "</info>");
        $csv = fopen(dirname(__FILE__).'/../../doc/csv/RefRomeCsv/'.$csv_file , 'r');
        $line = fgetcsv($csv);
        $liste_competences = [];
        while (!feof($csv)) {
            $line = fgetcsv($csv);
            if ($line && count($line)>4) {
                $liste_competences[] = $line;
            }
        }
        fclose($csv);
        //OK: $items contient la table item [code_ogr_activite, libelle, code_type ...]

        $csv_file = '7-referentiel_activite_v344_utf8.csv'; // 
        $output->writeln("Loading <info>Référentiel item ROME</info> from <info>" . $csv_file . "</info>");
        $csv = fopen(dirname(__FILE__).'/../../doc/csv/RefRomeCsv/'.$csv_file , 'r');
        $line = fgetcsv($csv);
        $liste_savoirfaire = [];
        while (!feof($csv)) {
            $line = fgetcsv($csv);
            if ($line && count($line)>4) {
                $liste_savoirfaire[] = $line;
            }
        }
        fclose($csv);
        //OK: $items contient la table item [code_ogr_activite, libelle, code_type ...]

        $csv_file = '22-coherence_item_v344_utf8.csv';
        $output->write("Loading <info>Compétences</info> from <info>" . $csv_file . "</info>");
        $csv = fopen(dirname(__FILE__).'/../../doc/csv/RefRomeCsv/'.$csv_file , 'r');
        $line = fgetcsv($csv);
        $counter=0;

        while (!feof($csv)) {
            $line = fgetcsv($csv);
            if ($line && count($line)>1) {
                $code_rome = $line[0];
                $code_ogr = $line[1];
                $rome = $repo_rome->findOneBy([ "code" => $code_rome ]);
                $competence = $repo_competence->find($code_ogr);
                if ($competence) {

                }
                else {
                    $comp_rome = $this->findRome($code_ogr, $liste_competences);
                    $acti_rome = $this->findRome($code_ogr, $liste_savoirfaire);
                    if ($comp_rome) {
                        $competence = new Competence($code_ogr);
                        $competence->setLibelle($comp_rome[1]);
                        $competence->setType($comp_rome[2]);
                        $competence->setLibelleType($comp_rome[3]);
                        $this->manager->persist($competence);
                    }elseif ($acti_rome) {
                        if ($acti_rome[2]==3) {
                            $competence = new Competence($code_ogr);
                            $competence->setLibelle($acti_rome[1]);
                            $competence->setType(intval($acti_rome[2]));
                            $competence->setLibelleType($acti_rome[5]);
                            $this->manager->persist($competence);
                        }
                    }
                }
                if ($competence) {
                    $competence->addRome($rome);
                    $counter++;
                }
            }
        }
        $this->manager->flush();
        fclose($csv);

        $output->writeln(" ... <question>" . $counter . "</question> Competences lines inserted");

    }

    protected function findRome(string $ogr, array $items) {
        foreach ($items as $line) {
            if ($line[0]==$ogr) {
                return $line;
            }
        }
        return null;
    }


    protected function loadDescription(OutputInterface $output)
    {
        $repo_rome = $this->manager->getRepository(Rome::class);
        $repo_competence = $this->manager->getRepository(Competence::class);

        $csv_file = '11-texte_v344_utf8.csv';
        $output->write("Loading <info>Description</info> from <info>" . $csv_file . "</info>");
        $csv = fopen(dirname(__FILE__).'/../../doc/csv/RefRomeCsv/'.$csv_file , 'r');
        $line = fgetcsv($csv);
        $counter=0;

        while (!feof($csv)) {
            $line = fgetcsv($csv);
            if ($line && count($line)>1) {
                $code_rome = $line[0];
                $position = $line[1];
                $type = $line[2];
                $libelle = $line[3];
                $libelle_type = $line[4];
                $rome = $repo_rome->findOneBy([ "code" => $code_rome ]);
                if ($rome) {
                    $description = new Description();
                    $description->setLibelle($libelle);
                    $description->setPosition($position);
                    $description->setIdType($type);
                    $description->setLibelleType($libelle_type);
                    $description->addRome($rome);
                    $counter++;
                    $this->manager->persist($description);
                }
            }
        }
        $this->manager->flush();
        fclose($csv);

        $output->writeln(" ... <question>" . $counter . "</question> Description lines inserted");

    }


//    protected function loadCompetence(OutputInterface $output)
//    {
//        $csv_file = 'competences.csv';
//        $output->write("Loading <info>Competence</info> from <info>" . $csv_file . "</info>");
//        $csv = fopen(dirname(__FILE__).'/../../doc/csv/'.$csv_file, 'r');
//        $line = fgetcsv($csv);
//        $counter=0;
//        while (!feof($csv)) {
//            $line = fgetcsv($csv, 0, ",", '"');
//            if ($line) {
//                $co = new Competence();
//                $code = $line[0];
//                $libelle = $line[1];
//                $co->setLibelle(str_replace("''", "'", $libelle));
//                $co->setCode($code);
//                $this->manager->persist($co);
//                $counter++;
//            }
//        }
//
//        fclose($csv);
//
//        $this->manager->flush();
//        $output->writeln(" ... <question>" . $counter . "</question> lines inserted");
//    }

    protected function loadPays(OutputInterface $output)
    {
        /////////////////////////////////////////////////////////////////////////////////
        /// Metiers
        ////////////////////////////////////////////////////////////////////////////////
        $csv_file = 'pays.csv';
        $output->write("Loading <info>Pays</info> from <info>" . $csv_file . "</info>");
        $counter=0;
        $csv = fopen(dirname(__FILE__).'/../../doc/csv/'.$csv_file, 'r');
        $line = fgetcsv($csv);

        while (!feof($csv)) {
            $line = fgetcsv($csv, 0, ";", '"');
            if ($line && count($line)>1) {
                $nom = $line[0];
                $pays = new Pays();
                $pays->setNom($nom);
                $this->manager->persist($pays);
                $counter++;
            }
        }

        fclose($csv);

        $this->manager->flush();
        $output->writeln(" ... <question>" . $counter . "</question> lines inserted");
    }

    protected function loadRegion(OutputInterface $output)
    {
        $csv_file = 'regions.csv';
        $counter=0;
        $output->write("Loading <info>Region</info> from <info>" . $csv_file . "</info>");
        $csv = fopen(dirname(__FILE__).'/../../doc/csv/'.$csv_file, 'r');
        $line = fgetcsv($csv);

        while (!feof($csv)) {
            $line = fgetcsv($csv, 0, ",", '"');
            if (count($line)>1) {
                $co = $line[1];
                $li = $line[2];
                $reg = new Region($co, $li);
                $this->manager->persist($reg);
                $counter++;
            }
        }

        fclose($csv);

        $this->manager->flush();
        $output->writeln(" ... <question>" . $counter . "</question> lines inserted");
    }

    protected function loadDepartement(OutputInterface $output)
    {
        $csv_file = 'departements.csv';
        $output->write("Loading <info>Departement</info> from <info>" . $csv_file . "</info>");
        $counter=0;
        $repo = $this->manager->getRepository(Region::class);

        $csv = fopen(dirname(__FILE__).'/../../doc/csv/' . $csv_file, 'r');
        $line = fgetcsv($csv);

        while (!feof($csv)) {
            $line = fgetcsv($csv, 0, ",", '"');
            if ($line && count($line)>1) {
                $co = $line[2];
                $li = $line[3];
                $re = $line[1];
                $region = $repo->find($re);
                $dep = new Departement();
                $dep->setCode($co);
                $dep->setNom($li . " (" . $co . ")");
                $dep->setRegion($region);
                $this->manager->persist($dep);
                $counter++;
            }
        }

        fclose($csv);

        $this->manager->flush();

        $output->writeln(" ... <question>" . $counter . "</question> lines inserted");
    }

    protected function loadVille(OutputInterface $output)
    {
        $csv_file = 'villes.csv';
        $output->write("Loading <info>Ville</info> from <info>" . $csv_file . "</info>");
        $counter=0;

        $repo = $this->manager->getRepository(Departement::class);

        $csv = fopen(dirname(__FILE__).'/../../doc/csv/' . $csv_file, 'r');
        $line = fgetcsv($csv);

        while (!feof($csv)) {
            $line = fgetcsv($csv, 0, ",", '"');
            if ($line && count($line)>1) {
                $cp = $line[3];
                $nom = $line[4];
                $dep = $line[1];
                $lon = $line[6];
                $lat = $line[7];
                $departement = $repo->findOneBy([ "code" => $dep]);
                $ville = new Ville();
                $ville->setNom($nom . " (" . $cp . ")");
                $ville->setCodePostal($cp);
                $ville->setLongitude($lon);
                $ville->setLatitude($lat);
                $ville->setDepartement($departement);
                $this->manager->persist($ville);
                $counter++;
            }
        }

        fclose($csv);

        $this->manager->flush();

        $output->writeln(" ... <question>" . $counter . "</question> lines inserted");
    }
}

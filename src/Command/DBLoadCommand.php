<?php

namespace App\Command;

use App\Entity\APE;
use App\Entity\Departement;
use App\Entity\Metier;
use App\Entity\Pays;
use App\Entity\Region;
use App\Entity\Rome;
use App\Entity\Ville;
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
                $this->loadMetier($output);
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
            case "all":
                $this->loadAPE($output);
                $this->loadRome($output);
                $this->loadMetier($output);
                $this->loadPays($output);
                $this->loadRegion($output);
                $this->loadDepartement($output);
                $this->loadVille($output);
                break;
        }



        return Command::SUCCESS;
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

    protected function loadRome(OutputInterface $output)
    {




        $csv_file = 'coderome.csv';
        $output->write("Loading <info>Rome</info> from <info>" . $csv_file . "</info>");
        $csv = fopen(dirname(__FILE__).'/../../doc/csv/'.$csv_file , 'r');
        $line = fgetcsv($csv);
        $counter=0;

        while (!feof($csv)) {
            $line = fgetcsv($csv);
            if ($line) {
                $ro = new Rome();
                $ro->setCode($line[0]);
                $ro->setLibelle($line[1]);

                $this->manager->persist($ro);
                $counter++;
            }
        }

        fclose($csv);

        $this->manager->flush();
        $output->writeln(" ... <question>" . $counter . "</question> lines inserted");
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
                $dep = new Departement($co, $li);
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
                $departement = $repo->find($dep);
                $ville = new Ville();
                $ville->setNom($nom);
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

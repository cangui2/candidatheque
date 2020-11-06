<?php

namespace App\DataFixtures;

use App\Entity\Metier;
use App\Entity\Rome;
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
        $csv = fopen(dirname(__FILE__).'/../../doc/ROME/coderome.csv', 'r');

        while (!feof($csv)) {
            $line = fgetcsv($csv);
            if ($line) {
                $ro = new Rome();
                $ro->setCode($line[0]);
                $ro->setLibelle($line[1]);

                $manager->persist($ro);
            }
        }

        fclose($csv);

        $manager->flush();

        $repo_rome = $manager->getRepository(Rome::class);

        $csv = fopen(dirname(__FILE__).'/../../doc/ROME/metiers.csv', 'r');

        while (!feof($csv)) {
            $line = fgetcsv($csv);
            if ($line) {
                $me = new Metier();
                $co = $line[7];
                $li = $line[0];
                $rome = $repo_rome->findOneBy(["code" => $co]);
                $me->setLibelle($li);
                $me->setRome($rome);

                $manager->persist($me);
            }
        }

        fclose($csv);

        $manager->flush();


    }


    public static function getGroups(): array
     {
       return ['base'];
    }

}
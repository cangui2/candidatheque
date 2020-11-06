<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class DBLoadCommand extends Command
{
    protected static $defaultName = 'db:load';

    protected function configure()
    {
        $this
            ->setDescription('Charge le jeu de test spécifié en paramètre (base...).')
            ->addArgument('fixture', InputArgument::REQUIRED, 'Nom du groupe de fixture à charger');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {

        $group = $input->getArgument("fixture");

        $command = $this->getApplication()->find('doctrine:fixtures:load');

        $arguments = [
            '--no-interaction' => true,
            '--append' => true,
            '--group' => array($group)
        ];

        $greetInput = new ArrayInput($arguments);
        return $command->run($greetInput, $output);
    }
}

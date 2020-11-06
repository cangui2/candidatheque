<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class DBVerifyCommand extends Command
{
    protected static $defaultName = 'db:verify';

    protected function configure()
    {
        $this
            ->setDescription('Vérifie l\'état de la base de données.');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $command = $this->getApplication()->find('doctrine:schema:update');

        $arguments = [
            '--dump-sql'  => true,
            '--env'  => "dev"
        ];

        $greetInput = new ArrayInput($arguments);
        return $command->run($greetInput, $output);
    }
}

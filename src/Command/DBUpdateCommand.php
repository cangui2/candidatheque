<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class DBUpdateCommand extends Command
{
    protected static $defaultName = 'db:update';

    protected function configure()
    {
        $this
            ->setDescription('Mets à jour l\'état de la base de données.');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $command = $this->getApplication()->find('doctrine:schema:update');

        $arguments = [
            '--force'  => true,
            '--env'  => "dev",
        ];

        $greetInput = new ArrayInput($arguments);
        return $command->run($greetInput, $output);
    }
}

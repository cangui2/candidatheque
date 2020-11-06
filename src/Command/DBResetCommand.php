<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class DBResetCommand extends Command
{
    protected static $defaultName = 'db:reset';

    protected function configure()
    {
        $this
            ->setDescription('Réinitialise la base de données et insère le jeux de test admin.');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $command = $this->getApplication()->find('doctrine:database:drop');
        $arguments = new ArrayInput(['--force'  => true, '--env'  => "dev" ]);
        $command->run($arguments, $output);

        $command = $this->getApplication()->find('doctrine:database:create');
        $arguments = new ArrayInput(['--env'  => "dev" ]);
        $command->run($arguments, $output);

        $command = $this->getApplication()->find('doctrine:schema:update');
        $arguments = new ArrayInput(['--force'  => true, '--env'  => "dev" ]);
        $command->run($arguments, $output);

        $command = $this->getApplication()->find('doctrine:fixture:load');
        $arguments = new ArrayInput([ '--env'  => "dev" , '--no-interaction'  => true, "--group" => ["base"]]);

        return $command->run($arguments, $output);


    }
}

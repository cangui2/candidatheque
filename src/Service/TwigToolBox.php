<?php

namespace App\Service;

use App\Entity\Agence;
use App\Entity\Contrat;
use App\Entity\Releve;
use Doctrine\ORM\EntityManagerInterface;
use Twig\TwigFilter;
use Twig\TwigFunction;
use Twig\Extension\AbstractExtension;
use Symfony\Component\HttpFoundation\RequestStack;

class TwigToolBox extends AbstractExtension
{
    private $requestStack;
    private $em;

    public function __construct(RequestStack $requestStack, EntityManagerInterface $em)
    {
        $this->requestStack = $requestStack;
        $this->em = $em;
    }

    public function getFunctions()
    {
        return [
            new TwigFunction('activeMenu', [$this, 'activeMenu']),
        ];
    }

    /**
     * @param string $routesToCheck
     * @return string
     */
    public function activeMenu(string $routesToCheck)
    {
        $currentRoute = $this->requestStack->getCurrentRequest()->get('_route');

        if ($currentRoute==$routesToCheck) {
            return "font-weight-bold actif";
        }
        return "";
    }


}
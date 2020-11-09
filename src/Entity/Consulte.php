<?php

namespace App\Entity;

use App\Repository\ConsulteRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ConsulteRepository::class)
 */
class Consulte
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=CV::class, inversedBy="consultes")
     */
    private $cv;

    /**
     * @ORM\ManyToOne(targetEntity=Entreprise::class, inversedBy="consultes")
     */
    private $entreprise;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCv(): ?CV
    {
        return $this->cv;
    }

    public function setCv(?CV $cv): self
    {
        $this->cv = $cv;

        return $this;
    }

    public function getEntreprise(): ?Entreprise
    {
        return $this->entreprise;
    }

    public function setEntreprise(?Entreprise $entreprise): self
    {
        $this->entreprise = $entreprise;

        return $this;
    }
}

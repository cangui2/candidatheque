<?php

namespace App\Entity;

use App\Repository\MobiliteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MobiliteRepository::class)
 */
class Mobilite
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;



    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $type;

    /**
     * @ORM\ManyToOne(targetEntity=Rome::class, inversedBy="mobilitesCibles")
     */
    private $romeSource;

    /**
     * @ORM\ManyToOne(targetEntity=Rome::class, inversedBy="mobilitesSources")
     */
    private $romeCible;

    /**
     * @ORM\ManyToOne(targetEntity=Metier::class, inversedBy="mobilitesSources")
     */
    private $metierCible;

    /**
     * @ORM\ManyToOne(targetEntity=Metier::class, inversedBy="mobilitesCibles")
     */
    private $metierSource;

    public function __construct()
    {

    }

    public function getId(): ?int
    {
        return $this->id;
    }



    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getRomeSource(): ?Rome
    {
        return $this->romeSource;
    }

    public function setRomeSource(?Rome $romeSource): self
    {
        $this->romeSource = $romeSource;

        return $this;
    }

    public function getRomeCible(): ?Rome
    {
        return $this->romeCible;
    }

    public function setRomeCible(?Rome $romeCible): self
    {
        $this->romeCible = $romeCible;

        return $this;
    }

    public function getMetierSource(): ?Metier
    {
        return $this->metierSource;
    }

    public function setMetierSource(?Metier $metierSource): self
    {
        $this->metierSource = $metierSource;

        return $this;
    }

    public function getMetierCible(): ?Metier
    {
        return $this->metierCible;
    }

    public function setMetierCible(?Metier $metierCible): self
    {
        $this->metierCible = $metierCible;

        return $this;
    }
}

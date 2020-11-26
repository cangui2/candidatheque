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
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToMany(targetEntity=Rome::class, inversedBy="mobilites1")
     */
    private $romeSource;

    /**
     * @ORM\ManyToMany(targetEntity=Rome::class, inversedBy="mobilites2")
     */
    private $romeCible;

    /**
     * @ORM\ManyToMany(targetEntity=Metier::class, inversedBy="mobilites1")
     */
    private $metierSource;

    /**
     * @ORM\ManyToMany(targetEntity=Metier::class, inversedBy="mobilites2")
     */
    private $metierCible;

    public function __construct()
    {
        $this->romeSource = new ArrayCollection();
        $this->romeCible = new ArrayCollection();
        $this->metierSource = new ArrayCollection();
        $this->metierCible = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|Rome[]
     */
    public function getRomeSource(): Collection
    {
        return $this->romeSource;
    }

    public function addRomeSource(Rome $romeSource): self
    {
        if (!$this->romeSource->contains($romeSource)) {
            $this->romeSource[] = $romeSource;
        }

        return $this;
    }

    public function removeRomeSource(Rome $romeSource): self
    {
        $this->romeSource->removeElement($romeSource);

        return $this;
    }

    /**
     * @return Collection|Rome[]
     */
    public function getRomeCible(): Collection
    {
        return $this->romeCible;
    }

    public function addRomeCible(Rome $romeCible): self
    {
        if (!$this->romeCible->contains($romeCible)) {
            $this->romeCible[] = $romeCible;
        }

        return $this;
    }

    public function removeRomeCible(Rome $romeCible): self
    {
        $this->romeCible->removeElement($romeCible);

        return $this;
    }

    /**
     * @return Collection|Metier[]
     */
    public function getMetierSource(): Collection
    {
        return $this->metierSource;
    }

    public function addMetierSource(Metier $metierSource): self
    {
        if (!$this->metierSource->contains($metierSource)) {
            $this->metierSource[] = $metierSource;
        }

        return $this;
    }

    public function removeMetierSource(Metier $metierSource): self
    {
        $this->metierSource->removeElement($metierSource);

        return $this;
    }

    /**
     * @return Collection|Metier[]
     */
    public function getMetierCible(): Collection
    {
        return $this->metierCible;
    }

    public function addMetierCible(Metier $metierCible): self
    {
        if (!$this->metierCible->contains($metierCible)) {
            $this->metierCible[] = $metierCible;
        }

        return $this;
    }

    public function removeMetierCible(Metier $metierCible): self
    {
        $this->metierCible->removeElement($metierCible);

        return $this;
    }
}

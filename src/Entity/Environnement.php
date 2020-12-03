<?php

namespace App\Entity;

use App\Repository\EnvironnementRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EnvironnementRepository::class)
 */
class Environnement
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $libelle;

    /**
     * @ORM\ManyToMany(targetEntity=Rome::class, inversedBy="environnements")
     */
    private $romes;

    public function __construct($code, $libelle)
    {
        $this->id=$code;
        $this->libelle=$libelle;
        $this->rome = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(?string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * @return Collection|Rome[]
     */
    public function getRomes(): Collection
    {
        return $this->romes;
    }

    public function addRome(Rome $rome): self
    {
        if (!$this->romes->contains($rome)) {
            $this->romes[] = $rome;
        }

        return $this;
    }

    public function removeRome(Rome $rome): self
    {
        $this->romes->removeElement($rome);

        return $this;
    }
}

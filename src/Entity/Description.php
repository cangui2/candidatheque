<?php

namespace App\Entity;

use App\Repository\DescriptionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=DescriptionRepository::class)
 */
class Description
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $libelle;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $idType;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $libelleType;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $position;

    /**
     * @ORM\ManyToMany(targetEntity=Rome::class, inversedBy="descriptions")
     */
    private $rome;



    public function __construct()
    {
        $this->rome = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getIdType(): ?int
    {
        return $this->idType;
    }

    public function setIdType(?int $idType): self
    {
        $this->idType = $idType;

        return $this;
    }

    public function getLibelleType(): ?string
    {
        return $this->libelleType;
    }

    public function setLibelleType(?string $libelleType): self
    {
        $this->libelleType = $libelleType;

        return $this;
    }

    public function getPosition(): ?int
    {
        return $this->position;
    }

    public function setPosition(?int $position): self
    {
        $this->position = $position;

        return $this;
    }

    /**
     * @return Collection|Rome[]
     */
    public function getRome(): Collection
    {
        return $this->rome;
    }

    public function addRome(Rome $rome): self
    {
        if (!$this->rome->contains($rome)) {
            $this->rome[] = $rome;
        }

        return $this;
    }

    public function removeRome(Rome $rome): self
    {
        $this->rome->removeElement($rome);

        return $this;
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
}

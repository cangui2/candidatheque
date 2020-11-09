<?php

namespace App\Entity;

use App\Repository\PostuleRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PostuleRepository::class)
 */
class Postule
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateSelection;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $rang;

    /**
     * @ORM\ManyToOne(targetEntity=Candidat::class, inversedBy="postules")
     */
    private $candidat;

    /**
     * @ORM\ManyToOne(targetEntity=Offre::class, inversedBy="postules")
     */
    private $offre;

    /**
     * @ORM\ManyToOne(targetEntity=Entreprise::class, inversedBy="postules")
     */
    private $agence;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateSelection(): ?\DateTimeInterface
    {
        return $this->dateSelection;
    }

    public function setDateSelection(?\DateTimeInterface $dateSelection): self
    {
        $this->dateSelection = $dateSelection;

        return $this;
    }

    public function getRang(): ?int
    {
        return $this->rang;
    }

    public function setRang(?int $rang): self
    {
        $this->rang = $rang;

        return $this;
    }

    public function getCandidat(): ?Candidat
    {
        return $this->candidat;
    }

    public function setCandidat(?Candidat $candidat): self
    {
        $this->candidat = $candidat;

        return $this;
    }

    public function getOffre(): ?Offre
    {
        return $this->offre;
    }

    public function setOffre(?Offre $offre): self
    {
        $this->offre = $offre;

        return $this;
    }

    public function getAgence(): ?Entreprise
    {
        return $this->agence;
    }

    public function setAgence(?Entreprise $agence): self
    {
        $this->agence = $agence;

        return $this;
    }
}

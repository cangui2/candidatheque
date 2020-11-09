<?php

namespace App\Entity;

use App\Repository\CVRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CVRepository::class)
 */
class CV
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $json = [];

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $pdf;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $prixPrestation;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateModification;

    /**
     * @ORM\ManyToOne(targetEntity=Metier::class, inversedBy="CVs")
     */
    private $metier;

    /**
     * @ORM\ManyToOne(targetEntity=Candidat::class, inversedBy="CVs")
     */
    private $candidat;

    /**
     * @ORM\ManyToMany(targetEntity=Entreprise::class, mappedBy="favoris")
     */
    private $favoris;

    /**
     * @ORM\OneToMany(targetEntity=Consulte::class, mappedBy="cv")
     */
    private $consultes;

    public function __construct()
    {
        $this->favoris = new ArrayCollection();
        $this->consultes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getJson(): ?array
    {
        return $this->json;
    }

    public function setJson(?array $json): self
    {
        $this->json = $json;

        return $this;
    }

    public function getPdf(): ?string
    {
        return $this->pdf;
    }

    public function setPdf(?string $pdf): self
    {
        $this->pdf = $pdf;

        return $this;
    }

    public function getPrixPrestation(): ?float
    {
        return $this->prixPrestation;
    }

    public function setPrixPrestation(?float $prixPrestation): self
    {
        $this->prixPrestation = $prixPrestation;

        return $this;
    }

    public function getDateModification(): ?\DateTimeInterface
    {
        return $this->dateModification;
    }

    public function setDateModification(?\DateTimeInterface $dateModification): self
    {
        $this->dateModification = $dateModification;

        return $this;
    }

    public function getMetier(): ?Metier
    {
        return $this->metier;
    }

    public function setMetier(?Metier $metier): self
    {
        $this->metier = $metier;

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

    /**
     * @return Collection|Entreprise[]
     */
    public function getFavoris(): Collection
    {
        return $this->favoris;
    }

    public function addFavori(Entreprise $favori): self
    {
        if (!$this->favoris->contains($favori)) {
            $this->favoris[] = $favori;
            $favori->addFavori($this);
        }

        return $this;
    }

    public function removeFavori(Entreprise $favori): self
    {
        if ($this->favoris->removeElement($favori)) {
            $favori->removeFavori($this);
        }

        return $this;
    }

    /**
     * @return Collection|Consulte[]
     */
    public function getConsultes(): Collection
    {
        return $this->consultes;
    }

    public function addConsulte(Consulte $consulte): self
    {
        if (!$this->consultes->contains($consulte)) {
            $this->consultes[] = $consulte;
            $consulte->setCv($this);
        }

        return $this;
    }

    public function removeConsulte(Consulte $consulte): self
    {
        if ($this->consultes->removeElement($consulte)) {
            // set the owning side to null (unless already changed)
            if ($consulte->getCv() === $this) {
                $consulte->setCv(null);
            }
        }

        return $this;
    }
}

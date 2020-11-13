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

    /**
     * @ORM\OneToMany(targetEntity=Experience::class, mappedBy="cv")
     */
    private $experiences;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $titre;

    /**
     * @ORM\OneToMany(targetEntity=Profil::class, mappedBy="cv")
     */
    private $profils;

    /**
     * @ORM\OneToMany(targetEntity=Formation::class, mappedBy="cv")
     */
    private $formations;

    /**
     * @ORM\OneToMany(targetEntity=Langue::class, mappedBy="cv")
     */
    private $langues;

    public function __construct()
    {
        $this->favoris = new ArrayCollection();
        $this->consultes = new ArrayCollection();
        $this->experiences = new ArrayCollection();
        $this->profils = new ArrayCollection();
        $this->formations = new ArrayCollection();
        $this->langues = new ArrayCollection();
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

    /**
     * @return Collection|Experience[]
     */
    public function getExperiences(): Collection
    {
        return $this->experiences;
    }

    public function addExperience(Experience $experience): self
    {
        if (!$this->experiences->contains($experience)) {
            $this->experiences[] = $experience;
            $experience->setCv($this);
        }

        return $this;
    }

    public function removeExperience(Experience $experience): self
    {
        if ($this->experiences->removeElement($experience)) {
            // set the owning side to null (unless already changed)
            if ($experience->getCv() === $this) {
                $experience->setCv(null);
            }
        }

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(?string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * @return Collection|Profil[]
     */
    public function getProfils(): Collection
    {
        return $this->profils;
    }

    public function addProfil(Profil $profil): self
    {
        if (!$this->profils->contains($profil)) {
            $this->profils[] = $profil;
            $profil->setCv($this);
        }

        return $this;
    }

    public function removeProfil(Profil $profil): self
    {
        if ($this->profils->removeElement($profil)) {
            // set the owning side to null (unless already changed)
            if ($profil->getCv() === $this) {
                $profil->setCv(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Formation[]
     */
    public function getFormations(): Collection
    {
        return $this->formations;
    }

    public function addFormation(Formation $formation): self
    {
        if (!$this->formations->contains($formation)) {
            $this->formations[] = $formation;
            $formation->setCv($this);
        }

        return $this;
    }

    public function removeFormation(Formation $formation): self
    {
        if ($this->formations->removeElement($formation)) {
            // set the owning side to null (unless already changed)
            if ($formation->getCv() === $this) {
                $formation->setCv(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Langue[]
     */
    public function getLangues(): Collection
    {
        return $this->langues;
    }

    public function addLangue(Langue $langue): self
    {
        if (!$this->langues->contains($langue)) {
            $this->langues[] = $langue;
            $langue->setCv($this);
        }

        return $this;
    }

    public function removeLangue(Langue $langue): self
    {
        if ($this->langues->removeElement($langue)) {
            // set the owning side to null (unless already changed)
            if ($langue->getCv() === $this) {
                $langue->setCv(null);
            }
        }

        return $this;
    }
}

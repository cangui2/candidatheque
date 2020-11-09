<?php

namespace App\Entity;

use App\Repository\CandidatRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CandidatRepository::class)
 */
class Candidat
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
    private $nom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $prenom;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $photo;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adresse;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $codePostal;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ville;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $mobilite;

    /**
     * @ORM\OneToOne(targetEntity=User::class, mappedBy="candidat")
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $telephone;

    /**
     * @ORM\OneToMany(targetEntity=CV::class, mappedBy="candidat")
     */
    private $CVs;

    /**
     * @ORM\OneToMany(targetEntity=Postule::class, mappedBy="candidat")
     */
    private $postules;

    /**
     * @ORM\ManyToOne(targetEntity=Entreprise::class, inversedBy="candidats")
     */
    private $agence;

    public function __construct()
    {
        $this->CVs = new ArrayCollection();
        $this->postules = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(?string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(?string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getCodePostal(): ?string
    {
        return $this->codePostal;
    }

    public function setCodePostal(string $codePostal): self
    {
        $this->codePostal = $codePostal;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getMobilite(): ?bool
    {
        return $this->mobilite;
    }

    public function setMobilite(?bool $mobilite): self
    {
        $this->mobilite = $mobilite;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        // set (or unset) the owning side of the relation if necessary
        $newCandidat = null === $user ? null : $this;
        if ($user->getCandidat() !== $newCandidat) {
            $user->setCandidat($newCandidat);
        }

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(?string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function __toString()
    {
        return $this->nom . " " . $this->prenom;
    }

    /**
     * @return Collection|CV[]
     */
    public function getCVs(): Collection
    {
        return $this->CVs;
    }

    public function addCV(CV $cV): self
    {
        if (!$this->CVs->contains($cV)) {
            $this->CVs[] = $cV;
            $cV->setCandidat($this);
        }

        return $this;
    }

    public function removeCV(CV $cV): self
    {
        if ($this->CVs->removeElement($cV)) {
            // set the owning side to null (unless already changed)
            if ($cV->getCandidat() === $this) {
                $cV->setCandidat(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Postule[]
     */
    public function getPostules(): Collection
    {
        return $this->postules;
    }

    public function addPostule(Postule $postule): self
    {
        if (!$this->postules->contains($postule)) {
            $this->postules[] = $postule;
            $postule->setCandidat($this);
        }

        return $this;
    }

    public function removePostule(Postule $postule): self
    {
        if ($this->postules->removeElement($postule)) {
            // set the owning side to null (unless already changed)
            if ($postule->getCandidat() === $this) {
                $postule->setCandidat(null);
            }
        }

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

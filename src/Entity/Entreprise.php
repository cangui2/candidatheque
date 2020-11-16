<?php

namespace App\Entity;

use App\Repository\EntrepriseRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EntrepriseRepository::class)
 */
class Entreprise
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
    private $raisonSociale;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $siret;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adresse1;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $adresse2;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $codePostal;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $telephone;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ville;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $ape;

    /**
     * @ORM\OneToMany(targetEntity=Recruteur::class, mappedBy="entreprise")
     */
    private $recruteurs;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $role;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $email;

    /**
     * @ORM\OneToMany(targetEntity=Postule::class, mappedBy="agence")
     */
    private $postules;



    /**
     * Liaison entre CV et Entreprise représente les CVs mis en favoris par l'entreprise (table de liaison entreprise_cv)
     * @ORM\ManyToMany(targetEntity=CV::class, inversedBy="favoris")
     */
    private $favoris;

    /**
     * @ORM\OneToMany(targetEntity=Consulte::class, mappedBy="entreprise")
     */
    private $consultes;

    public function __construct()
    {
        $this->recruteurs = new ArrayCollection();
        $this->postules = new ArrayCollection();
        $this->favoris = new ArrayCollection();
        $this->consultes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRaisonSociale(): ?string
    {
        return $this->raisonSociale;
    }

    public function setRaisonSociale(?string $raisonSociale): self
    {
        $this->raisonSociale = $raisonSociale;

        return $this;
    }

    public function getSiret(): ?string
    {
        return $this->siret;
    }

    public function setSiret(?string $siret): self
    {
        $this->siret = $siret;

        return $this;
    }

    public function getAdresse1(): ?string
    {
        return $this->adresse1;
    }

    public function setAdresse1(?string $adresse1): self
    {
        $this->adresse1 = $adresse1;

        return $this;
    }

    public function getAdresse2(): ?string
    {
        return $this->adresse2;
    }

    public function setAdresse2(?string $adresse2): self
    {
        $this->adresse2 = $adresse2;

        return $this;
    }

    public function getCodePostal(): ?string
    {
        return $this->codePostal;
    }

    public function setCodePostal(?string $codePostal): self
    {
        $this->codePostal = $codePostal;

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

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(?string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getApe(): ?string
    {
        return $this->ape;
    }

    public function setApe(?string $ape): self
    {
        $this->ape = $ape;

        return $this;
    }

    /**
     * @return Collection|Recruteur[]
     */
    public function getRecruteurs(): Collection
    {
        return $this->recruteurs;
    }

    public function addRecruteur(Recruteur $recruteur): self
    {
        if (!$this->recruteurs->contains($recruteur)) {
            $this->recruteurs[] = $recruteur;
            $recruteur->setEntreprise($this);
        }

        return $this;
    }

    public function removeRecruteur(Recruteur $recruteur): self
    {
        if ($this->recruteurs->removeElement($recruteur)) {
            // set the owning side to null (unless already changed)
            if ($recruteur->getEntreprise() === $this) {
                $recruteur->setEntreprise(null);
            }
        }

        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(?string $role): self
    {
        $this->role = $role;

        return $this;
    }

    public function __toString()
    {
        return $this->raisonSociale;
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
            $postule->setAgence($this);
        }

        return $this;
    }

    public function removePostule(Postule $postule): self
    {
        if ($this->postules->removeElement($postule)) {
            // set the owning side to null (unless already changed)
            if ($postule->getAgence() === $this) {
                $postule->setAgence(null);
            }
        }

        return $this;
    }



    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return Collection|CV[]
     */
    public function getFavoris(): Collection
    {
        return $this->favoris;
    }

    public function addFavori(CV $favori): self
    {
        if (!$this->favoris->contains($favori)) {
            $this->favoris[] = $favori;
        }

        return $this;
    }

    public function removeFavori(CV $favori): self
    {
        $this->favoris->removeElement($favori);

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
            $consulte->setEntreprise($this);
        }

        return $this;
    }

    public function removeConsulte(Consulte $consulte): self
    {
        if ($this->consultes->removeElement($consulte)) {
            // set the owning side to null (unless already changed)
            if ($consulte->getEntreprise() === $this) {
                $consulte->setEntreprise(null);
            }
        }

        return $this;
    }
}

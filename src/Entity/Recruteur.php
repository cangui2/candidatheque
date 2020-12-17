<?php

namespace App\Entity;

use App\Repository\RecruteurRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ORM\Entity(repositoryClass=RecruteurRepository::class)
 * @ApiResource(
 *     collectionOperations={
 *                          "get"={},
 *
 *                          },
 *     itemOperations={
 *                          "get"={},
 *                          },
 *     normalizationContext={"groups"={"read"}},
 *     denormalizationContext={"groups"={"write"}},
 *     attributes={
 *                  "force_eager"=false
 *
 *                 }
 * )
 * @ApiFilter(
 *       SearchFilter::class,
 *       properties={
 *              "id": "partial"
 *
 *                  }
 *     )
 */
class Recruteur
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("read")
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
     * @ORM\OneToOne(targetEntity=User::class, mappedBy="recruteur")
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $telephone;

    /**
     * @ORM\ManyToOne(targetEntity=Entreprise::class, inversedBy="recruteurs")
     * @ORM\JoinColumn(name="id_entreprise", referencedColumnName="id")
     */
    private $entreprise;

    /**
     * @ORM\OneToMany(targetEntity=Offre::class, mappedBy="recruteur")
     */
    private $offres;

    /**
     * Relation est déposé par
     * @ORM\OneToMany(targetEntity=CV::class, mappedBy="deposePar")
     */
    private $candidats;

    public function __construct()
    {
        $this->offres = new ArrayCollection();
        $this->candidats = new ArrayCollection();

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        // set (or unset) the owning side of the relation if necessary
        $newRecruteur = null === $user ? null : $this;
        if ($user->getRecruteur() !== $newRecruteur) {
            $user->setRecruteur($newRecruteur);
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

    public function getEntreprise(): ?Entreprise
    {
        return $this->entreprise;
    }

    public function setEntreprise(?Entreprise $entreprise): self
    {
        $this->entreprise = $entreprise;

        return $this;
    }

    public function __toString()
    {
        return $this->nom . " " . $this->prenom;
    }

    /**
     * @return Collection|Offre[]
     */
    public function getOffres(): Collection
    {
        return $this->offres;
    }

    public function addOffre(Offre $offre): self
    {
        if (!$this->offres->contains($offre)) {
            $this->offres[] = $offre;
            $offre->setRecruteur($this);
        }

        return $this;
    }

    public function removeOffre(Offre $offre): self
    {
        if ($this->offres->removeElement($offre)) {
            // set the owning side to null (unless already changed)
            if ($offre->getRecruteur() === $this) {
                $offre->setRecruteur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Candidat[]
     */
    public function getCandidats(): Collection
    {
        return $this->candidats;
    }

    public function addCandidat(Candidat $candidat): self
    {
        if (!$this->candidats->contains($candidat)) {
            $this->candidats[] = $candidat;
            $candidat->setDeposePar($this);
        }

        return $this;
    }

    public function removeCandidat(Candidat $candidat): self
    {
        if ($this->candidats->removeElement($candidat)) {
            // set the owning side to null (unless already changed)
            if ($candidat->getDeposePar() === $this) {
                $candidat->setDeposePar(null);
            }
        }

        return $this;
    }
}

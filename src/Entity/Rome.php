<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\RomeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RomeRepository::class)
 * @ApiResource(
 *     collectionOperations={
 *                          "get"={},

 *                          },
 *     itemOperations={
 *                          "get"={},
 *                          },
 *     normalizationContext={"groups"={"read"}},
 *     denormalizationContext={"groups"={"write"}},
 *     attributes={
 *                  "force_eager"=false

 *                 }
 * )
 */
class Rome
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $code;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $libelle;

    /**
     * @ORM\OneToMany(targetEntity=Metier::class, mappedBy="rome")
     */
    private $metiers;

    /**
     * @ORM\ManyToMany(targetEntity=Environnement::class, mappedBy="rome")
     */
    private $environnements;

    /**
     * @ORM\ManyToMany(targetEntity=Competence::class, mappedBy="rome")
     */
    private $competences;

    /**
     * @ORM\ManyToMany(targetEntity=Description::class, mappedBy="rome")
     */
    private $descriptions;

    /**
     * @ORM\ManyToMany(targetEntity=Mobilite::class, mappedBy="romeSource")
     */
    private $mobilites1;

    /**
     * @ORM\ManyToMany(targetEntity=Mobilite::class, mappedBy="romeCible")
     */
    private $mobilites2;



    public function __construct($ogr, $code, $libelle)
    {
        $this->metiers = new ArrayCollection();
        $this->id = $ogr;
        $this->code = $code;
        $this->libelle = $libelle;
        $this->environnements = new ArrayCollection();
        $this->competences = new ArrayCollection();
        $this->descriptions = new ArrayCollection();
        $this->mobilites1 = new ArrayCollection();
        $this->mobilites2 = new ArrayCollection();

    }

    public function getId(): ?string
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(?string $code): self
    {
        $this->code = $code;

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

    /**
     * @return Collection|Metier[]
     */
    public function getMetiers(): Collection
    {
        return $this->metiers;
    }

    public function addMetier(Metier $metier): self
    {
        if (!$this->metiers->contains($metier)) {
            $this->metiers[] = $metier;
            $metier->setRome($this);
        }

        return $this;
    }

    public function removeMetier(Metier $metier): self
    {
        if ($this->metiers->removeElement($metier)) {
            // set the owning side to null (unless already changed)
            if ($metier->getRome() === $this) {
                $metier->setRome(null);
            }
        }

        return $this;
    }
    public function __toString(){
        return $this->getCode();
    }

    /**
     * @return Collection|Environnement[]
     */
    public function getEnvironnements(): Collection
    {
        return $this->environnements;
    }

    public function addEnvironnement(Environnement $environnement): self
    {
        if (!$this->environnements->contains($environnement)) {
            $this->environnements[] = $environnement;
            $environnement->addRome($this);
        }

        return $this;
    }

    public function removeEnvironnement(Environnement $environnement): self
    {
        if ($this->environnements->removeElement($environnement)) {
            $environnement->removeRome($this);
        }

        return $this;
    }

    /**
     * @return Collection|Competence[]
     */
    public function getCompetences(): Collection
    {
        return $this->competences;
    }

    public function addCompetence(Competence $competence): self
    {
        if (!$this->competences->contains($competence)) {
            $this->competences[] = $competence;
            $competence->setRome($this);
        }

        return $this;
    }

    public function removeCompetence(Competence $competence): self
    {
        if ($this->competences->removeElement($competence)) {
            // set the owning side to null (unless already changed)
            if ($competence->getRome() === $this) {
                $competence->setRome(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Description[]
     */
    public function getDescriptions(): Collection
    {
        return $this->descriptions;
    }

    public function addDescription(Description $description): self
    {
        if (!$this->descriptions->contains($description)) {
            $this->descriptions[] = $description;
            $description->addRome($this);
        }

        return $this;
    }

    public function removeDescription(Description $description): self
    {
        if ($this->descriptions->removeElement($description)) {
            $description->removeRome($this);
        }

        return $this;
    }

    /**
     * @return Collection|Mobilite[]
     */
    public function getMobilites1(): Collection
    {
        return $this->mobilites1;
    }

    public function addMobilites1(Mobilite $mobilites1): self
    {
        if (!$this->mobilites1->contains($mobilites1)) {
            $this->mobilites1[] = $mobilites1;
            $mobilites1->addRomeSource($this);
        }

        return $this;
    }

    public function removeMobilites1(Mobilite $mobilites1): self
    {
        if ($this->mobilites1->removeElement($mobilites1)) {
            $mobilites1->removeRomeSource($this);
        }

        return $this;
    }

    /**
     * @return Collection|Mobilite[]
     */
    public function getMobilites2(): Collection
    {
        return $this->mobilites2;
    }

    public function addMobilites2(Mobilite $mobilites2): self
    {
        if (!$this->mobilites2->contains($mobilites2)) {
            $this->mobilites2[] = $mobilites2;
            $mobilites2->addRomeCible($this);
        }

        return $this;
    }

    public function removeMobilites2(Mobilite $mobilites2): self
    {
        if ($this->mobilites2->removeElement($mobilites2)) {
            $mobilites2->removeRomeCible($this);
        }

        return $this;
    }



}

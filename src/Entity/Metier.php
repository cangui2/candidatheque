<?php

namespace App\Entity;

use App\Repository\MetierRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MetierRepository::class)
 */
class Metier
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
    private $libelle;

    /**
     * @ORM\ManyToOne(targetEntity=Rome::class, inversedBy="metiers")
     */
    private $rome;

    /**
     * @ORM\OneToMany(targetEntity=CV::class, mappedBy="metier")
     */
    private $CVs;

    /**
     * @ORM\OneToMany(targetEntity=Offre::class, mappedBy="metier")
     */
    private $offres;

    public function __construct()
    {
        $this->CVs = new ArrayCollection();
        $this->offres = new ArrayCollection();
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

    public function getRome(): ?Rome
    {
        return $this->rome;
    }

    public function setRome(?Rome $rome): self
    {
        $this->rome = $rome;

        return $this;
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
            $cV->setMetier($this);
        }

        return $this;
    }

    public function removeCV(CV $cV): self
    {
        if ($this->CVs->removeElement($cV)) {
            // set the owning side to null (unless already changed)
            if ($cV->getMetier() === $this) {
                $cV->setMetier(null);
            }
        }

        return $this;
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
            $offre->setMetier($this);
        }

        return $this;
    }

    public function removeOffre(Offre $offre): self
    {
        if ($this->offres->removeElement($offre)) {
            // set the owning side to null (unless already changed)
            if ($offre->getMetier() === $this) {
                $offre->setMetier(null);
            }
        }

        return $this;
    }
}

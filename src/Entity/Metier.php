<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MetierRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
 * @ORM\Entity(repositoryClass=MetierRepository::class)
 * @ORM\Table(indexes={@ORM\Index(name="search_idx1", columns={"libelle"})})
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
 * @ApiFilter(
 *       SearchFilter::class,
 *       properties={
 *              "libelle": "partial",
 *              "rome": "exact"
 *
 *                  })
 *
 * )
 */
class Metier
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"read"})
     */
    private $libelle;

    /**
     * @ORM\OneToMany(targetEntity=CV::class, mappedBy="metier")
     */
    private $CVs;

    /**
     * @ORM\OneToMany(targetEntity=Offre::class, mappedBy="metier")
     */
    private $offres;

    /**
     * @ORM\ManyToOne(targetEntity=Rome::class, inversedBy="metiers")
     * @Groups({"read"})
     */
    private $rome;


    /**
     * @ORM\ManyToMany(targetEntity=Mobilite::class, mappedBy="metierSource")
     */
    private $mobilites1;

    /**
     * @ORM\ManyToMany(targetEntity=Mobilite::class, mappedBy="metierCible")
     */
    private $mobilites2;


    public function __construct($ogr, $libelle)
    {
        $this->CVs = new ArrayCollection();
        $this->offres = new ArrayCollection();
        $this->id=$ogr;
        $this->libelle = $libelle;
        $this->mobilites1 = new ArrayCollection();
        $this->mobilites2 = new ArrayCollection();
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

    public function getRome(): ?Rome
    {
        return $this->rome;
    }

    public function setRome(?Rome $rome): self
    {
        $this->rome = $rome;

        return $this;
    }


    public function __toString()
    {
        return $this->libelle;
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
            $mobilites1->addMetierSource($this);
        }

        return $this;
    }

    public function removeMobilites1(Mobilite $mobilites1): self
    {
        if ($this->mobilites1->removeElement($mobilites1)) {
            $mobilites1->removeMetierSource($this);
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
            $mobilites2->addMetierCible($this);
        }

        return $this;
    }

    public function removeMobilites2(Mobilite $mobilites2): self
    {
        if ($this->mobilites2->removeElement($mobilites2)) {
            $mobilites2->removeMetierCible($this);
        }

        return $this;
    }


}

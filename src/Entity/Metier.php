<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiProperty;
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
 *     normalizationContext={"groups"={"mt:read"}},
 *     denormalizationContext={"groups"={"write"}},
 *     attributes={
 *                  "force_eager"=false

 *                 }
 * )
 * @ApiFilter(
 *       SearchFilter::class,
 *       properties={
 *              "libelle": "partial",
 *              "rome.code": "exact"
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
     * @Groups({"mt:read", "off:read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"mt:read", "rm:read", "read"})
     */
    private $libelle;

    /**
     * @ORM\OneToMany(targetEntity=CV::class, mappedBy="metier")
     * @Groups("mt:read")
     */
    private $CVs;

    /**
     * @ORM\OneToMany(targetEntity=Offre::class, mappedBy="metier")
     * @Groups("mt:read")
     */
    private $offres;

    /**
     * @ORM\ManyToOne(targetEntity=Rome::class, inversedBy="metiers")
     * @Groups({"mt:read"})
     */
    private $rome;

    /**
     * @ORM\OneToMany(targetEntity=Mobilite::class, mappedBy="metierCible")
     */
    private $mobilitesSources;

    /**
     * @ORM\OneToMany(targetEntity=Mobilite::class, mappedBy="metierSource")
     */
    private $mobilitesCibles;





    public function __construct($ogr, $libelle)
    {
        $this->CVs = new ArrayCollection();
        $this->offres = new ArrayCollection();
        $this->id=$ogr;
        $this->libelle = $libelle;
        $this->mobilitesSources = new ArrayCollection();
        $this->mobilitesCibles = new ArrayCollection();

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
    public function getMobilitesSources(): Collection
    {
        return $this->mobilitesSources;
    }

    public function addMobilitesSource(Mobilite $mobilitesSource): self
    {
        if (!$this->mobilitesSources->contains($mobilitesSource)) {
            $this->mobilitesSources[] = $mobilitesSource;
            $mobilitesSource->setMetierSource($this);
        }

        return $this;
    }

    public function removeMobilitesSource(Mobilite $mobilitesSource): self
    {
        if ($this->mobilitesSources->removeElement($mobilitesSource)) {
            // set the owning side to null (unless already changed)
            if ($mobilitesSource->getMetierSource() === $this) {
                $mobilitesSource->setMetierSource(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Mobilite[]
     */
    public function getMobilitesCibles(): Collection
    {
        return $this->mobilitesCibles;
    }

    public function addMobilitesCible(Mobilite $mobilitesCible): self
    {
        if (!$this->mobilitesCibles->contains($mobilitesCible)) {
            $this->mobilitesCibles[] = $mobilitesCible;
            $mobilitesCible->setMetierCible($this);
        }

        return $this;
    }

    public function removeMobilitesCible(Mobilite $mobilitesCible): self
    {
        if ($this->mobilitesCibles->removeElement($mobilitesCible)) {
            // set the owning side to null (unless already changed)
            if ($mobilitesCible->getMetierCible() === $this) {
                $mobilitesCible->setMetierCible(null);
            }
        }

        return $this;
    }




}

<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\RegionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Annotation\ApiFilter;


/**
 * @ORM\Entity(repositoryClass=RegionRepository::class)
 * @ORM\Table(indexes={@ORM\Index(name="region_nom_idx", columns={"nom"})})
 * @ApiResource(
 *     collectionOperations={
 *                          "get"={},

 *                          },
 *     itemOperations={
 *                          "get"={},
 *                          },
 *     normalizationContext={"groups"={"rg:read"}},
 *     denormalizationContext={"groups"={"write"}},
 *     attributes={
 *                  "force_eager"=false

 *                 }
 * )
 * @ApiFilter(
 *       SearchFilter::class,
 *       properties={
 *              "nom": "partial",
 *
 *                  }
 *     )
 */
class Region
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @Groups("read")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"rg:read", "dept:read"})
     */
    private $nom;

    /**
     * @ORM\OneToMany(targetEntity=Departement::class, mappedBy="region")
     * @Groups("rg:read")
     * @ApiProperty(readableLink=false, writableLink=false)
     */
    private $departements;

    /**
     * @ORM\OneToMany(targetEntity=Offre::class, mappedBy="region")
     * @Groups("rg:read")
     * @ApiProperty (readableLink=false, writableLink=false)
     */
    private $offres;

    public function __construct($code, $nom)
    {
        $this->id = $code;
        $this->nom = $nom;
        $this->departements = new ArrayCollection();
        $this->offres = new ArrayCollection();
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

    /**
     * @return Collection|Departement[]
     */
    public function getDepartements(): Collection
    {
        return $this->departements;
    }

    public function addDepartement(Departement $departement): self
    {
        if (!$this->departements->contains($departement)) {
            $this->departements[] = $departement;
            $departement->setRegion($this);
        }

        return $this;
    }

    public function removeDepartement(Departement $departement): self
    {
        if ($this->departements->removeElement($departement)) {
            // set the owning side to null (unless already changed)
            if ($departement->getRegion() === $this) {
                $departement->setRegion(null);
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
            $offre->setRegion($this);
        }

        return $this;
    }

    public function removeOffre(Offre $offre): self
    {
        if ($this->offres->removeElement($offre)) {
            // set the owning side to null (unless already changed)
            if ($offre->getRegion() === $this) {
                $offre->setRegion(null);
            }
        }

        return $this;
    }

    public function __toString(){
        return $this->nom;
    }
}

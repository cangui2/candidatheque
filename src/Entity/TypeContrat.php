<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\TypeContratRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
 * @ORM\Entity(repositoryClass=TypeContratRepository::class)
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
 * * @ApiFilter(
 *       SearchFilter::class,
 *       properties={
 *              "libelle": "partial"
 *
 *                  }
 *
 * )
 */
class TypeContrat
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @Groups("read")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("read")
     */
    private $libelle;

    /**
     * @ORM\OneToMany(targetEntity=Offre::class, mappedBy="typeContrat")
     */
    private $offres;



    public function __construct($id, $libelle)
    {
        $this->id = $id;
        $this->libelle = $libelle;
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

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

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
            $offre->setType($this);
        }

        return $this;
    }

    public function removeOffre(Offre $offre): self
    {
        if ($this->offres->removeElement($offre)) {
            // set the owning side to null (unless already changed)
            if ($offre->getType() === $this) {
                $offre->setType(null);
            }
        }

        return $this;
    }
    public function __toString(){
        return $this->libelle;
    }


}

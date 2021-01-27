<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CompetenceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CompetencePersoRepository::class)
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
class CompetencePerso
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("read")
     */
    private $libelle;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups("read")
     */
    private $niveau;

    /**
    * @ORM\ManyToMany(targetEntity=CV::class, mappedBy="competencePersos")
    */
    private $cvs;



    public function getId(): ?int
    {
        return $this->id;
    }

    public function __construct($ogr)
    {
        $this->id = $ogr;
        $this->cvs = new ArrayCollection();
        $this->romes = new ArrayCollection();
        $this->offres = new ArrayCollection();
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

    public function getNiveau(): ?int
    {
        return $this->niveau;
    }

    public function setNiveau(?int $niveau): self
    {
        $this->niveau = $niveau;

        return $this;
    }


    /**
     * @return Collection|CV[]
     */
    public function getCVs(): Collection
    {
        return $this->cvs;
    }

    public function addCV(CV $cv): self
    {
        if (!$this->cvs->contains($cv)) {
            $this->cvs[] = $cv;
        }

        return $this;
    }

    public function removeCV(CV $cv): self
    {
        $this->cvs->removeElement($cv);

        return $this;
    }
    

    public function __toString()
    {
        return $this->libelle;
    }


}

<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CompetenceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CompetenceRepository::class)
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
class Competence
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $libelle;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $libelleType;


    /**
     * @ORM\ManyToMany(targetEntity=Rome::class, inversedBy="competences")
     */
    private $rome;



    public function getId(): ?int
    {
        return $this->id;
    }

    public function __construct()
    {
        $this->rome = new ArrayCollection();
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

    public function getType(): ?int
    {
        return $this->type;
    }

    public function setType(?int $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getLibelleType(): ?string
    {
        return $this->libelleType;
    }

    public function setLibelleType(?string $libelleType): self
    {
        $this->libelleType = $libelleType;

        return $this;
    }

    /**
     * @return Collection|Rome[]
     */
    public function getRome(): Collection
    {
        return $this->rome;
    }

    public function addRome(Rome $rome): self
    {
        if (!$this->rome->contains($rome)) {
            $this->rome[] = $rome;
        }

        return $this;
    }

    public function removeRome(Rome $rome): self
    {
        $this->rome->removeElement($rome);

        return $this;
    }

}

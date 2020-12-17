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
     * @Groups("read")
     */
    private $libelle;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups("read")
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("read")
     */
    private $libelleType;


    /**
     * @ORM\ManyToMany(targetEntity=Rome::class, inversedBy="competences")
     * @Groups("read")
     */
    private $romes;

    /**
     * @ORM\ManyToMany(targetEntity=Offre::class, mappedBy="competences")
     * @Groups("read")
     * @ApiProperty(readableLink=false, writableLink=false)
     */
    private $offres;
    
    
    /**
    * @ORM\ManyToMany(targetEntity=CV::class, mappedBy="competences")
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
    public function getRomes(): Collection
    {
        return $this->romes;
    }

    public function addRome(Rome $rome): self
    {
        if (!$this->romes->contains($rome)) {
            $this->romes[] = $rome;
        }

        return $this;
    }

    public function removeRome(Rome $rome): self
    {
        $this->romes->removeElement($rome);

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
            $offre->addCompetence($this);
        }

        return $this;
    }

    public function removeOffre(Offre $offre): self
    {
        if ($this->offres->removeElement($offre)) {
            $offre->removeCompetence($this);
        }

        return $this;
    }

}

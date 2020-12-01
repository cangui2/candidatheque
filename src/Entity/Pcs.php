<?php

namespace App\Entity;

use App\Repository\PcsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PcsRepository::class)
 */
class Pcs
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
    private $code;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $libelle;

    /**
     * @ORM\ManyToMany(targetEntity=Rome::class, inversedBy="codesPcs")
     */
    private $codesRome;

    public function __construct()
    {
        $this->codesRome = new ArrayCollection();
    }

    public function getId(): ?int
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
     * @return Collection|Rome[]
     */
    public function getCodesRome(): Collection
    {
        return $this->codesRome;
    }

    public function addCodesRome(Rome $codesRome): self
    {
        if (!$this->codesRome->contains($codesRome)) {
            $this->codesRome[] = $codesRome;
        }

        return $this;
    }

    public function removeCodesRome(Rome $codesRome): self
    {
        $this->codesRome->removeElement($codesRome);

        return $this;
    }
}

<?php

namespace App\Entity;

use App\Repository\APERepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=APERepository::class)
 */
class APE
{
    /**
     * @ORM\Id
     * @ORM\Column(type="string", length=191)
     */
    private $id;


    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    public function __construct($code, $libelle)
    {
        $this->id = $code;
        $this->libelle = $libelle;
    }

    public function getId(): ?string
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
}

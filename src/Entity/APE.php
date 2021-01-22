<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\APERepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=APERepository::class)
 * @ApiResource(
 *     collectionOperations={
 *                          "get"={
 *                              "path"="/apes"
 *                           },

 *                          },
 *     itemOperations={
 *                          "get"={
 *                              "path"="/apes/{id}"
 *                           },
 *                     },
 *     normalizationContext={"groups"={"read"}},
 *     denormalizationContext={"groups"={"write"}},
 *     attributes={
 *                  "force_eager"=false

 *                 }
 * )
 * @ApiFilter(
 *       SearchFilter::class,
 *       properties={
 *              "libelle": "partial"
 *
 *                  }
 *
 * )
 */
class APE
{
    /**
     * @ORM\Id
     * @ORM\Column(type="string", length=191)
     * @Groups("read")
     */
    private $id;


    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("read")
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

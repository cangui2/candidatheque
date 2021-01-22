<?php

namespace App\Entity;

use App\Repository\ArticleRepository;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ArticleRepository::class)
 */
class Article
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $titre;

    // /**
    //  * @ORM\Column(type="string", length=255)
    //  */
    // private $categorie;

        /**
     * @ORM\Column(type="text")
     */
    private $content;

            /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $image;

            /**
     * @ORM\Column(type="datetime")
     */
    private $publicationDate;

            /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $lastUpdate;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getPublicationDate(): ?DateTimeInterface
    {
        return $this->publicationDate;
    }

    public function setPublicationDate(DateTimeInterface $publicationDate): self
    {
        $this->publicationDate = $publicationDate;

        return $this;
    }
    public function getLastUpdate(): ?DateTimeInterface
    {
        return $this->lastUpdate;
    }

    public function setLastUpdate(DateTimeInterface $lastUpdate): self
    {
        $this->lastUpdate = $lastUpdate;

        return $this;
    }
    
}

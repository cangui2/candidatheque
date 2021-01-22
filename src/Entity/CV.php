<?php

namespace App\Entity;

use App\Repository\CVRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CVRepository::class)
 * @ApiResource(
 *     collectionOperations={
 *                          "get"={
 *                              "path"="/cvs"
 *                           },

 *                     },
 *     itemOperations={
 *                          "get"={
 *                              "path"="/cvs/{id}"
 *                          },
 *                          },
 *     normalizationContext={"groups"={"cv:read"}},
 *     denormalizationContext={"groups"={"write"}},
 *     attributes={
 *                  "force_eager"=false

 *                 }
 * )
 */
class CV
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"cv:read"})
     */
    private $id;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $json = [];

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $pdf;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $prixPrestation;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateModification;

    /**
     * @ORM\ManyToOne(targetEntity=Metier::class, inversedBy="CVs")
     * @Groups({"cv:read"})
     */
    private $metier;

    /**
     * @ORM\ManyToOne(targetEntity=Candidat::class, inversedBy="CVs")
     * @Groups({"cv:read"})
     */
    private $candidat;

    /**
     * @ORM\ManyToMany(targetEntity=Entreprise::class, mappedBy="favoris")
     */
    private $favoris;

    /**
     * @ORM\OneToMany(targetEntity=Consulte::class, mappedBy="cv")
     */
    private $consultes;

    /**
     * @ORM\OneToMany(targetEntity=Experience::class, mappedBy="cv")
     * @Groups({"cv:read"})
     */
    private $experiences;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"cv:read"})
     */
    private $titre;

    /**
     * @ORM\OneToMany(targetEntity=Reseau::class, mappedBy="cv")
     * @Groups({"cv:read"})
     */
    private $reseaux;

    /**
     * @ORM\OneToMany(targetEntity=Formation::class, mappedBy="cv")
     * @Groups({"cv:read"})
     */
    private $formations;

    /**
     * @ORM\OneToMany(targetEntity=Langue::class, mappedBy="cv")
     * @Groups({"cv:read"})
     */
    private $langues;

    /**
     * @ORM\ManyToOne(targetEntity=Recruteur::class, inversedBy="candidats")
     */
    private $deposePar;

    /**
     * @ORM\ManyToMany(targetEntity=Competence::class, inversedBy="cvs")
     * @Groups({"cv:read"})
     */
    private $competences;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    public function __construct()
    {
        $this->favoris = new ArrayCollection();
        $this->competences = new ArrayCollection();
        $this->consultes = new ArrayCollection();
        $this->experiences = new ArrayCollection();
        $this->reseaux = new ArrayCollection();
        $this->formations = new ArrayCollection();
        $this->langues = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getJson(): ?array
    {
        return $this->json;
    }

    public function setJson(?array $json): self
    {
        $this->json = $json;

        return $this;
    }

    public function getPdf(): ?string
    {
        return $this->pdf;
    }

    public function setPdf(?string $pdf): self
    {
        $this->pdf = $pdf;

        return $this;
    }

    public function getPrixPrestation(): ?float
    {
        return $this->prixPrestation;
    }

    public function setPrixPrestation(?float $prixPrestation): self
    {
        $this->prixPrestation = $prixPrestation;

        return $this;
    }

    public function getDateModification(): ?\DateTimeInterface
    {
        return $this->dateModification;
    }

    public function setDateModification(?\DateTimeInterface $dateModification): self
    {
        $this->dateModification = $dateModification;

        return $this;
    }

    public function getMetier(): ?Metier
    {
        return $this->metier;
    }

    public function setMetier(?Metier $metier): self
    {
        $this->metier = $metier;

        return $this;
    }

    public function getCandidat(): ?Candidat
    {
        return $this->candidat;
    }

    public function setCandidat(?Candidat $candidat): self
    {
        $this->candidat = $candidat;

        return $this;
    }

    /**
     * @return Collection|Entreprise[]
     */
    public function getFavoris(): Collection
    {
        return $this->favoris;
    }

    public function addFavori(Entreprise $favori): self
    {
        if (!$this->favoris->contains($favori)) {
            $this->favoris[] = $favori;
            $favori->addFavori($this);
        }

        return $this;
    }

    public function removeFavori(Entreprise $favori): self
    {
        if ($this->favoris->removeElement($favori)) {
            $favori->removeFavori($this);
        }

        return $this;
    }

    /**
     * @return Collection|Competence[]
     */
    public function getCompetences(): Collection
    {
        return $this->competences;
    }

    public function addCompetence(Competence $competence): self
    {
        if (!$this->competences->contains($competence)) {
            $this->competences[] = $competence;
            $competence->addCV($this);
        }

        return $this;
    }

    public function removeCompetence(Competence $competence): self
    {
        if ($this->competences->contains($competence)) {
            $this->removeCompetence($competence);
        }

        return $this;
    }

    /**
     * @return Collection|Consulte[]
     */
    public function getConsultes(): Collection
    {
        return $this->consultes;
    }

    public function addConsulte(Consulte $consulte): self
    {
        if (!$this->consultes->contains($consulte)) {
            $this->consultes[] = $consulte;
            $consulte->setCv($this);
        }

        return $this;
    }

    public function removeConsulte(Consulte $consulte): self
    {
        if ($this->consultes->removeElement($consulte)) {
            // set the owning side to null (unless already changed)
            if ($consulte->getCv() === $this) {
                $consulte->setCv(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Experience[]
     */
    public function getExperiences(): Collection
    {
        return $this->experiences;
    }

    public function addExperience(Experience $experience): self
    {
        if (!$this->experiences->contains($experience)) {
            $this->experiences[] = $experience;
            $experience->setCv($this);
        }

        return $this;
    }

    public function removeExperience(Experience $experience): self
    {
        if ($this->experiences->removeElement($experience)) {
            // set the owning side to null (unless already changed)
            if ($experience->getCv() === $this) {
                $experience->setCv(null);
            }
        }

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(?string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * @return Collection|Reseau[]
     */
    public function getReseaux(): Collection
    {
        return $this->reseaux;
    }

    public function addReseau(Reseau $reseau): self
    {
        if (!$this->reseaux->contains($reseau)) {
            $this->reseaux[] = $reseau;
            $reseau->setCv($this);
        }

        return $this;
    }

    public function removeReseau(Reseau $reseau): self
    {
        if ($this->reseaux->removeElement($reseau)) {
            // set the owning side to null (unless already changed)
            if ($reseau->getCv() === $this) {
                $reseau->setCv(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Formation[]
     */
    public function getFormations(): Collection
    {
        return $this->formations;
    }

    public function addFormation(Formation $formation): self
    {
        if (!$this->formations->contains($formation)) {
            $this->formations[] = $formation;
            $formation->setCv($this);
        }

        return $this;
    }

    public function removeFormation(Formation $formation): self
    {
        if ($this->formations->removeElement($formation)) {
            // set the owning side to null (unless already changed)
            if ($formation->getCv() === $this) {
                $formation->setCv(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Langue[]
     */
    public function getLangues(): Collection
    {
        return $this->langues;
    }

    public function addLangue(Langue $langue): self
    {
        if (!$this->langues->contains($langue)) {
            $this->langues[] = $langue;
            //$langue->setCv($this);
        }

        return $this;
    }

    public function removeLangue(Langue $langue): self
    {
        if ($this->langues->removeElement($langue)) {
            // set the owning side to null (unless already changed)
            if ($langue->getCVs() === $this) {
                //$langue->se(null);
            }
        }

        return $this;
    }

    public function getDeposePar(): ?Recruteur
    {
        return $this->deposePar;
    }

    public function setDeposePar(?Recruteur $deposePar): self
    {
        $this->deposePar = $deposePar;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

}

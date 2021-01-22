<?php
namespace App\Form\DataTransformer;

use App\Entity\Competence;
use App\Entity\Departement;
use App\Entity\Metier;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

class CompetenceToStringTransformer implements DataTransformerInterface
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * Transforms an object (Competence) to a string.
     *
     * @param  Competence|null $competences
     * @return string
     */
    public function transform($competences)
    {
//    dd($departement);

        if (null === $competences) {
            return '';
        }

        if (!$competences instanceof Competence) {
            throw new \LogicException('Erreur!');
        }
//    return $metier->getSomethingUnique();
        return $competences->getLibelle();
    }

    /**
     * Transforms a string to an object (departement).
     *
     * @param  string $libelle
     * @return Competence|null
     * @throws TransformationFailedException if object (competence) is not found.
     */
    public function reverseTransform($libelle)
    {

        if (!$libelle) {
            return;
        }

        $competences = $this->entityManager
            ->getRepository(Competence::class)
            // query for the issue with this libelle
            ->findOneBy(['nom' => $libelle])
        ;

        if (null === $competences) {
            $privateErrorMessage = sprintf('Aucune compétence ne correspond au libellé "%s"!', $libelle);
            $publicErrorMessage = "Votre saisie n'est pas valide.";

            $failure = new TransformationFailedException($privateErrorMessage);
            $failure->setInvalidMessage($publicErrorMessage, [
                '{{ value }}' => $libelle,
            ]);

            throw $failure;
        }

        return $competences;
    }
}
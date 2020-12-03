<?php
namespace App\Form\DataTransformer;

use App\Entity\Departement;
use App\Entity\Metier;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

class DepartementToStringTransformer implements DataTransformerInterface
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * Transforms an object (Departement) to a string.
     *
     * @param  Departement|null $metier
     * @return string
     */
    public function transform($departement)
    {
//    dd($departement);

        if (null === $departement) {
            return '';
        }

        if (!$departement instanceof Departement) {
            throw new \LogicException('Erreur!');
        }
//    return $metier->getSomethingUnique();
        return $departement->getNom();
    }

    /**
     * Transforms a string to an object (departement).
     *
     * @param  string $nom
     * @return Departement|null
     * @throws TransformationFailedException if object (departement) is not found.
     */
    public function reverseTransform($nom)
    {

        if (!$nom) {
            return;
        }

        $departement = $this->entityManager
            ->getRepository(Departement::class)
            // query for the issue with this libelle
            ->findOneBy(['nom' => $nom])
        ;

        if (null === $departement) {
            $privateErrorMessage = sprintf('Aucun département ne correspond au nom "%s"!', $nom);
            $publicErrorMessage = "Votre saisie n'est pas valide. Veuillez sélectionner un département de la liste de complétion automatique.";

            $failure = new TransformationFailedException($privateErrorMessage);
            $failure->setInvalidMessage($publicErrorMessage, [
                '{{ value }}' => $nom,
            ]);

            throw $failure;
        }

        return $departement;
    }
}
<?php
namespace App\Form\DataTransformer;

use App\Entity\Metier;
use App\Entity\Region;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

class RegionToStringTransformer implements DataTransformerInterface
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * Transforms an object (Region) to a string.
     *
     * @param  Region|null $metier
     * @return string
     */
    public function transform($region)
    {
//    dd($region);

        if (null === $region) {
            return '';
        }

        if (!$region instanceof Region) {
            throw new \LogicException('Erreur!');
        }
//    return $metier->getSomethingUnique();
        return $region->getNom();
    }

    /**
     * Transforms a string to an object (region).
     *
     * @param  string $nom
     * @return Region|null
     * @throws TransformationFailedException if object (region) is not found.
     */
    public function reverseTransform($nom)
    {

        if (!$nom) {
            return;
        }

        $region = $this->entityManager
            ->getRepository(Region::class)
            // query for the issue with this libelle
            ->findOneBy(['nom' => $nom])
        ;

        if (null === $region) {
            $privateErrorMessage = sprintf('Aucune région ne correspond au nom "%s"!', $nom);
            $publicErrorMessage = "Votre saisie n'est pas valide. Veuillez sélectionner une région de la liste de complétion automatique.";

            $failure = new TransformationFailedException($privateErrorMessage);
            $failure->setInvalidMessage($publicErrorMessage, [
                    '{{ value }}' => $nom,
                ]);

            throw $failure;
            }


        return $region;
    }
}
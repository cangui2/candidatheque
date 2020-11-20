<?php
namespace App\Form\DataTransformer;

use App\Entity\Ville;
use App\Entity\Metier;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

class VilleToStringTransformer implements DataTransformerInterface
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * Transforms an object (Ville) to a string.
     *
     * @param  Ville|null $ville
     * @return string
     */
    public function transform($ville)
    {

//        dd($ville);
        if (null === $ville) {
            return '';
        }

        if (!$ville instanceof Ville) {
            throw new \LogicException('Erreur!');
        }
//    return $metier->getSomethingUnique();
        return $ville->getNom();
    }

    /**
     * Transforms a string to an object (ville).
     *
     * @param  string $nom
     * @return Ville|null
     * @throws TransformationFailedException if object (ville) is not found.
     */
    public function reverseTransform($nom)
    {

        if (!$nom) {
            return;
        }

        $ville = $this->entityManager
            ->getRepository(Ville::class)
            // query for the issue with this libelle
            ->findOneBy(['nom' => $nom])
        ;

        if (null === $ville) {
            // causes a validation error
            // this message is not shown to the user
            // see the invalid_message option
            throw new TransformationFailedException(sprintf('Aucune ville ne correspond à votre saisie!', $nom
            ));
        }

        return $ville;
    }
}
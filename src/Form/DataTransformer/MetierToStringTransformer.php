<?php
namespace App\Form\DataTransformer;

use App\Entity\Metier;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

class MetierToStringTransformer implements DataTransformerInterface
{
private $entityManager;

public function __construct(EntityManagerInterface $entityManager)
{
$this->entityManager = $entityManager;
}

/**
* Transforms an object (Metier) to a string.
*
* @param  Metier|null $metier
* @return string
*/
public function transform($metier)
{
//    dd($metier);

    if (null === $metier) {
    return '';
}

    if (!$metier instanceof Metier) {
        throw new \LogicException('Aucun métier ne correspond à votre saisie. Veuillez recommencer!');
    }
//    return $metier->getSomethingUnique();
        return $metier->getLibelle();
}

/**
* Transforms a string to an object (metier).
*
* @param  string $libelle
* @return Metier|null
* @throws TransformationFailedException if object (metier) is not found.
*/
public function reverseTransform($libelle)
{
// no metier libelle? It's optional, so that's ok
    if (!$libelle) {
    return;
}

    $metier = $this->entityManager
    ->getRepository(Metier::class)
    // query for the issue with this libelle
    ->findOneBy(['libelle' => $libelle])
    ;

    if (null === $metier) {
        $privateErrorMessage = sprintf('Aucun métier ne correspond au libelle "%s"!', $libelle);
        $publicErrorMessage = "Votre saisie n'est pas valide. Veuillez sélectionner un métier de la liste de complétion automatique.";

        $failure = new TransformationFailedException($privateErrorMessage);
        $failure->setInvalidMessage($publicErrorMessage, [
            '{{ value }}' => $libelle,
        ]);

        throw $failure;
}

    return $metier;
}
}
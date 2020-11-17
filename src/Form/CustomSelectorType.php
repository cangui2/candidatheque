<?php
namespace App\Form;

use App\Form\DataTransformer\MetierToStringTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CustomSelectorType extends AbstractType
{
private $transformer;

public function __construct(MetierToStringTransformer $transformer)
{
    $this->transformer = $transformer;
}

public function buildForm(FormBuilderInterface $builder, array $options)
{
    $builder->addModelTransformer($this->transformer);
}

public function configureOptions(OptionsResolver $resolver)
{
    $resolver->setDefaults([
    'invalid_message' => "Votre terme de recherche ne correspond à aucun métier, veuillez vous rapporter à la liste de métiers suggérés en dessous de votre saisie.",
]);
}

public function getParent()
{
return TextType::class;
}
}
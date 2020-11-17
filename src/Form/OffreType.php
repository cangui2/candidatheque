<?php

namespace App\Form;

use App\Entity\Metier;
use App\Entity\Offre;
use App\Form\CustomSelectorType;
use App\Entity\TypeContrat;
use App\Form\DataTransformer\MetierToStringTransformer;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OffreType extends AbstractType
{
    private $transformer;

    public function __construct(MetierToStringTransformer $transformer)
    {
        $this->transformer = $transformer;
    }


    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('titre', TextType::class, [
                'required' => false,
                'label' => "Intitulé de l'offre"
            ])
//            ->add('datePublication', DateType::class)
            ->add('description', TextareaType::class, [
                'label' => "Description de l'offre"
            ])
            ->add('salaire', NumberType::class, [
                'label' => 'Salaire',
                'required' => false
            ])
            ->add('dateDebut', DateType::class, [
                'label' => 'De...',
                'widget' => 'single_text',
                'html5' => false,
                'attr' => ['class' => 'form-control js-datepicker'],
                'format' => 'dd/mm/yyyy',
            ])
            ->add('dateFin', DateType::class, [
                'label' => "Jusqu'à...",
                'widget' => 'single_text',
                'html5' => false,
                'attr' => ['class' => 'form-control js-datepicker'],
                'format' => 'dd/mm/yyyy'
            ])
            ->add('duree', TextType::class, [
                'label' => 'Durée',
                'required' => false
            ])
            ->add('possibiliteCDI', ChoiceType::class, [
                'label' => 'Possibilité CDI',
                'choices' => [
                    'Oui' => true,
                    'Non' => false
                ],
                'label_attr' => [
                    'class' => 'radio-inline'
                ],
                'required' => false,
                'expanded' => true,
                'multiple' => false,
                'placeholder' => false
            ])
            ->add('urgent', ChoiceType::class, [
                'label' => 'Urgent',
                'choices' => [
                    'Oui' => true,
                    'Non' => false
                ],
                'label_attr' => [
                    'class' => 'radio-inline'
                ],
                'required' => false,
                'expanded' => true,
                'multiple' => false,
                'placeholder' => false
            ])
            ->add('profil', TextareaType::class, [
                'label' => 'Profil requis',
            ])
            ->add('metier', CustomSelectorType::class, [
//                'class' => Metier::class,
                'label'=> "Métier",
//                'choice_label' => 'libelle',
//                'expanded' => false,
//                'placeholder' => 'Sélectionnez un métier',
                'required' => true
            ])
            ->add('type', EntityType::class, [
                'class' => TypeContrat::class,
                'label' => 'Type de contrat',
                'choice_label' => 'libelle',
                'expanded' => false,
                'placeholder' => 'Choisissez le type de contrat',
                'required' => false
            ])
//            ->add('recruteur')
//              ->add('entreprise')
            ->add('save', SubmitType::class)
        ;

        $builder->get('metier')
            ->addModelTransformer($this->transformer);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Offre::class,
        ]);
    }
}

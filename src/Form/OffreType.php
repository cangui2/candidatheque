<?php

namespace App\Form;

use App\Entity\Metier;
use App\Entity\Offre;
use App\Entity\TypeContrat;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class OffreType extends AbstractType
{
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
                'label' => 'Salaire'
            ])
            ->add('dateDebut', DateType::class, [
                'label' => 'Date de début',
                'widget' => 'single_text',
                'html5' => false,
                'attr' => ['class' => 'form-control js-datepicker'],
            ])
            ->add('dateFin', DateType::class, [
                'label' => 'Date de fin',
                'widget' => 'single_text',
                'html5' => false,
                'attr' => ['class' => 'form-control js-datepicker'],
            ])
            ->add('duree', TextType::class, [
                'label' => 'Durée'
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
            ->add('metier', EntityType::class, [
                'class' => Metier::class,
                'label'=> "Métier",
                'choice_label' => 'libelle',
                'expanded' => false,
                'placeholder' => 'Sélectionnez un métier',
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
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Offre::class,
        ]);
    }
}

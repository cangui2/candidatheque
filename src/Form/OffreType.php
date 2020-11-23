<?php

namespace App\Form;

use App\Entity\Departement;
use App\Entity\Metier;
use App\Entity\Offre;
use App\Entity\Pays;
use App\Entity\Region;
use App\Entity\Ville;
use App\Entity\TypeContrat;
use App\Form\DataTransformer\DepartementToStringTransformer;
use App\Form\DataTransformer\MetierToStringTransformer;
use App\Form\DataTransformer\RegionToStringTransformer;
use App\Form\DataTransformer\VilleToStringTransformer;
use App\Repository\PaysRepository;
use Doctrine\ORM\EntityManagerInterface;
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
    private $mTransformer;
    private $rTransformer;
    private $dTransformer;
    private $vTransformer;
    private $em;

    public function __construct(MetierToStringTransformer $mTransformer, RegionToStringTransformer $rTrasformer, DepartementToStringTransformer $dTransformer, VilleToStringTransformer $vTransformer, EntityManagerInterface $em)
    {
        $this->mTransformer = $mTransformer;
        $this->rTransformer = $rTrasformer;
        $this->dTransformer = $dTransformer;
        $this->vTransformer = $vTransformer;
        $this->em = $em;
    }


    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('titre', TextType::class, [
                'required' => false,
                'label' => "Intitulé de l'offre",
                'error_bubbling' => true
            ])
//            ->add('datePublication', DateType::class)
            ->add('description', TextareaType::class, [
                'label' => "Description de l'offre",
                'error_bubbling' => true
            ])
            ->add('salaire', NumberType::class, [
                'label' => 'Salaire',
                'required' => false,
                'error_bubbling' => true
            ])
            ->add('dateDebut', DateType::class, [
                'label' => 'De...',
                'widget' => 'single_text',
                'html5' => false,
                'attr' => ['class' => 'form-control js-datepicker'],
                'format' => 'dd/mm/yyyy',
                'required' => false,
                'error_bubbling' => true
            ])
            ->add('dateFin', DateType::class, [
                'label' => "Jusqu'à...",
                'widget' => 'single_text',
                'html5' => false,
                'attr' => ['class' => 'form-control js-datepicker'],
                'format' => 'dd/mm/yyyy',
                'required' => false,
                'error_bubbling' => true
            ])
            ->add('duree', TextType::class, [
                'label' => 'Durée',
                'required' => false,
                'error_bubbling' => true
            ])
            ->add('possibiliteCDI', ChoiceType::class, [
                'label' => 'Possibilité CDI',
                'choices' => [
                    'Oui' => true,
                    'Non' => false,
                ],
                'label_attr' => [
                    'class' => 'radio-inline'
                ],
                'required' => false,
                'expanded' => true,
                'multiple' => false,
                'placeholder' => false,
                'error_bubbling' => true
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
                'placeholder' => false,
                'error_bubbling' => true
            ])
            ->add('profil', TextareaType::class, [
                'label' => 'Profil requis',
                'error_bubbling' => true
            ])
            ->add('metier', TextType::class, [
//                'class' => Metier::class,
                'label'=> "Métier",
//                'choice_label' => 'libelle',
//                'expanded' => false,
//                'placeholder' => 'Sélectionnez un métier',
                'required' => true,
                'error_bubbling' => true
            ])
            ->add('type', EntityType::class, [
                'class' => TypeContrat::class,
                'label' => 'Type de contrat',
                'choice_label' => 'libelle',
                'expanded' => false,
                'placeholder' => 'Choisissez le type de contrat',
                'required' => false,
                'error_bubbling' => true
            ])
            ->add('localisation', ChoiceType::class, [
                'mapped' => false,
                'label' => 'Lie de travail',
                'required' => false,
                'choices' => [
                    'France' => 1,
                    'Etranger' => 2
                ],
                'label_attr' => [
                    'class' => 'radio-inline'
                ],
                'expanded' => true,
                'multiple' => false,
                'placeholder' => false,
                'error_bubbling' => true
            ])
            ->add('pays', EntityType::class, [
                'class' => Pays::class,
                'label' => 'Pays',
                'choice_label' => 'nom',
                'expanded' => false,
                'placeholder' => 'Choisissez un pays',
                'required' => false,
                'query_builder' => function (PaysRepository $pRepo) {
                    return $pRepo->createQueryBuilder('p')
                        ->andWhere('p.nom <> :nom')
                        ->setParameter('nom', 'France');

                },
                'error_bubbling' => true
            ])

            ->add('ville', TextType::class, [
//                'class' => Ville::class,
                'label' => 'Ville',
//                'choice_label' => 'nom',
//                'expanded' => false,
//                'placeholder' => '',
                'required' => false,
                'error_bubbling' => true
            ])

//            ->add('recruteur')
//              ->add('entreprise')


            ->add('region', TextType::class, [
//                'class' => Region::class,
                'label' => 'Région',
//                'choice_label' => 'nom',
//                'expanded' => false,
//                'placeholder' => '',
                'required' => false,
                'error_bubbling' => true
            ])

            ->add('departement', TextType::class, [
//                'class' => Departement::class,
                'label' => 'Département',
//                'choice_label' => 'nom',
//                'expanded' => false,
//                'placeholder' => '',
                'required' => false,
                'error_bubbling' => true
            ])
            ->add('save', SubmitType::class, [
                'attr' => ['class' => 'btn-depot'

                ]
            ]);


        $builder->get('metier')
            ->addModelTransformer($this->mTransformer);
        $builder->get('departement')
            ->addModelTransformer($this->dTransformer);
        $builder->get('region')
            ->addModelTransformer($this->rTransformer);
        $builder->get('ville')
            ->addModelTransformer($this->vTransformer);


    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Offre::class,
        ]);
    }
}

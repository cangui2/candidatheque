<?php

namespace App\Form;

use App\Entity\Departement;
use App\Entity\Habilitation;
use App\Entity\Langue;
use App\Entity\Metier;
use App\Entity\Competence;
use App\Entity\Offre;
use App\Entity\Pays;
use App\Entity\Region;
use App\Entity\Ville;
use App\Entity\TypeContrat;
use App\Form\DataTransformer\DepartementToStringTransformer;
use App\Form\DataTransformer\MetierToStringTransformer;
use App\Form\DataTransformer\RegionToStringTransformer;
use App\Form\DataTransformer\VilleToStringTransformer;
use App\Repository\HabilitationRepository;
use App\Repository\LangueRepository;
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
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;


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
            ->add('typeSalaire', ChoiceType::class, [
                'label' => 'Type de rémunération',
                'choices' => [
                    "par an" => 1,
                    "par mois" => 2,
                    "par jour" => 3,
                    "par heure" => 4
                ],
                'placeholder' => 'Choisissez la fréquence de rémunération',
                'mapped' => true,
                'multiple'  => false,
                'expanded' => false,
                'required' => false,
                'error_bubbling' => true
            ])

            ->add('dateDebut', DateType::class, [
                'label' => '',
                'widget' => 'single_text',
                'html5' => false,
                'attr' => ['class' => 'form-control js-datepicker'],
                'format' => 'dd/MM/yyyy',
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

            ->add('urgent', CheckboxType::class, [
                'label' => 'Dès que possible',
                'required' => false,
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
                'label' => 'Contrat',
                'choice_label' => 'libelle',
                'expanded' => false,
                'placeholder' => 'Choisissez le type de contrat',
                'required' => true,
                'error_bubbling' => true
            ])
            ->add('habilitations', EntityType::class, [
                'class' => Habilitation::class,
                'label' => 'Permis et habilitations',
                'choice_label' => 'libelle',
                'expanded' => false,
                'placeholder' => '',
                'multiple' =>true,
                'required' => false,

            ])

            ->add('competences', EntityType::class, [
                'class' => Competence::class,
                'label' => 'Compétences',
                'choice_label' => 'libelle',
                'expanded' => true,
                'placeholder' => '',
                'multiple' =>true,
                'required' => false,

            ])

            ->add('competencesComplementaires', TextareaType::class, [
                'label' => 'Autres compétences',
                'error_bubbling' => true,
                'required' => false,
            ])


            ->add('localisation', ChoiceType::class, [
                'mapped' => false,
                'label' => 'Lieu de travail',
                'required' => false,
                'choices' => [
                    'France' => 1,
                    'Étranger' => 2
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

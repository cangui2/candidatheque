<?php

namespace App\Form;

use App\Entity\Habilitation;
use App\Entity\Langue;
use App\Entity\Metier;
use App\Entity\Competence;
use App\Entity\Offre;
use App\Entity\TypeContrat;
use App\Form\DataTransformer\CompetenceToStringTransformer;
use App\Form\DataTransformer\MetierToStringTransformer;
use App\Form\DataTransformer\RegionToStringTransformer;
use App\Form\DataTransformer\VilleToStringTransformer;
use App\Repository\CompetenceRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;



class OffreType extends AbstractType
{
    private $mTransformer;
    private $rTransformer;
    private $dTransformer;
    private $vTransformer;
    private $em;

    public function __construct(MetierToStringTransformer $mTransformer, EntityManagerInterface $em)
    {
        $this->mTransformer = $mTransformer;
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
            ->add('dureeHebdo', NumberType::class, [
                    'label' => 'Temps de travail hebdomadaire',
                    'attr' => [
                        'placeholder' => 'ex. 35h'
                    ],
                    'required' => false,
                    'error_bubbling' => true
                ]
            )
            ->add('salaire', NumberType::class, [
                'label' => 'Salaire estimatif brut (en euros)',
                'required' => false,
                'error_bubbling' => true
            ]
            )

            ->add('typeSalaire', ChoiceType::class, [
                'label' => 'Type',
                'choices' => [
                    "par an" => 1,
                    "par mois" => 2,
                    "par jour" => 3,
                    "par heure" => 4
                ],
                'placeholder' => false,
                'mapped' => true,
                'label_attr' => [
                    'class' => 'radio-inline'
                ],
                'multiple'  => false,
                'expanded' => true,
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
            ->add('typeContrat', EntityType::class, [
                'class' => TypeContrat::class,
                'label' => 'Contrat',
                'choice_label' => 'libelle',
                'expanded' => false,
                'placeholder' => '',
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



            ->add('competencesComplementaires', TextareaType::class, [
                'label' => 'Autres compétences',
                'error_bubbling' => true,
                'required' => false,
            ])


            ->add('localisation', TextType::class, [
                'mapped' => false,
                'label' => 'Lieu de travail',

                'error_bubbling' => true
            ])


//            ->add('recruteur')
//              ->add('entreprise')


            ->add('save', SubmitType::class, [
                'attr' => ['class' => 'btn-depot'

                ]
            ]);


        $builder->get('metier')
            ->addModelTransformer($this->mTransformer);

        $formModifier = function (FormInterface $form, Metier $metier = null) {
            $competences = null === $metier ? [] : $metier->getRome()->getCompetences();

            $form->add('competences', EntityType::class, [
                'class' => Competence::class,
                'label' => 'Compétences',
                'choice_label' => 'libelle',
                'expanded' => true,
                'placeholder' => '',
                'multiple' => true,
                'required' => false,
                'choices' => $competences,
            ]);
        };

            $builder->addEventListener(
                FormEvents::PRE_SET_DATA,
                function (FormEvent $event) use ($formModifier) {
                    // this would be your entity
                    $data = $event->getData();

                    $formModifier($event->getForm(), $data->getMetier());
                }
            );

        $builder->get('metier')->addEventListener(
            FormEvents::POST_SUBMIT,
            function (FormEvent $event) use ($formModifier) {
                // It's important here to fetch $event->getForm()->getData(), as
                // $event->getData() will get you the client data (that is, the ID)
                $metier = $event->getForm()->getData();

                // since we've added the listener to the child, we'll have to pass on
                // the parent to the callback functions!
                $formModifier($event->getForm()->getParent(), $metier);
            }
        );




    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Offre::class,
        ]);
    }
}

<?php

declare(strict_types=1);

namespace App\Swagger;

use App\Entity\Offre;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

final class SwaggerDecorator implements NormalizerInterface
{
    private NormalizerInterface $decorated;

    public function __construct(NormalizerInterface $decorated )
    {
        $this->decorated = $decorated;
    }

    /**
     * {@inheritdoc}
     */
    public function normalize($object, string $format = null, array $context = [])
    {
        $docs = $this->decorated->normalize($object, $format, $context);
        $docs['info']['title'] = '[ CANDIDATHEQUE ]';
//        $docs['info']['description'] = 'API Candidathèque';
//        $docs['info']['version'] = $this->appVersion;


//        OFFRES BULK INSERT

//        $offres_bulk = [
//            'summary' => 'Crée une collection de ressources Offre',
//            'tags' => ['Offre'],
//            'requestBody' =>[
//                'description' => 'Un tableau JSON contenant des ressources Offre',
//                'content' => [
//                    'application/json' => [
//                        'schema' =>[
//                            'type' => 'array',
//                            'items' =>[
//                                'type' =>'object',
//                                'properties' => [
//                                    'titre'=> [
//                                        'type'=>'string'
//                                    ],
//                                    'description'=> [
//                                        'type'=>'string'
//                                    ],
//                                    'metier'=> [
//                                        'type'=>'string'
//                                    ],
//                                    'salaire'=> [
//                                        'type'=>'number'
//                                    ],
//                                    'dateDebut'=> [
//                                        'type'=>'string',
//                                        'format' =>'date'
//                                    ],
//                                    'duree'=> [
//                                        'type'=>'string'
//                                    ],
//                                    'typeContrat'=> [
//                                        'type'=>'string'
//                                    ],
//                                    'possibiliteCDI'=> [
//                                        'type'=>'boolean'
//                                    ],
//                                    'urgent'=> [
//                                        'type'=>'boolean'
//                                    ],
//                                    'profil'=> [
//                                        'type'=>'string'
//                                    ],
//                                    'entreprise'=>[
//                                        'type'=>'string'
//                                    ],
//                                    'ville'=>[
//                                        'type'=>'string'
//                                    ],
//                                    'departement'=>[
//                                        'type'=>'string'
//                                    ],
//                                    'region'=>[
//                                        'type'=>'string'
//                                    ],
//                                    'pays'=>[
//                                        'type'=>'string'
//                                    ],
//                                    'competences'=>[
//                                        'type'=>'array',
//                                        'items' =>[
//                                            'type'=> 'string'
//                                        ]
//                                    ],
//                                    'competencesComplementaires'=>[
//                                        'type'=>'array',
//                                        'items' =>[
//                                            'type'=> 'string'
//                                        ]
//                                    ],
//                                    'habilitations'=>[
//                                        'type'=>'array',
//                                        'items' =>[
//                                            'type'=> 'string'
//                                        ]
//                                    ],
//                                    'typeSalaire'=>[
//                                        'type'=>'integer'
//                                    ],
//                                    'dureeHebdo'=>[
//                                        'type'=>'number'
//                                    ],
//
//                                ]
//                            ]
//
//                        ]
//                    ]
//
//                ]
//            ],
//            'responses' => [
//                '200' => [
//                    'description' => "OK",
//                    'content' => [
//                        'application/json' => [
//                            'schema' => [
//                                'type' =>'array',
//                                'items' => [
//                                    'type' => 'object',
//                                    'properties' => [
//                                        'id' =>[
//                                            'type'=>'integer'
//                                        ]
//                                    ]
//                                ],
//
//                            ],
//                        ],
//                    ],
//                ],
//                '5XX' => [
//                    'description' => "Description de l'erreur survenue"
//                ]
//            ],
//
//        ];
//
//        $docs['paths']['/api/offres_bulk']['post'] = $offres_bulk;



//CUSTOM RESPONSES POST/PUT/PATCH

//        $customResponses = ['200' =>['description' => 'OK', 'content' => ['application/json' => ['schema' => ['type' => 'object', 'properties' => ['id' => ['type' =>'integer']]]]]], '5XX'=>['description' => "Description de l'erreur survenue"]];
//
//        $docs['paths']['/api/agences']['post']['responses'] = $customResponses;


//        CUSTOM RESPONSES BULK DELETE
//        $customResponsesDeleteContrats = ['200' =>['description' => 'OK', 'content' => ['application/json' => ['schema' => ['type' => 'array', 'items' => ['type' =>'object', 'properties' => ['idBestt' => ['type' =>'string', 'example' =>'256'],'numero' => ['type' =>'string', 'example' =>'256'], 'id' => ['type' =>'integer']]]]]]], '5XX'=>['description' => "Description de l'erreur survenue"]];
//        $docs['paths']['/api/contrats_bulk']['delete']['responses'] = $customResponsesDeleteContrats;


        return $docs;
    }

    /**
     * {@inheritdoc}
     */
    public function supportsNormalization($data, string $format = null): bool
    {
        return $this->decorated->supportsNormalization($data, $format);
    }

}

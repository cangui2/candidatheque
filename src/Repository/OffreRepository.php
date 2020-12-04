<?php

namespace App\Repository;

use App\Entity\Offre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Offre|null find($id, $lockMode = null, $lockVersion = null)
 * @method Offre|null findOneBy(array $criteria, array $orderBy = null)
 * @method Offre[]    findAll()
 * @method Offre[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OffreRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Offre::class);
    }

    // /**
    //  * @return Offre[] Returns an array of Offre objects
    //  */

    public function findByCompany($entreprise_id)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.entreprise = :entreprise_id')
            ->setParameter('entreprise_id', $entreprise_id)
            ->orderBy('o.datePublication', 'DESC')
            ->getQuery()
            ->getResult()
        ;
    }
    public function findByCompanyAndRecruiter($entreprise_id, $recruteur_id)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.entreprise = :entreprise_id')
            ->andWhere('o.recruteur = :recruteur_id')
            ->setParameters(['entreprise_id' => $entreprise_id, 'recruteur_id' => $recruteur_id])
            ->orderBy('o.datePublication', 'DESC')
            ->getQuery()
            ->getResult()
            ;
    }
    public function findCustomOfferByIdRecruteur($recruteur_id){

        return $this->createQueryBuilder('o')
            ->select('m.libelle','count(m.libelle) as compteur')
            ->join('o.metier', 'm')
            ->where('o.recruteur = :recruteur')
            ->setParameters(['recruteur' => $recruteur_id])
            ->groupBy('m.libelle')
            ->getQuery()
            ->getResult()
            ;


    }
    Public function findAllOfferByIdRecruteurLimit5($recruteur_id){

        return $this->createQueryBuilder('o')
            ->join('o.metier', 'm')
            ->where('o.recruteur = :recruteur')
            ->setParameters(['recruteur' => $recruteur_id])
            ->orderBy('o.datePublication', 'DESC')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult()
            ;
    }

    public function findCompetenceByOffer($id){

        $rawSql = "
            SELECT  o2_.offre_id, o2_.competence_id 
            FROM offre o0_ 
            INNER JOIN offre_competence o2_ ON o0_.id = o2_.offre_id 
            INNER JOIN competence c1_ ON c1_.id = o2_.competence_id 
            WHERE o2_.offre_id = $id;";

        $stmt = $this->getEntityManager()->getConnection()->prepare($rawSql);
        $stmt->execute();

        return $stmt->fetchAllAssociative();

    }


}

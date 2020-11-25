<?php

namespace App\Repository;

use App\Entity\EnvironnementTravail;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EnvironnementTravail|null find($id, $lockMode = null, $lockVersion = null)
 * @method EnvironnementTravail|null findOneBy(array $criteria, array $orderBy = null)
 * @method EnvironnementTravail[]    findAll()
 * @method EnvironnementTravail[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EnvironnementTravailRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EnvironnementTravail::class);
    }

    // /**
    //  * @return EnvironnementTravail[] Returns an array of EnvironnementTravail objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?EnvironnementTravail
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

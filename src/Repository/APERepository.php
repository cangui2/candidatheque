<?php

namespace App\Repository;

use App\Entity\APE;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method APE|null find($id, $lockMode = null, $lockVersion = null)
 * @method APE|null findOneBy(array $criteria, array $orderBy = null)
 * @method APE[]    findAll()
 * @method APE[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class APERepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, APE::class);
    }

    // /**
    //  * @return APE[] Returns an array of APE objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?APE
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

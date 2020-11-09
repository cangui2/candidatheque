<?php

namespace App\Repository;

use App\Entity\Consulte;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Consulte|null find($id, $lockMode = null, $lockVersion = null)
 * @method Consulte|null findOneBy(array $criteria, array $orderBy = null)
 * @method Consulte[]    findAll()
 * @method Consulte[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConsulteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Consulte::class);
    }

    // /**
    //  * @return Consulte[] Returns an array of Consulte objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Consulte
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

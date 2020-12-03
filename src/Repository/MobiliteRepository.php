<?php

namespace App\Repository;

use App\Entity\Mobilite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Mobilite|null find($id, $lockMode = null, $lockVersion = null)
 * @method Mobilite|null findOneBy(array $criteria, array $orderBy = null)
 * @method Mobilite[]    findAll()
 * @method Mobilite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MobiliteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Mobilite::class);
    }

    // /**
    //  * @return Mobilite[] Returns an array of Mobilite objects
    //  */

    public function findMobilitesByRome($rome)
    {
        return $this->createQueryBuilder('m')
            ->select('m.libelle')
            ->join('c.rome', 'r')
            ->andWhere('r.id = :rome')
//            ->andWhere('c.type = :type')
//            ->setParameters(['rome' => $rome, 'type' =>3 ])
            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
            ;
    }


    /*
    public function findOneBySomeField($value): ?Mobilite
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

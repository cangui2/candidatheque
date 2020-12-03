<?php

namespace App\Repository;

use App\Entity\Description;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Description|null find($id, $lockMode = null, $lockVersion = null)
 * @method Description|null findOneBy(array $criteria, array $orderBy = null)
 * @method Description[]    findAll()
 * @method Description[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DescriptionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Description::class);
    }

    // /**
    //  * @return Description[] Returns an array of Description objects
    //  */

    public function findDefinitionsByRome($rome) // return definition - type 1
    {
        return $this->createQueryBuilder('d')
            ->select('d.libelle')
            ->join('d.romes', 'r')
            ->andWhere('r.id = :rome')
            ->andWhere('d.idType = :idType')
            ->setParameters(['rome'=> $rome, 'idType' => 1])
            ->orderBy('d.id', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }

    public function findAccesMetierByRome($rome) // return acces à l'emploi - type 2
    {
        return $this->createQueryBuilder('d')
            ->select('d.libelle')
            ->join('d.romes', 'r')
            ->andWhere('r.id = :rome')
            ->andWhere('d.idType = :idType')
            ->setParameters(['rome'=> $rome, 'idType' => 2])
            ->orderBy('d.id', 'ASC')
            ->getQuery()
            ->getResult()
            ;
    }

    public function findConditionsByRome($rome) // return conditions - type 3
    {
        return $this->createQueryBuilder('d')
            ->select('d.libelle')
            ->join('d.romes', 'r')
            ->andWhere('r.id = :rome')
            ->andWhere('d.idType = :idType')
            ->setParameters(['rome'=> $rome, 'idType' => 3])
            ->orderBy('d.id', 'ASC')
            ->getQuery()
            ->getResult()
            ;
    }


    /*
    public function findOneBySomeField($value): ?Description
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

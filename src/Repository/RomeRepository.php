<?php

namespace App\Repository;

use App\Entity\Rome;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Rome|null find($id, $lockMode = null, $lockVersion = null)
 * @method Rome|null findOneBy(array $criteria, array $orderBy = null)
 * @method Rome[]    findAll()
 * @method Rome[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RomeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Rome::class);
    }

    // /**
    //  * @return Recruteur[] Returns an array of Recruteur objects
    //  */
//    /*
    public function findBySearchTerm($filtre)
    {
        //dd($filtre);
        $query = $this->createQueryBuilder('r')
            ->select()
            ->distinct()
            ->leftJoin('r.metiers', 'm')
            ->join('r.competences', 'c');
        foreach ($filtre as $k => $f)
        $query->andWhere("r.code LIKE :filtre$k OR r.libelle LIKE :filtre$k OR m.libelle LIKE :filtre$k OR c.libelle LIKE :filtre$k")
            ->setParameter("filtre$k", '%'.$f.'%');

        return $query->orderBy('r.id', 'ASC')
//            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }


    /*
    public function findOneBySomeField($value): ?Recruteur
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

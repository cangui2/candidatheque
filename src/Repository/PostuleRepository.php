<?php

namespace App\Repository;

use App\Entity\Postule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Postule|null find($id, $lockMode = null, $lockVersion = null)
 * @method Postule|null findOneBy(array $criteria, array $orderBy = null)
 * @method Postule[]    findAll()
 * @method Postule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PostuleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Postule::class);
    }
    public function findViewsCandidatForRecruteur($recruteur_id){

        return $this->createQueryBuilder('p')
            ->join('p.offre', 'o')
            ->where('o.recruteur = :recruteur')
            ->setParameters(['recruteur' => $recruteur_id])
            ->getQuery()
            ->getResult()
            ;
    }
    /*
    public function findViewsRecruteurForCandidat($candidat_id){

        return $this->createQueryBuilder('p')
            ->join('p.offre', 'o')
            ->join('c.cv','c')
            ->join('c.candidat','ca')
            ->where('ca.candidat = :candidat')
            ->setParameters(['candidat' => $candidat_id])
            ->getQuery()
            ->getResult()
            ;
    }*/
    
    // /**
    //  * @return Postule[] Returns an array of Postule objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Postule
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

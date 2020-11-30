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

public function countByCandidat($candidat_id)
{
    return $this->createQueryBuilder('o')
    ->join('postule', 'p')
    ->Where('p.candidat = :candidat_id')
    ->setParameters(['candidat_id' => $candidat_id])
    ->getQuery()
    ->getResult();
    
}


}

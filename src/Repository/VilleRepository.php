<?php

namespace App\Repository;

use App\Entity\Ville;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Ville|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ville|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ville[]    findAll()
 * @method Ville[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VilleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Ville::class);
    }

    public function searchAround($id_ville, $rayon)
    {
        $ville = $this->find($id_ville);

        if ($rayon >= 1) {
            $latitude=$ville->getLatitude();
            $longitude=$ville->getLongitude();

            $query = $this->createQueryBuilder('v')
                ->select('v.id as id','v.nom as nom ','v.latitude','v.longitude')
                ->where ('SQRT(((v.latitude-:la2)*(v.latitude-:la2)) + ((v.longitude-:lo2)*(v.longitude-:lo2)))*100 <= :rayon')
                ->setParameters(array(
                    'rayon'=>$rayon,
                    'la2'=>$latitude,
                    'lo2'=>$longitude,
            ));
            $entities=$query
                ->getQuery()
                ->getResult();

            return $entities;
        }
    }

    // /**
    //  * @return Ville[] Returns an array of Ville objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Ville
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

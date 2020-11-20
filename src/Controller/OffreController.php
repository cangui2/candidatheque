<?php

namespace App\Controller;

use App\Entity\Offre;
use App\Entity\Ville;
use App\Entity\Region;
use App\Entity\Departement;
use App\Form\OffreType;
use App\Repository\PaysRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

class OffreController extends AbstractController
{
    protected $em;
    protected $session;
    protected $security;
    protected $pRepo;


    public function __construct(EntityManagerInterface $em, SessionInterface $session, Security $security, PaysRepository $pRepo){
        $this->em = $em;
        $this->session = $session;
        $this->security = $security;
        $this->pRepo = $pRepo;
    }

//    AUTOCOMPLETE FOR METIER, REGION, DEPARTEMENT, VILLE

    /**
     * @Route("/metiers/autocomplete", name="metier_autocomplete")
     */
    public function autocompleteMetierAction(Request $request)
    {
        $names = array();
        $term = trim(strip_tags($request->get('term')));

        $entities = $this->em->getRepository('App\Entity\Metier')->createQueryBuilder('c')
            ->where('c.libelle LIKE :libelle')
            ->setParameter('libelle', '%'.$term.'%')
            ->getQuery()
            ->getResult();
        $libelles=[];
        foreach ($entities as $entity)
        {
            $libelles[] = $entity->getLibelle();
        }

        $response = new JsonResponse();
        $response->setData($libelles);

        return $response;
    }

    /**
     * @Route("/region/autocomplete", name="region_autocomplete")
     */
    public function autocompleteRegionAction(Request $request)
    {
        $term = trim(strip_tags($request->get('term')));

        $entities = $this->em->getRepository('App\Entity\Region')->createQueryBuilder('r')
            ->where('r.nom LIKE :nom')
            ->setParameter('nom', '%'.$term.'%')
            ->getQuery()
            ->getResult();
        $noms=[];
        foreach ($entities as $entity)
        {
            $noms[] = $entity->getNom();
        }

        $response = new JsonResponse();
        $response->setData($noms);

        return $response;
    }
    /**
     * @Route("/departement/autocomplete", name="departement_autocomplete")
     */
    public function autocompleteDepartementAction(Request $request)
    {
        $term = trim(strip_tags($request->get('term')));

        $entities = $this->em->getRepository('App\Entity\Departement')->createQueryBuilder('d')
            ->where('d.nom LIKE :nom')
            ->setParameter('nom', '%'.$term.'%')
            ->getQuery()
            ->getResult();
        $noms=[];
        foreach ($entities as $entity)
        {
            $noms[] = $entity->getNom();
        }

        $response = new JsonResponse();
        $response->setData($noms);

        return $response;
    }

    /**
     * @Route("/ville/autocomplete", name="ville_autocomplete")
     */
    public function autocompleteVilleAction(Request $request)
    {
        $term = trim(strip_tags($request->get('term')));
        $dep = trim(strip_tags($request->get('dep')));

        $query = $this->em->getRepository('App\Entity\Ville')->createQueryBuilder('v')
            ->where('v.nom LIKE :nom')
            ->setParameter('nom', '%'.$term.'%');
        if ($dep) {
            $query->join("v.departement", "d")
                ->andWhere("d.nom=:dep")
                ->setParameter("dep", $dep);
        }

        $entities = $query->getQuery()
            ->getResult();
        $noms=[];
        foreach ($entities as $entity)
        {
            $noms[] = $entity->getNom();
        }

        $response = new JsonResponse();
        $response->setData($noms);

        return $response;
    }
//    END AUTOCOMPLETE


//    LISTE OFFRES ENTREPRISE
//

//    CREATION DE L'OFFRE

    /**
     * @Route("/entreprise/offre_creation", name="offre_creation")
     */
    public function create(Request $request)
    {
        $offre = new Offre();
        $offreForm = $this->createForm(OffreType::class, $offre);
        $recruteur = $this->security->getUser()->getRecruteur();
        $entreprise = $this->security->getUser()->getRecruteur()->getEntreprise();

        $offreForm->handleRequest($request);


        if($offreForm->isSubmitted() && $offreForm->isValid()){

//            dd($offre);
            if($offre->getVille() != null || $offre->getDepartement() != null || $offre->getRegion() != null){
                $pays = $this->pRepo->findOneBy(['nom' => 'France']);
                $offre->setPays($pays);
            }

            $offre->setRecruteur($recruteur);
            $offre->setEntreprise($entreprise);

            $this->em->persist($offre);
            $this->em->flush();
            $this->addFlash('success', 'Publication réussie! Votre offre est dès à présent consultable sur notre site.');

//            TODO
            return $this->redirectToRoute('dashboard_entreprise');
        }

        return $this->render('offre/offre_creation.html.twig', [
            'offre' => $offre,
            'offreForm' => $offreForm->createView()

        ]);
    }
}

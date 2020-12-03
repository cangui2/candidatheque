<?php

namespace App\Controller;

use App\Entity\Offre;
use App\Entity\Ville;
use App\Entity\Region;
use App\Entity\Departement;
use App\Form\OffreType;
use App\Repository\CompetenceRepository;
use App\Repository\MetierRepository;
use App\Repository\OffreRepository;
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
    protected $offRepo;
    protected $compRepo;
    protected $mtRepo;


    public function __construct(EntityManagerInterface $em, SessionInterface $session, Security $security, PaysRepository $pRepo, OffreRepository $offRepo, CompetenceRepository $compReepo, MetierRepository $mtRepo){
        $this->em = $em;
        $this->session = $session;
        $this->security = $security;
        $this->pRepo = $pRepo;
        $this->offRepo = $offRepo;
        $this->compRepo = $compReepo;
        $this->mtRepo = $mtRepo;
    }

//    AUTOCOMPLETE FOR METIER, REGION, DEPARTEMENT, VILLE

    /**
     * @Route("/metiers/autocomplete", name="metier_autocomplete")
     */
    public function autocompleteMetierAction(Request $request)
    {
        $term = trim(strip_tags($request->get('term')));

        $entities = $this->em->getRepository('App\Entity\Metier')->createQueryBuilder('c')
            ->where('c.libelle LIKE :libelle')
            ->setParameter('libelle', '%'.$term.'%')
            ->getQuery()
            ->getResult();
        $libelles=[];
        foreach ($entities as $entity)
        {
            $libelles[] = [ "value" => $entity->getId(), "label" => $entity->getLibelle()];
            // $libelles[] = $entity->getLibelle();
        }

        $response = new JsonResponse();
        $response->setData($libelles);

        return $response;
    }

    /**
     * @Route("/competences_ajax", name="competences_ajax")
     */
    public function listeCompetences(Request $request) {

        $id_metier = $request->query->get("metier");
//        dd($id_metier);
        $metier = $this->mtRepo->find($id_metier);
//

        $rome = $metier->getRome()->getId();
//        dd($rome);
        $competences = $this->compRepo->findCompetencesByRome($rome);


        $response = new JsonResponse();
        $response->setData($competences);

        return $response;
    }

    /**
     * @Route("/langues/autocomplete", name="langues_autocomplete")
     */
    public function listeLangues(Request $request) {

        $term = trim(strip_tags($request->get('term')));

        $entities = $this->em->getRepository('App\Entity\Langue')->createQueryBuilder('l')
            ->where('l.nom LIKE :nom')
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

    /**
     * @Route("/entreprise/offres_liste", name="offres_liste")
     * @Route("/entreprise/offres_recruteur", name="offres_recruteur")
     */
    public function listAll(Request $request)
    {
        $this->denyAccessUnlessGranted('ROLE_RECRUTEUR', null, 'User tried to access a page without having ROLE_RECRUTEUR');

        $route = $request->attributes->get('_route');
        $recruteur = $this->security->getUser()->getRecruteur();
        $comp = $recruteur->getEntreprise();
        $liste_offres = $this->offRepo->findByCompany($comp);
        $offres_recruteur = $this->offRepo->findByCompanyAndRecruiter($comp, $recruteur);

        if($route == "offres_liste"){

            return $this->render('offre/offres_liste.html.twig', [
                'recruteur' => $recruteur,
                'comp' => $comp,
                'liste_offres' => $liste_offres,
                'offres_recruteur' => $offres_recruteur
            ]);
        }
        elseif ($route == "offres_recruteur"){
//            dd($recruteur);

            return $this->render('offre/offres_recruteur.html.twig', [
                'recruteur' => $recruteur,
                'comp' => $comp,
                'offres_recruteur' => $offres_recruteur
            ]);
        }

    }

//   LIST END

//    CREATION DE L'OFFRE

    /**
     * @Route("/entreprise/offres_creation", name="offres_creation")
     */
    public function create(Request $request)
    {
        $this->denyAccessUnlessGranted('ROLE_RECRUTEUR', null, 'User tried to access a page without having ROLE_RECRUTEUR');

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
            if($offre->getTitre() != null){
                $titre = $offre->getTitre();
                $offre->setTitre($titre . " (H/F)");
            }

            $offre->setRecruteur($recruteur);
            $offre->setEntreprise($entreprise);

            $this->em->persist($offre);
            $this->em->flush();
            $this->addFlash('success', 'Publication réussie! Votre offre est dès à présent consultable sur notre site.');

//            TODO
            return $this->redirectToRoute('dashboard_entreprise');
        }

        return $this->render('offre/offres_creation.html.twig', [
            'offre' => $offre,
            'offreForm' => $offreForm->createView()

        ]);
    }

//    END CREATE

//    START UPDATE OFFRE

    /**
     * @Route("/entreprise/offres_modification/{offre}", name="offres_modification")
     */
    public function edit(Request $request, Offre $offre){

        $this->denyAccessUnlessGranted('ROLE_RECRUTEUR', null, 'User tried to access a page without having ROLE_RECRUTEUR');

        $recruteur = $this->security->getUser()->getRecruteur();
        $comp = $recruteur->getEntreprise();
        $liste_offres = $this->offRepo->findByCompany($comp);
        $offres_recruteur = $this->offRepo->findByCompanyAndRecruiter($comp, $recruteur);

        $offreUpdateForm = $this->createForm(OffreType::class, $offre);

        if (in_array($offre, $liste_offres) || in_array($offre, $offres_recruteur)) {

            $offreUpdateForm->handleRequest($request);

            if($offreUpdateForm->isSubmitted() && $offreUpdateForm->isValid()){

                $offre->setDateModification(new \DateTime());
                $offre->setRecruteur($recruteur);

                $this->em->persist($offre);
                $this->em->flush();
                $this->addFlash('info', 'Vos modifications ont bien été enregistrées!');

                return $this->redirectToRoute('offres_liste');
            }
            return $this->render('offre/offres_modification.html.twig', [
                'offre' => $offre,
                'offreUpdateForm' => $offreUpdateForm->createView()
            ]);
        }
        return $this->redirectToRoute('dashboard_entreprise');

    }
    //  END UPDATE FUNCTION

    //START DELETE FUNCTION

    /**
     * @Route("/entreprise/offres_suppression/{offre}", name="offres_suppression", methods="DELETE"))
     */

    // Annuler une commande

    public function cancel(Offre $offre, Request $request)
    {
        $this->denyAccessUnlessGranted('ROLE_RECRUTEUR', null, 'User tried to access a page without having ROLE_RECRUTEUR');

        if($this->isCsrfTokenValid('delete' . $offre->getId(), $request->get('_token'))){


            $this->em->remove($offre);
            $this->em->flush();

            $this->addFlash('info', 'Votre offre a bien été supprimée!');
            return $this->redirectToRoute('offres_liste');
        }

        return $this->redirectToRoute('dashboard_entreprise');
    }
}

<?php

namespace App\Controller\Admin;
use App\Controller\Admin\UserCrudController;
use App\Entity\Candidat;
use App\Entity\Entreprise;
use App\Entity\Offre;
use App\Entity\Recruteur;
use App\Entity\User;
use App\Repository\OffreRepository;
use App\Repository\UserRepository;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\UserMenu;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;
use EasyCorp\Bundle\EasyAdminBundle\Router\CrudUrlGenerator;
use Symfony\Component\Security\Core\User\UserInterface;

class DashboardController extends AbstractDashboardController
{
    protected $uRepo;
    protected $ofRepo;

    public function __construct(UserRepository $uRepo, OffreRepository $ofRepo){
        $this->uRepo = $uRepo;
        $this->ofRepo = $ofRepo;
    }


    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        $total_users = count($this->uRepo->findAll());
        $cd_users = count($this->uRepo->findUsersByRoleCandidat());
        $pro_users = count($this->uRepo->findUsersByRoleRecruteur());
        $vf_users = count($this->uRepo->findUsersByRoleVerify());
        $active_users = count($this->uRepo->findUsersByActiveField());

        $total_offres = count($this->ofRepo->findAll());

        return $this->render('admin/admin_dashboard.html.twig', [
            'total_users' => $total_users,
            'cd_users' => $cd_users,
            'pro_users' => $pro_users,
            'vf_users' => $vf_users,
            'total_offres' => $total_offres,
            'active_users' => $active_users
        ]);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle(' <h4 style="color: #da70d6"><b>[ Candidatheque ]</b></h4>');
    }

    public function configureCrud(): Crud
    {
        return Crud::new();
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linktoDashboard('__ea__page_title.dashboard', 'fa fa-home');

        yield MenuItem::linkToCrud('Utilisateurs', 'fas fa-users', User::class);
        yield MenuItem::linktoRoute('Comptes pro à confirmer', 'fas fa-bell',"users_verify");
        yield MenuItem::linkToCrud('Candidats', 'fas fa-graduation-cap', Candidat::class);
        yield MenuItem::linkToCrud('Recruteurs', 'fas fa-address-card', Recruteur::class);
        yield MenuItem::linkToCrud('Entreprises', 'fas fa-building', Entreprise::class);
        yield MenuItem::linkToCrud('Offres', 'fas fa-folder-open', Offre::class);

    }

    public function configureUserMenu(UserInterface $user): UserMenu
    {
        return parent::configureUserMenu($user)
            ->setName($user->getUsername())
//            ->setAvatarUrl()
            ->setGravatarEmail($user->getUsername());
    }

    public function configureAssets(): Assets
    {
        return Assets::new()->addCssFile('assets/css/admin.css');
    }
}

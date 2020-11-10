<?php

namespace App\Controller\Admin;
use App\Controller\Admin\UserCrudController;
use App\Entity\Candidat;
use App\Entity\Entreprise;
use App\Entity\Recruteur;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;
use EasyCorp\Bundle\EasyAdminBundle\Router\CrudUrlGenerator;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
         return parent::index();
        // redirect to some CRUD controller
//        $routeBuilder = $this->get(CrudUrlGenerator::class)->build();

//        return $this->redirect($routeBuilder->setController(UserCrudController::class)->generateUrl());

        // you can also redirect to different pages depending on the current user
        //  if ('jane' === $this->getUser()->getUsername()) {
        //      return $this->redirect('...');
        //  }

        // you can also render some template to display a proper Dashboard
        // (tip: it's easier if your template extends from @EasyAdmin/page/content.html.twig)
//          return $this->render('admin/confirm_pro_users.html.twig');
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

        yield MenuItem::linkToCrud('User', 'fas fa-folder-open', User::class);
        yield MenuItem::linkToCrud('Candidat', 'fas fa-folder-open', Candidat::class);
        yield MenuItem::linkToCrud('Recruteur', 'fas fa-folder-open', Recruteur::class);
        yield MenuItem::linkToCrud('Entreprise', 'fas fa-folder-open', Entreprise::class);
    }



    public function configureAssets(): Assets
    {
        return Assets::new()->addCssFile('assets/css/admin.css');
    }
}

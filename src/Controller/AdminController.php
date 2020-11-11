<?php
namespace App\Controller;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\UserRepository;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Context\AdminContext;

class AdminController extends AbstractController
{
    private $uRepo;

    public function __construct(UserRepository $uRepo){
        $this->uRepo = $uRepo;
    }

    /**
     * @Route("/test", name="test")
     */

    public function confirmUsers(AdminContext $context)
    {
        $users = $this->uRepo->findUsersByRoleVerify();
//        dd($users);
        return $this->render('admin/confirm_pro_users.html.twig', [
            'users' => $users
        ]);
    }
}
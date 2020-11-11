<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Controller\Admin\AdminController;
use App\Repository\UserRepository;
use App\Service\MailService;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Context\AdminContext;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class UserCrudController extends AbstractCrudController
{
    protected $uRepo;
    protected $ms;
    protected $em;

    public function __construct(UserRepository $uRepo, MailService $ms, EntityManagerInterface $em){
        $this->uRepo = $uRepo;
        $this->ms = $ms;
        $this->em = $em;
    }

    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('User')
            ->setEntityLabelInPlural('Users')
            ->setPageTitle(Crud::PAGE_INDEX, 'Liste des utilisateurs');
//            ->setSearchFields(['id', 'email', 'roles', 'actif', 'recruteur.id', 'candidat.id']);
    }

    public function configureFields(string $pageName): iterable
    {
        $id = IntegerField::new('id', 'ID');
        $email = EmailField::new('email');
        $actif = BooleanField::new('actif');
        $candidat = AssociationField::new('candidat');
        $recruteur = AssociationField::new('recruteur');
        $roles = ArrayField::new('roles');
        $password = TextField::new('password');
        $authToken = TextField::new('authToken');
        $resetToken = TextField::new('resetToken');

        if (Crud::PAGE_INDEX === $pageName) {
            return [$id, $email,  $roles, $actif, $candidat, $recruteur];
        } elseif (Crud::PAGE_DETAIL === $pageName) {
            return [$id, $email, $roles, $password, $actif, $candidat, $recruteur, $authToken, $resetToken];
        }elseif (Crud::PAGE_NEW === $pageName) {
            return [$email, $roles, $actif, $candidat, $recruteur];
        }elseif (Crud::PAGE_EDIT === $pageName) {
            return [$email, $roles, $password, $actif, $candidat, $recruteur];
        }
    }

    public function configureActions(Actions $actions): Actions
    {
        $user_confirm = Action::new('user_confirm', 'Confirmer', 'fa fa-ok')
            ->linkToRoute("user_confirm", function (User $user){
                return [
                    'user' =>$user->getId()
                ];
            })
            ->addCssClass('btn btn_warning');

//            TODO
//            ->displayIf(function (User $user) {
//                return $user->getRoles() === ["ROLE_USER, ROLE_RECRUTEUR, ROLE_TO_VERIFY"];
//            });
        return $actions
            // ...
//            ->remove(Crud::PAGE_INDEX, Action::NEW)
            ->disable(Action::NEW)
            ->add(Crud::PAGE_INDEX, $user_confirm)
            ;
    }
    public function configureFilters(Filters $filters): Filters
    {
        return $filters
            ->add('roles')
            ->add('recruteur')
            ->add('email')
            ;
    }

    /**
     * @Route("admin/user_verify", name="user_verify")
     */

    public function listVerifyUsers()
    {
        $users = $this->uRepo->findUsersByRoleVerify();
//        dd($users);
        return $this->render('admin/confirm_pro_users.html.twig', [
            'users' => $users
        ]);
    }
    /**
     * @Route("admin/user_confirm/{user}", name="user_confirm")
     */
    public function confirmUser(User $user, Request $request){

        $submittedToken = $request->request->get('_token');


        if ($this->isCsrfTokenValid('confirm', $submittedToken)) {

            dd($submittedToken);
            return new Response('Opération interdite!');
        }else{

            $user->setRoles(["ROLE_USER", "ROLE_RECRUTEUR"]);

            // Generate authToken
            $authToken = $this->ms->generateToken($user->getId(), $user->getEmail());

            $user->setAuthToken($authToken);
            $this->em->flush();

            $url = $this->generateUrl('app_confirm', ['token' => $authToken], UrlGeneratorInterface::ABSOLUTE_URL);

            // send an email
            $nom = $user->getRecruteur()->getNom();
            $prenom = $user->getRecruteur()->getPrenom();
            $mail = $user->getEmail();

            $this->ms->sendAccountActivationMessage($user, $mail, $url, $nom, $prenom);

            return $this->redirectToRoute('admin');

        }

    }

//    CONFIRMER TOUS LES UTILISATEURS PRO

    /**
     * @Route("admin/users_confirm_all", name="users_confirm_all")
     */
    public function confirmUserAll(Request $request){

        $submittedToken = $request->request->get('_token');

        if ($this->isCsrfTokenValid('confirm_all', $submittedToken)) {


            return new Response('Opération interdite!');
        }else{
            $users = $this->uRepo->findUsersByRoleVerify();
            foreach ($users as $user){

                $user->setRoles(["ROLE_USER", "ROLE_RECRUTEUR"]);

                // Generate authToken
                $authToken = $this->ms->generateToken($user->getId(), $user->getEmail());

                $user->setAuthToken($authToken);
                $this->em->flush();

                $url = $this->generateUrl('app_confirm', ['token' => $authToken], UrlGeneratorInterface::ABSOLUTE_URL);

                // send an email
                $nom = $user->getRecruteur()->getNom();
                $prenom = $user->getRecruteur()->getPrenom();
                $mail = $user->getEmail();

                $this->ms->sendAccountActivationMessage($user, $mail, $url, $nom, $prenom);

                return $this->redirectToRoute('admin');

            }


        }

    }
}

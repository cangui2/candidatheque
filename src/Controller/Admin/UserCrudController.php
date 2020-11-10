<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Controller\Admin\AdminController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;
use EasyCorp\Bundle\EasyAdminBundle\Config\Filters;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;

class UserCrudController extends AbstractCrudController
{
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
        $test = Action::new('test')
            ->linkToRoute("test");
        return $actions
            // ...
//            ->remove(Crud::PAGE_INDEX, Action::NEW)
            ->disable(Action::NEW)
            ->add(Crud::PAGE_INDEX, $test)
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
}

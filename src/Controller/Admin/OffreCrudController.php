<?php

namespace App\Controller\Admin;

use App\Entity\Offre;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class OffreCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Offre::class;
    }

    public function configureFields(string $pageName): iterable
    {
        $id = IntegerField::new('id', 'ID')->onlyOnIndex();
        $datePublication = DateField::new('datePublication');
        $description = TextareaField::new('description');
        $metier = AssociationField::new('metier');
        $postule = AssociationField::new('postule');

        if (Crud::PAGE_INDEX === $pageName) {
            return [$id, $datePublication,  $description, $metier, $postule];
        } elseif (Crud::PAGE_DETAIL === $pageName) {
            return [$datePublication,  $description, $metier, $postule];
        }elseif (Crud::PAGE_NEW === $pageName) {
            return [$datePublication,  $description, $metier, $postule];
        }elseif (Crud::PAGE_EDIT === $pageName) {
            return [$datePublication,  $description, $metier, $postule];
        }
    }
}

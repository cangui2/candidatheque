<?php
namespace App\Security;

use App\Entity\User as AppUser;
use Symfony\Component\Security\Core\Exception\AccountExpiredException;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAccountStatusException;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class UserChecker implements UserCheckerInterface
{
    public function checkPreAuth(UserInterface $user)
    {
        if (!$user instanceof AppUser) {
            return;
        }

        if ($user->getAuthToken() !== null) {

//            dd($user->getAuthToken());
            throw new CustomUserMessageAccountStatusException("Vous n'avez pas encore activé votre compte! Vérifiez vos emails, un  message contenant le lien d'activation vous a été adressé après inscription!");

        }
        elseif ($user->getActif() === false){
            throw new CustomUserMessageAccountStatusException("Vous n'avez plus de compte actif sur notre site.");
        }

//        if ($user->isDeleted()) {
//            // the message passed to this exception is meant to be displayed to the user
//            throw new CustomUserMessageAccountStatusException("Vous n'avez plus de compte sur notre site.");
//        }
    }

    public function checkPostAuth(UserInterface $user)
    {
        if (!$user instanceof AppUser) {
            return;
        }

//        // user account is expired, the user may be notified
//        if ($user->isExpired()) {
//            throw new AccountExpiredException('...');
//        }
    }
}




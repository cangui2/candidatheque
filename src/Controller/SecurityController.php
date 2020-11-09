<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        if($this->isGranted("IS_AUTHENTICATED_REMEMBERED"))
        {
            return $this->redirectToRoute("login_success");
        }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/login_success", name="login_success")
     */
    public function userLoginRedirection(SessionInterface $session, LoggerInterface $logger, UserRepository $uRepo, Request $request)
    {
        if ($this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')){

            return $this->redirectToRoute("home");
        }
        elseif($this->get('security.authorization_checker')->isGranted('ROLE_CANDIDAT')){

            $candidat = $this->getUser()->getCandidat();
//            dd($candidat->getPrenom());

//            TODO Redirect to candidat dashboard

            return $this->redirectToRoute("home");
        }
        elseif($this->get('security.authorization_checker')->isGranted('ROLE_RECRUTEUR')){

            $recruteur = $this->getUser()->getRecruteur();
//          dd($recruteur->getEntreprise()->getSiret());
//            TODO Redirect to pro dashboard

            return $this->redirectToRoute("home");
        }
        return $this->redirectToRoute("home");
    }


    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}

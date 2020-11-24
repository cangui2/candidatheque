<?php
namespace App\Service;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

class MailService {

    protected $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }


// CREATE AUTHTOKEN & RESETTOKEN

    public function generateToken($id, $mail) {

        $cle = '';

        while (($len = \strlen($cle)) < 20) {
            $size = 20 - $len;

            $bytes = \random_bytes($size);

            $cle .= \substr(
                \str_replace(['/', '+', '='], '', \base64_encode($bytes)), 0, $size);
        }

        $chaine_json = \json_encode([$cle, $id, $mail, (\time()), $cle]);

        $token = base64_encode($chaine_json);
        //dd($token);

        return $token;

    }

//    USER ACCOUNT ACTIVATION EMAIL

// Envoi de mail au nouvel utilisateur après création de compte

    public function sendAccountActivationMessage($user, $mail, $url, $nom, $prenom)
    {

        $email = (new TemplatedEmail())

            ->from('candidatheque<nepasrepondre@candidatheque.com>')
            ->to(new Address($mail, $nom . " " . $prenom))
            ->subject('Activation  de votre compte sur Candidathèque')
            ->htmlTemplate('emails/account_activation_mail.html.twig')
            ->context([
                'user' => $user,
                'mail' => $mail,
                'url' => $url,
                'nom' => $nom,
                'prenom' => $prenom
            ]);

        $this->mailer->send($email);
        }
//        END  ACCOUNT ACTIVATION MAIL


//  ADMIN ALERT MAIL AFTER PRO REGISTRATION

    public function sendAlertMessage($rc, $mail, $url)
    {

        $email = (new TemplatedEmail())

            ->from('candidatheque<nepasrepondre@candidatheque.com>')
            ->to('mihaeladeaca@gmail.com')
            ->subject("Nouveau compte professionnel à confirmer sur la Candidathèque")
            ->htmlTemplate('emails/new_registration_alert.html.twig')
            ->context([
                'rc' => $rc,
                'mail' => $mail,
                'url' => $url,

            ]);

        $this->mailer->send($email);
    }







}
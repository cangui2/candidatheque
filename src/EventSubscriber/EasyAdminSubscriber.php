<?php
# src/EventListener/EasyAdminSubscriber.php
namespace App\EventSubscriber;

use App\Entity\User;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityUpdatedEvent;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityPersistedEvent;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    private $passwordEncoder;


    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        //dd("test construct ");
        $this->passwordEncoder = $passwordEncoder;

    }

    public static function getSubscribedEvents()
    {
        return [
            BeforeEntityPersistedEvent::class => ['setPassword'],
            BeforeEntityUpdatedEvent::class => ['updatePassword']
        ];
    }

    public function setPassword(BeforeEntityPersistedEvent $event)
    {
        //dd("test set passwd");
        $entity = $event->getEntityInstance();

        if (!($entity instanceof User)) {
            return;
        }


        $entity->setPassword(
            $this->passwordEncoder->encodePassword(
                $entity,
                $entity->getPassword()
            )
        );

    }

    public function updatePassword(BeforeEntityUpdatedEvent $event)
    {
        // dd("test update passwd");
        $entity = $event->getEntityInstance();

        if (!($entity instanceof User)) {
            return;
        }

        //dd($entity);
        $entity->setPassword(
            $this->passwordEncoder->encodePassword(
                $entity,
                $entity->getPassword()
            )
        );

    }



}
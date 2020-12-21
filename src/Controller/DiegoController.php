<?php

namespace App\Controller;

use App\Entity\Diego;
use App\Form\DiegoType;
use App\Repository\DiegoRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/diego")
 */
class DiegoController extends AbstractController
{
    /**
     * @Route("/", name="diego_index", methods={"GET"})
     */
    public function index(DiegoRepository $diegoRepository): Response
    {
        return $this->render('diego/index.html.twig', [
            'diegos' => $diegoRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="diego_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $diego = new Diego();
        $form = $this->createForm(DiegoType::class, $diego, [
            // 'csrf_protection' => false
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($diego);
            $entityManager->flush();

            return $this->redirectToRoute('diego_index');
        }

        $data_form = [
            "nom" => [ "value" => $form->getViewData()->getNom()?$form->getViewData()->getNom():"", "error" => "" ],
            "prenom" => [ "value" => $form->getViewData()->getPrenom()?$form->getViewData()->getPrenom():"", "error" => "" ],
            "ville" => [ "value" => $form->getViewData()->getVille()?$form->getViewData()->getVille():"", "error" => "" ],
        ];
        foreach ($form->getErrors(true, false) as $error) {
            foreach($error as $er) {
                $data_form[explode(".", $er->getCause()->getPropertyPath())[1]]["error"] = $er->getMessage();
            }
        }
        //dd($data_form);

        return $this->render('diego/new.html.twig', [
            'diego' => $diego,
            'form' => $form->createView(),
            'data_form' => $data_form
        ]);
    }

    /**
     * @Route("/{id}", name="diego_show", methods={"GET"})
     */
    public function show(Diego $diego): Response
    {
        return $this->render('diego/show.html.twig', [
            'diego' => $diego,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="diego_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Diego $diego): Response
    {
        $form = $this->createForm(DiegoType::class, $diego);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('diego_index');
        }

        return $this->render('diego/edit.html.twig', [
            'diego' => $diego,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="diego_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Diego $diego): Response
    {
        if ($this->isCsrfTokenValid('delete'.$diego->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($diego);
            $entityManager->flush();
        }

        return $this->redirectToRoute('diego_index');
    }
}

<?php

namespace App\Controller;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BlogController extends AbstractController
{






// AFFICHAGE LISTE ARTICLES
        /**
     * @Route("/blog/liste", name="blog")
     */
    public function articles_liste(ArticleRepository $repo): Response
    {
        $liste = $repo->findAll();
        // dd($liste);
        return $this->render("blog/liste.html.twig", [
            'liste' => $liste
        ]);
    }


//  AFFICHAGE DETAIL ARTICLE
        /**
     * @Route("/blog/{id}", name="blog_article")
     */
    public function show($id){
        $repo = $this->getDoctrine()->getRepository(Article::class);
        
        $article = $repo->find($id);

        return $this->render('blog/detail.html.twig', [
        'article'=> $article
        ]);   
    }

}

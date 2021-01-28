import React, {Component, useEffect, useState} from 'react'
import axios from 'axios'
import {Col, Form, Button, Container, Row} from "react-bootstrap";
import AsyncSelect from "react-select/async";
import ReactDOM from "react-dom";
import Filtre from "./component/filtre";
import OffreListe from "./component/offre_liste";
import OffreRecherche from "./component/offre_recherche";
import './recherche.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
    const [liste,setListe]=useState([]);
    const [filtreContrat,setFiltreContrat]=useState([0]);


    let str=window.location.href;
    let url=new URL(str);
    let met=url.searchParams.get("metier");
    let vil=url.searchParams.get("ville");
    let cont=url.searchParams.get("contrat");
    const [idMetier, setIdMetier] = useState(met);
    const[idVille,setIdVille]=useState(vil);
    const [idContrat,setIdContrat]=useState(cont);
    const [rayon,setRayon]=useState(1)
    const [possibleCdi,setPossibleCdi]=useState(false);
    const [urgent,setUrgent]=useState(false);



    const handleIdChange =()=>{
//+'&cdi='+possibleCdi+'&urgent='+urgent
        axios.get(`/api/search?` + '&metier=' + idMetier+ '&ville='+idVille+'&keyword=' + idContrat +'&filtre1='+ filtreContrat+'&rayon='+rayon)
            .then((result) => {
                setListe(result.data);
                setIdVille(idVille);
                setIdMetier(idMetier);
                console.log("api get recherche")
                console.log(result)
            })
            .catch(error => console.log(error));

    }


    const handleFiltreChange = (filtre) => {

        setFiltreContrat(filtre);
    }
    const handleRayonChange =(rayon)=>{
        console.log(idVille);
        setRayon(rayon);
    }
    const handleBooleenChange=(res,res2)=>{
        setPossibleCdi(res);
        setUrgent(res2);
    }

    useEffect(()=>{
        handleIdChange(idVille,idMetier,idContrat,filtreContrat)
        setRayon(rayon);
        console.log(filtreContrat);
        console.log('use effect actif page principal')
    },[filtreContrat,rayon])



        return (
            <Container>
                <br/>
            <OffreRecherche
                onIdChange={(idVille,idMetier,idContrat)=>handleIdChange(idVille,idMetier,idContrat)}
            />
            <br/>
                <Row>
                    <Col xs={3} className='card'>
                        <Filtre
                            onFiltreChange={handleFiltreChange}
                            onRayonChange={handleRayonChange}
                           // onBoolenChange={handleBooleenChange}
                        />
                    </Col>
                    <Col >
                        <OffreListe liste={liste}/>
                    </Col>

                </Row>
    </Container>




        )

}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('list')
);





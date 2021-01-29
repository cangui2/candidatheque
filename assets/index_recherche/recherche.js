import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Col, Container, Row} from "react-bootstrap";
import ReactDOM from "react-dom";
import Filtre from "./component/filtre";
import OffreListe from "./component/offre_liste";
import OffreRecherche from "./component/offre_recherche";
import './recherche.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
    const [liste, setListe] = useState([]);
    const [filtreContrat, setFiltreContrat] = useState([0]);


    let str = window.location.href;
    let url = new URL(str);
    let met = url.searchParams.get("metier");
    let vil = url.searchParams.get("ville");
    let cont = url.searchParams.get("contrat");
    const [idMetier, setIdMetier] = useState(met);
    const [idVille, setIdVille] = useState(vil);
    const [idContrat, setIdContrat] = useState(cont);
    const [rayon, setRayon] = useState(1)
    const [possibleCdi, setPossibleCdi] = useState(null);
    const [urgent, setUrgent] = useState();
    const [salaire,setSalaire]=useState([0]);


    const handleChangeValue = () => {

//+'&urgent='+urgent


        axios.get(`/api/search?` + '&metier=' + idMetier + '&ville=' + idVille + '&keyword=' + idContrat + '&filtre1=' + filtreContrat + '&rayon=' + rayon+'&cdi='+possibleCdi+'&salaire='+salaire)
            .then((result) => {
                setListe(result.data);
                setIdVille(idVille);
                setIdMetier(idMetier);
                console.log("api get recherche")
                console.log(result)
            })
            .catch(error => console.log(error));
    }
    const handleIdVilleChange =(value)=>{
        setIdVille(value);
           }
    const handleIdMetierChange=(value)=>{
        setIdMetier(value);
           }
    const handleChangeKeyword =(value)=>{
        setIdContrat(value);
           }
    const handleFiltreChange = (filtre) => {
        setFiltreContrat(filtre);
           }
    const handleRayonChange = (rayon) => {
        setRayon(rayon);
            }
    const handleBooleenCdiChange = (res) => {
        setPossibleCdi(res);

    }
    const handleBooleenUrgentChange=(res)=>{
        setUrgent(res);
            }
    const handleSalaireChange=(data)=>{
        setSalaire(data);
    }

    useEffect(() => {
        handleChangeValue()
        console.log('use effect actif page principal')
    }, [filtreContrat, rayon, idVille, idMetier, idContrat,possibleCdi,urgent,salaire])


    return (
        <Container>
            <br/>
            <OffreRecherche
                onIdVilleChange={(idVille)=>handleIdVilleChange(idVille)}
                onIdMetierchange={(idMetier)=>handleIdMetierChange(idMetier)}
                onKeywordChange={(idContrat)=>handleChangeKeyword(idContrat)}
            />
            <br/>
            <Row>
                <Col xs={3} className='card'>
                    <Filtre
                        onFiltreChange={handleFiltreChange}
                        onRayonChange={handleRayonChange}
                        onBoolenCdiChange={handleBooleenCdiChange}
                        onBoolenUrgentChange={handleBooleenUrgentChange}
                        onSalaireChange={handleSalaireChange}
                    />
                </Col>
                <Col>
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





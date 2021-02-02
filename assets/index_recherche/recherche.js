import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Col, Container, Row} from "react-bootstrap";
import ReactDOM from "react-dom";
import Offrefiltre from "./component/Offrefiltre";
import OffreListe from "./component/OffreListe";
import OffreRecherche from "./component/OffreRecherche";
import './recherche.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {



    let str = window.location.href;
    let url = new URL(str);
    let met = url.searchParams.get("metier");
    let vil = url.searchParams.get("ville");
    let cont = url.searchParams.get("contrat");

    const [liste, setListe] = useState([]);
    const [filtreContrat, setFiltreContrat] = useState([]);
    const [idMetier, setIdMetier] = useState(met);
    const [idVille, setIdVille] = useState(vil);
    const [keyword, setKeyword] = useState(cont);
    const [rayon, setRayon] = useState(1)
    const [possibleCdi, setPossibleCdi] = useState(0);
    const [urgent, setUrgent] = useState();
    const [salaire, setSalaire] = useState([0, 0]);


    const handleChangeValue = () => {
        let params = [];
        if (idMetier) params.push("metier=" + idMetier);
        if (idVille) {
            params.push("ville=" + idVille);
            params.push("rayon=" + rayon);
        }
        if (possibleCdi) params.push("possibleCdi=" + possibleCdi);
        if (urgent) params.push("urgent=" + urgent);
        if (filtreContrat.length > 0) params.push("filtreContrat=" + filtreContrat.join());
        if (salaire) {
            params.push("salaireMin=" + salaire[0]);
            params.push("salaireMax=" + salaire[1]);
        }
        if (keyword) params.push("keyword=" + keyword);

        console.log(params);
        var url_params = params.join("&");
        console.log(url_params);

        axios.get(`/api/search?` + url_params)
            .then((result) => {
                setListe(result.data);
                setIdVille(idVille);
                setIdMetier(idMetier);
                console.log("api get recherche")
                console.log(result)
            })
            .catch(error => console.log(error));
    }
    const handleIdVilleChange = (value) => {
        setIdVille(value);
    }
    const handleIdMetierChange = (value) => {
        setIdMetier(value);
    }
    const handleChangeKeyword = (value) => {
        setKeyword(value);
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
    const handleBooleenUrgentChange = (res) => {
        setUrgent(res);

    }

    const handleSalaireChange = (data) => {
        setSalaire(data);

    }

    useEffect(() => {
        handleChangeValue()
        console.log('use effect actif page principal')
    }, [filtreContrat, rayon, idVille, idMetier, keyword, possibleCdi, urgent, salaire])


    return (
        <Container>
            <br/>
            <OffreRecherche
                onIdVilleChange={(idVille) => handleIdVilleChange(idVille)}
                onIdMetierchange={(idMetier) => handleIdMetierChange(idMetier)}
                onKeywordChange={(idContrat) => handleChangeKeyword(idContrat)}
            />
            <br/>
            <Row>
                <Col xs={3} className='card'>
                    <Offrefiltre
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





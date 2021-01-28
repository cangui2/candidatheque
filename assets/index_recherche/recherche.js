import React, {Component, useEffect, useState} from 'react'
import axios from 'axios'
import {Col, Form, Button, Container, Row} from "react-bootstrap";
import AsyncSelect from "react-select/async";
import ReactDOM from "react-dom";
import Filtre from "./component/Filtre";
import Offre from "./component/offre_liste";
import SearchOffre from "./component/SearchOffre";


function App(props) {
    const [list,setListe]=useState([]);
    const [param,setParam]=useState([0]);




    let str=window.location.href;
    let url=new URL(str);
    let met=url.searchParams.get("metier");
    let vil=url.searchParams.get("ville");
    let cont=url.searchParams.get("contrat");
    const [idMetier, setIdMetier] = useState(met);
    const[idVille,setIdVille]=useState(vil);
    const [idContrat,setIdContrat]=useState(cont);



    console.log(idVille);
    const handleIdChange =(idVille,idMetier,idContrat,param)=>{
        axios.get(`/api/search?` + '&metier=' + idMetier+ '&ville='+idVille+'&contrat=' + idContrat +'&filtre1='+ param)
            .then((result) => {
                setListe(result.data);
                setIdVille(idVille);
                console.log(param);
                console.log("api get recherche")
                console.log(result)


            })
            .catch(error => console.log(error));


    }

    const handleFiltreChange = (filtre) => {
        console.log(filtre);
        setParam(filtre);
    }

    useEffect(()=>{
        handleIdChange(idVille,idMetier,idContrat,param)
        console.log(param);
        console.log('use effect actif page principal')
    },[param])


        return (
            <Container>
            <SearchOffre

                onIdChange={(idVille,idMetier,idContrat)=>handleIdChange(idVille,idMetier,idContrat)}

            />
                <Row>
                    <Col xs={3}>
                        <Filtre
                            liste={list}
                            onFiltreChange={handleFiltreChange}
                        />
                    </Col>
                    <Col >
                        <Offre liste={list}/>
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





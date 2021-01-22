import React, {Component, useEffect, useState} from 'react'
import axios from 'axios'
import {Col, Form, Button, Container, Row} from "react-bootstrap";
import AsyncSelect from "react-select/async";
import ReactDOM from "react-dom";
import Filtre from "./component/Filtre";
import Offre from "./component/offre_liste";

function App() {
    // const param imput and select
    const [profession, setProfession] = useState([]);
    const [ville, setVille] = useState([]);
    const [secteur, setSecteur] = useState([]);
    const [contrat, setContrat] = useState([]);



    let str=window.location.href;
    let url=new URL(str);
    let met=url.searchParams.get("metier");
    let vil=url.searchParams.get("ville");
    let cont=url.searchParams.get("contrat");

    const [idMetier, setIdMetier] = useState(met);
    const[idVille,setIdVille]=useState(vil);
    const [idContrat,setIdContrat]=useState(cont);
    const [list,setListe]=useState([]);
    const[param,setParam]=useState([]);

    useEffect(()=>{
        changeParam();
        offreListe(param)
    },[idMetier],[idVille],[idContrat])
console.log(param);
    const changeParam = () => {
        let params = [];
        if (idMetier) {
            params.push('metier=' + idMetier);
        }
        if (idVille) {
            params.push('ville='+idVille);
        }
        if (idContrat) {
            params.push('contrat=' + idContrat);

        }
        setParam(params.join("&"));
    }



    const offreListe = (param) => {

        axios.get(`/api/search` + param)
            .then((result) => {
                setListe(result.data);

            })
            .catch(error => console.log(error));
    }



    console.log(list);
    // handle selection
    const handleChange = value => {
        //setSelectedValue(value);
        setProfession(value.id);

    }

    const handleChange2 = value => {
        // setSelectedValue(value);
        setVille(value.id);
    }

    const handleChange3 = value => {
        // setSelectedValue(value);
        setSecteur(value.id);
    }
    const handleChange4 = value => {
        //setSelectedValue(value);
        setContrat(value.id);
    }


    // load options using API call
    const loadOptions = (inputValue) => {
        return fetch(`/api/metiers?libelle=${inputValue}`).then(res => res.json());
    };
    const loadOptions2 = (inputValue) => {
        return fetch(`/api/villes?nom=${inputValue}`).then(res => res.json());
    };
    const loadOptions3 = (inputValue) => {
        return fetch(`/api/a_p_es?libelle=${inputValue}`).then(res => res.json());
    };
    const loadOptions4 = (inputValue) => {
        return fetch(`/api/type_contrats?libelle=${inputValue}`).then(res => res.json());
    };




        return (
            <Container>


            <Form>
                <Form.Row>
                    <Col>
                        {/*<Form.Control placeholder="Profession"/>*/}
                        <AsyncSelect

                            placeholder=""
                            getOptionLabel={e => e.libelle}
                            getOptionValue={e => e.id}
                            loadOptions={loadOptions}
                            onChange={handleChange}
                            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                        />
                    </Col>
                    <Col>
                        {/*<Form.Control placeholder="Ville"/>*/}
                        <AsyncSelect

                            placeholder="Ville"
                            getOptionLabel={e => e.nom}
                            getOptionValue={e => e.id}
                            loadOptions={loadOptions2}
                            onChange={handleChange2}
                            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                        />
                    </Col>
                    <Col>
                        {/*<Form.Control placeholder="Secteur"/>*/}
                        <AsyncSelect

                            placeholder=""
                            getOptionLabel={e => e.libelle}
                            getOptionValue={e => e.id}
                            loadOptions={loadOptions3}
                            onChange={handleChange3}
                            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                        />
                    </Col>
                    <Col>
                        {/*<Form.Control placeholder="Type contrat"/>*/}
                        <AsyncSelect

                            placeholder=""
                            getOptionLabel={e => e.libelle}
                            getOptionValue={e => e.id}
                            loadOptions={loadOptions4}
                            onChange={handleChange4}
                            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                        />
                    </Col>
                    <Button
                        href={'/recherche_liste?metier=' + profession + '&ville=' + ville + '&secteur=' + secteur + '&contrat=' + contrat}
                        type="button" className="mb-2">
                        Recherche des offres
                    </Button>
                </Form.Row>
            </Form>



                <Row>
                    <Col xs={2}>
                        <Filtre/>
                    </Col>
                    <Col>
                        <Offre/>
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





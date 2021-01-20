import React, { Component , useState } from 'react'
import axios from 'axios'
import {Col, Form,Button} from "react-bootstrap";
import AsyncSelect from "react-select/async";
import ReactDOM from "react-dom";

function App() {
    // const param imput and select
    const [profession, setProfession] = useState([]);
    const [ville, setVille] = useState([]);
    const [secteur, setSecteur] = useState([]);
    const [contrat, setContrat] = useState([]);


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
        return fetch(`https://127.0.0.1:8000/api/metiers?libelle=${inputValue}`).then(res => res.json());
    };
    const loadOptions2 = (inputValue) => {
        return fetch(`https://127.0.0.1:8000/api/villes?nom=${inputValue}`).then(res => res.json());
    };
    const loadOptions3 = (inputValue) => {
        return fetch(`https://127.0.0.1:8000/api/a_p_es?libelle=${inputValue}`).then(res => res.json());
    };
    const loadOptions4 = (inputValue) => {
        return fetch(`https://127.0.0.1:8000/api/type_contrats?libelle=${inputValue}`).then(res => res.json());
    };

    if (rootElement) {
        return (

            <form>

                <Form.Group>
                    <Form.Label>Profession</Form.Label>

                    <AsyncSelect

                        placeholder=""
                        getOptionLabel={e => e.libelle}
                        getOptionValue={e => e.id}
                        loadOptions={loadOptions}
                        onChange={handleChange}
                        components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                    />
                    <Form.Label>Villes</Form.Label>

                    <AsyncSelect

                        placeholder=""
                        getOptionLabel={e => e.nom}
                        getOptionValue={e => e.id}
                        loadOptions={loadOptions2}
                        onChange={handleChange2}
                        components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                    />
                    <Form.Label>Secteur</Form.Label>

                    <AsyncSelect

                        placeholder=""
                        getOptionLabel={e => e.libelle}
                        getOptionValue={e => e.id}
                        loadOptions={loadOptions3}
                        onChange={handleChange3}
                        components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                    />
                    <Form.Label>Type de contrat</Form.Label>

                    <AsyncSelect

                        placeholder=""
                        getOptionLabel={e => e.libelle}
                        getOptionValue={e => e.id}
                        loadOptions={loadOptions4}
                        onChange={handleChange4}
                        components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                    />
                    <br/>
                    <div className="text-right">
                        <Button
                            href={'https://127.0.0.1:8000/recherche_liste?metier=' + profession + '&ville=' + ville + '&secteur=' + secteur + '&contrat=' + contrat}
                            type="button" className="mb-2">
                            Recherche des offres
                        </Button>
                    </div>

                </Form.Group>
            </form>

        );
    }

    if (rootList) {
        console.log(profession);
        return (
            <Form>
                <Form.Row>
                    <Col>
                        {/*<Form.Control placeholder="Profession"/>*/}
                        <AsyncSelect

                            placeholder="Profession"
                            value={profession.libelle}
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

                            placeholder="Secteur"
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

                            placeholder="Type contrat"
                            getOptionLabel={e => e.libelle}
                            getOptionValue={e => e.id}
                            loadOptions={loadOptions4}
                            onChange={handleChange4}
                            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                        />
                    </Col>
                    <Button
                        href={'https://127.0.0.1:8000/recherche_liste?metier=' + profession + '&ville=' + ville + '&secteur=' + secteur + '&contrat=' + contrat}
                        type="button" className="mb-2">
                        Recherche des offres
                    </Button>
                </Form.Row>
            </Form>
        )
    }
}


const rootElement =document.getElementById('villes');
if(rootElement){

    ReactDOM.render(<App/>,rootElement);
}

const rootList =document.getElementById('list')
if(rootList){
    ReactDOM.render(<App/>,rootList);
}




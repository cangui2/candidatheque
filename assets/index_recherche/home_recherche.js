import React, { Component , useState } from 'react'
import axios from 'axios'
import {Col, Form, Button, Container} from "react-bootstrap";
import AsyncSelect from "react-select/async";
import ReactDOM from "react-dom";


function App() {

    const [profession, setProfession] = useState([]);
    const [ville, setVille] = useState([]);
    const [secteur, setSecteur] = useState([]);
    const [contrat, setContrat] = useState([]);
    const [idMetier, setIdMetier] = useState(window.metier);


    // handle selection

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
    const handleChange = value => {
        //setSelectedValue(value);
        setProfession(value.id);
        console.log(value.id)
    }


    //
    // const loadOptions =(inputValue,callback)=>{
    //     axios.get(`/api/metiers?libelle=`+inputValue)
    //         .then((data)=>{
    //             callback(data.data);
    //         })
    // }

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

                        placeholder="Ville"
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
                            href={'/recherche_liste?metier=' + profession + '&ville=' + ville + '&secteur=' + secteur + '&contrat=' + contrat}
                            type="button" className="mb-2">
                            Recherche des offres
                        </Button>
                    </div>

                </Form.Group>
            </form>

        );




    }

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('villes')
);

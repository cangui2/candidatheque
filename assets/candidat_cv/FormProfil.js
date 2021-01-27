import React from 'react';
import axios from 'axios';
import SelectMetier from '../commun/SelectMetier';
// import fetch from 'isomorphic-fetch';

import { Col, Form } from 'react-bootstrap';
// import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import AsyncSelect from 'react-select/async';

const FormProfil = (props) => {

    const handleChange = (evt) => {
        props.value[evt.target.name] = evt.target.value;
        props.onChange({ ...props.value });
    }; 

    const handleChangeMetier = (query) => {
        
        

    }
    const handleSelectMetier = (metier) => {
        
        console.log("select metier");
        console.log(metier);
        console.log("-------------");
        if (metier) {
            props.value.metier=metier; 
            props.onChange(props.value);
        }
        else {
            props.value.metier=null; 
            props.onChange(props.value);
        }
    }

    const loadOptions = (evt, callback) => {
        console.log(evt);
        
        axios.get("/api/cv/metiers/" + evt)
        .then( (data) => {
            //console.log(data);
            callback(data.data);
        });
    }
    

        return (
            <Form>
                <Form.Row className="mb-2">
                    <Col>Vouspouvez modifier vos informations personnelles dans votre profil</Col>
                </Form.Row>
                <Form.Row className="mb-2">
                    <Col className="col-4">
                        <Form.Control
                            value={props.value.nom}
                            name="nom"
                            disabled={true}
                            onChange={handleChange}
                            placeholder="Nom"
                            
                        />
                    </Col>
                    <Col className="col-4">
                        <Form.Control
                            value={props.value.prenom}
                            name="prenom"
                            disabled={true}
                            onChange={handleChange}
                            placeholder="Prénom"
                        />
                    </Col>
                    <Col className="col-4">
                        <Form.File 
                                label="Photo"
                                disabled={true}
                                data-browse="Choisir"
                                custom
                                placeholder="Logo"
                                onChange={ (elt) => { this.handleUploadPhoto(elt) } }
                            />
                    </Col>
                </Form.Row>
                <Form.Row className="mb-2">  
                    <Col>
                        <Form.Control
                            value={props.value.adresse}
                            name="adresse"
                            disabled={true}
                            onChange={handleChange}
                            placeholder="Adresse"
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            value={props.value.ville}
                            name="ville"
                            disabled={true}
                            onChange={handleChange}
                            placeholder="Ville"
                        />
                    </Col>
                </Form.Row>
                <Form.Row>  
                    <Col>
                        <SelectMetier onSelect={handleSelectMetier} />
                        <Form.Control
                            className="mb-2"
                            value={props.value.titre}
                            onChange={handleChange}
                            placeholder="Titre"
                            name="titre"
                        />
                        <Form.Control
                            as="textarea"
                            rows="5"
                            name="description"
                            value={props.value.description}
                            onChange={handleChange}
                            placeholder="Description"
                        />
                    </Col>
                </Form.Row>
            </Form>
        );
}

export default FormProfil;
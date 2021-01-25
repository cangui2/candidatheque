import React, { useState, useEffect } from 'react';
import {Button, Col, Form} from 'react-bootstrap';
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


import FormCompetence from './FormCompetence.js'

const FormCompetences = (props) => {

    // const [listeCompetences, setListeCompetences] = useState([]); 

    // useEffect(()=>{
    //     console.log("change metier");
    //         if (props.metier) {
    //             let id_metier = props.metier.id;
    //             //console.log(id_metier);
    //             axios.get("/api/cv/competences/" + id_metier + "/" )
    //             .then( (response) => {
    //                 console.log(response.data);
    //                 setListeCompetences(response.data);
    //             });
    //         }
    // }, [props.metier]);

    

    const handleScrollToProfile = (evt) => {
        props.scrollToProfile();
    }

    return (
        <div className="cv">
            <Form.Row className="mb-2">
                <Col className="mb-2" md={12}>
                    <span className={"font-weight-bold " + (props.metier?"":"d-none")} >Métier: </span>
                    { props.metier?''+props.metier.libelle:'Aucun métier selectionné dans la rubrique Informations personnelles ' }
                    <Button className={"btn-sm " + (props.metier?"d-none":"")} onClick={handleScrollToProfile}>ci-dessus</Button>
                </Col>
                
                <Col md={12}>
                    <Form.Row className="bg-light">
                        {
                        props.competencesRome.map((c, i) => 
                            <Col sm="12" md="6" key={i}>
                            <Form.Check 
                                
                                type="checkbox"
                                label={c.libelle}
                                name={'competences_' + c.id}
                                value={c.id}
                                id={c.id}
                                onChange={(evt) => {
                                    //console.log(evt);
                                    if (evt.target.checked===true) {
                                        props.addCompetence(c);
                                    }
                                    else {
                                        console.log("detick");
                                        console.log(c.id);
                                        props.delCompetence(null, c);
                                    }
                                }}
                            />
                            </Col>
                        )
                    }
                    </Form.Row>
                </Col>
            </Form.Row>
            <hr />
            <div >
                {

                    props.value.map((comp, i) =>
                        <FormCompetence
                            value={comp}
                            onChange={(exp) => props.changeCompetence(i, exp)}
                            delCompetence={() => props.delCompetence(i, comp)}
                            key={i}
                        />

                    )
                }
            </div>
        </div>
    );
}

export default FormCompetences;
import React, {useState, useRef} from 'react';
import { Col, Form, Button } from 'react-bootstrap';

const FormExperience = (props) =>  {

    const dateDebut = useRef(null);
    const dateFin = useRef(null);
    const titre = useRef(null);
    const entreprise = useRef(null);
    const ville = useRef(null);
    const logo = useRef(null);
    const description = useRef(null);

    const handleChange = (evt) => {
        //console.log(this);
        let experience = {
            dateDebut: dateDebut.current.value,
            dateFin: dateFin.current.value,
            titre: titre.current.value,
            entreprise: entreprise.current.value,
            ville: ville.current.value,
            logo: logo.current.value,
            description: description.current.value,
        };
        props.onChange(experience);
    }

        return (
            <div >
                <Form >
                    <Form.Row className="mb-2">
                        <Col>
                            <Form.Control
                                value={props.value.dateDebut}
                                onChange={(evt) => handleChange(evt)}
                                ref={dateDebut}
                                placeholder="Date de début"
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                value={props.value.dateFin}
                                onChange={(evt) => handleChange(evt)}
                                ref={dateFin}
                                placeholder="Date de fin"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-2">
                        <Col>
                            <Form.Control
                                value={props.value.titre}
                                onChange={(evt) => handleChange(evt)}
                                ref={titre} 
                                placeholder="Titre"
                            />
                        </Col>
                    
                        <Col>
                            <Form.Control
                                value={props.value.entreprise}
                                onChange={(evt) => handleChange(evt)}
                                ref={entreprise} 
                                placeholder="Entreprise"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-2">
                        <Col>
                            <Form.Control
                                value={props.value.ville}
                                onChange={(evt) => handleChange(evt)}
                                ref={ville}
                                placeholder="Ville"
                            />
                        </Col>
                        <Col>
                            <Form.File 
                                // id="custom-file"
                                label="Logo"
                                custom
                                // value={props.value.logo}
                                onChange={(evt) => handleChange(evt)}
                                ref={logo}
                                placeholder="Logo"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-2">
                        <Col>
                            <Form.Control
                                as="textarea"
                                value={props.value.description}
                                onChange={(evt) => handleChange(evt)}
                                ref={description} 
                                placeholder="Description"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-3">
                        <Col>
                            <Button size="sm" onClick={() => props.delExperience(this)} >Supprimer</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        );
}

export default FormExperience;
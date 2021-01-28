import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';

const FormFormation = (props) => {

    const handleChange = (evt) => {
        //console.log(this);
        props.value[evt.target.name] = evt.target.value;
        props.onChange({ ...props.value });
    }

        return (
            <div >
                <Form >
                    <Form.Row className="mb-2">
                        <Col>
                            <Form.Control
                                value={props.value.dateDebut}
                                name="dateDebut"
                                onChange={handleChange}
                                placeholder="Date de début"
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                value={props.value.dateFin}
                                name="dateFin"
                                onChange={handleChange}
                                placeholder="Date de fin"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-2">
                        <Col>
                            <Form.Control
                                value={props.value.ecole}
                                name="ecole"
                                onChange={handleChange}
                                placeholder="Ecole"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-2">
                        <Col>
                            <Form.Control
                                as="textarea"
                                value={props.value.description}
                                name="description"
                                onChange={handleChange}
                                placeholder="Description"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-2">
                        <Col>
                            <Form.Control
                                value={props.value.diplome}
                                name="diplome"
                                onChange={handleChange}
                                placeholder="Diplome"
                            />
                        </Col>
                        <Col>
                            <Form.Control 
                                value={props.value.niveau}
                                name="niveau"
                                onChange={handleChange}
                                placeholder="Niveau"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row className="mb-3">
                        <Col>
                            <Button size="sm" onClick={() => props.delFormation(this)} >Supprimer</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        );
    
}

export default FormFormation;
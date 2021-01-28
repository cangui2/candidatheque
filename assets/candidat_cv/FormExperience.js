import React, { useState, useRef } from "react";
import { Col, Form, Button } from "react-bootstrap";

const FormExperience = (props) => {
    const handleChange = (evt) => {
        props.value[evt.target.name] = evt.target.value;
        props.onChange({ ...props.value });
    };

    return (
        <div>
            <Form>
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
                            value={props.value.titre}
                            name="titre"
                            onChange={handleChange}
                            placeholder="Titre"
                        />
                    </Col>

                    <Col>
                        <Form.Control
                            value={props.value.entreprise}
                            name="entreprise"
                            onChange={handleChange}
                            placeholder="Entreprise"
                        />
                    </Col>
                </Form.Row>
                <Form.Row className="mb-2">
                    <Col>
                        <Form.Control
                            value={props.value.ville}
                            name="ville"
                            onChange={handleChange}
                            placeholder="Ville"
                        />
                    </Col>
                    <Col>
                        <Form.File
                            label="Logo"
                            custom
                            onChange={handleChange}
                            placeholder="Logo"
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
                <Form.Row className="mb-3">
                    <Col>
                        <Button
                            size="sm"
                            onClick={() => props.delExperience(this)}
                        >
                            Supprimer
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    );
};

export default FormExperience;

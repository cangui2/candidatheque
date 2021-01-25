import React, {useState} from 'react';
import { Col, Form, Button } from 'react-bootstrap';

const FormLangue = (props) => {

    const [libelle, setLibelle] = useState(props.value.libelle);
    const [niveau, setNiveau] = useState(props.value.niveau);

    const handleChangeLibelle = (evt) => {
        console.log(evt);
        setLibelle(evt.target.value);
        let langue = {
            libelle: evt.target.value,
            niveau: niveau
        };
        props.onChange(langue);
    }

    const handleChangeNiveau = (evt) => {
        console.log(evt);
        setNiveau(evt.target.value);
        let langue = {
            libelle: libelle,
            niveau: evt.target.value
        };
        props.onChange(langue);
    }

        return (
            <div >
                <Form >
                    <Form.Row className="mb-2">
                        <Col xs={9}>
                            <Form.Control
                                value={libelle}
                                onChange={handleChangeLibelle}
                                placeholder="Libelle"
                            />
                        </Col>
                        <Col xs={2}>
                            {/* technique, notion, courant, bilingue */}
                            <Form.Control as="select" 
                                value={niveau}
                                onChange={handleChangeNiveau}
                            >
                                <option>Technique</option>
                                <option>Notions</option>
                                <option>Courant</option>
                                <option>Bilingue</option>
                            </Form.Control>
                        </Col>

                        <Col xs={1}>
                            <Button onClick={() => props.delLangue(this)} >X</Button>
                        </Col>
                    </Form.Row>

                </Form>
            </div>
        );
}

export default FormLangue;
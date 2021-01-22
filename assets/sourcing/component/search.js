import {Badge, Col, Container, Form, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import AsyncSelect from 'react-select/async';
import React, {useEffect, useState} from "react";
import axios from 'axios'
import RangeSlider from 'react-bootstrap-range-slider';

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

function Search(props) {

    const [valueMetier, setValueMetier] = useState('');
    const [valueVille, setValueVille] = useState('');
    const [keyWord, setKeyWord] = useState('');
    const [statusRecruteur, setStatusRecruteur] = useState(false);
    const [range, setRange] = useState(50);
    const [finalRange, setFinalRange] = useState();
    const [disabled, setDisabled] = useState(true);
    const [countCv, setCountCv] = useState(props.countCV);

    const loadOptionMetier = (valueMetier, callback) => {
        axios.get("/api/metiers?libelle=" + valueMetier)
            .then((met) => {
                callback(met.data);
            });
    }
    
    const loadOptionVille = (value, callback) => {
        axios.get("/api/villes?nom=" + value)
            .then((vil) => {
                callback(vil.data);
            });
    }
    
    const handleChangeMetier = value => {
        console.log("metier=");
        if (value) {
            console.log(value.id);
            setValueMetier(value.id);
        } 
        else {
            setValueMetier(null);
        }
        console.log("-------------");
    }

    const handleChangeVille = value => {
        if (value) {
            setValueVille(value.id);
            setDisabled(false)
        } else {
            setRange(50);
            setDisabled(true)
            setValueVille(null);
        }
    }
    
    const changeParam = () => {
        let params = [];
        if (keyWord) {
            params.push('keyword=' + keyWord);
        }
        if (statusRecruteur) {
            params.push('favoris=true');
        }
        if (valueMetier) {
            params.push('metier=' + valueMetier);
        }
        if (valueVille) {
            params.push('ville=' + valueVille);
            params.push('rayon=' + range);
        }
        props.onDemandeCvChanged(params.join("&"));
    }

    useEffect(() => {

            setCountCv(props.countCV);
            changeParam();

    }, [keyWord, valueVille, finalRange, statusRecruteur, valueMetier])

    return (
        <Container>
            <Row >
                <Col className="mt-2 mb-3">
                    <ToggleButtonGroup type="radio" name="options">
                        <ToggleButton
                            type="radio"
                            variant='info'
                            value={2}
                            onClick={() => setStatusRecruteur(true)}
                        >
                            Ma Cvthèque
                        </ToggleButton>
                        &emsp;
                        <ToggleButton
                            type="radio"
                            variant="info"
                            value={1}
                            onClick={() => setStatusRecruteur(false)}
                            className={statusRecruteur ? "" : "active"}
                        >
                            Candidathèque
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Mot clé</Form.Label>
                        <Form.Control
                            placeholder="Metier, Competence ..."
                            onChange={e => {
                                setKeyWord(e.target.value)
                            }}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group >
                        <Form.Label>Metier</Form.Label>
                        <AsyncSelect
                            className="mb-2"
                            isClearable={true}
                            loadOptions={loadOptionMetier}
                            getOptionLabel={met => met.libelle}
                            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                            placeholder="Saisissez le metier"
                            onChange={handleChangeMetier}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group >
                        <Form.Label>Ville</Form.Label>
                        <AsyncSelect
                            className="mb-2"
                            loadOptions={loadOptionVille}
                            getOptionLabel={vil => vil.nom}
                            isClearable={true}
                            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                            placeholder="Saisissez la ville.."
                            onChange={handleChangeVille}
                        />
                    </Form.Group>
                    <RangeSlider
                        value={range}
                        min={1}
                        max={150}
                        className={disabled?' d-none ':''}
                        onChange={evt => setRange(evt.target.value)}
                        onAfterChange={evt => setFinalRange(evt.target.value)}
                    />
                    <output style={{marginTop: "30px"}} id="output">
                        Distance sélectionnée {range - 1} Km
                    </output>
                    <output style={{marginTop: "30px"}} id="output">
                        Nombre de Cv disponible: {props.total}
                    </output>
                    <br/>
                </Col>
            </Row>
        </Container>
    )
};

export default Search;

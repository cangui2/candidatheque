import {Badge, Col, Container, Form, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import AsyncSelect from 'react-select/async';
import React, {useEffect, useState} from "react";
import axios from 'axios'
import {Range} from "react-range";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Search(props) {
    // All constant useState
    const [valueMetier, setValueMetier] = useState([]);
    const [valueVille, setValueVille] = useState('');
    const [keyWord, setKeyWord] = useState('');
    const [statusRecruteur, setStatusRecruteur] = useState(false);
    const [range, setRange] = useState([1]);
    const [finalRange, setFinalRange] = useState([1]);
    const [disabled, setDisabled] = useState(true);
    const [countCv, setCountCv] = useState(props.countCV);
    // Recherche Api
    const loadOptionMetier = (valueMetier, callback) => {
        axios.get("/api/metiers?libelle=" + valueMetier)
            .then((met) => {
                callback(met.data);
            });
    }
    const loadOtionVille = (value, callback) => {
        axios.get("/api/villes?nom=" + value)
            .then((vil) => {
                callback(vil.data);
            });
    }
    // Si la valeur change on modifie.
    const handleChangeMetier = value => {
        setValueMetier(value);
    }
    const changeParam = () => {
        let params = [];
        if (keyWord) {
            params.push('keyword=' + keyWord);
        }
        if (statusRecruteur) {
            params.push('favoris=true');
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

    }, [keyWord, valueVille, finalRange, statusRecruteur])

    return (
        <Container style={styleSearch}>
            <Row style={{marginLeft: '0', marginRight: '0', paddingTop: '10px'}}>
                <Col>
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
                    <Form.Group controlId="formGridState">
                        <Form.Label>Metier</Form.Label>
                        <AsyncSelect
                            className="mb-2"
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
                    <Form.Group controlId="formGridState">
                        <Form.Label>Ville</Form.Label>
                        <AsyncSelect
                            className="mb-2"
                            loadOptions={loadOtionVille}
                            getOptionLabel={vil => vil.nom}
                            isClearable={true}
                            components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                            placeholder="Saisissez la ville.."
                            onChange={value => {
                                if (value) {
                                    setValueVille(value.id);
                                    setDisabled(false)
                                } else {
                                    setDisabled(true)
                                }
                            }}
                        />
                    </Form.Group>
                    <Range
                        step={0.1}
                        min={1}
                        max={150}
                        values={range}
                        disabled={disabled}
                        onChange={values => setRange(values)}
                        onFinalChange={values => setFinalRange(values)}
                        renderTrack={({props, children}) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '6px',
                                    width: '100%',
                                    backgroundColor: '#ccc'
                                }}
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({props}) => (
                            <div

                                {...props}
                                style={{
                                    ...props.style,

                                    height: '22px',
                                    width: '22px',
                                    backgroundColor: '#999'
                                }}
                            />
                        )}
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
const styleSearch = {
    position: 'fixed',
    backgroundColor: 'white',
    marginTop: '10px',
    minHeight: '90vh',
    maxWidth: '365px',
}
export default Search;

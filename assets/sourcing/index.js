import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import {Col, Container, Row} from "react-bootstrap";
import axios from 'axios'
import Search from "./component/search";
import Results from "./component/results";
import Details from "./component/details";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const App = (props) => {

    const [liste, setListe] = useState([]);
    const [cvCandidat, setCvCandidat] = useState(null);
    const [select, setSelect] = useState(0);
    
    const handleCvRequest = (param) => {
        axios.get('/api/sourcing/recherche?' + param)
            .then((result) => {
                setListe(result.data);
                setCvCandidat(null);
                setSelect(0);
            })
            .catch(error => console.log(error));
    }
    
    const handleCv = (id_cv) => {
        console.log(id_cv);
        axios.get('/api/cvs/' + id_cv)
            .then((result) => {
                setCvCandidat(result.data);
                setSelect(id_cv);
        })
    }

    useEffect( () => {
        handleCv(2);
    }, []);

    return (
        <Container fluid >
            <Row>
                <Col md={3}>
                    <Search
                        onDemandeCvChanged={(param) => handleCvRequest(param)}
                        total={liste.length}
                    />
                </Col>
                <Col md={4} >
                    <Results 
                        liste={liste} 
                        onSelect={(cv) => handleCv(cv)} 
                        select={select} 
                    />
                </Col>
                <Col md={5} >
                    <Details 
                        cv={cvCandidat}
                    />
                </Col>

            </Row>
        </Container>
    );
}



ReactDOM.render(
    <App/>,
    document.getElementById('react_sourcing')
);



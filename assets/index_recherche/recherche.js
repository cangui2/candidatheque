import React, {Component, useEffect, useState} from 'react'
import axios from 'axios'
import {Col, Form, Button, Container, Row} from "react-bootstrap";
import AsyncSelect from "react-select/async";
import ReactDOM from "react-dom";
import Filtre from "./component/Filtre";
import Offre from "./component/offre_liste";
import SearchOffre from "./component/SearchOffre";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

function App() {
    const [list,setListe]=useState([]);
    const handleListChange = (list)=>{
        setListe(list)
    }
    const [value, onChange] = useState(new Date());


        return (
            <Container>
            <SearchOffre onListeChange={(list)=>handleListChange(list)}/>
                <Row>
                    <Col xs={3}>
                        <Filtre/>
                    </Col>
                    <Col >
                        <Offre liste={list}/>
                    </Col>

                </Row>
    </Container>




        )

}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('list')
);





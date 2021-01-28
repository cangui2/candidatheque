import {Card} from "react-bootstrap";

import axios from 'axios'
import {Col, Form,Button} from "react-bootstrap";
import React, { useState } from 'react'
import ReactDOM from "react-dom";
import Moment from "react-moment";


function Offre (props) {

const [idMetier,setIdMetier]=useState(window.metier)


    return(

        props.liste.map((item)=>(
        <Card style={{width: '100%'}}>
            <Card.Body>
                <Card.Title>{item.titre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><Moment format="DD/MM/YYYY">{item.datePublication.date}</Moment></Card.Subtitle>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
        ))

    )

}

export default Offre;

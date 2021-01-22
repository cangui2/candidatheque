import {Card} from "react-bootstrap";

import axios from 'axios'
import {Col, Form,Button} from "react-bootstrap";
import React, { useState } from 'react'
import ReactDOM from "react-dom";

function Offre () {

const [idMetier,setIdMetier]=useState(window.metier)


    return(
        <Card style={{width: '100%'}}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>

    )

}

export default Offre;
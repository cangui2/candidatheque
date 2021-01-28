import {Card} from "react-bootstrap";
import React, { useState } from 'react'
import Moment from "react-moment";
import Button from "react-bootstrap/Button";


function OffreListe (props) {

    return(
        props.liste.map((item)=>(
        <Card style={{width: '100%'}}>
            <Card.Body>
                <Card.Title>{item.titre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><Moment format="DD/MM/YYYY">{item.datePublication.date}</Moment></Card.Subtitle>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Button href=""type="button">Voir l'offre</Button>{' '}

            </Card.Body>
        </Card>
        ))
    )
}

export default OffreListe;

import {Card} from "react-bootstrap";
import React, { useState } from 'react'
import Moment from "react-moment";
import Button from "react-bootstrap/Button";


function OffreListe (props) {

    return(
        props.liste.map((item)=>(
        <Card className={'bg-light rounded mb-4 mb-lg-5 pt-4 pb-1 px-5"'} style={{width: '100%'}}>
            <Card.Body>
                <Card.Title>{item.titre}</Card.Title>

                <Card.Subtitle className="mb-2 text-muted"><Moment format="DD/MM/YYYY">{item.datePublication.date}</Moment></Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{item.ville.nom}</Card.Subtitle>
                <Card.Text>
                    {item.description}
                </Card.Text>
                <Button href={"/recherche_details/"+item.id} type="button">Voir l'offre</Button>{' '}

            </Card.Body>
        </Card>

        ))

    )
}

export default OffreListe;

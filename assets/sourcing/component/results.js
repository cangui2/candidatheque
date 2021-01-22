import {Breadcrumb, Card, CardColumns, Col, Image, Row} from "react-bootstrap";
import React, {useState} from "react";
import image from "../avatar.png"


function Results(props) {


    if (props.liste.length > 0) {
        return (
            props.liste.map((item, index) => (
                <div 
                    key={index} 
                    onClick={() => { props.onSelect(item.id);}} 
                    className={'resultats ' + (props.select === item.id ? 'select' : '')}
                >
                    <Image style={{float: 'right', width: '10%'}} src={image} roundedCircle/>
                    <div className="titre">{item.metLibele}</div>
                    <div className="mb-2 text-muted">{item.nom} {item.prenom}</div>
                    <div>
                        {item.adresse}<br/>
                        {item.ville}<br/>
                        {item.telephone}
                    </div>
                </div>
            ))
        )
    } else {
        return (
            <div></div>
        )
    }
};

export default Results;
const styleSearch = {
    width: '25rem',
    marginTop: '0px',
    boxShadow: "5px 5px 1px #9E9E9E",
    opacity: '0.9',
    cursor:'grab'
}





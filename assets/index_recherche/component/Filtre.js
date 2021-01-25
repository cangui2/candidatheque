import {Col, Container, Form} from "react-bootstrap";
import React, { Component , useState } from 'react'
import RangeSlider from "react-bootstrap-range-slider";


function Filtre (){


const [range,setRange]=useState(0);
const [rangeSalaire,setRangeSalaire]=useState(500);
const [finalRange,setFinalRange]=useState();
const [finalRangeSalaire,setFinalRangeSalaire]=useState();
const [value, setValue] = useState(new Date());


    function onChange(nextValue) {
        setValue(nextValue);
    }





    return(
        <Form>
            <div>
                <h5>Type de Contrat</h5>
            </div>
            <div>
            {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check inline label="CDD" type={type} id={`inline-${type}-1`} />
                    <br/>
                    <Form.Check inline label="CDI" type={type} id={`inline-${type}-2`} />
                    <br/>
                    <Form.Check inline label="Contrat de Travail Temporaire/Mission intérim" type={type} id={`inline-${type}-3`}/>
                    <br/>
                    <Form.Check inline label="Contrat de professionnalisation" type={type} id={`inline-${type}-4`} />
                    <br/>
                    <Form.Check inline label="Contrat d'apprentissage" type={type} id={`inline-${type}-5`} />
                    <br/>
                    <Form.Check inline label="Stage" type={type} id={`inline-${type}-6`} />
                    <br/>
                    <Form.Check inline label="Freelance" type={type} id={`inline-${type}-7`} />
                    <br/>
                    <Form.Check inline label="CDI Intérimaire" type={type} id={`inline-${type}-8`} />
                    <br/>
                    <Form.Check inline label="CUI–CAE" type={type} id={`inline-${type}-9`} />
                    <br/>
                    <Form.Check inline label="CUI-CIE" type={type} id={`inline-${type}-10`} />
                    <br/>
                    <Form.Check inline label="Service civique" type={type} id={`inline-${type}-11`} />
                </div>
            ))}
            </div>
            <br/>
            <div>
            <Form.Check label="Possibilité CDI" />
            </div>
            <br/>
            <div>
                <Form.Check label="Urgent" />
            </div>
            <br/>
            <div>
                <div>
                    <h5>Zone geographique</h5>
                </div>
                <br/>
            <RangeSlider
                value={range}
                min={1}
                max={150}
                //className={disabled?' d-none ':''}
                onChange={evt => setRange(evt.target.value)}
                onAfterChange={evt => setFinalRange(evt.target.value)}
            />
            </div>
            <div>
            <div>
                <h5>Salaire</h5>
            </div>
            <br/>
            <RangeSlider
                value={rangeSalaire}
                min={500}
                max={3000}
                //className={disabled?' d-none ':''}
                onChange={evt => setRangeSalaire(evt.target.value)}
                onAfterChange={evt => setFinalRangeSalaire(evt.target.value)}
            />
        </div>

        </Form>
    )
}

export default Filtre;

const style ={


}
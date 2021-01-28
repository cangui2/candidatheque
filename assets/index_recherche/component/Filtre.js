import {Col, Container, Form} from "react-bootstrap";
import React, {Component, useEffect, useReducer, useState} from 'react'
import RangeSlider from "react-bootstrap-range-slider";
import axios from "axios";








function Filtre (props){


    const [range,setRange]=useState(0);
    const [rangeSalaire,setRangeSalaire]=useState(500);
    const [finalRange,setFinalRange]=useState();
    const [finalRangeSalaire,setFinalRangeSalaire]=useState();
    const [filtre,setFiltre]=useState([])
    const [param,setParam]=useState([])





    //const test = "1 2 3 4 5 6 7 10 11 ".split('');
    const test2=["CDI","CDD","Contrat de Travail Temporaire/Mission intérim","Contrat de professionnalisation","Contrat d'apprentissage","Stage","Freelance","CDI Intérimaire","CUI–CAE","CUI-CIE","Service civique"]

    const handleSubmit =data=> {

        let v =  data.target.value;
        if (data.target.checked) {
            if (!filtre.includes(v)) {
                filtre.push(v);
                setFiltre([...filtre])
            }
        }
        else {
            const index = filtre.indexOf(v);
            if (index > -1) {
                filtre.splice(index, 1);
                setFiltre([...filtre])
            }
        }

        props.onFiltreChange(filtre);

    }


    const handleSend = (param) =>{
        // axios.post('/api/search?filtre1='+ [value,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11])
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        props.onFiltreChange(param);
        console.log('filtre');
    }

     // useEffect(()=>{
     //     console.log('filtre');
     //     props.onFiltreChange(param);
     //     setFiltre(false)
     //     },[filtre])


    return(
        <Form>

            <div>
                <h5>Type de Contrat</h5>
            </div>
            <div>

                <div  className="mb-3">
                    <fieldset>
                    {
                    test2.map(

                    (item,index)=>
                        <label key={index}>
                            <input type="checkbox" value={index+1} onChange={handleSubmit} name={"chk_" + index}  />
                            {item}
                        </label>

                    )

                    }
                    </fieldset>
                </div>

            </div>
            <br/>
            <div>
                <label ><input type="checkbox" value={1} name="sameName"  />Possibilité CDI</label>
            </div>
            <br/>
            <div>
                <label ><input type="checkbox" value={1} name="sameName"  />Urgent</label>
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

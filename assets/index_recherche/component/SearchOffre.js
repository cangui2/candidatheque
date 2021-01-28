import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Col, Form, ToggleButton} from "react-bootstrap";
import AsyncSelect from "react-select/async/dist/react-select.esm";


function SearchOffre (props) {

    // const param imput and select

    const [secteur, setSecteur] = useState([]);

    const [idMetier, setIdMetier] = useState();
    const[idVille,setIdVille]=useState();
    const [idContrat,setIdContrat]=useState();
    const [list,setListe]=useState([]);
    const[param,setParam]=useState([]);





    // useEffect(()=>{
    //     props.onIdChange(idMetier,idVille,idContrat);
    //     console.log('use effect search offre actif')
    // },[idVille,idContrat,idContrat])



  //  console.log(list);
    // handle selection
    const handleChange = value => {
        //setSelectedValue(value);
        setIdMetier(value.id);

    }

    const handleChange2 = value => {
        // setSelectedValue(value);
        setIdVille(value.id);
    }

    const handleChange3 = value => {
        // setSelectedValue(value);
        //setIdContrat(value.id);
    }
    const handleChange4 = value => {
        //setSelectedValue(value);
        setIdContrat(value.id);
    }

    const handleSubmit =(idVille,idMetier,idContrat)=>{
        props.onIdChange(idVille,idMetier,idContrat)

    }


    // load options using API call
    const loadOptions = (inputValue) => {
        return fetch(`/api/metiers?libelle=${inputValue}`).then(res => res.json());
    };
    const loadOptions2 = (inputValue) => {
        return fetch(`/api/villes?nom=${inputValue}`).then(res => res.json());
    };
    const loadOptions3 = (inputValue) => {
        return fetch(`/api/a_p_es?libelle=${inputValue}`).then(res => res.json());
    };
    const loadOptions4 = (inputValue) => {
        return fetch(`/api/type_contrats?libelle=${inputValue}`).then(res => res.json());
    };


    return(
        <Form>
            <Form.Row>
                <Col>
                    {/*<Form.Control placeholder="Profession"/>*/}
                    <AsyncSelect

                        placeholder=""
                        getOptionLabel={e => e.libelle}
                        getOptionValue={e => e.id}
                        loadOptions={loadOptions}
                        onChange={handleChange}
                        components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                    />
                </Col>
                <Col>
                    {/*<Form.Control placeholder="Ville"/>*/}
                    <AsyncSelect

                        placeholder="Ville"
                        getOptionLabel={e => e.nom}
                        getOptionValue={e => e.id}
                        loadOptions={loadOptions2}
                        onChange={handleChange2}
                        components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                    />
                </Col>
                <Col>
                    {/*<Form.Control placeholder="Secteur"/>*/}
                    <AsyncSelect

                        placeholder=""
                        getOptionLabel={e => e.libelle}
                        getOptionValue={e => e.id}
                        loadOptions={loadOptions3}
                        onChange={handleChange3}
                        components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                    />
                </Col>
                <Col>
                    {/*<Form.Control placeholder="Type contrat"/>*/}
                    <AsyncSelect

                        placeholder=""
                        getOptionLabel={e => e.libelle}
                        getOptionValue={e => e.id}
                        loadOptions={loadOptions4}
                        onChange={handleChange4}
                        components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                    />
                </Col>
                <ToggleButton
                    type="radio"
                    variant='info'
                    value={2}
                    onClick={() => handleSubmit(idVille,idMetier,idContrat)}
                >
                    Recherche
                </ToggleButton>
            </Form.Row>
        </Form>

    )
}
export default SearchOffre;

const style ={
    border:'1 px solid black'
}

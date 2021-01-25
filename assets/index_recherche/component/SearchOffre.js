import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Col, Form, ToggleButton} from "react-bootstrap";
import AsyncSelect from "react-select/async/dist/react-select.esm";


function SearchOffre (props) {

    // const param imput and select
    const [profession, setProfession] = useState([]);
    const [ville, setVille] = useState([]);
    const [secteur, setSecteur] = useState([]);
    const [contrat, setContrat] = useState([]);



    let str=window.location.href;
    let url=new URL(str);
    let met=url.searchParams.get("metier");
    let vil=url.searchParams.get("ville");
    let cont=url.searchParams.get("contrat");

    const [idMetier, setIdMetier] = useState(met);
    const[idVille,setIdVille]=useState(vil);
    const [idContrat,setIdContrat]=useState(cont);
    const [list,setListe]=useState([]);
    const[param,setParam]=useState([]);



    const offreListe = (idMetier,idVille,idContrat) => {
        axios.get(`/api/search?` + '&metier=' + idMetier+ '&ville='+idVille+'&contrat=' + idContrat)
            .then((result) => {
                setListe(result.data);
                props.onListeChange(result.data);
                console.log("1111111111111111111111111")

            })
            .catch(error => console.log(error));
   }
    useEffect(()=>{

        offreListe(idMetier,idVille,idContrat)
    },[idVille,idContrat,idContrat])



    console.log(list);
    // handle selection
    const handleChange = value => {
        //setSelectedValue(value);
        setProfession(value.id);

    }

    const handleChange2 = value => {
        // setSelectedValue(value);
        setVille(value.id);
    }

    const handleChange3 = value => {
        // setSelectedValue(value);
        setSecteur(value.id);
    }
    const handleChange4 = value => {
        //setSelectedValue(value);
        setContrat(value.id);
    }

    const handleSubmit =(metier,contrat,ville)=>{
        offreListe(metier,contrat,ville);

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
                    onClick={() => handleSubmit(profession,ville,contrat)}
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
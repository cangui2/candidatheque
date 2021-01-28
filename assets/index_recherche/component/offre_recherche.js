import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Col, Form, ToggleButton} from "react-bootstrap";
import AsyncSelect from "react-select/async/dist/react-select.esm";


function OffreRecherche (props) {

    // const param imput and select
    const [idMetier, setIdMetier] = useState([]);
    const[idVille,setIdVille]=useState([]);
    const [keyword,setKeyword]=useState([]);


    const handleChange = value => {
        setIdMetier(value.id);
    }

    const handleChange2 = value => {
        setIdVille(value.id);

    }

    const handleChange3 = value => {
        setKeyword(value);
    }
    useEffect(()=>{
        props.onIdChange(idVille,idMetier,keyword)
    },[idVille,idMetier,keyword])

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

    return(
        <Form>
            <Form.Row>
                <Col>
                    <AsyncSelect
                        placeholder="Profession"
                        getOptionLabel={e => e.libelle}
                        getOptionValue={e => e.id}
                        loadOptions={loadOptions}
                        onChange={handleChange}
                        components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                    />
                </Col>
                <Col>
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
                    <AsyncSelect
                        placeholder="Mot clé "
                        getOptionLabel={e => e.libelle}
                        getOptionValue={e => e.id}
                        loadOptions={loadOptions3}
                        onChange={handleChange3}
                        components={{DropdownIndicator: () => null, IndicatorSeparator: () => null}}
                    />
                </Col>
            </Form.Row>
        </Form>

    )
}
export default OffreRecherche;

const style ={
    border:'1 px solid black'
}

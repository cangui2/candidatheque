import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Col, Form, ToggleButton} from "react-bootstrap";
import AsyncSelect from "react-select/async/dist/react-select.esm";
import SelectVille from "../../commun/SelectVille";
import SelectMetier from "../../commun/SelectMetier";


function OffreRecherche (props) {




    const handleChange = value => {
        props.onIdMetierchange(value.id);

    }
    const handleChange2 = (value) => {
        props.onIdVilleChange(value.id);

    }

    const handleChange3 = value => {
        props.onKeywordChange(value);

    }



    //
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
                    <SelectMetier onSelect={handleChange} />
                </Col>
                <Col>
                    <SelectVille onSelect={handleChange2} />
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

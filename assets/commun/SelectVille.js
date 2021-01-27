import React from "react";
import axios from "axios";

import { Col, Form } from "react-bootstrap";
import AsyncSelect from "react-select/async";

const SelectVille = (props) => {

    const handleChangeVille = (query) => {
        props.onSelect(query);
    };

    const loadOptions = (evt, callback) => {
        //console.log(evt);

        axios.get("/api/villes?nom=" + evt).then((data) => {
            callback(data.data);
        });
    };

    return (
        <AsyncSelect
            defaultOptions={true}
            isClearable={true}
            loadOptions={loadOptions}
            getOptionLabel={(ville) => {
                return ville.nom;
            }}
            getOptionValue={(ville) => {
                return ville.id;
            }}
            placeholder="Saisissez une ville..."
            onChange={handleChangeVille}
            menuPosition="fixed"
        />
    );
};

export default SelectVille;

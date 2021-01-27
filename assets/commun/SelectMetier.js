import React from "react";
import axios from "axios";

import { Col, Form } from "react-bootstrap";

import AsyncSelect from "react-select/async";

const SelectMetier = (props) => {

    const handleChangeMetier = (query) => {
        props.onSelect(query);
    };

    const loadOptions = (evt, callback) => {
        console.log(evt);

        axios.get("/api/metiers?libelle=" + evt).then((data) => {
            callback(data.data);
        });
    };

    return (
        <AsyncSelect
            defaultOptions={true}
            className="mb-2"
            isClearable={true}
            loadOptions={loadOptions}
            getOptionLabel={(met) => {
                return met.libelle;
            }}
            getOptionValue={(met) => {
                return met.id;
            }}
            placeholder="Saisissez votre métier..."
            onChange={handleChangeMetier}
            menuPosition="fixed"
        />
    );
};

export default SelectMetier;

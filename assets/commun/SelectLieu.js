import React from "react";
import axios from "axios";

import { useState } from 'react';
import AsyncSelect from 'react-select/async';

function SelectLieu(props) {
    const [lieu, setLieu] = useState("");

    const loadOptions = (inputValue, callback) => {
        axios.get("https://localhost:8000/api/sourcing/lieu/" + lieu).then((data) => {
            console.log(data);
            callback(data.data);
        });
    };

    const handleInputChange = (newValue) => {
        setLieu(newValue);
    };

    const handleChange = (value) => {
        console.log(value);
        props.onSelect(value);
    };

    return (
        <div className="App">
            <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                isClearable={true}
                onChange={handleChange}
                placeholder="Choisissez un lieu ..."
                onInputChange={handleInputChange}
                menuPosition="fixed"
                getOptionLabel={(lie) => {
                    return lie.nom;
                }}
                getOptionValue={(lie) => {
                    return lie.id;
                }}
            />
        </div>
    );
}

export default SelectLieu;

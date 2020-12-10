import React, { Component , useState } from 'react'
import AsyncSelect from 'react-select/async';
import Select from 'react-select'
import axios from 'axios'
import {Col, Form,Button} from "react-bootstrap";
import {array} from "prop-types";
import {values} from "react-bootstrap-typeahead/lib/utils";



function App() {
    // const param imput and select
    const [inputValue, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);
    const [inputValue2, setValue2] = useState('');
    const [selectedValue2, setSelectedValue2] = useState(null);
    const [inputValue3, setValue3] = useState('');
    const [selectedValue3, setSelectedValue3] = useState(null);
    const [inputValue4, setValue4] = useState('');
    const [selectedValue4, setSelectedValue4] = useState(null);
    const [data,setdata]=useState(null);
    const [data2,setdata2]=useState(null);
    const [data3,setdata3]=useState(null);
    const [data4,setdata4]=useState(null);

    // handle input change event
    const handleInputChange = value => {
        setValue(value);

    };
    const handleInputChange2 = value => {
        setValue(value);
    };
    const handleInputChange3 = value => {
        setValue(value);
    };
    const handleInputChange4 = value => {
        setValue(value);
    };


    // handle selection
    const handleChange = value => {
        setSelectedValue(value);
        setdata({id:value.id});
    }

    const handleChange2 = value => {
        setSelectedValue(value);
        setdata2({id:value.id});
    }

    const handleChange3 = value => {
        setSelectedValue(value);
        setdata3({id:value.id});
    }
    const handleChange4 = value => {
        setSelectedValue(value);
        setdata4({id:value.id});
    }


    // load options using API call
    const loadOptions = (inputValue) => {
        return fetch(`https://127.0.0.1:8000/api/metiers?libelle=${inputValue}`).then(res => res.json());
    };
    const loadOptions2 = (inputValue) => {
        return fetch(`https://127.0.0.1:8000/api/villes?nom=${inputValue}`).then(res => res.json());
    };
    const loadOptions3 = (inputValue) => {
        return fetch(`https://127.0.0.1:8000/api/a_p_es?libelle=${inputValue}`).then(res => res.json());
    };
    const loadOptions4 = (inputValue) => {
        return fetch(`https://127.0.0.1:8000/api/type_contrats?libelle=${inputValue}`).then(res => res.json());
    };


    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(data,data2,data3,data4);
        // ... submit to API or something
    };



    return (

        <form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Profession</Form.Label>

            <AsyncSelect

                placeholder=""
                getOptionLabel={e => e.libelle}
                getOptionValue={e =>  e.id}
                loadOptions={loadOptions}
                onInputChange={handleInputChange}
                onChange={handleChange}
                components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            />
            <Form.Label>Villes</Form.Label>

            <AsyncSelect

                placeholder=""
                getOptionLabel={e => e.nom}
                getOptionValue={e => e.id}
                loadOptions={loadOptions2}
                onInputChange={handleInputChange2}
                onChange={handleChange2}
                components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            />
            <Form.Label>Secteur</Form.Label>

            <AsyncSelect

                placeholder=""
                getOptionLabel={e => e.libelle}
                getOptionValue={e => e.id}
                loadOptions={loadOptions3}
                onInputChange={handleInputChange3}
                onChange={handleChange3}
                components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            />
            <Form.Label>Type de contrat</Form.Label>

            <AsyncSelect

                placeholder=""
                getOptionLabel={e => e.libelle}
                getOptionValue={e => e.id}
                loadOptions={loadOptions4}
                onInputChange={handleInputChange4}
                onChange={handleChange4}
                components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
            />

            <Button onClick={handleSubmit} type="submit" className="mb-2">
                Submit
            </Button>
        </Form.Group>
        </form>
    );
}
export default App;



import fetch from 'isomorphic-fetch';
import React, { Fragment, useState } from 'react';
import { AsyncTypeahead  } from 'react-bootstrap-typeahead';
import ReactDOM from 'react-dom';
import  {Button, Form } from 'react-bootstrap';

// import options from './data';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';


const SEARCH_URI = 'https://127.0.0.1:8000/api/villes';
const SEARCH_URI2 = 'https://test.candidatheque.com/api/metiers';
const SEARCH_URI3 = 'https://127.0.0.1:8000/api/a_p_es';
const SEARCH_URI4 = 'https://127.0.0.1:8000/api/type_contrats';

const BasicExample = () => {
    const [singleSelections, setSingleSelections] = useState([]);
    const [singleSelections2, setSingleSelections2] = useState([]);
    const [singleSelections3, setSingleSelections3] = useState([]);
    const [singleSelections4, setSingleSelections4] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [isLoading3, setIsLoading3] = useState(false);
    const [isLoading4, setIsLoading4] = useState(false);
    const [options, setOptions] = useState([]);
    const [options2, setOptions2] = useState([]);
    const [options3, setOptions3] = useState([]);
    const [options4, setOptions4] = useState([]);



    const recherche = (query) => {
        //console.log("villes");
        setIsLoading(true);

        fetch(`${SEARCH_URI}?nom=${query}`)
            .then((resp) => resp.json() )
            .then((items) => {

                console.log(items);
                setOptions(items);
                setIsLoading(false);
            });
        fetch(`${SEARCH_URI2}?libelle=${query}`)
            .then((resp) => resp.json() )
            .then((items2) => {

                console.log(items2);
                setOptions2(items2);
                setIsLoading2(false);
            });
        fetch(`${SEARCH_URI3}?libelle=${query}`)
            .then((resp) => resp.json() )
            .then((items3) => {

                console.log(items3);
                setOptions3(items3);
                setIsLoading3(false);
            });
        fetch(`${SEARCH_URI4}?libelle=${query}`)
            .then((resp) => resp.json() )
            .then((items4) => {

                console.log(items4);
                setOptions4(items4);
                setIsLoading4(false);
            });
    }
    const filterBy = () => true;

    return (


            <Form.Group>
                <Form.Label>Profession</Form.Label>
                <AsyncTypeahead
                    delay={200}
                    useCache={2}
                    isLoading={isLoading2}
                    id="basic-typeahead-single"
                    labelKey="libelle"
                    onChange={setSingleSelections2}
                    options={options2}

                    placeholder=""
                    selected={singleSelections2}
                    minLength={1}
                    onSearch={recherche}
                    renderMenuItemChildren={(option, props) => (

                        <span>{option.libelle}{option.id}</span>

                    )}
                />

                <Form.Label>Villes</Form.Label>
                <AsyncTypeahead
                    useCache
                    isLoading={isLoading}
                    id="basic-typeahead-single"
                    labelKey="nom"
                    onChange={setSingleSelections}
                    options={options}
                    placeholder=""
                    selected={singleSelections}
                    minLength={1}
                    onSearch={recherche}
                    renderMenuItemChildren={(option, props) => (

                        <span>{option.nom}</span>

                    )}
                />

                <Form.Label>Secteur</Form.Label>
                <AsyncTypeahead
                    useCache
                    filterBy={filterBy}
                    isLoading={isLoading3}
                    id="basic-typeahead-single"
                    labelKey="libelle"
                    onChange={setSingleSelections3}
                    options={options3}
                    placeholder=""
                    selected={singleSelections3}
                    minLength={3}
                    onSearch={recherche}
                    renderMenuItemChildren={(option, props) => (

                        <span>{option.libelle}</span>

                    )}
                />

                <Form.Label>Type de contact</Form.Label>
                <AsyncTypeahead
                    useCache
                    isLoading={isLoading4}
                    id="basic-typeahead-single"
                    labelKey="libelle"
                    onChange={setSingleSelections4}
                    options={options4}
                    placeholder=""
                    selected={singleSelections4}
                    minLength={1}
                    onSearch={recherche}
                    renderMenuItemChildren={(option, props) => (

                        <span>{option.libelle}</span>

                    )}
                />

                <Button type="submit" className="mb-2">
                    Submit
                </Button>
            </Form.Group>



    );
};
/* example-end */

ReactDOM.render(<BasicExample />, document.getElementById('villes'));

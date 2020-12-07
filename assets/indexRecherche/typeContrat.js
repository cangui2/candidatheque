import fetch from 'isomorphic-fetch';
import React, { Fragment, useState } from 'react';
import { AsyncTypeahead  } from 'react-bootstrap-typeahead';
import ReactDOM from 'react-dom';
import { Form } from 'react-bootstrap';

// import options from './data';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';


const SEARCH_URI = 'https://test.candidatheque.com/api/type_contrats';


const BasicExample = () => {
    const [singleSelections, setSingleSelections] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const recherche = (query) => {
        console.log("test");
        setIsLoading(true);

        fetch(`${SEARCH_URI}?nom=${query}`)
            .then((resp) => resp.json())
            .then((items) => {


                setOptions(items);
                setIsLoading(false);
            });
    }

    return (
        <Fragment>
            <Form.Group>
                <Form.Label>Type de Contrat</Form.Label>
                <AsyncTypeahead
                    isLoading={isLoading}
                    id="basic-typeahead-single"
                    labelKey="nom"
                    onChange={setSingleSelections}
                    options={options}
                    placeholder=""
                    selected={singleSelections}
                    minLength={3}
                    onSearch={recherche}
                    renderMenuItemChildren={(option, props) => (

                        <span>{option.nom}</span>

                    )}
                />
            </Form.Group>
        </Fragment>
    );
};
/* example-end */

ReactDOM.render(<BasicExample />, document.getElementById('contrats'));

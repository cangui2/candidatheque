import fetch from 'isomorphic-fetch';
import React, { Fragment, useState } from 'react';
import { AsyncTypeahead  } from 'react-bootstrap-typeahead';
import ReactDOM from 'react-dom';
import { Form } from 'react-bootstrap';

// import options from './data';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';


const SEARCH_URI = 'https://test.candidatheque.com/api/a_p_es';


const BasicExample = () => {
    const [singleSelections, setSingleSelections] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const recherche = (query) => {
        console.log("test");
        setIsLoading(true);

        fetch(`${SEARCH_URI}?libelle=${query}`)
            .then((resp) => resp.json())
            .then((items) => {


                setOptions(items);
                setIsLoading(false);
            });
    }
    const filterBy = () => true;

    return (
        <Fragment>
            <Form.Group>
                <Form.Label>Secteur</Form.Label>
                <AsyncTypeahead
                    filterBy={filterBy}
                    isLoading={isLoading}
                    id="basic-typeahead-single"
                    labelKey="libelle"
                    onChange={setSingleSelections}
                    options={options}
                    placeholder=""
                    selected={singleSelections}
                    minLength={3}
                    onSearch={recherche}
                    renderMenuItemChildren={(option, props) => (

                        <span>{option.libelle}</span>

                    )}
                />
            </Form.Group>
        </Fragment>
    );
};




ReactDOM.render(<BasicExample />, document.getElementById('romes'));

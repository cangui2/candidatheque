import fetch from 'isomorphic-fetch';
import React, { Fragment, useState } from 'react';
import { AsyncTypeahead  } from 'react-bootstrap-typeahead';
import ReactDOM from 'react-dom';
import { Form } from 'react-bootstrap';

// import options from './data';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Typeahead from "react-bootstrap-typeahead/lib/components/AsyncTypeahead";


const SEARCH_URI = 'https://127.0.0.1:8000/api/type_contrats';


const BasicExample = (handleSearch, filterBy) => {
    const [singleSelections, setSingleSelections] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const recherche = (query) => {

        setIsLoading(true);

        fetch(`${SEARCH_URI}?libelle=${query}`)
            .then((resp) => resp.json())
            .then((items) => {

                console.log(items);
                setOptions(items);
                setIsLoading(false);
            });
    }

    return (
        <Fragment>
            <Form.Group>
                <Form.Label>Type de contact</Form.Label>
                {/*<AsyncTypeahead*/}
                {/*    isLoading={isLoading}*/}
                {/*    id="basic-typeahead-single"*/}
                {/*    labelKey="libelle"*/}
                {/*    onChange={setSingleSelections}*/}
                {/*    options={options}*/}
                {/*    placeholder=""*/}
                {/*    selected={singleSelections}*/}
                {/*    minLength={1}*/}
                {/*    onSearch={recherche}*/}
                {/*    renderMenuItemChildren={(option, props) => (*/}

                {/*        <span value={option.id}>{option.libelle}</span>*/}

                {/*    )}*/}
                {/*/>*/}


            </Form.Group>

                        </Fragment>
    );
};
/* example-end */

ReactDOM.render(<BasicExample />, document.getElementById('typeContrat'));

import fetch from 'isomorphic-fetch';
import React, { Fragment, useState } from 'react';
import { AsyncTypeahead  } from 'react-bootstrap-typeahead';
import ReactDOM from 'react-dom';
import { Form } from 'react-bootstrap';

// import options from './data';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';


const SEARCH_URI = 'https://test.candidatheque.com/api/metiers';


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

  return (
    <Fragment>
      <Form.Group>
        <Form.Label>Profession</Form.Label>
        <AsyncTypeahead
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
/* example-end */

ReactDOM.render(<BasicExample />, document.getElementById('profession'));

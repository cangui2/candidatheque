import React, { useState }  from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function Templates() {
    const [style, setStyle] = useState("/assets/css/template1.css");
  
    return (
        <>
        <link rel="stylesheet" href={style} />
          <DropdownButton key={1} id="dropdown-basic-button" title="Dropdown button" >
              <Dropdown.Item eventKey="/assets/css/template1.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Template1</Dropdown.Item>
              <Dropdown.Item eventKey="/assets/css/template2.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Template2</Dropdown.Item>
              <Dropdown.Item eventKey="/assets/css/template3.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Template3</Dropdown.Item>
              <Dropdown.Item eventKey="/assets/css/template4.css" onSelect={ (eventKey) => { setStyle(eventKey); }}>Template4</Dropdown.Item>
          </DropdownButton>
            </>
    );
  }

  export default Templates;
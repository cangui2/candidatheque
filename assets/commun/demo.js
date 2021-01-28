import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import SelectMetier from './SelectMetier';
import SelectVille from './SelectVille';
import SelectLieu from './SelectLieu';

import 'bootstrap/dist/css/bootstrap.min.css';


const Demo = (props) => {

    const [metier, setMetier] = useState(null);
    const [ville, setVille] = useState(null);
    const [lieu, setLieu] = useState(null);

    const handleSelectMetier = (value) => {
        setMetier(value);
    }

    const handleSelectVille = (value) => {
        setVille(value);
    }

    const handleSelectLieu = (value) => {
        setLieu(value);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <code>
                        &lt;<b>SelectMetier</b> onSelect=&#123;...&#125; /&gt;
                    </code>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Metier: {metier ? metier.libelle : ''}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SelectMetier onSelect={handleSelectMetier} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <code>
                        &lt;<b>SelectVille</b> onSelect=&#123;...&#125; /&gt;
                    </code>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Ville: {ville ? ville.nom : ''}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SelectVille onSelect={handleSelectVille} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <code>
                        &lt;<b>SelectLieu</b> onSelect=&#123;...&#125; /&gt;
                    </code>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>{lieu ? lieu.type : ''}: {lieu ? lieu.nom : ''}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SelectLieu onSelect={handleSelectLieu} />
                </Col>
            </Row>
        </Container>
    );
}




ReactDOM.render(
    <Demo />,
    document.getElementById('demo_div')
);
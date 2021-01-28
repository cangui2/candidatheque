import React, {useState, useEffect} from 'react';
import { Row, Col, Button, Accordion, Card } from 'react-bootstrap';

import FormProfil from './FormProfil.js';

import './CV.css';

const CV2  = () => {

    const [activeKey, setActiveKey] = useState("0");

    const [profil, setProfil] = useState({
        nom: "Wong",
        prenom: "Kar-wai",
        adresse: "Carnaby Street",
        ville: "London",
        phone: "+33 6 58 96 52 14",
        email: "jodo@yahoo.com",
        titre: "Developpeur web",
        description: "Après une thèse de biochimie et un post-doc en chimiométrie pendant lesquels j'avais développé un certain nombre d'outils informatiques...",
        photo: "https://test.candidatheque.com/assets/photos/profil4.png",
        metier: null
    });

    useEffect(()=>{
        
        //handleLoadLocal();
    },[]);


    const handleProfilChange = (pro) => {
        // console.log("begin profil");
        // console.log(pro);
        // console.log("end profil");
        setProfil({ ...pro });
        //handleSaveLocal();
    }

        return (
            <Row className="mt-2">
                <Col className=" no-print pl-2">
                    <Accordion defaultActiveKey="0" activeKey={activeKey} onSelect={(value)=>{ let activeKey=value; setActiveKey({activeKey}); }}>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            Informations personnelles
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                <FormProfil
                                            value={profil}
                                            onProfilChange={(evt) => handleProfilChange(evt)}
                                        />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                       
                        
                       
                        
                    </Accordion>
                </Col>
               </Row>
                
                
            
           

        );
}

export default CV2;
import React, { useState }  from 'react';
import { Modal, Button } from 'react-bootstrap';

function Dialog() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Exporter...
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Exportation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Choisissez d'exporter votre CV en PDF ou d'obtenir l'url de votre CV</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Annuler
            </Button>
            <Button variant="primary" onClick={handleClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Dialog;
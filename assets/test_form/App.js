import React, { useState } from 'react';
import { Form, Row, Button } from 'react-bootstrap';
import 'bootstrap';


function App() {

	const [nom, setNom] = useState(data_form.nom.value);
	const [prenom, setPrenom] = useState(data_form.prenom.value);
	const [ville, setVille] = useState(data_form.ville.value);
	const [errorNom, setErrorNom] = useState(data_form.nom.error);
	const [errorPrenom, setErrorPrenom] = useState(data_form.prenom.error);
	const [errorVille, setErrorVille] = useState(data_form.ville.error);

	const handleChangeNom = (evt) => {
		setNom(evt.target.value);
		if (evt.target.value!="") {
			setErrorNom("")
		}
		else { 
			setErrorNom("Ce champ ne peut pas être vide")
		}
	}


	return (
		<div className="App">

			<Form.Group controlId="diego_nom" >
				<Form.Label>Nom</Form.Label>
				<Form.Control 
					type="text" 
					placeholder="Nom ..." 
					name="diego[nom]" 
					value={nom} 
					onChange={handleChangeNom} 
					isInvalid={errorNom!==""}
				/>
				<Form.Control.Feedback type="invalid">
					{errorNom}
          		</Form.Control.Feedback>
			</Form.Group>

			<Form.Group controlId="diego_prenom">
				<Form.Label>Prénom</Form.Label>
				<Form.Control 
					type="text" 
					placeholder="Prenom ..." 
					name="diego[prenom]" 
					value={prenom} 
					onChange={evt => setPrenom(evt.target.value)} 
					isInvalid={errorPrenom!==""}
				/>
				<Form.Control.Feedback type="invalid">
					{errorPrenom}
          		</Form.Control.Feedback>
			</Form.Group>

			<Form.Group controlId="diego_ville">
				<Form.Label>Ville</Form.Label>
				<Form.Control 
					type="text" 
					placeholder="Ville ..." 
					name="diego[ville]" 
					value={ville} 
					onChange={evt => setVille(evt.target.value)} 
					isInvalid={errorVille!==""}
				/>
				<Form.Control.Feedback type="invalid">
					{errorVille}
          		</Form.Control.Feedback>

				<Button variant="primary" type="submit" >
					Submit
				</Button>
			</Form.Group>


		</div>
	);
}

export default App;

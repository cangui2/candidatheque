import React from 'react';
import Button from 'react-bootstrap/Button';
import FormFormation from './FormFormation.js'

const FormFormations = (props) => {

        return (
            <div className="cv">
                <Button 
                    size="sm"
                    onClick={(evt) => props.addFormation(evt)}
                >
                    Ajouter une formation
                </Button>
                <hr />
                <div >
                    {

                        props.value.map((formation, i) =>
                            <FormFormation
                                value={formation}
                                onChange={(exp) => props.changeFormation(i, exp)}
                                delFormation={() => props.delFormation(i)}
                                key={i}
                            />

                        )
                    }
                </div>
            </div>
        );
}

export default FormFormations;
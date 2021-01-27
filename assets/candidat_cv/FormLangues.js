import React from 'react';
import Button from 'react-bootstrap/Button';
import FormLangue from './FormLangue.js'

const FormLangues = (props) => {

        return (
            <div className="cv">
                <Button 
                    size="sm"
                    onClick={(evt) => props.addLangue(evt)}
                >
                    Ajouter une langue
                </Button>
                <hr />
                <div >
                    {
                        props.value.map((langue, i) =>
                            <FormLangue
                                value={langue}
                                onChange={(lan) => props.changeLangue(i, lan)}
                                delLangue={() => props.delLangue(i)}
                                key={i}
                            />

                        )
                    }
                </div>
            </div>
        );
}

export default FormLangues;
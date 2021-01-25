import React from 'react';
import Button from 'react-bootstrap/Button';
import FormExperience from './FormExperience.js'

const FormExperiences = (props) => {

    return (
        <div className="row">
            <div className="col-12">
                Vous pouvez gérer vos expèriences dans cette section...<br />
                <Button 
                    size="sm"
                    onClick={(evt) => props.addExperience(evt)}
                >
                    Ajouter
                </Button>
                <hr className="my-2"/>
                <div >
                    {
                        props.value.map((experience, i) =>
                            <FormExperience
                                value={experience}
                                onChange={(exp) => props.changeExperience(i, exp)}
                                delExperience={() => props.delExperience(i)}
                                key={i}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default FormExperiences;
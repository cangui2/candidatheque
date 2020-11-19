import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class FormExperience extends React.Component {

    handleChange(evt) {
        //console.log(this);
        let experience = {
            date: this.refs.date.value,
            mission: this.refs.mission.value
        };
        this.props.onChange(experience);
    }

    render() {
        return (
            <div >
                <div >
                    <input
                        value={this.props.value.date}
                        onChange={(evt) => this.handleChange(evt)}
                        ref="date"
                    />
                    <input
                        value={this.props.value.mission}
                        onChange={(evt) => this.handleChange(evt)}
                        ref="mission"
                    />
                    <input type="button" value="-" onClick={() => this.props.delExperience(this)} />
                </div>
            </div>
        );
    }
}

class FormExperiences extends React.Component {

    render() {
        return (
            <div className="cv">
                <input type="button" value="+" onClick={(evt) => this.props.addExperience(evt)} />
                <div >
                    {

                        this.props.value.map((experience, i) =>
                            <FormExperience
                                value={experience}
                                onChange={(exp) => this.props.changeExperience(i, exp)}
                                delExperience={() => this.props.delExperience(i)}
                                key={i}
                            />

                        )
                    }
                </div>
            </div>
        );
    }
}

class FormProfil extends React.Component {
    render() {
        return (
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label >Nom:</label>
                        <input
                            class="form-control form-control-sm"
                            type="text"
                            value={this.props.value.nom}
                            onChange={() => { 
                                this.props.value.nom=this.refs.nomTextInput.value; 
                                this.props.onProfilChange(this.props.value)
                            }}
                            ref="nomTextInput"
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label >Prenom:</label>
                        <input
                            class="form-control form-control-sm"
                            type="text"
                            value={this.props.value.prenom}
                            onChange={() => { 
                                this.props.value.prenom=this.refs.prenomTextInput.value; 
                                this.props.onProfilChange(this.props.value)
                            }}
                            ref="prenomTextInput"
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label >Adresse:</label>
                        <input
                            class="form-control form-control-sm"
                            type="text"
                            value={this.props.value.adresse}
                            onChange={() => { 
                                this.props.value.adresse=this.refs.adresseTextInput.value; 
                                this.props.onProfilChange(this.props.value)
                            }}
                            ref="adresseTextInput"
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <label >Ville:</label>
                        <input
                            class="form-control form-control-sm"
                            type="text"
                            value={this.props.value.ville}
                            onChange={() => { 
                                this.props.value.ville=this.refs.villeTextInput.value; 
                                this.props.onProfilChange(this.props.value)
                            }}
                            ref="villeTextInput"
                        />
                    </div>
                </div>
        );
    }
}


class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profil: {
                nom: "Doe",
                prenom: "John",
                adresse: "garden street",
                ville: "London"
            },
            experiences: [
                { date: "juillet 2001", mission: "stage de découverte" },
                { date: "2020-10-02", mission: "bla bla bla" },
            ],
            formations: [
                { date: "juillet 2001", mission: "stage de découverte" },
                { date: "2020-10-02", mission: "bla bla bla" },
            ]
        }
    }
    handleProfilChange(pro) {
        //let profil = this.state.profil;
        //profil.nom = nom;
        this.setState({ profil: pro });
    }
    handleAddExperience(evt) {
        // console.log(evt);
        let experiences = this.state.experiences;
        experiences.push({ date: "2020-10-03", mission: "bla bla bla22" });
        this.setState({ experiences });
    }
    handleDelExperience(i) {
        // console.log("del ");
        // console.log(evt);
        let experiences = this.state.experiences;
        experiences.splice(i, 1);
        this.setState({ experiences });
    }
    handleChangeExperience(i, exp) {
        // console.log("key " + i);
        // console.log(exp);
        let experiences = this.state.experiences;
        experiences[i] = exp;
        this.setState({ experiences });
    }
    render() {
        //console.log("654");
        return (
            <div className="row">
                
                <div className="col-sm-5">
                    <h1>Module de création de CV.</h1>
                    Cliquez sur les onglets ci-dessous pour compléter les différents rubriques de votre CV

                        <div class="accordion mt-5" id="accordion1">
                            <div class="card">
                                <div class="card-header" id="heading1">
                                    <h2 class="mb-0">
                                        <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse1" >
                                            Profil                                
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapse1" class="collapse show" data-parent="#accordion1">
                                    <div class="card-body">
                                        <FormProfil
                                            value={this.state.profil}
                                            onProfilChange={(evt) => this.handleProfilChange(evt)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="heading2">
                                    <h2 class="mb-0">
                                        <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse2" >
                                            Experiences                                
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapse2" class="collapse " data-parent="#accordion1">
                                    <div class="card-body">
                                    <FormExperiences
                                        value={this.state.experiences}
                                        addExperience={(evt) => this.handleAddExperience(evt)}
                                        delExperience={(i) => this.handleDelExperience(i)}
                                        changeExperience={(i, exp) => this.handleChangeExperience(i, exp)}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>

                    
                </div>

                <div  className="col-sm-7">

                    <div className="cv_paper">
                        <div className="cv_profil">
                            <div className="engras">{this.state.profil.prenom} {this.state.profil.nom}</div>
                            <div>{this.state.profil.adresse} {this.state.profil.ville}</div>
                        </div>
                        <hr />
                        <div >
                        <div >
                            <h3>Experiences</h3>
                            <div >
                                {
                                    
                                    this.state.experiences.map((experience) =>
                                        <div >
                                            {experience.date}
                                            &nbsp;-&nbsp;
                                            {experience.mission}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <CV />,
    document.getElementById('root')
);

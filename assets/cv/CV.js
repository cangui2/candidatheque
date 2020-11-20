import React from 'react';
import FormExperiences from './FormExperiences.js'
import FormProfil from './FormProfil.js'
import Dialog from './Dialog.js'


class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profil: {
                nom: "",
                prenom: "",
                adresse: "",
                ville: ""
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
        return (
            <div className="row">
                <div className="col-12">
                    <Dialog />
                </div>
                
                <div className="col-sm-5">
                    <h1>Module de création de CV.</h1>
                    Cliquez sur les onglets ci-dessous pour compléter les différentes rubriques de votre CV

                        <div class="accordion mt-5" id="accordion1">
                            <div class="card">
                                <div class="card-header" id="heading1">
                                    <h2 class="mb-0">
                                        <button class="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse1" >
                                            Informations personnelles                                
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

                <div  className="col-sm-7 ">

                    <div className="paper">
                        <section className="profil">
                            <div className="titre">{this.state.profil.prenom} {this.state.profil.nom}</div>
                            <div>{this.state.profil.adresse} {this.state.profil.ville}</div>
                        </section>
                        <section className="experiences">
                            <header>Experiences</header>
                            <div >
                                {
                                    this.state.experiences.map((experience) =>
                                        <div className="experience">
                                            <div class="date-debut">{experience.dateDebut}</div>
                                            <div class="date-fin">{experience.dateFin}</div>
                                            <div class="entreprise">{experience.entreprise}</div>
                                            <div class="ville">{experience.ville}</div>
                                            <div class="logo">{experience.logo}</div>
                                            <div class="titre">{experience.titre}</div>
                                            <div class="desciption">{experience.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="formations">
                            <header>Formations</header>
                            <div >
                                {
                                    this.state.formations.map((formation) =>
                                        <div className="formation">
                                            <div class="date-debut">{formation.dateDebut}</div>
                                            <div class="date-fin">{formation.dateFin}</div>
                                            <div class="entreprise">{formation.entreprise}</div>
                                            <div class="ville">{formation.ville}</div>
                                            <div class="logo">{formation.logo}</div>
                                            <div class="titre">{formation.titre}</div>
                                            <div class="desciption">{formation.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="competences">
                            <header>Competences</header>
                            <div >
                                {
                                    this.state.formations.map((competence) =>
                                        <div className="competence">
                                            <div class="date-debut">{competence.dateDebut}</div>
                                            <div class="date-fin">{competence.dateFin}</div>
                                            <div class="entreprise">{competence.entreprise}</div>
                                            <div class="ville">{competence.ville}</div>
                                            <div class="logo">{competence.logo}</div>
                                            <div class="titre">{competence.titre}</div>
                                            <div class="desciption">{competence.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="langues">
                            <header>Langues</header>
                            <div >
                                {
                                    this.state.formations.map((langue) =>
                                        <div className="langue">
                                            <div class="date-debut">{langue.dateDebut}</div>
                                            <div class="date-fin">{langue.dateFin}</div>
                                            <div class="entreprise">{langue.entreprise}</div>
                                            <div class="ville">{langue.ville}</div>
                                            <div class="logo">{langue.logo}</div>
                                            <div class="titre">{langue.titre}</div>
                                            <div class="desciption">{langue.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="reseaux">
                            <header>Réseaux</header>
                            <div >
                                {
                                    this.state.formations.map((reseau) =>
                                        <div className="reseau">
                                            <div class="date-debut">{reseau.dateDebut}</div>
                                            <div class="date-fin">{reseau.dateFin}</div>
                                            <div class="entreprise">{reseau.entreprise}</div>
                                            <div class="ville">{reseau.ville}</div>
                                            <div class="logo">{reseau.logo}</div>
                                            <div class="titre">{reseau.titre}</div>
                                            <div class="desciption">{reseau.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        );
    }
}

export default CV;
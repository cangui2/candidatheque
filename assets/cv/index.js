import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';

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
                <h1>Experiences</h1>
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
            <div >
                Nom:
                <input
                    value={this.props.value.nom}
                    onChange={() => this.props.onNomChange(this.refs.nomTextInput.value)}
                    ref="nomTextInput"
                />
                <br />
                Prenom:
                <input
                    value={this.props.value.prenom}
                    onChange={() => this.props.onPrenomChange(this.refs.prenomTextInput.value)}
                    ref="prenomTextInput"
                />
            </div>
        );
    }
}


class Experiences extends React.Component {

    render() {
        let i = 0;
        return (
            <div >
                <h1>Experiences</h1>
                <div >
                    {

                        this.props.value.map((experience) =>
                            <div key={i++}>
                                {experience.date}
                                {experience.mission}
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

class Profil extends React.Component {
    render() {
        return (
            <div >
                <h1>Profil</h1>
                {this.props.value.prenom} {this.props.value.nom}
            </div>
        );
    }
}


class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profil: {
                nom: "toto",
                prenom: "titi",
            },
            experiences: [
                { date: "juillet 2001", mission: "stage de découverte" },
                { date: "2020-10-02", mission: "bla bla bla" },
            ]
        }
    }
    handleNomChange(nom) {
        //console.log(nom);
        let profil = this.state.profil;
        profil.nom = nom;
        this.setState({ profil });
    }
    handlePrenomChange(prenom) {
        //console.log(nom);
        let profil = this.state.profil;
        profil.prenom = prenom;
        this.setState({ profil });
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
                <div className="col-sm-6">
                    <div>
                        <FormProfil
                            value={this.state.profil}
                            onNomChange={(evt) => this.handleNomChange(evt)}
                            onPrenomChange={(evt) => this.handlePrenomChange(evt)}
                        />
                    </div>

                    <div >
                        <FormExperiences
                            value={this.state.experiences}
                            addExperience={(evt) => this.handleAddExperience(evt)}
                            delExperience={(i) => this.handleDelExperience(i)}
                            changeExperience={(i, exp) => this.handleChangeExperience(i, exp)}
                        />
                    </div>
                </div>
                <div  className="col-sm-6">
                    <hr />
                    <div >
                        <div>
                            <Profil value={this.state.profil} />
                        </div>

                        <div >
                            <Experiences value={this.state.experiences} />
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

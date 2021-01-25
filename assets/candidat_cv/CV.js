import React, {useState, useEffect} from 'react';
import { Row, Col, Button, Accordion, Card } from 'react-bootstrap';

import FormExperiences from './FormExperiences.js';
import FormFormations from './FormFormations.js';
import FormProfil from './FormProfil.js';
import Dialog from './Dialog.js';
import Templates from './Templates.js';
import FormCompetences from './FormCompetences.js';
import FormLangues from './FormLangues.js';
import FormReseaux from './FormReseaux.js';
import axios from 'axios';

import './CV.css';

const CV  = () => {

    const [activeKey, setActiveKey] = useState("0");

    const [state, setState] = useState({
            profil: {
                nom: "Wong",
                prenom: "Kar-wai",
                adresse: "Carnaby Street",
                ville: "London",
                phone: "+33 6 58 96 52 14",
                email: "jodo@yahoo.com",
                titre: "Développeur Web",
                description: "Après une thèse de biochimie et un post-doc en chimiométrie pendant lesquels j'avais développé un certain nombre d'outils informatiques...",
                photo: "https://test.candidatheque.com/assets/photos/profil4.png",
                metier: null
            },
            experiences: [
                { 
                    dateDebut: "2018", 
                    dateFin: "maintenant", 
                    titre: "Lead developer", 
                    entreprise: "TheBox", 
                    logo:"https://test.candidatheque.com/assets/photos/logo1.png", 
                    description: "azeazeaze" 
                },
                { 
                    dateDebut: "2012", 
                    dateFin: "2018", 
                    titre: "stage de découverte", 
                    entreprise: "TheBox", 
                    logo:"https://test.candidatheque.com/assets/photos/logo2.png", 
                    description: "dfgdfgdfg" 
                },
                { 
                    dateDebut: "2005", 
                    dateFin: "2012", 
                    titre: "stage de découverte", 
                    entreprise: "TheBox", 
                    logo:"https://test.candidatheque.com/assets/photos/logo3.png", 
                    description: "uiouiouio" 
                }
            ],
            formations: [
                { 
                    dateDebut: "2003", 
                    dateFin: "2004", 
                    ecole: "BTS - Chimie des particules",
                    niveau: "3",
                    diplome: "",
                    description: "La raison que je donnais maintenant dans mes lettres à Gilberte, de mon refus de la voir, c'était une allusion à quelque mystérieux malentendu, parfaitement fictif, qu'il y aurait eu entre elle et moi."

                },
                { 
                    dateDebut: "2004", 
                    dateFin: "2005", 
                    ecole: "Ecole de le dernière chance",
                    niveau: "2",
                    diplome: "Master Communication",
                    description: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions."

                }
            ],
            competences: [
                { id: 55, libelle: "Javascript", niveau: "5" },
                { id: 56, libelle: "PHP", niveau: "2" },
                { id: 57, libelle: "Symfony", niveau: "1" },
                { id: 58, libelle: "React", niveau: "3" },
            ],
            langues: [
                { libelle: "Anglais", niveau: "Technique" },
                { libelle: "Allemand", niveau: "Courant" }
            ],
            reseaux: [
                { type: "LinkedIn", url: "https://linkedin.com/..." },
                { type: "GitHub", url: "https://github.com/..." }
            ],
        });


    useEffect(()=>{
        
        //handleLoadLocal();
    },[]);


    const handleSaveLocal = () => {
        //localStorage.setItem('be4web_cv', JSON.stringify(this.state));
        axios.post('/api/post_cv', state).then(() => {

        });
    }
    const handleLoadLocal = () => {
        // this.setState(JSON.parse(localStorage.getItem('be4web_cv')));
        axios.get('/api/get_cv/2').then((response) => {
            setState(response.data);
        });
    }
    const handleProfilChange = (pro) => {
        setState({ profil: pro });
        handleSaveLocal();
    }
    //////////////////////////////////////////////////////////////
    const handleAddExperience = (evt) => {
        let experiences = state.experiences;
        experiences.push({ date: "2020-10-03", mission: "bla bla bla22" });
        setState({ experiences });
        handleSaveLocal();
    }
    const handleDelExperience = (i) => {
        let experiences = state.experiences;
        experiences.splice(i, 1);
        setState({ experiences });
        handleSaveLocal();
    }
    const handleChangeExperience = (i, exp) => {
        let experiences = state.experiences;
        experiences[i] = exp;
        setState({ experiences });
        handleSaveLocal();
    }
    //////////////////////////////////////////////////////////////
    const handleAddFormation = (evt) => {
        let formations = state.formations;
        formations.push({ dateDebut: "", dateFin: "", ecole: "", niveau: "", diplome: "", description: "" });
        setState({ formations });
        handleSaveLocal();
    }
    const handleDelFormation = (i) => {
        let formations = state.formations;
        formations.splice(i, 1);
        setState({ formations });
        handleSaveLocal();
    }
    const handleChangeFormation = (i, exp) => {
        let formations = state.formations;
        formations[i] = exp;
        setState({ formations });
        handleSaveLocal();
    }
    //////////////////////////////////////////////////////////////
    const handleAddCompetence = (com) => {
        console.log("competences à ajouter");
        console.log(com);
        let competences = state.competences;
        let present = false;
        for (const comp of competences) {
            if (comp.id==com.id) {
                present=true;
            }
        }
        console.log("present=");
        console.log(present);
        if (!present) competences.push({ libelle: com.libelle, niveau: "5", id: com.id});
        setState({ competences });
        handleSaveLocal();
    }
    const handleDelCompetence = (i, com) => {
        console.log("i=");
        console.log(i);
        console.log("comp=");
        console.log(com);
        if (i!==null) {
            let competences = state.competences;
            competences.splice(i, 1);
            setState({ competences });
            handleSaveLocal();
        }
        else {
            let competences = state.competences;
            let present = -1;
            for (const i_comp in competences) {
                if (competences[i_comp].id==com.id) {
                    present=i_comp;
                }
            }
            if (present!=-1) competences.splice(present, 1);
            setState({ competences });
            handleSaveLocal();
        }
    }
    const handleChangeCompetence = (i, comp) => {
        let competences = state.competences;
        competences[i] = comp;
        setState({ competences });
        handleSaveLocal();
    }
    //////////////////////////////////////////////////////////////
    const handleAddLangue = (evt) => {
        let langues = state.langues;
        langues.push({ libelle: "", niveau: ""});
        setState({ langues });
        handleSaveLocal();
    }
    const handleDelLangue = (i) => {
        let langues = state.langues;
        langues.splice(i, 1);
        setState({ langues });
        handleSaveLocal();
    }
    const handleChangeLangue = (i, exp) => {
        let langues = state.langues;
        langues[i] = exp;
        setState({ langues });
        handleSaveLocal();
    }
    //////////////////////////////////////////////////////////////
    const handleAddReseau = (evt) => {
        let reseaux = state.reseaux;
        reseaux.push({ type: "", url: ""});
        setState({ reseaux });
        handleSaveLocal();
    }
    const handleDelReseau = (i) => {
        let reseaux = state.reseaux;
        reseaux.splice(i, 1);
        setState({ reseaux });
        handleSaveLocal();
    }

    const handleChangeReseau = (i, exp) => {
        let reseaux = state.reseaux;
        reseaux[i] = exp;
        setState({ reseaux });
        handleSaveLocal();
    }

    const handleScrollToProfile = () => {
        let activeKey="0"; 
        setState({activeKey});
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
                                            value={state.profil}
                                            onProfilChange={(evt) => handleProfilChange(evt)}
                                        />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Competences
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                <FormCompetences
                                        value={state.competences}
                                        competencesRome={[]}
                                        metier={state.profil.metier}
                                        addCompetence={(evt, com) => handleAddCompetence(evt, com)}
                                        delCompetence={(i, comp) => handleDelCompetence(i, comp)}
                                        changeCompetence={(i, exp) => handleChangeCompetence(i, exp)}
                                        scrollToProfile={() => handleScrollToProfile()}
                                    />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                            Experiences
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                <FormExperiences
                                        value={state.experiences}
                                        addExperience={(evt) => handleAddExperience(evt)}
                                        delExperience={(i) => handleDelExperience(i)}
                                        changeExperience={(i, exp) => handleChangeExperience(i, exp)}
                                    />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                            Formation
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                <FormFormations
                                        value={state.formations}
                                        addFormation={(evt) => handleAddFormation(evt)}
                                        delFormation={(i) => handleDelFormation(i)}
                                        changeFormation={(i, exp) => handleChangeFormation(i, exp)}
                                    />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4">
                            Langues
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <FormLangues
                                        value={state.langues}
                                        addLangue={(evt) => handleAddLangue(evt)}
                                        delLangue={(i) => handleDelLangue(i)}
                                        changeLangue={(i, exp) => handleChangeLangue(i, exp)}
                                    />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="5">
                            Réseaux sociaux
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                <FormReseaux
                                        value={state.reseaux}
                                        addReseau={(evt) => handleAddReseau(evt)}
                                        delReseau={(i) => handleDelReseau(i)}
                                        changeReseau={(i, exp) => handleChangeReseau(i, exp)}
                                    />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
                <Col>
                    <Row>
                        <Col sm={12} className="text-right no-print ">
                            <Templates />
                        </Col>
                        <Col sm={12}  className=" paper-container">
                    <div className="paper">
                        <section className="identite">
                            <div className="nom">{state.profil.prenom} {state.profil.nom}</div>
                        </section>
                        <section className="photo">
                            <div className="portrait"><img src={state.profil.photo}/></div>
                        </section>
                        <section className="profil">
                            <header>Contact</header>
                            <div className="adresse">{state.profil.adresse}</div>
                            <div className="ville">{state.profil.ville}</div>
                            <div className="phone">{state.profil.phone}</div>
                            <div className="email">{state.profil.email}</div>
                        </section>
                        <section className="titre">
                            <div className="poste">{state.profil.titre}</div>
                        </section>
                        <section className="intro">
                            <header>Profil</header>
                            <div className="text">{state.profil.description}</div>
                        </section>
                        <section className="experiences">
                            <header>Experiences</header>
                            <div >
                                {
                                    state.experiences.map((experience, index) =>
                                        <div className="experience"  key={index}>
                                            <div className="date-debut">{experience.dateDebut}</div>
                                            <div className="date-fin">{experience.dateFin}</div>
                                            <div className="entreprise">{experience.entreprise}</div>
                                            <div className="ville">{experience.ville}</div>
                                            <div className="logo"><img alt="image" src={experience.logo}/></div>
                                            <div className="titre">{experience.titre}</div>
                                            <div className="description">{experience.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="formations">
                            <header>Formations</header>
                            <div >
                                {
                                    state.formations.map((formation, index) =>
                                        <div className="formation"  key={index}>
                                            <div className="date-debut">{formation.dateDebut}</div>
                                            <div className="date-fin">{formation.dateFin}</div>
                                            <div className="ecole">{formation.ecole}</div>
                                            <div className="titre">{formation.diplome}</div>
                                            <div className="niveau">{formation.niveau}</div>
                                            <div className="description">{formation.description}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="competences">
                            <header>Competences</header>
                            <div >
                                {
                                    state.competences.map((competence, index) =>
                                        <div className="competence"  key={index}>
                                            <div className="libelle">{competence.libelle}</div>
                                            <div className={"niveau niveau-" + competence.niveau}>{competence.niveau}</div>
                                            <meter max="5" value={competence.niveau}></meter>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="langues">
                            <header>Langues</header>
                            <div >
                                {
                                    state.langues.map((langue, index) =>
                                        <div className="langue"  key={index}>
                                            <div className="libelle">{langue.libelle}</div>
                                            <div className="niveau">{langue.niveau}</div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                        <section className="reseaux">
                            <header>Réseaux</header>
                            <div >
                                {
                                    state.reseaux.map((reseau, index) =>
                                        <div className="reseau"  key={index}>
                                            <div className="libelle no-screen">{reseau.type}</div>
                                            <div className="libelle no-screen">{reseau.url}</div>
                                            <div className="niveau no-print">
                                                <a href="{reseau.url}">{reseau.type}</a>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </section>
                    </div>
                </Col>


                    </Row>
                </Col>
            </Row>
                
                
            
           

        );
}

export default CV;
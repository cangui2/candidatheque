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

    const [profil, setProfil] = useState({
        nom: "Wong",
        prenom: "Kar-wai",
        adresse: "Carnaby Street",
        ville: "London",
        phone: "+33 6 58 96 52 14",
        email: "jodo@yahoo.com",
        titre: "developpeur web",
        description: "Après une thèse de biochimie et un post-doc en chimiométrie pendant lesquels j'avais développé un certain nombre d'outils informatiques...",
        photo: "https://test.candidatheque.com/assets/photos/profil4.png",
        metier: null
    });

    const [experiences, setExperiences] = useState([
                { 
                    dateDebut: "2018", 
                    dateFin: "maintenant", 
                    titre: "Lead developer", 
                    entreprise: "TheBox", 
                    ville: "Amiens", 
                    logo:"https://test.candidatheque.com/assets/photos/logo1.png", 
                    description: "azeazeaze" 
                },
                { 
                    dateDebut: "2012", 
                    dateFin: "2018", 
                    titre: "stage de découverte", 
                    entreprise: "TheBox", 
                    ville: "Amiens", 
                    logo:"https://test.candidatheque.com/assets/photos/logo2.png", 
                    description: "dfgdfgdfg" 
                },
                { 
                    dateDebut: "2005", 
                    dateFin: "2012", 
                    titre: "stage de découverte", 
                    entreprise: "TheBox", 
                    ville: "Amiens", 
                    logo:"https://test.candidatheque.com/assets/photos/logo3.png", 
                    description: "uiouiouio" 
                } 
    ]);   
    const [formations, setFormations] = useState([
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
        ]
    );
    const [competences, setCompetences] = useState([
            { id: 55, libelle: "Javascript", niveau: "5" },
            { id: 56, libelle: "PHP", niveau: "2" },
            { id: 57, libelle: "Symfony", niveau: "1" },
            { id: 58, libelle: "React", niveau: "3" },
        ]
    );
    const [langues, setLangues] = useState([
            { libelle: "Anglais", niveau: "Technique" },
            { libelle: "Allemand", niveau: "Courant" }
        ]
    );
    const [reseaux, setReseaux] = useState([
                    { type: "LinkedIn", url: "https://linkedin.com/..." },
                    { type: "GitHub", url: "https://github.com/..." }
                ],
    );

    const [competencesRome, setCompetencesRome] = useState([]);


    useEffect(() => {
        handleLoadLocal();

        
    },[]);

    const [timer, setTimer] = useState(null);
    const [saved, setSaved] = useState(true);


    const save = () => {

        localStorage.setItem('be4web_cv', JSON.stringify({ profil, competences, formations, experiences, langues, reseaux }));
        axios.post('/api/post_cv',{ profil, competences, formations, experiences, langues, reseaux }).then(() => {
            axios.get('/api/get_cv/2').then((response) => {
                setProfil(response.data.profil);
                setCompetences(response.data.competences);
                setFormations(response.data.formations);
                setExperiences(response.data.experiences);
                setLangues(response.data.langues);
                setReseaux(response.data.reseaux);
                setSaved(true);
            });
        });
    }

    const handleSaveLocal = () => {
        setSaved(false);
        if (timer!==null) {
            clearTimeout(timer);
        }

        setTimer(setTimeout(() => {
            console.log('saving !');
            save();
        }, 2000));

    }

    const handleLoadLocal = () => {
        // this.setPool(JSON.parse(localStorage.getItem('be4web_cv')));
        axios.get('/api/get_cv/2').then((response) => {
            setProfil(response.data.profil);
            setCompetences(response.data.competences);
            setFormations(response.data.formations);
            setExperiences(response.data.experiences);
            setLangues(response.data.langues);
            setReseaux(response.data.reseaux);
        });
    }
    //////////////////////////////////////////////////////////////

    const handleProfilChange = (profil) => {
        setProfil({ ...profil });
        handleSaveLocal();

        if (profil.metier) {
            axios.get("/api/cv/competences/" + profil.metier.id + "/" )
            .then( (response) => {
                setCompetencesRome(response.data);
            });
        }
    }
    //////////////////////////////////////////////////////////////
    const handleAddExperience = (evt) => {
        experiences.push({ dateDebut: "", dateFin: "", titre: "", entreprise: "", ville: "", logo:"", description: "" });
        setExperiences([ ...experiences ]);
        handleSaveLocal();
    }
    const handleDelExperience = (i) => {
        experiences.splice(i, 1);
        setExperiences([ ...experiences ]);
        handleSaveLocal();
    }
    const handleChangeExperience = (i, e) => {
        experiences[i] = e;
        setExperiences([ ...experiences  ]);
        handleSaveLocal();
    }
    //////////////////////////////////////////////////////////////
    const handleAddFormation = (evt) => {
        formations.push({ dateDebut: "", dateFin: "", ecole: "", niveau: "", diplome: "", description: "" });
        setFormations([ ...formations ]);
        handleSaveLocal();
    }
    const handleDelFormation = (i) => {
        formations.splice(i, 1);
        setFormations([ ...formations ]);
        handleSaveLocal();
    }
    const handleChangeFormation = (i, exp) => {
        formations[i] = exp;
        setFormations([ ...formations ]);
        handleSaveLocal();
    }
    //////////////////////////////////////////////////////////////
    const handleAddCompetence = (com) => {
        // console.log("competences à ajouter");
        // console.log(com);
        let present = false;
        for (const comp of competences) {
            if (comp.id==com.id) {
                present=true;
            }
        }
        // console.log("present=");
        // console.log(present);
        if (!present) competences.push({ libelle: com.libelle, niveau: "5", id: com.id});
        setCompetences([ ...competences ]);
        handleSaveLocal();
    }
    const handleDelCompetence = (i, com) => {
        // console.log("i=");
        // console.log(i);
        // console.log("comp=");
        // console.log(com);
        if (i!==null) {
            competences.splice(i, 1);
            setCompetences([ ...competences ]);
            handleSaveLocal();
        }
        else {
            let present = -1;
            for (const i_comp in competences) {
                if (competences[i_comp].id==com.id) {
                    present=i_comp;
                }
            }
            if (present!=-1) competences.splice(present, 1);
            setCompetences([ ...competences ]);
            handleSaveLocal();
        }
    }
    const handleChangeCompetence = (i, comp) => {
        competences[i] = comp;
        setCompetences([ ...competences ]);
        handleSaveLocal();
    }
    //////////////////////////////////////////////////////////////
    const handleAddLangue = (evt) => {
        langues.push({ libelle: "", niveau: ""});
        setLangues([ ...langues ]);
        handleSaveLocal();
    }
    const handleDelLangue = (i) => {
        langues.splice(i, 1);
        setLangues([ ...langues ]);
        handleSaveLocal();
    }
    const handleChangeLangue = (i, exp) => {
        langues[i] = exp;
        setLangues([ ...langues ]);
        handleSaveLocal();
    }
    //////////////////////////////////////////////////////////////
    const handleAddReseau = (evt) => {
        reseaux.push({ type: "", url: ""});
        setReseaux([ ...reseaux ]);
        handleSaveLocal();
    }
    const handleDelReseau = (i) => {
        reseaux.splice(i, 1);
        setReseaux([ ...reseaux ]);
        handleSaveLocal();
    }

    const handleChangeReseau = (i, res) => {
        reseaux[i] = res;
        setReseaux([ ...reseaux ]);
        handleSaveLocal();
    }

    const handleScrollToProfile = () => {
        setActiveKey("0");
    }

        return (
            <Row className="mt-2">
                <Col className=" no-print pl-2">
                    <Accordion defaultActiveKey="0" activeKey={activeKey} onSelect={(value)=>{ setActiveKey(value); }}>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            Informations personnelles
                            <i className={"fa fa-floppy-o float-right " + (saved?"text-success":"text-danger")} aria-hidden="true"></i>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                <FormProfil
                                            value={profil}
                                            onChange={(evt) => handleProfilChange(evt)}
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
                                        value={competences}
                                        competencesRome={competencesRome}
                                        metier={profil.metier}
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
                                        value={experiences}
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
                                        value={formations}
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
                                        value={langues}
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
                                        value={reseaux}
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
                            <div className="nom">{profil.prenom} {profil.nom}</div>
                        </section>
                        <section className="photo">
                            <div className="portrait"><img src={profil.photo}/></div>
                        </section>
                        <section className="profil">
                            <header>Contact</header>
                            <div className="adresse">{profil.adresse}</div>
                            <div className="ville">{profil.ville}</div>
                            <div className="phone">{profil.phone}</div>
                            <div className="email">{profil.email}</div>
                        </section>
                        <section className="titre">
                            <div className="poste">{profil.titre}</div>
                        </section>
                        <section className="intro">
                            <header>Profil</header>
                            <div className="text">{profil.description}</div>
                        </section>
                        <section className="experiences">
                            <header>Experiences</header>
                            <div >
                                {
                                    experiences.map((experience, index) =>
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
                                    formations.map((formation, index) =>
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
                                    competences.map((competence, index) =>
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
                                    langues.map((langue, index) =>
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
                                    reseaux.map((reseau, index) =>
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
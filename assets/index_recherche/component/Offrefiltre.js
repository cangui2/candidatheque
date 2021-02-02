import {Container} from "react-bootstrap";
import React, {useState} from 'react'
import RangeSlider from "react-bootstrap-range-slider";
import {getTrackBackground, Range} from "react-range";


function Offrefiltre(props) {


    const [range, setRange] = useState(0);
    const [filtreContrat, setFiltreContrat] = useState([])
    const [salaire, setSalaire] = useState([0, 0])
    const libelleContrat = ["CDI", "CDD", "Contrat de Travail Temporaire/Mission intérim", "Contrat de professionnalisation", "Contrat d'apprentissage", "Stage", "Freelance", "CDI Intérimaire", "CUI–CAE", "CUI-CIE", "Service civique"]
    const STEP = 0.1;
    const MIN = 0;
    const MAX = 50000;

    const handleChangeTypeContrat = data => {

        let v = data.target.value;
        if (data.target.checked) {
            if (!filtreContrat.includes(v)) {
                filtreContrat.push(v);
                setFiltreContrat([...filtreContrat])
            }
        } else {
            const index = filtreContrat.indexOf(v);
            if (index > -1) {
                filtreContrat.splice(index, 1);
                setFiltreContrat([...filtreContrat])
            }
        }
        props.onFiltreChange(filtreContrat);
    }
    const handleSendRayon = (data) => {
        props.onRayonChange(data);
        console.log('filtre');
    }
    const handleSendCdiBooleen = (data) => {
        if (data.target.checked) {
            props.onBoolenCdiChange(true)
        } else {
            props.onBoolenCdiChange(false)
        }
    }
    const handleSendUrgentBoolen = (data) => {
        if (data.target.checked) {
            props.onBoolenUrgentChange(true)
        } else {
            props.onBoolenUrgentChange(false)
        }
    }
    const handleSendSalaire = (data) => {
        props.onSalaireChange(data);
    }
    return (
        <Container>
            <div>
                <h5>Type de Contrat</h5>
            </div>
            <div>
                <div className="mb-12 col-6">
                    <div>
                        {
                            libelleContrat.map(
                                (item, index) =>
                                    <label key={index} style={{whiteSpace: "pre-line"}}>
                                        <input type="checkbox" value={index + 1} onChange={handleChangeTypeContrat}
                                               name={"chk_" + index}/>
                                        {item}
                                    </label>
                            )
                        }
                    </div>
                </div>
            </div>
            <br/>
            <div className="mb-12 col-8">
                <label><input type="checkbox" name="possibiliteCDI" onChange={handleSendCdiBooleen}/>Possibilité
                    CDI</label>
            </div>
            <br/>
            <div className="mb-12 col-6">
                <label><input type="checkbox" name="urgent" onChange={handleSendUrgentBoolen}/>Urgent</label>
            </div>
            <br/>
            <div>
                <div>
                    <h5>Zone geographique</h5>
                </div>
                <br/>
                <RangeSlider
                    value={range}
                    min={1}
                    max={150}
                    onChange={evt => setRange(evt.target.value)}
                    onAfterChange={evt => handleSendRayon(evt.target.value)}
                />
            </div>
            <div>
                <div>
                    <h5>Salaire</h5>
                </div>
                <br/>
                <Range
                    draggableTrack
                    values={salaire}
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    onChange={values => {
                        setSalaire(values)
                    }}
                    onFinalChange={handleSendSalaire}

                    renderTrack={({props, children}) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{

                                ...props.style,
                                height: '26px',
                                display: 'flex',
                                width: '100%'
                            }}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    height: '5px',
                                    width: '100%',
                                    borderRadius: '4px',
                                    background: getTrackBackground({
                                        values: salaire,
                                        colors: ['#ccc', '#548BF4', '#ccc'],
                                        min: MIN,
                                        max: MAX
                                    }),
                                    alignSelf: 'center'
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({props, isDragged}) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: '22px',
                                width: '22px',
                                borderRadius: '4px',
                                backgroundColor: '#FFF',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0px 2px 6px #AAA'
                            }}
                        >
                            <div
                                style={{
                                    height: '16px',
                                    width: '5px',
                                    backgroundColor: isDragged ? '#548BF4' : '#CCC'
                                }}
                            />
                        </div>
                    )}
                />
                <output style={{marginTop: '30px'}} id="output">
                    {salaire[0].toFixed(0)} - {salaire[1].toFixed(0)}
                </output>
            </div>
        </Container>
    )
}

export default Offrefiltre;


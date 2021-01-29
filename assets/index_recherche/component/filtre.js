import {Container, Form} from "react-bootstrap";
import React, {useEffect, useState} from 'react'
import RangeSlider from "react-bootstrap-range-slider";
import {getTrackBackground, Range} from "react-range";



function Filtre (props){


    const [range,setRange]=useState(0);

    const [rangeSalaire,setRangeSalaire]=useState([25,75]);
    const [finalRangeSalaire,setFinalRangeSalaire]=useState();
    const [filtre,setFiltre]=useState([])
    const [value,setValue]=useState([25,75])

    const test2=["CDI","CDD","Contrat de Travail Temporaire/Mission intérim","Contrat de professionnalisation","Contrat d'apprentissage","Stage","Freelance","CDI Intérimaire","CUI–CAE","CUI-CIE","Service civique"]
    const test3=["Possibilité CDI","Urgent"]
    const handleSubmit =data=> {

        let v =  data.target.value;
        if (data.target.checked) {
            if (!filtre.includes(v)) {
                filtre.push(v);
                setFiltre([...filtre])
            }
        }
        else {
            const index = filtre.indexOf(v);
            if (index > -1) {
                filtre.splice(index, 1);
                setFiltre([...filtre])
            }
        }
        props.onFiltreChange(filtre);
    }
    const handleSendRayon = (data) =>{
        props.onRayonChange(data);
        console.log('filtre');
    }
    const handleSendCdiBooleen =(data)=>{
        if(data.target.checked){
            props.onBoolenCdiChange(0)
        }
        else {
            props.onBoolenCdiChange(1)
        }
    }

    const handleSendUrgentBoolen =(data)=>{
        if(data.target.checked){
            props.onBoolenUrgentChange(0)
        }else {
            props.onBoolenUrgentChange(1)
        }

    }
    const handleSendSalaire =(data)=>{
        props.onSalaireChange(data);
    }
    // useEffect(()=>{
    //     handleSendSalaire(value);
    //     console.log(value)
    // },[value])


    const STEP = 0.1;
    const MIN = 0;
    const MAX = 100;

    return(
        <Container>

            <div>
                <h5>Type de Contrat</h5>
            </div>
            <div>

                <div  className="mb-3">
                    <fieldset>

                    {

                    test2.map(

                    (item,index)=>

                        <label key={index}>
                            <input type="checkbox" value={index+1} onChange={handleSubmit} name={"chk_" + index}  />
                            {item}
                        </label>

                    )

                    }

                    </fieldset>
                </div>

            </div>
            <br/>
            <div>

                <label ><input type="checkbox" value={true} name="sameName" onChange={handleSendCdiBooleen} />Possibilité CDI</label>
            </div>
            <br/>
            <div>
                <label ><input type="checkbox" value={true} name="sameName" onChange={handleSendUrgentBoolen}  />Urgent</label>
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
                //className={disabled?' d-none ':''}
                onChange={evt => setRange(evt.target.value)}
                onAfterChange={evt => handleSendRayon(evt.target.value)}
            />
            </div>
            <div>
            <div>
                <h5>Salaire</h5>
            </div>
            <br/>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    <Range
                        draggableTrack
                        values={value}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={values => {
                            setValue(values )
                        }}
                        onFinalChange={handleSendSalaire}

                        renderTrack={({ props, children }) => (
                            <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                style={{
                                    ...props.style,
                                    height: '36px',
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
                                            values: value,
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
                        renderThumb={({ props, isDragged }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '42px',
                                    width: '42px',
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
                <output style={{ marginTop: '30px' }} id="output">
                    {value[0].toFixed(1)} - {value[1].toFixed(1)}
                </output>



                </div>

        </div>

        </Container>
    )
}

export default Filtre;

const style ={


}

import React, {useEffect, useState} from "react";
import CVViewer from "./CVViewer";


function Details(props) {
    if (props.cv !== null) {
        return (
            <CVViewer cv={props.cv}/>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Details;




import React from "react";
import '../hojas-de-estilo/Botn-Clear.css';

const Clear = (props)=>{
    return(

        <button className="boton-clear"
            onClick={ props.manejarClick}>
            {props.children}
        </button>

    );
};

export default Clear;
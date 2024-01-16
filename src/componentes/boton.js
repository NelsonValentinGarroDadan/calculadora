import React from "react";
import BotonCss from "../hojas-de-estilo/Boton.css"
function Boton(props){
    const esOperador = (n)=>{
        return isNaN(n) && (n!==".") && (n!=="=");
    };
    return(
        <button className={`boton-contenedor ${esOperador(props.children)? 'operador' : ''}`}
            onClick={() => props. manejarClick(props.children)}>
            {props.children}
        </button>
    );
};
export default Boton;
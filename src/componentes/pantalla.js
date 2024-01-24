import React from "react";
import '../hojas-de-estilo/Pantalla.css';
const Pantalla = ({input ,historial})=>{
    return(
        <div className="input">
            <div>
                {historial}
            </div>
            <div>
                {input}
            </div>
        </div>
    );
};

export default Pantalla;
import './App.css';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/boton-clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [historial, setHist] = useState('');
  const [input, setInput] = useState('');
  var evaluacion ;

  const agregarInput = (n)=>{
    if(input.toString() === 'Syntaxis Error' ){
      setInput(n);
    }else if(historial){
      setInput(n);
      setHist('');
    }else{
      setInput(input + n);
    }
    
  };
  const calcular = ()=>{
    if(!input){
      setInput('Syntaxis Error');
      return;
    } 
    try{
      evaluacion = evaluate(input).toFixed(2);
    }catch(e){
      setInput('Syntaxis Error');
      setHist('');
      return;
    }
    
    if(input.length >9){
      setInput('Syntaxis Error');
      return;
    }
    setHist(input+" =");
    setInput(evaluacion);
    
  }

  return (
    <div className="App">
      <div className='calculadora-contenedor'>
        <Pantalla input={input} historial={historial}/>
        <div className='fila'> 
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton  manejarClick={agregarInput}>4</Boton>
          <Boton  manejarClick={agregarInput}>5</Boton>
          <Boton  manejarClick={agregarInput}>6</Boton>
          <Boton  manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton  manejarClick={agregarInput}>7</Boton>
          <Boton  manejarClick={agregarInput}>8</Boton>
          <Boton  manejarClick={agregarInput}>9</Boton>
          <Boton  manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton  manejarClick={agregarInput}>0</Boton>
          <Boton  manejarClick={calcular}>=</Boton>
          <Boton  manejarClick={agregarInput}>.</Boton>
          <Boton  manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClick={()=> {setInput(''); setHist('')}}>
            Clear
          </BotonClear>
        </div>

      </div>
    </div>
  );
}

export default App;

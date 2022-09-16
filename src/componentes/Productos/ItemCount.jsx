import React from 'react'
import {FiPlus , FiMinus} from 'react-icons/fi'
import { useState } from 'react'
import  './Productos.css';


const ItemCount = ({initial , stock}) => {
  const [count,setCount] = useState(initial)

  // funcion HandlerAdd (sumar)
  const HandlerAdd = () =>{
      if (count < stock) {
       setCount(count + 1)    
      } 
  };
    // funcion HandlerRest (restar)
  const HandlerRest = () =>{
      if (count > initial){
       setCount (count - 1)   
      }    
  };
    // funcion onAdd (Avisa cuantos items se agregan al carrito)
  const onAdd = () =>{
      setCount(count)
      alert(`se agregaron ${count} al carrito`)
  };

  return (
    <div className="d-flex flex-column align-items-center m-3">
      <div className=" my-1 py-1">
        <a
          href="#"
          onClick={() => {
            HandlerRest();
          }}
        >
          <FiMinus className="pdpBtns" />
        </a>
        <span>{count}</span>
        <a
          href="#"
          onClick={() => {
            HandlerAdd();
          }}
        >
          <FiPlus className="pdpBtns" />
        </a>
      </div>
      <div>
        <button
          type="button"
          className="btn py-0 "
          onClick={() => {
            onAdd(count);
          }}
        >
          Añadir al carrito!
        </button>
      </div>
    </div>
  );
}

export default ItemCount


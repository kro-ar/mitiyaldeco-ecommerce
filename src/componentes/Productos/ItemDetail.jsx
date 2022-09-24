import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detailProducts:detalle , onAdd , added:añadido }) => {
  
  return (

    <main>
      <div className=" container itemContainer" id={detalle.id}>
    <div className="row">
      <div className=" col-sm-12 col-md-6 imgContain">
        <img src={detalle.img} alt={detalle.tittle} />
      </div>
      <div className="col-sm-12 col-md-6  text-center itemDetail">
        <h1 className="titleDetail"> {detalle.tittle} </h1>
        <p>$ <span className="priceDetail"> {detalle.price} </span> </p>
        <div className="detailP">
          <p className="detail"> {detalle.detail} </p>
        </div>
        {
           (añadido)
            ? <Link to="/cart"><button type="button" class="btn btn-secondary">Ir al carrito! </button></Link> 
            : <ItemCount initial={1} stock={detalle.stock} onAdd={onAdd} />
          
        }
        
      </div>
      
    </div>
  </div>
    </main>
  );
};

export default ItemDetail;

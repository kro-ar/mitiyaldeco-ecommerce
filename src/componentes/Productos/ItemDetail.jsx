import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detailProducts:detalle }) => {
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
        
        <ItemCount initial={1} stock={5} />
      </div>
      
    </div>
  </div>
    </main>
  );
};

export default ItemDetail;

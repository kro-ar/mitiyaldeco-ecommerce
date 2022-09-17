import React from "react";
import { FiTag, FiClipboard } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Productos.css";

const Item = ({ product , price , img , tittle }) => {
  return (
    <>
      <div className="card m-4" id={product.id} style={{ width: "18rem" }}>
        <div>
          <img src={img} className="card-img-top" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">
            {" "}
            <FiTag />${price}
          </p>
          <Link to={`/item/${product.id}`}>
            {" "}
            <button type="button" class="btn btn-secondary">
              Ver Detalles
            </button>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Item;

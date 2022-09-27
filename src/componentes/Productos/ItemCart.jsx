import { CartContext } from "./CartContext";
import { useContext } from "react";

const ItemCart = ({product})=>{
    const ctxItems = useContext(CartContext);

    return(
            <section className="row ItemCartCard mx-5 my-4 p-2">
                <div className="col-4 d-flex justify-content-center">
                    <img className="img-thumbnail" src={product.img}></img>
                </div>
                <div className="col-8 mono-text">
                    <div className="row">
                        <h3 className="col ">{product.title}</h3>
                        <button type="button" className="btn py-0 col-4"onClick={()=>{ctxItems.removeItem(product.id)}}>Eliminar Producto</button>
                    </div>
                    <p>
                        Cantidad : {product.quantity}
                        <br/>Precio: {product.quantity*product.price} ({product.price}/Unidad)
                    </p>
                </div>
            </section>
    )
}

export default ItemCart;
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";

const Cart = ()=>{
     //Se obtiene el contenido de la variabe global
    const ctx = useContext(CartContext)
    return(
        <main>
            <h1 className="text-center">Esta es su orden 🛒</h1>
            <section className="row mx-0">
                <div className="col-12 row">
                    <Link to="/" ><button type="button" className="btn py-0 " >Continuar comprando</button></Link>
                            
                    
                    <div className="col-6 d-flex justify-content-end">
                        <button type="button" className="btn py-0 " onClick={ctx.clear}>Eliminar compra</button>
                    </div>
                </div>
                <div className="col-8 ">
                    {
                        //Se mapea el contenido y se imprime en la lista
                        ctx.cartList.map(item=> <ItemCart product={item} key={item.id}/>)
                    }
                </div>
                <div className="row col-3">
                    <h3 className="text-center ">Su orden</h3>
                    <p className="col-6">SubTotal:<br/>IVA:<br/>Descuento:<br/><strong>Total:</strong></p>
                    <p className="col-6">${ctx.totals}<br/>${ctx.totals*0.05 }<br/>${ctx.totals*0.05 }<br/><strong>${ctx.totals}</strong></p>
                </div>
            </section>
        </main>
    )
}

export default Cart;
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
                <div className="col-12 row mono-text">
                    <Link to="/" ><button type="button" className="btn py-0 " >Continuar comprando</button></Link>
                            
                    
                    <div className="col-6 justify-content-end">
                        <button type="button" className="btn py-0 " onClick={ctx.clear}>Eliminar compra</button>
                    </div>
                </div>
                <div className="col-8 ">
                    {
                        //Se mapea el contenido y se imprime en la lista
                        ctx.cartList.map(item=> <ItemCart product={item} key={item.id}/>)
                    }
                </div>
                <div className="col-3 mono-text SummaryCart m-4 row">
                    <h3 className="text-center mono-text py-3">Su orden</h3>
                    <p className="col-6"><strong>Total:</strong></p>
                    <p className="col-6"><strong>${ctx.total}</strong> </p>
                </div>
            </section>
        </main>
    )
}

export default Cart;
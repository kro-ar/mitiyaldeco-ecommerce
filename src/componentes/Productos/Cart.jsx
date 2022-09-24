import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = ()=>{
    const ctx = useContext(CartContext)
    return(
        <main>
            <h1 className="text-center">Soy un Carrito!🛒</h1>
            {
                ctx.cartList.map( item => <li>{item.tittle}</li>)
            }
        </main>
    )
}

export default Cart;
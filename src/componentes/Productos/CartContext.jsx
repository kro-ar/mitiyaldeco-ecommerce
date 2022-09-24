import { createContext, useState } from "react";

export const CartContext = createContext();
const CartContextProvider =({children})=>{
    const [cartList , setCartList] = useState([])
    const addItem =(product)=>{
        setCartList([product,...cartList]);
    }
    return(
        <CartContext.Provider value={{cartList , addItem}}>
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;
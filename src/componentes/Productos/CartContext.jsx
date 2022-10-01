import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  //Funciones globales
  const addItem = (item, quantity) => {
    // agregar cierta cantidad de un ítem al carrito
    if (isInCart(item.id)) {
      let array = cartList.map((element) =>
        element.id !== item.id
          ? element
          : {
              id: element.id,
              tittle: element.tittle,
              category: element.category,
              img: element.img,
              stock: element.stock,
              price: element.price,
              detail: element.detail,
              quantity: element.quantity + quantity,
              key: element.id,
            }
      );
      setCartList(array);
    } else {
      item.quantity = quantity;
      setCartList([...cartList, item]);
    }

  };
  const removeItem = (itemId) => {
    // Eliminar de la orden usando su id
    setCartList(cartList.filter((item) => item.id !== itemId));
  };
  const clear = () => {
    setCartList([]);
  }; // Remover todos los items
  const isInCart = (id) => {
    return cartList.filter((item) => item.id == parseInt(id)).length > 0;
  };
  const costTotal = () => {
    let total = 0;
    if (cartList.length > 0) {
      let costos = cartList.map((item) => item.price * item.quantity);
      total = costos.reduce((a, b) => {
        return a + b;
      });
    }
    return total;
  };
  const ItemsTotal = () => {
    let items = 0;
    if (cartList.length > 0) {
      items = cartList.map((item) => item.quantity);
      items.length == 1
        ? (items = cartList[0].quantity)
        : (items = items.reduce((a, b) => {
            return a + b;
          }));
    }
    return items;
  };
  //bagde items
  const itemCartQty = () => {
    let cartQty = cartList.map((producto) => producto.quantity);
    return cartQty.reduce((acumQtys, quantity) => (acumQtys += quantity), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        ItemsTotal,
        addItem,
        removeItem,
        clear,
        isInCart,
        costTotal,
        itemCartQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;

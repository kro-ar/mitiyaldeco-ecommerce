import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { serverTimestamp, doc, setDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

const Cart = () => {
  //Se obtiene el contenido de la variabe global
  const ctx = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setTotalCost(ctx.costTotal)
    
  }, [ctx]);

  const createOrder = async () => {
    const itemsForDB = ctx.cartList.map((item) => ({
      id: item.id,
      nombre: item.tittle,
      precio: item.price,
      cantidad: item.quantity,
    }));
    let order = {
      buyer: {
        nombre: "Comprador Prueba",
        email: "falsomail@gmail.com",
        tel: "1123456",
      },
      items: itemsForDB,
      date: serverTimestamp(),
      total: ctx.costTotal(),
    };

    //se crea tickets ,en la base de datos
    const newOrderRef = doc(collection(db, 'tickets'));
     await setDoc(newOrderRef, order); 
     alert(
      "Su orden ha sido procesada! Su numero de orden es " + newOrderRef.id
    );
    //se vacia el carrito
    ctx.clear()
  };
  useEffect(() => {
    ctx.cartList.length === 0 ? setIsEmpty(true) : setIsEmpty(false)
}, [ctx.cartList])
  return (
    <main>
      <h1 className="text-center">Esta es su orden 🛒</h1>
      <section className="row mx-0">
        <div className="col-12 row">
          <Link to="/">
            <button type="button" className="btn py-0 font2">
              Volver a los productos
            </button>
          </Link>

          <div className="col-6 d-flex justify-content-end">
            <button type="button" className="btn py-0 font2" onClick={ctx.clear}>
              Eliminar compra
            </button>
          </div>
        </div>
        <div className="col-8 ">
          {
            isEmpty ? <p className="text-center m-5 fs-4">Ingrese algun producto <box-icon type='solid' name='cart-add'></box-icon></p> //en caso que este vacio se muestra el texto
            //Se mapea el contenido y se imprime en la lista
            :ctx.cartList.map((item) => (
              <ItemCart product={item} key={item.id} />
            ))
          }
        </div>
        <div className="row col-3">
          <h3 className="ms-5 font1 ">Su orden</h3>
          <p className="col-6 font2">
            SubTotal:
            <br />
            IVA:
            <br />
            Descuento:
            <br />
            <strong>Total:</strong>
          </p>
          <p className="col-6">
            ${totalCost}
            <br />${totalCost * 0.05}
            <br />${totalCost * 0.05}
            <br />
            <strong>${totalCost}</strong>
          </p>
          <div className="ms-5">
            <button onClick={createOrder} type="button" className="btn">
              Finalizar Compra
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;

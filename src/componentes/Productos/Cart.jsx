import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { serverTimestamp, doc, setDoc, collection } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

const Cart = () => {
  //Se obtiene el contenido de la variabe global
  const ctx = useContext(CartContext);
  const createOrder = async () => {
    const itemsForDB = ctx.cartList.map((item) => ({
      id: item.id,
      nombre: item.tittle,
      precio: item.price,
      // cantidad:item.quantity + quantity
    }));
    let order = {
      buyer: {
        nombre: "Comprador Prueba",
        email: "falsomail@gmail.com",
        tel: "1123456",
      },
      items: itemsForDB,
      date: serverTimestamp(),
      total: ctx.totals,
    };
    //se crea orders ,en la base de datos
    const newOrderRef = doc(collection(db, "orders"));
    await setDoc(newOrderRef, order);
    alert(
      "Su orden ha sido procesada! Su numero de orden es " + newOrderRef.id
    );
  };
  return (
    <main>
      <h1 className="text-center">Esta es su orden 🛒</h1>
      <section className="row mx-0">
        <div className="col-12 row">
          <Link to="/">
            <button type="button" className="btn py-0 ">
              Continuar comprando
            </button>
          </Link>

          <div className="col-6 d-flex justify-content-end">
            <button type="button" className="btn py-0 " onClick={ctx.clear}>
              Eliminar compra
            </button>
          </div>
        </div>
        <div className="col-8 ">
          {
            //Se mapea el contenido y se imprime en la lista
            ctx.cartList.map((item) => (
              <ItemCart product={item} key={item.id} />
            ))
          }
        </div>
        <div className="row col-3">
          <h3 className="text-center ">Su orden</h3>
          <p className="col-6">
            SubTotal:
            <br />
            IVA:
            <br />
            Descuento:
            <br />
            <strong>Total:</strong>
          </p>
          <p className="col-6">
            ${ctx.totals}
            <br />${ctx.totals * 0.05}
            <br />${ctx.totals * 0.05}
            <br />
            <strong>${ctx.totals}</strong>
          </p>
          <div className="text-center">
            <button onClick={createOrder} type="button" className="btn p-2 ">
              Finalizar Compra
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;

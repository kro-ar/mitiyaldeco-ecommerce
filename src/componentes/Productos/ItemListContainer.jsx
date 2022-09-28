import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../utils/dataBase";
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../utils/firebaseConfig"

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);

  const { categoria } = useParams();
  console.log(categoria);

  const customFetch = (items) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (categoria) {
          resolve(products.filter((item) => item.category == categoria));
        } else resolve(items);
      });
    });
  };
  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const dataFromFirebase = querySnapshot.docs.map(item=>({
      id:item.id,
      ...item.data()
    }))
   console.log(dataFromFirebase)
  }, [categoria]);

  return (
    <div className="containerProducts">
      <ItemList listProducts={listProducts} />
    </div>
  );
};

export default ItemListContainer;

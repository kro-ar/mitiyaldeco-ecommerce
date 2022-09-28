import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../utils/dataBase";
import ItemList from "./ItemList";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);

  const { categoria } = useParams();

/*    const customFetch = (items) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (categoria) {
          resolve(products.filter((item) => item.category == categoria));
        } else resolve(items);
      });
    });
  };  */
  useEffect(() => {
    const getData = async () => {
      if (categoria) {
        //traer algunos
        const filtroCat = query(
          collection(db, "products"),
          where('category', '==', categoria)
        ) 
        const querySnapshot = await getDocs(filtroCat);
        const dataFromFirebase = querySnapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setListProducts(dataFromFirebase);
      } else {
        //traer todos
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirebase = querySnapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setListProducts(dataFromFirebase);
      }
    };
    getData();
  }, [categoria]);

  return (
    <div className="containerProducts">
      <ItemList listProducts={listProducts} />
    </div>
  );
};

export default ItemListContainer;

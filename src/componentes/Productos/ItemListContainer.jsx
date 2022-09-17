import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../utils/dataBase";
import ItemList from "./ItemList";


const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);

  const {categoria} = useParams();
  console.log(categoria);

  const customFetch =(items) =>
{
    return new Promise ((resolve , reject)=>{
        
    setTimeout(() => {
      if(categoria){
        resolve(products.filter((item)=> item.category == categoria))
      } else  resolve(items)
    },)
})

}
  useEffect(() => {
    customFetch(products).then((data) => setListProducts(data));
  }, [categoria]);

  return (
    <div className="containerProducts">
      <ItemList listProducts={listProducts} />
    </div>
  );
};

export default ItemListContainer;

import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import products from "../../utils/dataBase"
import { customFetch } from "../../utils/customFetch"

const ItemDetailContainer = () => {
  const [detailProducts, setDetailProducts] = useState({});

  useEffect(() => {
    customFetch(products[2]).then((data) => setDetailProducts(data));
  }, []);

  return(
    <div>
    <ItemDetail detailProducts={detailProducts} />
  </div>
  )
  
};

export default ItemDetailContainer;

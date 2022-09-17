import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import products from "../../utils/dataBase"
import { useParams } from "react-router-dom";
import { customFetch } from "../../utils/customFetch";

const ItemDetailContainer = () => {
  const [detailProducts, setDetailProducts] = useState({});
  const {id} = useParams()


  useEffect(() => {
    if (id){
      customFetch(products.find((item) => item.id == id))
      .then((data) => setDetailProducts(data));
    }
    
  }, [id]);

  return(
    <div>
    <ItemDetail detailProducts={detailProducts} />
  </div>
  )
  
};

export default ItemDetailContainer;

import { useState, useEffect , useContext } from "react"
import ItemDetail from "./ItemDetail"
import products from "../../utils/dataBase"
import { useParams } from "react-router-dom";
import { customFetch } from "../../utils/customFetch";
import { CartContext } from "./CartContext";

const ItemDetailContainer = () => {
  const [detailProducts, setDetailProducts] = useState({});
  const {id} = useParams()
  const [added , setAdded] = useState(false)
  const ctx = useContext(CartContext)

  useEffect(() => {
    if (id){
      customFetch(products.find((item) => item.id == id))
      .then((data) => setDetailProducts(data));
    }
    
  }, [id]);

  const onAdd =(count)=>{
    alert(`Se agrego ${detailProducts.tittle} cantidad ${count} al carrito`);
    setAdded(true)
    ctx.addItem(detailProducts)
  }


  return(
    <div>
    <ItemDetail onAdd={onAdd} detailProducts={detailProducts} added={added} />
  </div>
  )
  
};

export default ItemDetailContainer;

import { useState, useEffect , useContext } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { customFetch } from "../../utils/customFetch";
import { CartContext } from "./CartContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import Item from "./Item";


const ItemDetailContainer = () => {
  const [detailProducts, setDetailProducts] = useState({});
  const {id} = useParams()
  const [added , setAdded] = useState(false)
  const ctx = useContext(CartContext)

  useEffect(() => {
    const getData = async () => {
      const docSnap=await getDoc(doc(db , "products" , id))
      const productoD={id: id , ...docSnap.data()}
      setDetailProducts(productoD)
    };
    getData();
    
  }, [id]);

  const onAdd =(count)=>{
    alert(`Se agrego ${detailProducts.tittle} cantidad ${count} al carrito`);
    setAdded(true)
    ctx.addItem(detailProducts,count)
  }


  return(
    <div>
    <ItemDetail onAdd={onAdd} detailProducts={detailProducts} added={added} />
  </div>
  )
  
};

export default ItemDetailContainer;

import React, {useState , useEffect} from 'react'
import products from '../../utils/dataBase'
import { customFetch } from '../../utils/customFetch'
import ItemList from './ItemList'

const ItemListContainer = () => {

  const [listProducts, setListProducts] = useState([])

  useEffect(() => {
    customFetch(products)
    .then(data=> setListProducts(data))

  },[])
  
  
  return (
    <div className="containerProducts">
      <ItemList listProducts={listProducts}/>
    </div>
  )
}

export default ItemListContainer
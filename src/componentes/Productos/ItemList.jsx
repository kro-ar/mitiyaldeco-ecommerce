import React from 'react'
import Item from './Item'
import './Productos.css'


const ItemList = ({listProducts}) => {

  return (
    <div className="card-group itemList justify-content-center">
    {listProducts.map((product)=> (
        <Item product={product}
        key={product.id} 
        id={product.id}
        tittle={product.tittle}
        price={product.price}
        detail={product.detail}
        img={product.img}
        />
    ))}
    </div>
  )
}
export default ItemList
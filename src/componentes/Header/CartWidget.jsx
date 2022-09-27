import React from 'react'
import { useContext} from 'react';
import {CartContext }from '../Productos/CartContext' 

const CartWidget = () => {
  const  myctx = useContext(CartContext)
  
  return (
    <>
        <box-icon name= "cart"></box-icon>
        <span className='badge bg-success'> {myctx.itemCartQty()}  </span>
    </>
    
  )
}
export default CartWidget
import React from 'react'
import { FiTag , FiClipboard} from 'react-icons/fi'
import './Productos.css'

 const Item = ({product}) => {

  return (
    <>
      <div className="card" id={product.id} style={{ width: '18rem' }}>
      <div>
        <img src={product.img} className="card-img-top"  />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.tittle}</h5>
        <p className="card-text"> <FiTag/>Precio: ${product.price}</p>
        <p className='card-text'><FiClipboard/> Detalles: {product.detail} </p>

      </div>
    </div>
    </>
    
  )
}
export default Item

import React from 'react'
import { FiTag , FiClipboard} from 'react-icons/fi'
import './Productos.css'

 const Item = ({id , tittle, price , detail , img}) => {

  return (
    <>
      <div className="card" id={id} style={{ width: '18rem' }}>
      <div>
        <img src={img} className="card-img-top" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{tittle}</h5>
        <p className="card-text"> <FiTag/>${price}</p>
      </div>
    </div>
    </>
    
  )
}
export default Item

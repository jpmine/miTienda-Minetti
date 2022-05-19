import React from 'react'
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {
const navegar = useNavigate();

  return (
    <div className='card' style={{ width: '18rem' }}>
        <img className="card-imgs" variant="top" src={product.image} alt={product.title}/>
        <div className='card-title'>{product.title}<hr></hr></div>
        <div className='card-body'>
          {product.description}
        <div className='card-verMas'>
          <button className='btn btn-success' style={{ width: '98%', margin: '10px'}} onClick={()=>navegar(`/detalle/${product.id}`)}>Ver Más</button></div>
        </div>
    </div>
    
  )
}

export default Item
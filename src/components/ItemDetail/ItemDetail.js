import React from 'react'
import {useNavigate} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
//import Item from "../Item/Item"
//import Products from "./data/Products/Products"

export default function ItemDetail({productDetail}) {
  const {title, description, image, stock, price} = productDetail
  const volver = useNavigate()
  return (
    <>
      <h3>Detalle de producto: {title}</h3> 
      <div>
        <img src={image} alt={title}/>
        <p>{description}</p>
        <p>Stock: {stock}</p>
        <p>Precio: ${price}</p>
        <div><ItemCount stock={stock}/></div>
        <button className='btn btn-info' onClick={() =>volver('/productos')}>Volver a Productos</button>
          {/* {products.map((product) => <Item product={product} key={product.id}/> )} */}
      </div>
    </>
    )
  } 
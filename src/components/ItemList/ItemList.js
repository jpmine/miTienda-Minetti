import React from 'react'
import Item from '../Item/Item'

const ItemList = ({listaProductos}) => {
  return (
    <div className='d-flex justify-content-around flex-wrap'>
        {listaProductos.map((product) => (
            <Item product={product} key={product.id}/>
            )
        )}
    </div>
  )
}

export default ItemList
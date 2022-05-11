import React from 'react'
import Item from "../Item/Item";

export default function ItemList(products) {
    return (
            <div className='d-flex justify-content-center'>
                {products.map((product, index) => (
                <Item product={product} key={product.id}/>
                )
            )}
            </div>
        );
  }
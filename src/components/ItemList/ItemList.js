import React from 'react'
import Item from "../Item/Item";
import { products } from "../../data/Products/Products";

export default function ItemList() {
    const taskProducts = new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve(products)
        }, 2000)
      })
    
      taskProducts.then((res) => {
        console.log("The promise has run successfully")
      }).catch((err) => {
        console.log(("An error ocurred running the promise"))
      })
    return (
            <div className='d-flex justify-content-center'>
                {products.map((product, index) => (
                <Item product={product} key={product.id}/>
                )
            )}
            </div>
        );
  }
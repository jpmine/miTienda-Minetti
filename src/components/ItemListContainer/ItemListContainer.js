import React from 'react'
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../../data/Products/Products";

export default function ItemListContainer() {
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
            <div>
                <ItemList product={products} key={products.id}/>
            </div>
        );
  }
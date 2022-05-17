import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {    
    const [guitars, setGuitars] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=guitarras')
        .then((res) => (res.json()))
        .then((data) => setGuitars(data.results))
        //.then((data) => console.log(data.results))
        .catch((err) => console.error(err))
    },[])
    
  return (
      <div>
          <ItemDetail guitars={guitars} key={guitars.id}/>      
      </div>
    );
  }
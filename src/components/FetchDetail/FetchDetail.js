import React from 'react'
import ItemGuitar from "../ItemGuitar/ItemGuitar"

export default function FetchDetail({guitars}) {
    
  return (
    <>
      <h3>Listado de guitarras</h3>
      <div>
          {guitars.map((guitar) => <ItemGuitar guitar={guitar} key={guitar.id}/> )}
      </div>
    </>
    )
  } 
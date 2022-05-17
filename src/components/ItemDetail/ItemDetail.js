import React from 'react'
import ItemGuitar from "../ItemGuitar/ItemGuitar"

export default function ItemDetail({guitars}) {
  return (
    <>
      <h3>Listado de guitarras</h3>
      <div className='d-flex justify-content-center flex-wrap'>
          {guitars.map((guitar) => <ItemGuitar guitar={guitar} key={guitar.id}/> )}
      </div>
    </>
    )
  } 
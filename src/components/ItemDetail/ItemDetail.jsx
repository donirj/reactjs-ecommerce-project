import React from 'react'
import './_ItemDetail.scss'

function ItemDetail({item}) {
  return (
    <div>
         <h3>{item.name}</h3>
            <img src={item.img} className='img1' alt={item.nombre} />
            <p>{item.price}</p>
            <p>Categoria {item.category}</p>
            <p>{item.desc}</p>
            <p>{item.name}</p>
            <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail
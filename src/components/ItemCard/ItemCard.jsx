import React from 'react'
import { Link } from 'react-router-dom'
import './_itemCard.scss'

function ItemCard({item}) {
    const {id, name, price, desc} = item
  return (
        <div key={item.id}>
            <div>
              <img src={item.img} className='img' alt={item.nombre} />
            </div>
            <h3 className='titleSize'>{item.name}</h3>
            <p>{item.price}</p>
            <p>Categoria {item.category}</p>
            <p>{item.desc}</p>
            <p>{item.name}</p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div> 
  )
}

export default ItemCard
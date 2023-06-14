import React from 'react'
import { Link } from 'react-router-dom'
import './_itemCard.scss'

function ItemCard({item}) {
    const {id, name, price, desc} = item
  return (
    <Link to={`/detail/${item.id}`} >
        <div key={item.id} className='eachProd'>
            <div>
              <img src={item.img} className='imgMain' alt={item.nombre} />
            </div>
            <div className='prodData'>
              <p className='priceTag'>${item.price}</p>
              <h3 className='titleSize'>{item.name}</h3>
              {item.stock === 1  && <p style={{color: 'red'}}>Quedan pocas unidades!</p>}
              {item.stock < 1 && <p style={{color: 'red'}}>Agotado!</p>}
            </div>
        </div> 
    </Link>
  )
}

export default ItemCard
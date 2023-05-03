import React from 'react'

function ItemCard({item}) {
  return (
        <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.desc}</p>
            <p>{item.name}</p>
            <button className='btn btn-primary'>Ver más</button>
        </div> 
  )
}

export default ItemCard
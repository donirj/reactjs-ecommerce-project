import React from 'react'
import ItemCard from '../ItemCard/ItemCard'

function ItemList({items}) {
  return (
    <div>
        <h3>Productos</h3>
        <br/>

        <div className='row'>
            {
                items.map((prod) => (<ItemCard item={prod} key={prod.id} />))
            }
        </div>

    </div>
  )
}

export default ItemList
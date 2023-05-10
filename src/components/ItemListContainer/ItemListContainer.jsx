import React, { useEffect, useState } from 'react'
import './_ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useProductos } from '../../hooks/useProductos'

function ItemListContainer({ name }) {

  const {loading, productos} = useProductos()

  return (
    <div className='Box2'>
        {
          loading 
          ? <h2>Cargando...</h2>
          : <ItemList items={productos}/>
        }
    </div>
  )
}

export default ItemListContainer
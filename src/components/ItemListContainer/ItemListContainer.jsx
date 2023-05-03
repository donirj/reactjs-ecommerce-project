import React, { useEffect } from 'react'
import { useState } from 'react'
import './_ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({ name }) {

  // puede ser null, true o false, dependiendo de lo que queramos
  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  console.log(productos)

    useEffect(() => {
      // activa el estado de carga
        setLoading(true)

        pedirDatos()
          .then((res) => {
            setProductos(res)
            
            return new Promise((res) => res("hola mundo"))
          })

          .then((segundo) => {
            console.log(segundo)
          })

          .then((error) => {
            console.log(error)
          })

          .finally(() => {
            setLoading(false)
          })
    }, [])
    

  return (
    <div>
        
        {
          loading 
          ? <h2>Cargando...</h2>
          : <ItemList items={productos}/>
        }
      
    </div>
  )
}

export default ItemListContainer
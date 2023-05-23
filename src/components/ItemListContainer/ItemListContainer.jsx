import React, { useEffect, useState } from 'react'
import './_ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useProductos } from '../../hooks/useProductos'
import { useParams, useSearchParams } from 'react-router-dom'


function ItemListContainer({ name }) {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams()
  
  const search = searchParams.get('search')

  console.log(search)

  const { categoryId } = useParams()

  useEffect(() => {
      setLoading(true)

      pedirDatos()
      .then((data) => {
          if(!categoryId){
             setProductos(data)
          } else {
              // producto que coincida con el categoryId
              setProductos(data.filter((el) => el.category === categoryId))
          }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [categoryId])
  
  const listado = search
          ? productos.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
          : productos 

  console.log(listado)

  return (
    <div className='Box2'>
        {
          loading 
          ? <h2>Cargando...</h2>
          : <ItemList items={listado}/>
        }
    </div>
  )
}

export default ItemListContainer
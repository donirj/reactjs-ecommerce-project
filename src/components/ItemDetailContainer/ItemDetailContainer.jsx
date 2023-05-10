import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemDetail from '../ItemDetail/ItemDetail'

// este componente debe regresar un objeto seleccionado por su id
function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log('itemId', itemId)
    console.log('item', item)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
        // busca el elemento cuyo id coincida con el itemId
            .then((data) => setItem(data.find((el) => el.id === Number(itemId)) ))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])


  return (
    <div>
        {
          loading 
          ? <h2>Cargando...</h2>
          : <ItemDetail item={item}/>
        }
    </div>
  )
}

export default ItemDetailContainer
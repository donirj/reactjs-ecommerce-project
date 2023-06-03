import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../firebase/config'

// este componente debe regresar un objeto seleccionado por su id
function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)

        // 1. call to reference (sync)
        const docRef = doc(db, "productos", itemId)
        // 2. call to ref (async)
        getDoc(docRef)
          .then((doc) => {
            const _item = {
              id: doc.id,
              ...doc.data()
            }
            setItem(_item)
          })
          .catch(e => console.log(e))
          .finally(() => setLoading(false))
    }, [])


  return (
    <div className='container my-5'>
        {
          loading 
          ? <h2>Cargando...</h2>
          : <ItemDetail item={item}/>
        }
    </div>
  )
}

export default ItemDetailContainer
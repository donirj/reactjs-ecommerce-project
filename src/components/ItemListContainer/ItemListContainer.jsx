import React, { useEffect, useState } from 'react'
import './_ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

function ItemListContainer({ name }) {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
      setLoading(true)

      // 1. create reference (sync), first parameter is the firestore db, second is the collection to consume
      const productosRef = collection(db, "productos")
      const q = categoryId
                  ? query(productosRef, where("category", "==", categoryId))
                  : productosRef
      // 2. consume reference (async) with getDocs
      getDocs(q)
        .then((res) => {
          const docs = res.docs.map((doc) => {
            // new object
            return {
              ...doc.data(),
              id: doc.id
            } 
          })
          setProductos(docs)
        })
        .catch(e => console.log(e))
        .finally(() => setLoading(false))

  }, [])
  
  return (
    <div className='container my-5'>
        { loading 
          ?  <h2>Cargando...</h2>
          : <ItemList items={productos}/>  
        }
    </div>
  )
}

export default ItemListContainer
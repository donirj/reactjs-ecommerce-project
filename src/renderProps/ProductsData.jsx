// RENDER PROPS ejemplo 
import React from 'react'
import { useState, useEffect } from 'react'
import { pedirDatos } from '../helpers/pedirDatos'

// children es una funcion
function ProductsData({children}) {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
        .then((data) => setProductos(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [])

    // pasamos por parametro el estado de productos y loading
  return children(productos, loading)
}

export default ProductsData
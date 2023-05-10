// custom Hook
import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"
import { useParams } from 'react-router-dom'

export const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
  const { categoryId } = useParams()
  console.log(categoryId)


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
    

    return ({
        productos,
        loading
    })
}
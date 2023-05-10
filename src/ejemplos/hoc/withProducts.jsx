import { useState, useEffect } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"

// high order functions
// recibe componente por parametro
// 
export const withProductsData = (Component) => {

    const withProductsData = (props) => {
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
        .then((data) => setProductos(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [])
    
        return (
            <Component productos={productos} Loading={loading} {...props}/>
        )
    }
    return withProductsData
}
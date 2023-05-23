
import { createContext, useState } from "react"

export const CartContext = createContext()

// componente que retorna el cartContext
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
      console.log(cart)

    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (id) => {
        // find busca dentro del array, con la condicion
        return cart.some((item) => item.id === id)
    }

    const emptyCart = () => {
        setCart([])
    }

    const totalCantidad = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const totalCompra = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            emptyCart,
            totalCantidad,
            totalCompra
        }}>
            {/* renderizado de lo que recibe de children*/}
            {children}

        </CartContext.Provider>
    )
}
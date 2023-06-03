
import { createContext, useState } from "react"

export const CartContext = createContext()

// componente que retorna el cartContext
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

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
        return cart.reduce((acc, item) => acc + item.cantidad * item.price, 0)
    }

    const removeItem = (id) => {
        // seteo de carrito, filtro el array con los item cuyo id sea distinto al id que recibo
        setCart(cart.filter((item) => item.id !== id))
    }

    const modifCantidad = (id) => {
        
        // replica del array
        const _cart = cart.slice()
        // encontrar el id
        const item = _cart.find(e => e.id === id)
        item.cantidad++
        setCart(_cart)
    }

    return (
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            emptyCart,
            totalCantidad,
            totalCompra,
            removeItem
        }}>
            {/* renderizado de lo que recibe de children*/}
            {children}

        </CartContext.Provider>
    )
}
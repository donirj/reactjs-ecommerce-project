import React from 'react';
import { useContext } from "react"
import { AddShoppingCart, Delete } from '@mui/icons-material';
import './CartWidget.scss'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
    const { cart, totalCantidad } = useContext(CartContext)

    return(
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <AddShoppingCart />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget
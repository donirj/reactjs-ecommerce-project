import React from 'react';
import { useContext } from "react"
import { AddShoppingCart } from '@mui/icons-material';
import './CartWidget.scss'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return(
        <Link to="/cart" className='container'>
            <AddShoppingCart />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget
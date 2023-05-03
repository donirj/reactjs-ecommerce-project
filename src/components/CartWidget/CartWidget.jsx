import React from 'react';
import { useState } from "react"
import { ShoppingBag, AddShoppingCart, SportsEsports } from '@mui/icons-material';
import './CartWidget.scss'

const CartWidget = () => {

    const [counter, setCounter] = useState(10)

    return(
        <div className='container'>
            <AddShoppingCart />
        <p>{counter}</p>
        
        </div>
    )
}

export default CartWidget
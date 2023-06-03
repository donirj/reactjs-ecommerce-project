
import { useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './_Cart.scss'


const Cart = () => {

    // consume estado del carrito
    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <div className='container my-5'>
                 <h2>Tu carrito está vacio</h2>
                    <hr />
                    <p>Compra algo</p>
                    <Link to="/" className='btn btn-primary' >Ver productos</Link>
            </div>
        )
    }

    return (
        <div className='container my-5'>

            <h2>Tu compra</h2>
            <hr />

            {
                cart.map((item) => (
                    <div key={item.id} >
                        <h3>{item.name}</h3>
                        <img className='imgCart' src={item.img}/>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Subtotal: {item.cantidad * item.price}</p>
                        <button onClick={() => removeItem(item.id)}>
                            <Delete />
                        </button>
                        <hr />
                    </div>
                ))
            }

            <div>
                <h3>TOTAL: {totalCompra()}</h3>
                <hr />
                <button onClick={emptyCart} className='btn btn-danger'>Vaciar carrito</button>
                <Link to="/checkout" className='btn btn-success'>Terminar Compra</Link>
            </div>


        </div>
    );
}

export default Cart;

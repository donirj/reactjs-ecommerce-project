
import { useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import './_Cart.scss'

const Cart = () => {

    // consume estado del carrito
    const { cart, emptyCart } = useContext(CartContext)

    return (
        <div className='container my-5'>
            <h2>Tu compra</h2>
            <hr />

            {
                cart.map((item) => (
                    <div key={item.id} >
                        <h3>{item.name}</h3>
                        <img className='img' src={item.img}/>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Subtotal: {item.cantidad * item.price}</p>
                        <hr />
                    </div>
                ))
            }

            <div>

                <button onClick={emptyCart} className='btn btn-danger'>Vaciar carrito</button>
            </div>

        </div>
    );
}

export default Cart;


import './_ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
// The React useMemo Hook returns a memoized value.
//  funciona para mantener la referencia o dirección de memoria de un dato
import { useContext, useState, useMemo } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


function ItemDetail({item}) {
  const { cart, agregarAlCarrito, isInCart } = useContext(CartContext)


  console.log(isInCart(item.id))

  const [cantidad, setCantidad] = useState(1)
  const [talle, setTalle] = useState(null)

  const handleAgregar = () => {
    const newItem = {
      ...item,
      cantidad,
      talle
    }

    agregarAlCarrito(newItem)

  }

  const date = useMemo(() => new Date(), [cart])


  return (
    <div className='itemDetailCard'>
            <div>
              <img src={item.img} className='img1' alt={item.nombre} />
            </div>
            <div className='productInfo'>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
               <p>Categoria {item.category}</p>
              <p>{item.desc}</p>
              <p>{item.name}</p>

              <p>Subtotal: {item.price * cantidad}</p>
              {/* <Memo/>
              {date.toLocaleDateString()} */}

              <br />

              {
                isInCart(item.id)
                ?  <Link className="btn btn-success" to="/cart" >Terminar mi compra</Link>
                :  <ItemCount
                  cantidad={cantidad}
                  setCantidad={setCantidad}
                  stock={item.stock}
                  agregar={handleAgregar}
      
                  />
              }

            </div>
    </div>
  )
}

export default ItemDetail

import './_ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import SelectTalle from '../../ejemplos/renderprops/SelectTalle'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


function ItemDetail({item}) {

  const { agregarAlCarrito, isInCart } = useContext(CartContext)

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

              <p>subtotal: {item.price * cantidad}</p>

              <br />

              {
                isInCart(item.id)
                ?  <Link className="btn btn-success" to="/cart" >Terminar mi compra</Link>
                :  <ItemCount
                  // info pasada por props a ItemCount
                  cantidad={cantidad}
                    //  propiedad del state declarada arriba
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
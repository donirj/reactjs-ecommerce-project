import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext'
import { Navigate } from 'react-router-dom'
import { db } from '../../firebase/config';
import { collection, addDoc, getDoc, writeBatch, query, where, documentId, doc } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, totalCantidad, emptyCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: user.email
    })
    const [orderId, setOrderId] = useState(null)

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    console.log("CART", cart.map((item) => item))

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const { nombre, direccion, email } = values


        if(nombre.length < 3) {
            Swal.fire('El nombre es muy corto, debe tener mínimo 3 caracteres')
        }
        
        if(direccion.length < 5) {
            Swal.fire('La dirección es muy corta, debe tener mínimo 5 caracteres')
        }

        if(email.length < 5) {
            Swal.fire('el mail es demasiado corto')
            return
        }

        const orden = {
            client: values,
            items: cart.map(item => ({id: item.id, nombre: item.name, cantidad: item.cantidad})),
            total: totalCantidad(),
            fyh: new Date()
        }

        const batch = writeBatch(db)
        const productosRef = collection(db, "productos")
        const ordersRef = collection(db, "orders")

        const promesas = cart.map((item) => {
            const ref = doc(productosRef, item.id)
            return getDoc(ref)
        })

        const productos = await Promise.all(promesas)
            
        

        console.log(productos)
        // const q = query(productosRef, where( documentId(), "in", cart.map(item => item.id) ))
        // const productos = await getDocs(q)
        

        const outOfStock = []

    
        productos.forEach((doc) => {
            const item = cart.find((i) => i.id === doc.id)
            const stock = doc.data().stock

            if(stock >= item.cantidad){
                batch.update(doc.ref, {
                    stock: stock - item.cantidad 
                })
            } else { 
                outOfStock.push(item)
            }
        })

        if(outOfStock.length === 0){
            addDoc(ordersRef, orden)
                    .then((doc) => {
                        batch.commit()
                        setOrderId(doc.id)
                        emptyCart()
                        setLoading(false)
                    })
        } else {
            console.log(outOfStock)
            Swal.fire('Hay items sin stock')
            setLoading(false)
        }

    }

    if(orderId){
        return (
            <div className='container my-5'>
                <h2>tu compra se registró exitosamente</h2>
                <hr />
                <p>Guarda tu número de orden: {orderId}</p>
                
                <Link to="/">Volver</Link>
            </div>
        )
    }

    if(cart.length === 0){
        return <Navigate to="/"/>
    }


    return (
        <div className='container my-5'>
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input 
                    className='form-control my-2'
                    type='text'
                    placeholder='Nombre'
                    value={values.nombre}
                    name='nombre'
                    onChange={handleInput}
                    
                />
                <input 
                    className='form-control my-2'
                    type='text'
                    placeholder='Dirección'
                    value={values.direccion}
                    name='direccion'
                    onChange={handleInput}
                    
                />
                <input 
                    className='form-control my-2'
                    type='email'
                    placeholder='Email'
                    value={values.email}
                    name='email'
                    onChange={handleInput}
                    readOnly
                    
                />

                <button disabled={loading} className='btn btn-primary' type='submit'>{loading ? <Spinner /> : "Enviar"}</button>
            </form>
        </div>
    );
}

export default Checkout;

import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext'
import { Navigate } from 'react-router';
import { db } from '../../firebase/config';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';


const Checkout = () => {

    const { cart, totalCompra } = useContext(CartContext)
    const { user } = useContext(AuthContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
          
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const { nombre, direccion, email } = values

        if(nombre.length < 3) {
            Swal.fire('El nombre es muy corto, debe tener mínimo 3 caracteres')
        }
        
        if(direccion.length < 5) {
            Swal.fire('La dirección es muy corta, debe tener mínimo 5 caracteres')
        }

        if(email.length < 5) {
            alert('el mail es demasiado corto')
            return
        }

        const orden = {
            client: values,
            items: cart.map(item => ({id: item.id, nombre: item.nombre, cantidad: item.cantidad})),
            total: totalCompra(),
            fyh: new Date()
        }

        console.log(orden)

        orden.items.forEach((item) => {
            const itemRef = doc(db, 'productos', item.id)

            getDoc(itemRef)
                .then((doc) => {
                    updateDoc(itemRef, {
                        stock: doc.data().stock - item.cantidad
                    })
                })
        })

        const ordersRef = collection(db, "orders")

        // addDoc(ordersRef, orden)
        //     .then((doc) => console.log(doc.id))
    }

    if(cart.length === 0){
        return <Navigate to="/" />
    }

    // useEffect(() => {
    //     mostrarAlerta()
    // }, [])
    // const mostrarAlerta = () => {
    //     Swal.fire('mensaje simple')
    // }

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
                />
                <button className='btn btn-primary' type='submit'>Enviar</button>
            </form>
        </div>
    );
}

export default Checkout;

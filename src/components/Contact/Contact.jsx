import React from 'react';
import { useState } from 'react'

const Contact = () => {
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)

        setValues({
            // spread del estado anterior
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('SUBMIT')
        console.log(values)

        const now = new Date()
    }

    return (
        <div className='container my-5'>

            <h2>Contacto</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input 
                    name="nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    className='form-control my-2' 
                    type='text'
                    placeholder='Tu nombre'
                    />
                <input 
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    className='form-control my-2' 
                    type='text'
                    placeholder='email'
                    />
                <input 
                    name="direccion"
                    value={values.direccion}
                    onChange={handleInputChange}
                    className='form-control my-2' 
                    type='text'
                    placeholder='direccion'
                    />
                <button className='btn btn-primary' type='submit'>Enviar</button>    
            </form>
        </div>
    );
}

export default Contact;

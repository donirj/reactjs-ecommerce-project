import React from 'react';
import { useRef } from "react"
import { useNavigate } from 'react-router';
// useSearchParams: hook para acceder y manipular los parametros de una URL de consulta (query parameters) en forma de objeto
import { useSearchParams } from 'react-router-dom';

const Buscador = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const value = inputRef.current.value

        setSearchParams({
            search: value

        })
    }

    return (
        <form onSubmit={handleSubmit} action="">
          <input ref={inputRef} type='text' className='form-control' style={{maxWidth: '250px'}}/>
          <button type="submit" className='btn btn-success'>Buscar</button>
        </form>
    )
};


export default Buscador;

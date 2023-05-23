
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Error404 = () => {

    const [timer, setTimer] = useState(5)

    const navigate = useNavigate()

    if(timer === 1) navigate(-1)

    useEffect(() => {
        setInterval(() => {
            setTimer((state) => state - 1)
        }, 1000)
    }, [])
   
    return(
        <div className='container my-5'>
            <h1>No se encontró la página solicitada</h1>
            <hr /> 

            <h4>Será redireccionado en {timer} segundos...</h4>

        </div>
    )
}

export default Error404;

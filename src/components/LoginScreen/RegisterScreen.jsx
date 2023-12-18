import {useContext, useState} from 'react';
import './_LoginScreen.scss'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const RegisterScreen = () => {

    const { register } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        register(values)
    }

    return (
        <div className='Login'>
            <div className='Login-container'>
                <h2>Registrarme</h2>
                <hr />

                <form onSubmit={handleSubmit}>
                    <input 
                        value={values.email}
                        type='email' 
                        className='form-control' 
                        placeholder='Email'
                        name='email'
                        onChange={handleInput}
                    />
                    <input 
                        value={values.password}
                        type='password' 
                        className='form-control' 
                        placeholder='Contraseña'
                        name='password'
                        onChange={handleInput}
                    />
                    <div className='buttonBox'>
                    <button className='btn btn-primary' type='submit'>Registrarme</button>
                    <Link to="/login">Ya estoy registrado, iniciar sesion</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterScreen;

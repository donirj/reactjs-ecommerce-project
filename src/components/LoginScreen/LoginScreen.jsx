import {useContext, useState} from 'react';
import './_LoginScreen.scss'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const LoginScreen = () => {
    const { login, loginWithGoogle } = useContext(AuthContext)
    const [error, setError] = useState(null)

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
        
        login(values)
        console.log('error',e)

        setError(`${'email o password inválido'}`)
    }

    const failSubmit = () => {
        try {
            throw new Error('¡Este es un error de ejemplo!');
        } catch (error) {
            handleSubmit(error)
        }
    }

    return (
        <div className='Login'>
            <div className='Login-container'>
                <h2>Login</h2>
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
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className='buttonBox'>
                        <button onSubmit={failSubmit} className='btn btn-primary' type='submit'>Login</button>
                        <Link to="/register">Registrarme</Link>
                    </div>
                    {/* <button className='btn btn-primary' onClick={loginWithGoogle}>Ingresar con google</button> */}
                </form>
            </div>
        </div>
    );
}

export default LoginScreen;

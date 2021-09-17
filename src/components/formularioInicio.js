import React, { useState } from 'react';
import './componentes.css'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'
import styles from '../CSS/form.module.css'
import Figuro from "../assets/figuroLogo.png"

export const FormularioInicio = () => {
    const { login } = useAuth();
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();


    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password)
            .then((userCredential) => {
                history.push('/');

            })
            .catch((error) => {
                setError('Wrong Credentials');
                setTimeout(() => setError(''), 1500);
            });
    }
    return (
        <>
        <img src={Figuro} alt="logo" className="styleLogo" />
            <div className="login">
                <div className='card-header' >
                    {error && <p className='error' >{error}</p>}
                    <h1>LOGIN</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grupo">
                        <input type="email" className="barra" onChange={handleEmail} />
                        <label htmlFor="nombre">Email</label>
                    </div>
                    <div className="grupo">
                        <input type="password" className="barra" onChange={handlePassword} />
                        <label htmlFor="contraseña">Contraseña</label>
                    </div>
                    <button type='submit' className="btn">Iniciar Sesión</button>
                </form>
                <p>¿No tienes una cuenta? <Link to='./signup'>Registrate</Link> </p>
            </div>
        </>
    )
};

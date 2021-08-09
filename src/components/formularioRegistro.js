import React, { useState } from 'react';
import './componentes.css'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'


export const FormularioRegistro = () => {
    const { signup } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmtPassword] = useState('');

    const [error, setError] = useState(null);
    const history = useHistory();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleConfirmPassword = (e) => setConfirmtPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setTimeout(() => setError(''), 1500)
        } else {
            signup(email, password)
                .then((userCredential) => {
                    console.log("ha sido registrado");
                    history.push('/');

                    var user = userCredential.user;
                    console.log(user, "este es user")
                })
                .catch((error) => {
                    setError('server error');
                    setTimeout(() => setError(''), 1500);
                });
        }
    }


    return (
        <>
            <div className="login">
                <div className='card-header' >
                    {error && <p className='error' >{error}</p>}
                    <h1>Registrarse</h1>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="grupo">
                        <input type="email" id="email" name="email" className="barra" onChange={handleEmail} />
                        <label htmlFor="nombre">Email</label>
                    </div>
                    <div className="grupo">
                        <input type="password" id="contraseña" name="contraeña" className="barra" onChange={handlePassword} />
                        <label htmlFor="contraseña">Contraseña</label>
                    </div>
                    <div className="grupo">
                        <input type="password" id="confirmContraseña" name="contraseña" className="barra" onChange={handleConfirmPassword} />
                        <label htmlFor="nombre">Confirmar contraseña</label>
                    </div>
                    <button id="boton-registro" className="btn" > Registrarse</button>
                </form>
                <p>¿Ya tienes una cuenta? <Link to='./login'>Inicia sesión</Link> </p>
            </div>
        </>
    )
};
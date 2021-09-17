import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'
import Figuro from "../assets/figuroLogo.png"
import './componentes.css'



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
            <img src={Figuro} alt="logo" className="styleLogo" />
            <div className="registro">
            <div className='card-header' >
                    <div> <h2>Crea tu cuenta</h2></div>
                    <div><p>Al crear tu cuenta asegurate de que tu contraseña tenga al menos una mayuscula, numero  o caracter especial</p></div>
            </div>
                    <form  onSubmit={handleSubmit} >
                    <div className="grupo">
                        <input type="tex" name="name" className="barra" placeholder="Tu Nombre"  /></div>
                    <div className="grupo">
                        <input type="text" name="lasName" className="barra" placeholder="Tu Apellido" /></div>
                    <div className="grupo"> 
                        <input type="text" name="gender" className="barra" placeholder="Soy" /></div>
                    <div className="grupo">
                        <input type="text" name="country" className="barra"placeholder="Vivo en" /></div>
                    <div className="grupo">
                        
                        <input type="email" name="email" id="email"  className="barra" onChange={handleEmail} placeholder="Email"/></div>
                     <div className="grupo"> 
                        <input type="password" name="password" id="password" className="barra"onChange={handlePassword}  placeholder="Contraseña"/></div>
                        <div className="grupo"> 
                        <input type="password" id="confirmContraseña" name="contraseña" className="barra" onChange={handleConfirmPassword} placeholder="confirmar contraseña" /></div>
                       
                   <div><button id="boton-registro" className="btn"> Registrarse</button></div>
                    </form>

                    </div>
        </>
    )
};
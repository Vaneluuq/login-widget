import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'
import Figuro from "../assets/figuroLogo.png"
import styles from '../CSS/form.module.css'



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
         <img src={Figuro} alt="logo" className={styles.logo} />
            <div className={styles.grupoContainer}>
                <div >
                    <h2>Crea tu cuenta</h2>
                    <p>Al crear tu cuenta asegurate de que tu contraseña tenga al menos una mayuscula, numero  o caracter especial</p>
                    <form className={styles.formLogin}  onSubmit={handleSubmit} >
                        <label className={styles.tex}>Tu Nombre</label>
                        <input type="tex" name="name" className={styles.input}  placeholder="name"  />
                        <label>Tu Apellido</label>
                        <input type="text" name="lasName" className={styles.input} placeholder="Apellido" />
                        <label>Soy</label>
                        <input type="text" name="gender" className={styles.input} placeholder="Hombre/Mujer" />
                        <label>Vivo en</label>
                        <input type="text" name="country" className={styles.input} />
                        <label htmlFor="nombre">Email</label>
                        <input type="email" name="email" id="email" placeholder="email" className={styles.input}  onChange={handleEmail}/>
                        <label htmlFor="contraseña">Contraseña</label>
                        <input type="password" name="password" id="password" placeholder="password" className={styles.input} onChange={handlePassword} />
                       <label htmlFor="nombre">Confirmar contraseña</label> 
                       <input type="password" id="confirmContraseña" name="contraseña" className={styles.input} onChange={handleConfirmPassword} />
                        <label> <input type="checkbox" /> He leído y estoy de acuerdo con los Términos del Servicio</label>
                        <label className={styles.texPstyle}> <input type="checkbox" /> Este sitio recoge nombres, correos electronicos y otra informacion del usuario. Aceptolos terminos establecidos en la politicas de privacidad</label>
                        <button id="boton-registro" className={styles.btn} > Registrarse</button>
                    </form>
                </div>
            </div>
           
        </>
    )
};
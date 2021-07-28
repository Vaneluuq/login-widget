import React,{useState} from 'react';
import './componentes.css'

const FormularioRegistro = ()=>{
    // const {nombre,setNombre}=useState("");
    
    
    return(
        <>
       <div className="login">
<h1>Registrarse</h1>
<form>
<div className="grupo">
    <input type="text" id="email" name="email" className="barra" />
    <label htmlFor="nombre">Nombre</label>
    </div>
    <div className="grupo">
    <input type="email" id="email" name="email" className="barra" />
    <label htmlFor="nombre">Email</label>
    </div>
    <div className="grupo">
    <input type="password" id="contraseña" name="contraeña" className="barra"/>
    <label htmlFor="contraseña">Contraseña</label>
    </div>
</form>
</div>
</>
)};
export default FormularioRegistro

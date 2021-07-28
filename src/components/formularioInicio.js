import React,{useState} from 'react';
import './componentes.css'

const FormularioInicio = ()=>{
    // const {nombre,setNombre}=useState("");
    
    
    return(
        <>
       <div className="login">
<h1>Formulario</h1>
<form>
    <div className="grupo">
    <input type="email" id="nombre" name="nombre" className="barra" />
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


export default FormularioInicio
import React,{useState} from 'react';
import './componentes.css'

const Formulario = ()=>{
    const {nombre,setNombre}=useState("");
    const {contraseña,setContraseña}=useState("");
    
    return(
        <>
       <div className="login">
<h1>Formulario</h1>
<form>
    <label htmlfor="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" value={nombre} onChange= {(e)=>setNombre(e.target.value)} />
    <label htmlfor="contraseña">Contraseña</label>
    <input type="password" id="contraseña" name="contraseña" value={contraseña} onChange= {(e)=>setContraseña(e.target.value)} />
    
</form>
</div>
</>
    );
};
export default Formulario
import React, { useState } from 'react';
import './componentes.css'

export const Notas = (props) => {
    const initialStateValues={
        name:"",
        description:"",

    };
    const [values, setValues]=useState(initialStateValues);
    
    const inputChange =(e)=>{
        const{name,value}= e.target;
        setValues({...values, [name]:value})
        
      
    };
    

    const handleSubmit=(e) =>{
        e.preventDefault();
        props.addOrEditNote(values);
        setValues({...initialStateValues})
    }
    const modal = document.getElementsByClassName("modal")
const boton= document.getElementsByClassName("agregar-nota");
const span= document.getElementsByClassName("close")[0]
boton.onclick=function(){
    modal.style.display="block"
}

    return (
        <>
        <div className="modal">
            <form className="notas" onSubmit={handleSubmit}>
                <div className="titulo">
                    <input type="text" name="name" placeholder='titulo' onChange={inputChange} value={values.name}></input>
                </div>
                <div className="contenido">
                    <textarea  name="description" rows='4'onChange={inputChange} value={values.description}></textarea>
                </div>
                <div>
                    <button>➕</button>
                </div>
                <span className="close">&times;</span>
            </form>
        </div>
</>
    )
}

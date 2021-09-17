import React, { useState } from 'react';
import styleDash from '../CSS/mainview.module.css'
import Figuro from "../assets/figuroLogo.png"
import { useAuth } from '../context/AuthContext';

export default function Sidebar() {
    const { logout, currentUser } = useAuth();
    const [error, setError] = useState('');
  
  
    const handleLogout = async () => {
      try {
        await logout();
      } catch (error) {
        setError('Server Error');
      }
    }
    
  return(
   <div className={styleDash.sidebar}>
      <div className={styleDash.logoSidebar}>
           <img src={Figuro} alt="Logo Figuro" className={styleDash.imgLogo}/>
      </div>
      <div className={styleDash.opcionesSidebar}>
        <div>
           <img src="" alt="" />
           <h3>Mis decisiones</h3>
        </div>
        <div>
          <img src="" alt="" />
           <h3>Productos</h3>
        </div>
        <div>
           <img src="" alt="" />
           <h3>Cursos y Webinars</h3>
        </div>
        <div>
           <img src="" alt="" />
           <h3>Calculadoras</h3>
        </div>
        <div>
           <img src="" alt="" />
           <h3>inicio</h3>
        </div>
    </div>
    <div className={styleDash.usuarioSidebar}>
       <div className={styleDash.userLogin}>
          <img src="" alt="" />
          <h3>Hola, tu correo es:</h3>
          <p>{currentUser.email}</p>
       </div>
       <div className={styleDash.userLogout}>
          <button onClick = {handleLogout}>LogOut</button>
       </div>
    </div>
   </div>
    
  )
}
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import eliminar from '../img/eliminar.png'
import meGusta from '../img/me-gusta.png'
import notas from '../img/notas.png'
import logo from '../img/Captura.PNG'
import { Contenedor } from './contenedor.js'

export const Home = () => {

  const { logout, currentUser } = useAuth();
  const [error, setError] = useState('');


  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      setError('Server Error');
    }
  }
  

  return (
    <div className='home'>
      <div className='barra' >
        {error && <p className='error' >{error}</p>}


        <img src={logo} />
      </div>

      <div className='barra-lateral'>
        
          <h1>{currentUser.email}</h1>
        <div className='agregar-notas'>
       
          <button className="agregar-nota" >Agregar Nota</button>
        </div>

        <div className='logout' >
          <button onClick={handleLogout} >Log Out</button>
        </div>


      </div>
      <div><Contenedor /></div>
    </div>
  )
}
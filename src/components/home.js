import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import eliminar from '../img/eliminar.png'
import meGusta from '../img/me-gusta.png'
import notas from '../img/notas.png'
import logo from '../img/logo2.PNG'

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
    <div className='card'>
      <div className='barra' >
        {error && <p className='error' >{error}</p>}

        <input type="text" placeholder='Añadir nota'></input>
        
        <img src={logo}/>
      </div>
     
      <div className='barra-lateral'> 
      <h1>{currentUser.email}</h1>

      <div className='eliminado' >
        <img src={eliminar}/>
      <button > Eliminado</button>
      </div>
      <div className='favorito'>
        <img src={meGusta}/>
      <button >Favoritos</button>
      </div>
      <div className='notas'>
      <img src={notas}/>
      <button  >Mis notas</button>
      </div>
     
      <div className='logout' >
        <button  onClick={handleLogout} >Log Out</button>
     </div> 
     
     </div>

    </div>
  )
}
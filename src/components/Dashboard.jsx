import React from 'react';
import Sidebar from './Sidebar';
import Mainview from './Mainview';
import styleDash from '../CSS/mainview.module.css'
import Figuro from "../assets/figuroLogo.png"
import BurguerMenu from './HamburguerMenu'
import { useState } from 'react';
import menu from '../assets/hamburgermenu.png'
import { useAuth } from '../context/AuthContext';


export default function Dashboard() {
  
  const [open, setOpen] = useState(false)
  const { logout } = useAuth();
  const [error, setError] = useState('');

  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      setError('Server Error');
    }
  }

  const openBurguerMenu = () => {
    setOpen(true)
  }

  const closeBurguerMenu = () => {
    setOpen(false)
  }

  return (
    <div className={styleDash.container}>
      <div className={styleDash.navBar}>
        { open &&           
          <BurguerMenu clickCerrar = {closeBurguerMenu} />
        }
        <button type = "button" onClick = {openBurguerMenu}>
          <img src={menu} alt="Logo Figuro" className={styleDash.imgMenu} />
        </button>

        <img src={Figuro} alt="Logo Figuro" className={styleDash.imgLogo} />
        </div>

        <div className={styleDash.containerSidebar} >
          <Sidebar
          logout={handleLogout}
          />
        </div>
        <div className={styleDash.containerMainview}>
          <Mainview />
        </div>
    </div>
  )
}


import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from './Sidebar';
import Mainview from './Mainview.js';
import styleDash from '../CSS/mainview.module.css'
import Figuro from "../assets/figuroLogo.png"
import BurguerMenu from './HamburguerMenu'
import menu from '../assets/hamburgermenu.png'



export const Home = (handleLogout) => {

  
    const [open, setOpen] = useState(false)
    
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
import React from 'react';
import styleDash from '../CSS/mainview.module.css'

function BurguerMenu(props) {

return(  
    <>
     <nav role="navigation" className={styleDash.burguerMenu}>
     <button  onClick = {props.clickCerrar} >X</button>
        <div className={styleDash.burguerMennOptions}>
          <a href="../index.html" className="nav-link-6 _2 w-nav-link">INICIO</a>
          <a href="tecnologias.html" className="nav-link-6 _1 w-nav-link">TECNOLOGÍAS</a>
          <a href="../Vision/VISION.html" className="nav-link-5 w-nav-link">VISION</a>
        </div>
      </nav>
    </>
  )
}

export default BurguerMenu
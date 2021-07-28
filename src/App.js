import './App.css';
import React from 'react';
import FormularioInicio from './components/formularioInicio';
import FormularioRegistro from './components/formularioRegistro';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import firebase from './firebase/firebase';


function App() {
  const Boton = () => {
    return (
      <button className="btn" >Iniciar sesión</button>
    )
  }
  const Registro = () => {
    return (
      <button className="btn" >Registrarse</button>
    )
  }
  return (
    <Router>
      <Switch>
        <Route path="/Registro">
          <div className="container">
           <div><FormularioRegistro /></div> 
           <div>
              <Link to="./"><Registro/></Link>
            </div>
            <div>¿Ya tienes una cuenta?
              <Link to="./">Inicia sesión</Link>
            </div>
          </div>

        </Route>
        <Route path="/">
          <div className="container">
            <div><FormularioInicio /></div>
            <div>
              <Link to="./"><Boton /></Link>
            </div>
            <div>¿no tiene una cuenta?
              <Link to="./Registro">Registrate</Link>
            </div>
          </div>



        </Route>
      </Switch>
    </Router>
  );
}

export default App;

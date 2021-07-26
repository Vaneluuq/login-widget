import './App.css';
import React from 'react';
import Formulario from './components/formulario';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <div className="App">
            <Formulario />
             <button >
               <Link to="./">
               Crear cuenta
               </Link>
             </button>
          </div>
        </Route>
        <Route path="/">
          
            hola
         
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

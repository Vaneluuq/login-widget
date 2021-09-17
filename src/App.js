import './App.css';
import React from 'react';
import { FormularioInicio } from './components/formularioInicio';
import { FormularioRegistro } from './components/formularioRegistro';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import { AuthProvider } from './context/AuthContext'
import { PrivateRoute } from './components/PrivateRoute'
import Dashboard from './components/Dashboard';

function App() {

  return (
    <div>
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={Dashboard} />
          <Route exact path='/login' component={FormularioInicio} />
          <Route exact path='/signup' component={FormularioRegistro} />
        </Switch>
      </Router>
    </AuthProvider>
    </div>

  )

}

export default App;

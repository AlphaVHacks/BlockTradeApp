import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import logo from './img/logo.png';
import './css/App.css';

function App() {

  return (
    <div className="App">
      <div id="wrapper" className=" container d-flex justify-content-center align-items-center">
        <div id="options" className="d-flex flex-column align-items-center p-5">
          <img id="logo" src={logo} />
          <Route component={Login} exact path='/' />
          <Route component={Signup} exact path='/signup' />
          <Route component={Dashboard} exact path='/dashboard' />
        </div>
      </div>
    </div>
  );
}

export default App;

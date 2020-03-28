import React, { Component } from 'react';
import Home from './Home';
import CrearEventos from './CrearEventos';
import ListEventos from './ListEventos';
import Pagos from './Pagos';
// import App from './App';

import Login from './Login';


// import '../assets/vendor/nucleo/css/nucleo.css'
// import '../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css'
// import '../assets/css/argon.css?v=1.1.0'


// import '../assets/vendor/jquery/dist/jquery.min'
// import '../assets/vendor/bootstrap/dist/js/bootstrap.bundle.min'
// import '../assets/vendor/js-cookie/js.cookie'
// import '../assets/vendor/jquery.scrollbar/jquery.scrollbar.min'
// import '../assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min'
// import '../assets/js/argon?v=1.1.0'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

  class StaticSite extends Component {

    constructor(...props){
      super(...props)
    }
      render(){
        return(
          <Router>
       <div>
     
       <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to='/home'>EVENTS</Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
            <Link className="nav-link" to='/creareventos'>Crear evento</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to='/vereventos'>Ver eventos</Link>
            </li>
            {/* <li className="nav-item">
            <Link className="nav-link" to='/App'>App</Link>
            </li> */}
            <li className="nav-item">
            <Link className="nav-link" to='/pagos'>Pagos</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
            <button className="btn btn-primary my-2 my-sm-0" type="submit">Buscar</button>
          </form>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Salir
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to='/login'>Salir</Link>
              </div>
            </div>

        </div>
        

      </nav>
        
 
        <Route path="/home" component={Home} />
        <Route path="/creareventos" component={CrearEventos}/>
        {/* <Route path="/App" component={App}/> */}
        <Route path="/vereventos" component={ListEventos} />
        <Route path="/login" component={Login} />
        <Route path="/pagos" component={Pagos} />
           </div>
           
      </Router>
        )
      }
      
    }
  export default StaticSite
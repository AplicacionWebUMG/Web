import React, { Component } from 'react';
import Home from './Home';
import Usuarios from './Usuarios';
import Eventos from './Eventos';
import Login from './Login';
import ia from '../img/ia.jpg';
import imw from '../img/imw.jpg';
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
       <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to='/home'>EVENTS</Link>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
            <Link className="nav-link" to='/usuarios'>Usuarios</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to='/eventos'>Eventos</Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
            <button class="btn btn-primary my-2 my-sm-0" type="submit">Buscar</button>
          </form>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Salir
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to='/login'>Salir</Link>
              </div>
            </div>

        </div>
        

      </nav>
        
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src={ia} alt="First slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src={imw} alt="Second slide"/>
      </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    </div>
  </div>
        <Route path="/home" component={Home} />
        <Route path="/usuarios" component={Usuarios}/>
        <Route path="/eventos" component={Eventos} />
        <Route path="/login" component={Login} />
           </div>
      </Router>
        )
      }
      
    }
  export default StaticSite
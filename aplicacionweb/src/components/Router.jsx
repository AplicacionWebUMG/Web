import React, { Component } from 'react';
import Home from './Home';
import CrearEventos from './CrearEventos';
import ListEventos from './ListEventos';
import TipoPago from './TipoPago';
import Reembolso from './Reembolso';
import HistorialPagos from './HistorialPagos';
import Usuarios from './Usuarios';

import Localidades from './Localidades';


import actualizarevento from './update'
import actualizaruser from './updateuser'

import Login from './Login';

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
       <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div className="scrollbar-inner">
      <div className="sidenav-header  align-items-center">
        <a className="navbar-brand" href="javascript:void(0)">
          <img src="../assets/img/media/logo.png" width="40px"className="navbar-brand-img" alt="..."/>
        </a>
      </div>
      <div className="navbar-inner">
       
        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
      
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                <i className="ni ni-tv-2 text-default"></i>
                <span className="nav-link-text">Main</span> 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/creareventos">
                <i className="ni ni-bullet-list-67 text-default"></i>
                <span className="nav-link-text">Agregar Eventos</span> 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vereventos">
                <i className="ni ni-check-bold text-default"></i>
                <span className="nav-link-text">Ver Eventos</span> 
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <i className="ni ni-money-coins text-default"></i>
                <span className="nav-link-text">Pagos</span> 
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/tipopagos">Tipo de pago</Link>
                <Link className="dropdown-item" to="/reembolso">Reembolso</Link>
                <Link className="dropdown-item" to="/historialpago">Historial de pagos</Link>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <i className="ni ni-money-coins text-default"></i>
                <span className="nav-link-text">Admin Usuarios</span> 
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/usuarios">Usuarios</Link>
              </div>
            </li>
          </ul>
  
        </div>
      </div>
    </div>
  </nav>
  <div className="main-content" id="panel">
    <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
          <ul className="navbar-nav align-items-center  ml-md-auto ">
            <li className="nav-item d-xl-none">
           
              <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </div>
            </li>
            </ul>
          <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
            <li className="nav-item dropdown">
              <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="media align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img alt="" src=""/>
                  </span>
                  <div className="media-body  ml-2  d-none d-lg-block">
                    <span className="mb-0 text-sm  font-weight-bold">Usuario</span>
                  </div>
                </div>
              </a>
              <div className="dropdown-menu  dropdown-menu-right ">
                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Acciones</h6>
                </div>
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-single-02"></i>
                  <span>Mi cuenta</span>
                </a>
                <a href="#!" className="dropdown-item">
                  <i className="ni ni-settings-gear-65"></i>
                  <span>Configuraciones</span>
                </a>
                <div className="dropdown-divider"></div>
                <Link to="/login" className="dropdown-item">
                  <i className="ni ni-user-run"></i>
                  <span>Salir</span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
     
        <Route path="/home" component={Home} />
        <Route path="/creareventos" component={CrearEventos}/>
        <Route path="/vereventos" component={ListEventos} />
        <Route path="/login" component={Login} />
        <Route path="/tipopagos" component={TipoPago} />
        <Route path="/reembolso" component={Reembolso} />
        <Route path="/historialpago" component={HistorialPagos} />
        <Route path="/usuarios" component={Usuarios} />
        <Route  exact path="/update/:id/:nombre/:fecha/:hora/:lugar/:estado/:organizadores" component={actualizarevento} />
        <Route exact path="/actualizar/:id/:primernombre/:segundonombre/:nombreusuario/:email" component={actualizaruser} />
     
      </div>
      </div>
      </Router>
     

        )
      }
      
    }
  export default StaticSite
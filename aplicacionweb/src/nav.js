import React, { Component } from "react";

class Nav extends Component {

  render(){

    return(
        <div>
         <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div class="scrollbar-inner">
      <div class="sidenav-header  align-items-center">
        <a class="navbar-brand" href="javascript:void(0)">
          <img src="../assets/img/media/logo.png" width="40px"class="navbar-brand-img" alt="..."/>
        </a>
      </div>
      <div class="navbar-inner">
    
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
  
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="main.html">
                <i class="ni ni-tv-2 text-default"></i>
                <span class="nav-link-text">Main</span> 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="createeventos.html">
                <i class="ni ni-bullet-list-67 text-default"></i>
                <span class="nav-link-text">Agregar Eventos</span> 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="viewevent.html">
                <i class="ni ni-check-bold text-default"></i>
                <span class="nav-link-text">Ver Eventos</span> 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <i class="ni ni-money-coins text-default"></i>
                <span class="nav-link-text">Pagos</span> 
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="tipopago.html">Tipo de pago</a>
                <a class="dropdown-item" href="rembolso.html">Rembolso</a>
                <a class="dropdown-item" href="historialpago.html">Historial de pago</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                <i class="ni ni-money-coins text-default"></i>
                <span class="nav-link-text">Admin Usuario</span> 
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="usuarios.html">Usuario</a>
              </div>
            </li>
          </ul>
         
        </div>
      </div>
    </div>
  </nav>
  <div class="main-content" id="panel">
    <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
          <ul class="navbar-nav align-items-center  ml-md-auto ">
            <li class="nav-item d-xl-none">
         
              <div class="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                <div class="sidenav-toggler-inner">
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                  <i class="sidenav-toggler-line"></i>
                </div>
              </div>
            </li>
            </ul>
          <ul class="navbar-nav align-items-center  ml-auto ml-md-0 ">
            <li class="nav-item dropdown">
              <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="media align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img alt="" src=""/>
                  </span>
                  <div class="media-body  ml-2  d-none d-lg-block">
                    <span class="mb-0 text-sm  font-weight-bold">Usuario</span>
                  </div>
                </div>
              </a>
              <div class="dropdown-menu  dropdown-menu-right ">
                <div class="dropdown-header noti-title">
                  <h6 class="text-overflow m-0">Acciones</h6>
                </div>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-single-02"></i>
                  <span>Mi cuenta</span>
                </a>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-settings-gear-65"></i>
                  <span>Configuraciones</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="../paginas/login.html" class="dropdown-item">
                  <i class="ni ni-user-run"></i>
                  <span>Salir</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   </div>
        </div>
       
       
    )
  }

}
export default Nav
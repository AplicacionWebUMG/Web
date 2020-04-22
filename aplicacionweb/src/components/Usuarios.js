import React, { Component } from 'react';

class Usuarios extends Component{

render(){
    
    return(
        
        <div>
<div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Administrador de usuarios</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="table-responsive">
              <div class="card-body">
                <form class="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
                  <div class="form-group mb-4">
                    <div class="input-group input-group-alternative input-group-merge">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-search"></i></span>
                      </div>
                      <input class="form-control" placeholder="Buscar" type="text"/>
                    </div>
                  </div>
                  <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </form>
                <table class="table align-items-center table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Usuario</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Correo</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                       JuanCarlos
                      </th> 
                      <td>Juan Carlos</td>
                      <td>jua@juan.com</td>
                      <td>
                        {/* <!-- Botón para editar--> */}
                        <a href="#editar" role="button" class="btn btn-sm btn-warning" data-toggle="modal">Editar</a>
                        <div id="editar" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                  <form>
                                    <div class="modal-body">
                                      <form>
                                        <h6 class="heading-small text-muted mb-4">Editar Usuario</h6>
                                          <div class="row">
                                            <div class="col-lg-12">
                                              <div class="form-group">
                                                <label class="form-control-label" for="nombre-evento">Usuario</label>
                                                <input type="text" id="input-evento" class="form-control" />
                                              </div>
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div class="col-lg-12">
                                              <div class="form-group">
                                                <div class="form-group">
                                                  <label class="form-control-label" for="input-cover">Nombre</label>
                                                  <input type="text" id="input-cover" class="form-control"/>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div class="col-lg-12">
                                              <div class="form-group">
                                                <label class="form-control-label" for="input-fecha">Correo</label>
                                                <input type="email" id="input-email" class="form-control"/>
                                              </div>
                                            </div>
                                          </div>              
                                    
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                        <button type="submit" class="btn btn-success">Guardar</button>
                                    </div>
                                  </form>
                                </div>
                                </form>
                            </div>
                        </div>
                        </div>
                        {/* <!-- Botón para eliminar--> */}
                        <a href="#eliminar" role="button" class="btn btn-sm btn-danger" data-toggle="modal">Eliminar</a>
                        <div id="eliminar" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                        <p>¿Esta seguro de borrar al usuario?</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                                        <button type="button" class="btn btn-warning" data-dismiss="modal">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
              </div>
        
            </div>
          </div>
       
        </div>
         
      
        
    )
}
}

export default Usuarios
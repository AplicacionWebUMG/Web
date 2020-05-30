import React, { Component } from 'react';


class TipoPago extends Component{

render(){
    
    return(
        
        <div>
            <div class="header bg-primary pb-6">
                <div class="container-fluid">
                    <div class="header-body">
                    <div class="row align-items-center py-4">
                        <div class="col-lg-6 col-7">
                        <h6 class="h2 text-white d-inline-block mb-0">Tipo de pago</h6>
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
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-5">
                      <div class="form-group">
                        <label class="form-control-label" for="input-evento">Listado Evento</label>
                          <select class="form-control" id="estadoEvento">
                          <option></option>
                          <option></option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-5">
                      <div class="form-group">
                        <label class="form-control-label" for="input-evento">Tipo Pago</label>
                          <select class="form-control" id="estadoEvento">
                          <option></option>
                          <option></option>
                        </select>
                      </div>
                    </div>
                    <div class="col text-right botonpos">
                      <a href="#!" class="btn btn-md btn-warning">Guardar</a>
                    </div>
                    </div>
                  </div>
                  </div>


                <table class="table align-items-center table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Evento</th>
                         
                      <th scope="col">Tipo Pago</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <th scope="row">#</th> 
                      <td>Festival Gallo</td>
                      <td>Efectivo</td>
                      <td>
                           
                        
            
                        
                                 
                        
                        {/* <!-- Botón para eliminar--> */}
                        <a href="#eliminar" role="button" class="btn btn-sm btn-danger" data-toggle="modal">Borrar</a>
                        <div id="eliminar" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                        <p>¿Estas seguro que deseas quitar este elemento?</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                                        <button type="button" class="btn btn-warning" data-dismiss="modal">Quitar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                      </td>
                      </tr>
                      <tr>
                      <th scope="row">#</th> 
                      <td>Cherry Eventos</td>
                      <td>paypal</td>
                      <td>
                           
                        
            
                        
                                 
                        
                        {/* <!-- Botón para eliminar--> */}
                        <a href="#eliminar" role="button" class="btn btn-sm btn-danger" data-toggle="modal">Borrar</a>
                        <div id="eliminar" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                        <p>¿Estas seguro que deseas quitar este elemento?</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                                        <button type="button" class="btn btn-warning" data-dismiss="modal">Quitar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                      </td>
                      </tr>
                      <tr>
                      <th scope="row">#</th> 
                      <td>Universo Eventos</td>
                      <td>Tarjeta de credito</td>
                      
                      
                      <td>
                           
                        
            
                        
                                 
                        
                        {/* <!-- Botón para eliminar--> */}
                        <a href="#eliminar" role="button" class="btn btn-sm btn-danger" data-toggle="modal">Borrapr</a>
                        <div id="eliminar" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                        <p>¿Estas seguro que deseas quitar este elemento?</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                                        <button type="button" class="btn btn-warning" data-dismiss="modal">Quitar</button>
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
    
    )
}
}

export default TipoPago
import React, { Component } from 'react';



class Reembolso extends Component{


    
render(){
    
    return(
        
        <div>

<div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Rembolso</h6>
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
                <table class="table align-items-center table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Participante</th>
                      <th scope="col">Evento</th>
                      <th scope="col">Estado</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Juan Carlos</th> 
                      <td>Festival Gallo</td>
                      <td>Q150.00</td>
                      <td>

                        {/* <!-- Botón para eliminar--> */}
                        <a href="#eliminar" role="button" class="btn btn-sm btn-danger" data-toggle="modal">Aceptar</a>
                        <div id="eliminar" class="modal fade">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div class="modal-body">
                                        <p>¿Esta seguro de seguro que deseas realizar rembolso?</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                        <button type="button" class="btn btn-warning" data-dismiss="modal">Rembolsar</button>
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

export default Reembolso
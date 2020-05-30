import React, { Component } from 'react';



class HistorialPagos extends Component{


    
render(){
    
    return(
        
        <div>

<div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">Historial de pago</h6>
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
                        <label class="form-control-label" for="input-evento">Participante</label>
                          <select class="form-control" id="estadoEvento">
                          <option></option>
                          <option></option>
                        </select>
                      </div>
                      
                    </div>
                    <div class="col text- botonposdos">
                      <a href="#!" class="btn btn-md btn-warning">Mostrar</a>
                    </div>
                    </div>

                  
                  </div>
                  </div>


                <table class="table align-items-center table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Evento</th>
                      <th scope="col">Costo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">#</th> 
                      <td>Festival Gallo</td>
                      <td>Q.150.00</td>
                      </tr>
                      <tr>

                      <th scope="row">#</th> 
                      <td>Cherry Eventos</td>
                      <td>Q.200.00</td>
                      </tr>
                      <tr>

                      <th scope="row">#</th> 
                      <td>Universo Eventos</td>
                      <td>Q.250.00</td>
                      <td>
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

export default HistorialPagos
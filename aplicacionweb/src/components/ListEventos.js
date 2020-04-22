import React, { Component } from 'react';
import StaticSite from './Router';

import EliminarEvento from './EliminarEvento';

class ListEventos extends Component{
    
    constructor(...props){
        super(...props)
        this.state={eventos:[]}
    }
    componentDidMount(){
        fetch('https://rijhn09.pythonanywhere.com/evento/mostrar/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
            }
        
    })
        .then(response=>{return response.json()})
        .then(eventos =>{this.setState({eventos: eventos})})
         
    
}
    render(){
        return(
            <div>
              
<div className="main-content  " id="panel">
                {/* titulo */}
    <div className="header bg-primary pb-6">
      <div className="container-fluid">
        <div className="header-body">
          <div className="row align-items-center py-4">
            <div className="col-lg-6 col-7">
              <h6 className="h2 text-white d-inline-block mb-0">Eventos Disponibles</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* fin del titulo */}
  
                
                            <div class="container-fluid mt--6">
                                <div class="row">
                                    <div class="col">
                                    <div class="card">
                                    {
                     this.state.eventos.map(events =>{
                        return( 
                                        <div class="table-responsive">
                                        <div class="card-body">
                                            <table class="table align-items-center table-flush">
                                            <thead class="thead-light">
                                                <tr>
                                                <th scope="col">Evento</th>
                                                <th scope="col">Organizadores</th>
                                                <th scope="col">Fecha </th>
                                                <th scope="col">Hora </th>
                                                <th scope="col">Lugar evento</th>
                                                <th scope="col">Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <th scope="row">
                                               {events.nombre}
                                                </th> 
                                                <td>{events.organizadores}</td>
                                                <td>{events.fecha}</td>
                                                <td>{events.hora}</td>
                                                <td>{events.lugar}</td>
                                                <td>
                                                   
                                                    <a href="#editar" role="button" class="btn btn-sm btn-warning" data-toggle="modal">Editar</a>
                                                    <div id="editar" class="modal fade">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">

                                                                <div class="modal-body">
                                                                <form>
                                                                    <h6 class="heading-small text-muted mb-4">Editar Evento</h6>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                        <div class="form-group">
                                                                            <label class="form-control-label" for="nombre-evento">Nombre del evento</label>
                                                                            <input type="text" id="input-evento" class="form-control" placeholder="Nombre del evento" />
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                        <div class="form-group">
                                                                            <div class="form-group">
                                                                            <label class="form-control-label" for="input-cover">Cover</label>
                                                                            <input type="file" id="input-cover" class="form-control"/>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                        <div class="form-group">
                                                                            <label class="form-control-label" for="input-fecha">Fecha</label>
                                                                            <input type="datetime-local" id="input-fecha" class="form-control"/>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                        <div class="form-group">
                                                                            <label class="form-control-label" for="input-evento">Estado del evento</label>
                                                                            <select class="form-control" id="estadoEvento">
                                                                            <option>Activo</option>
                                                                            <option>Inactivo</option>
                                                                            </select>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                        <div class="form-group">
                                                                            <label class="form-control-label" for="input-lugar">Lugar</label>
                                                                            <input type="text" id="input-lugar" class="form-control" placeholder="Cayala-Ciudad de Guatemala"/>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                        <div class="form-group">
                                                                            <label class="form-control-label" for="input-organizadores">Organizadores</label>
                                                                            <input id="input-organizadores" class="form-control" placeholder="Promusa Eventos" type="text"/>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                        <div class="form-group">
                                                                            <label class="form-control-label" for="input-lugar">Lugar</label>
                                                                            <input type="text" id="input-lugar" class="form-control" placeholder="Cayala-Ciudad de Guatemala"/>
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                                                    <button type="button" class="btn btn-success">Guardar</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                   
                                                    <a href="#eliminar" role="button" class="btn btn-sm btn-danger" data-toggle="modal">Eliminar</a>
                                                    <div id="eliminar" class="modal fade">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <p>¿Esta seguro de borrar este evento?</p>
                                                                    <p class="text-warning"><small>Si lo borras, nunca podrás recuperarlo.</small></p>
                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                                                                    <button type="button" class="btn btn-warning">Eliminar</button>
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
                                            )
                                        })}
                                    </div>
                                        </div>
                                    
                                        </div>
                                    </div>
                                    
                                  
                        
                

                </div>
            </div>
            
        )
    }


}


export default ListEventos;
import React, { Component } from 'react';
import StaticSite from './Router';

import EliminarEvento from './EliminarEvento';
import axios from 'axios';
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
deleteNote = async (noteId) => {
    await axios.delete('https://rijhn09.pythonanywhere.com/evento/borrar/' + noteId);
   
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
        <h6 className="h2 text-white d-inline-block mb-0">Eventos Disponibles </h6>
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
                                            {
                     this.state.eventos.map(events =>{
                        return( 
                                            <tr>
                                                
                                                <td>
                                               {events.nombre}
                                                </td> 
                                                <td>{events.organizadores}</td>
                                                <td>{events.fecha}</td>
                                                <td>{events.hora}</td>
                                                <td>{events.lugar}</td>
                                                <td>
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
                                                                    <button onClick={() => this.deleteNote(events.id)} type="submit" class="btn btn-warning" >Eliminar</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                               
                                               
                                               </tr>   
                                                )
                                            })}   
                                            </tbody>
                                         
                                            </table>
                                        </div>
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


export default ListEventos;
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
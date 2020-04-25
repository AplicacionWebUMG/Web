import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';
import '../../node_modules/bootstrap/dist/js/bootstrap';


class ListUsuarios extends Component{

    constructor(...props){
        super(...props)
        this.state={usuarios:[]}
       
    }

    componentDidMount(){
        fetch('https://rijhn09.pythonanywhere.com/usuarios/',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
                }

        .then(response => {return response.json()})
        .then(usuarios => {this.setState({usuarios: usuarios})})
    }
        )
    }
    
render(){
 
    return(
        <div>

            
       
        {/* titulo */}
         <div class="header bg-primary pb-6">
<div class="container-fluid">
<div class="header-body">
  <div class="row align-items-center py-4">
    <div class="col-lg-6 col-7">
      <h6 class="h2 text-white d-inline-block mb-0">USUARIOS</h6>
             </div>
              </div>
               </div>
</div>
</div>

        
            {
                        this.state.usuarios.map(users => {
                            return(
                                <div class="container-fluid mt--6">
                                  <div class="row">
                                      <div class="col">
                                         <div class="card">
                                            <div class="table-responsive">
                                               <div class="card-body">
                                                 <table class="table align-items-center table-flush">
                                                   <thead class="thead-light">
                                                     <tr>
                                                      <th scope="col">Id</th>
                                                         <th scope="col">Evento</th>
                                                         <th scope="col">Organizadores</th>
                                                         <th scope="col">Fecha del evento</th>
                                                         <th scope="col">Lugar del Evento</th>
                                                         <th scope="col">Acciones</th>
                                                         </tr>
                                                    </thead>
                                                    <tbody>
                                                       <tr>
                                                       <th scope="row">
                                                        {users.id}

                                                       </th> 
                                                       <th scope="row">
                                                       {users.first_name}
                                                    </th> 
                                                    
                                                    

                                                <th> {users.username} </th>
                                                <th> {users.email} </th>
                                                <td> 
                                                       <botton class="btn btn-sm btn-warning">Editar</botton>
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
                        })
                    }
        </div>
        
        )
     }
}


export default ListUsuarios;
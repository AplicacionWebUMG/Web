import React, { Component } from 'react'
import axios from 'axios'
//import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

 class Usuarios extends Component {

    state = {
        notes: []
    }
    async componentDidMount() {
        this.getNotes();
    }

    getNotes = async () => {
        const res = await axios.get('https://rijhn09.pythonanywhere.com/usuarios/listar/',{
          headers: {
            'authorization':`Token ${global.SampleVar}`,
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        })
        this.setState({
         notes: res.data
        });
    }

    deleteNote = async (noteId) => {
        await axios.delete('https://rijhn09.pythonanywhere.com/usuarios/eliminar/' + noteId,{
          headers: {
            'authorization':`Token ${global.SampleVar}`,
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        });
        this.getNotes();
    }

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
                <table className="table align-items-center table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col" >Usuario</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Correo</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                     this.state.notes.map(note =>{
                       return(
                    <tr>
                   
                      <th scope="row">
                       <td>{note.username}</td>
                      </th> 
                      <td>{note.first_name}</td>
                      <td>{note.email}</td>
                      
                      <td>
                        {/* <!-- Botón para editar--> */}
                        <Link to={`/actualizar/${note.id}/${ note.first_name }/${ note.last_name }/${ note.username }/${ note.email }`} className="btn btn-primary">
                                    Editar
                         </Link>
                        {/* <!-- Botón para eliminar--> */}               
                        <Link  className="btn btn-danger" onClick={() => this.deleteNote(note.id)}>
                                      Borrar
                         </Link>
                                    
                                
                            
                       
                      </td>
                    </tr>
                       );
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
         
      
        
    )
}
}

export default Usuarios
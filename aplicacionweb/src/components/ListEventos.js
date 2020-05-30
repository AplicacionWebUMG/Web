import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

 class ListEventos extends Component {

    state = {
        notes: []
    }
    async componentDidMount() {
        this.getNotes();
    }

    getNotes = async () => {
        const res = await axios.get('https://rijhn09.pythonanywhere.com/evento/mostrar/',
        {
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
        await axios.delete('https://rijhn09.pythonanywhere.com/evento/borrar/' + noteId,{
            headers: {
                'authorization':`Token ${global.SampleVar}`,
                 'Accept': 'application/json',
                 'Content-Type': 'application/json' 
                 },
        });
        this.getNotes();
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
                      this.state.notes.map(note =>{
                        return( 
                                            <tr>
                                                
                                                <td>
                                               {note.nombre}
                                                </td> 
                                                <td>{note.organizadores}</td>
                                                <td>{note.fecha}</td>
                                                <td>{note.hora}</td>
                                                <td>{note.lugar}</td>
                                                {/*Botones  */}
                                                <center>
                                                <Link to={`/update/${note.id}/${note.nombre}/${note.fecha}/${note.hora}/${note.lugar}/${note.estado}/${note.organizadores}`} className="btn btn-primary">
                                                 Editar  
                                                 </Link>
                                                <Link  className="btn btn-danger" onClick={() => this.deleteNote(note.id)}>
                                                 Borrar
                                                </Link>
                                                 </center>
                                               
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
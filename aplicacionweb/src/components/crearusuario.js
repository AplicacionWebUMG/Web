import React, { Component } from 'react';
import log from '../img/log.png';
import axios from 'axios'
class crearuser extends Component{ 

  state = {
    
    first_name:      '',
    last_name:       '',
    username:        '',
    email:           '',
    password:        '',
    is_superuser:    '',
    editing:       false,
    id:              ''
}
//para ver los estados de los imputs
onSubmit = async (e) => {
    e.preventDefault();
    if (this.state.editing) {
        const updatedNote = {
          
          first_name:  this.state.fecha,
          last_name:   this.state.hora,
          username: this.state.nombre,
          email:  this.state.lugar,
          password: this.state.estado,
          is_superuser: this.state.is_superuser,
        };
        await axios.put('https://rijhn09.pythonanywhere.com/evento/actualizar/' + this.state.id, updatedNote);
    } else {
        //PARTE PARA ASIGNAR LOS COMPONENTESDEL FORMULARI EVENTO
        const newNote = {
            first_name:  this.state.first_name,
            last_name:   this.state.last_name,
            username: this.state.username,
            email:  this.state.email,
            password: this.state.password,
            is_superuser:  this.state.is_superuser,
        };
       await axios.post('https://rijhn09.pythonanywhere.com/usuarios/crear/', newNote);
    }
    this.props.history.push(`/login`)

}

onInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
//metodo para que cambie la fecha del calendario
onChangeDate = date => {
    this.setState({ date });
}
 
render(){
  return (
    <div className="col-md-5 offset-md-3" >
        <div className="card card-body">
           <center> <h4>Crear  Perfil</h4></center>
            <form onSubmit={this.onSubmit}>
                
                {/* primer nombre*/}
                <div className="form-group">
                <input
                        type="text"
                        className="form-control"
                        placeholder="first_name"
                        onChange={this.onInputChange}
                        name="first_name"
                        value={this.state.first_name}
                        required />
                </div>
                {/* segundo nombre*/}
                <div className="form-group">
                <input
                        type="text"
                        className="form-control"
                        placeholder="last_name"
                        onChange={this.onInputChange}
                        name="last_name"
                        value={this.state.last_name}
                        required />
                </div>
                {/* Username */}
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="username"
                        onChange={this.onInputChange}
                        name="username"
                        value={this.state.username}
                        required />
                </div>
                {/* Email */}
                <div className="form-group">
                <input
                        type="email"
                        className="form-control"
                        placeholder="email"
                        onChange={this.onInputChange}
                        name="email"
                        value={this.state.email}
                        required />
                </div>
               
            
                {/* password */}
                <div className="form-group">
                <input
                        type="text"
                        className="form-control"
                        placeholder="password"
                        onChange={this.onInputChange}
                        name="password"
                        value={this.state.password}
                        required />
                </div>
                {/es admininstrador/}
                <div class="form-group">
                           <select 
                            onChange={this.onInputChange}
                            name="is_superuser"
                            value={this.state.is_superuser} 
                            className="form-control">
                                <option value="" disabled selected>Es Administrador</option>
                                <option value="true">si</option>
                                <option value="false">no</option>
                            </select>
                       </div>
  
    

                {/* boton guardar*/}
                <center><button className="btn btn-primary">
                    Crear <i className="material-icons">
                    queue
</i>
                </button></center>
            </form>
          
            
        </div>




        
    </div>
    
)
}
}
export default crearuser
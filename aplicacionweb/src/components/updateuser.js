import React, { Component } from 'react'
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class actualizaruser extends Component {

    state = {
        first_name:        this.props.match.params.primernombre,
        last_name:         this.props.match.params.segundonombre,
        username:          this.props.match.params.nombreusuario,
        email :            this.props.match.params.email,
        password:          '',
    }
   //para ver los estados de los imputs
   onSubmit = async (e) => {
    e.preventDefault();
    if (this.props.match.params.id){
    console.log(this.props.match.params.id)
        //PARTE PARA ASIGNAR LOS COMPONENTESDEL FORMULARI EVENTO
        const newNote = {
            first_name:        this.state.first_name,
            last_name:         this.state.last_name,
            username:          this.state.username,
            email:             this.state.email,
            password:          this.state.password,
        };
        const id = this.props.match.params.id;
       await axios.put('https://rijhn09.pythonanywhere.com/usuarios/'+id+'/',newNote);
    }
    window.location.href = '/';
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

    render() {
        return (
            <div className="col-md-5 offset-md-3" >
                <div className="card card-body">
                    <center><h4>Actualizar Usuario</h4></center>
                    <form onSubmit={this.onSubmit}>
                        {/* Primer nombre */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="nuevo nombre"
                                onChange={this.onInputChange}
                                name="first_name"
                                value={this.state.first_name}
                                required />
                        </div>
                        {/* Segundo Nombre*/}
                        <div className="form-group">
                        <input
                                type="text"
                                className="form-control"
                                placeholder="fecha"
                                onChange={this.onInputChange}
                                name="last_name"
                                value={this.state.last_name}
                                required />
                        </div>
                        {/* username*/}
                        <div className="form-group">
                        <input
                                type="text"
                                className="form-control"
                                placeholder="hora"
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
                                placeholder=" nuevo lugar"
                                onChange={this.onInputChange}
                                name="email"
                                value={this.state.email}
                                required />
                        </div>
                        {/* Password */}
                        <div className="form-group">
                        <input
                                type="text"
                                className="form-control"
                                placeholder="contraseña"
                                onChange={this.onInputChange}
                                name="password"
                                value={this.state.password}
                                required />
                        </div>
                        

                        {/* boton guardar*/}
                        <center><button className="btn btn-primary">
                            Actualizar 
                           
                       
                        </button></center>
                    </form>
                </div>
            </div>
        )
    }
}
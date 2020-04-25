import React, { Component } from 'react'
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class actualizarevento extends Component {

    state = {
        nombre:        this.props.match.params.nombre,
        fecha:         this.props.match.params.fecha,
        hora:          this.props.match.params.hora,
        lugar:         this.props.match.params.lugar,
        estado:        this.props.match.params.estado,
        organizadores: this.props.match.params.organizadores
    }
   //para ver los estados de los imputs
   onSubmit = async (e) => {
    e.preventDefault();
    if (this.props.match.params.id){
    console.log(this.props.match.params.id)
        //PARTE PARA ASIGNAR LOS COMPONENTESDEL FORMULARI EVENTO
        const newNote = {
            nombre:        this.state.nombre,
            fecha:         this.state.fecha,
            hora:          this.state.hora,
            lugar:         this.state.lugar,
            estado:        this.state.estado,
            organizadores: this.state.organizadores

        };
       await axios.put('https://rijhn09.pythonanywhere.com/evento/actualizar/'+ this.props.match.params.id, newNote);
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
                    <center><h4>Actualizar Evento</h4></center>
                    <form onSubmit={this.onSubmit}>
                        {/* nombre */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="nuevo nombre"
                                onChange={this.onInputChange}
                                name="nombre"
                                value={this.state.nombre}
                                required />
                        </div>
                        {/* fecha*/}
                        <div className="form-group">
                        <input
                                type="date"
                                className="form-control"
                                placeholder="fecha"
                                onChange={this.onInputChange}
                                name="fecha"
                                value={this.state.fecha}
                                required />
                        </div>
                        {/* Hora*/}
                        <div className="form-group">
                        <input
                                type="time"
                                className="form-control"
                                placeholder="hora"
                                onChange={this.onInputChange}
                                name="hora"
                                value={this.state.hora}
                                required />
                        </div>
                        {/* lugar */}
                        <div className="form-group">
                        <input
                                type="text"
                                className="form-control"
                                placeholder=" nuevo lugar"
                                onChange={this.onInputChange}
                                name="lugar"
                                value={this.state.lugar}
                                required />
                        </div>
                        {/* Estado */}
                        <div class="form-group">
                           <select 
                            onChange={this.onInputChange}
                            name="estado"
                            value={this.state.estado} 
                            className="form-control">
                                <option value="" disabled selected>Estado</option>
                                <option value="1">Activo</option>
                                <option value="3">Inactivo</option>
                            </select>
                        </div>
                        {/* Organizadores */}
                        <div className="form-group">
                        <input
                                type="text"
                                className="form-control"
                                onChange={this.onInputChange}
                                name="organizadores"
                                value={this.state.organizadores}
                                required />
                        </div>

                        {/* boton guardar*/}
                        <center><button className="btn btn-primary">
                            Guardar <i className="material-icons">
                            refresh
                        </i>
                        </button></center>
                    </form>
                </div>
            </div>
        )
    }
}
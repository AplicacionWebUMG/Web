import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Bienvenida extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
          nombre: this.props.match.params.nombre,
      }
      const { match: { params } } = this.props;
        console.log(params.nombre)
     
  }
        
    render() {
        return (
            
            <div className="col-md-4 offset-md-3" >
            <div className="card card-body">
           <center> <h1>Bienvenido !!!</h1></center>
           <br/>
           <h3>{this.props.match.params.nombre}</h3>
           <h4>Se ha registrado correctamente</h4>
           <center><Link to={`/home/${this.props.match.params.token}`} className="btn btn-primary">
            Aceptar 
          </Link></center> 
            </div>
            </div>
        )
    }
}
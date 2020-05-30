import React, {Component} from 'react';
import Places from './Places';
import MapContainer from './GoogleMaps';
import ListEventos from './ListEventos';
import SimpleMap from './SimpleMap';
import Map from './Map';
import Localidades from './Localidades';

class CrearEventos extends Component{
    constructor(...props) {
        super(...props);

        this.onSubmit = this.onSubmit.bind (this); 
       

            this.state = {
          
                nombre: "",
                 fecha: "",
                hora: "",
                lugar: "",
                // tipo: 0,
                // asientos: "",
                 estado: 0,
                organizadores: "",
                // costo: 0
    }
  
}

datoLugar = (lugar) => {
  
}


render(){
    return(
        
        <div>
            <div className="header bg-primary pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                    <div className="row align-items-center py-4">
                        <div className="col-lg-6 col-7">
                        <h6 className="h2 text-white d-inline-block mb-0">Agregar Evento</h6>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


            <div class="container-fluid mt--6">
      <div className="row">
        <div className="col">
          <div className="card">
            
            <div className="table-responsive">
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this)}>
                  <h6 className="heading-small text-muted mb-4">Informacion del Evento</h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label" htmlFor="nombre-evento">Nombre del evento</label>
                          <input type="text" id="evento" className="form-control" placeholder="Nombre del evento" value={this.state.nombre} onChange={this.NombreInputChange.bind(this)}/>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label" htmlFor="input-cover">Cover</label>
                          <input type="file" id="afiche"  className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label className="form-control-label" htmlFor="input-fecha">Fecha</label>
                          <input type="date" id="fecha" className="form-control"  value={this.state.fecha} onChange={this.FechaInputChange.bind(this)}/>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="form-group">
                          <label className="form-control-label" htmlFor="input-hora">Hora</label>
                          <input type="time" id="hora" className="form-control"  value={this.state.hora} onChange={this.HoraInputChange.bind(this)}/>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="form-group">
                          <label className="form-control-label" htmlFor="input-evento">Estado del evento</label>
                          <select className="form-control" id="estadoEvento" value={this.state.estado} onChange={this.EstadoInputChange.bind(this)} >
                            <option value={1} >Activo</option>
                            <option value={0} >Inactivo</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="form-control-label" htmlFor="input-organizadores">Organizadores</label>
                          <input id="organizadores" className="form-control" placeholder="Promusa Eventos" type="text" value={this.state.organizadores} onChange={this.OrganizadoresInputChange.bind(this)}/>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="form-control-label" htmlFor="input-lugar">Lugar</label>
                        <input id="lugar" className="form-control" placeholder="Inserte lugar" type="text" value={this.state.lugar} onChange={this.LugarInputChange.bind(this)}/>
                      <Places datoLugar={this.datoLugar} />
                        
                      </div>
                    </div> 
                  
                    {/* <!--- Implementacion de google maps--> */}
                    <div className="row">
                      <div className="col">
                        <div className="card border-0">
                          <div id="map-default" className="map-canvas"  ><MapContainer/></div>
                        </div>
                      </div>
                    </div>
                    </div>
                    
                    <div className="col text-right">
                    <button type="submit" className="btn btn-lg btn-warning">Guardar Evento</button>
                    </div>
                   
                </form>
              <Localidades/>
                  
              
              </div>
            </div>
          </div>
        </div>
     </div>
                <footer className="footer pt-0">
                </footer>
            </div>
        </div>
    )
}


NombreInputChange(e){
    this.setState({
        nombre: e.target.value
    })
}
 LugarInputChange(e){
    this.setState({
         lugar: e.target.value
    })
   }
 FechaInputChange(e){
     this.setState({
         fecha: e.target.value
     })
 }
 HoraInputChange(e){
    this.setState({
        hora: e.target.value
    })
}
 EstadoInputChange(e){
     this.setState({
         estado: e.target.value
     })
 }
// TipoInputChange(e){
//     this.setState({
//         tipo: e.target.value
//     })
// }
// CostoInputChange(e){
//     this.setState({
//         costo: e.target.value
//     })
// }

OrganizadoresInputChange(e){
    this.setState({
        organizadores: e.target.value
    })
}
generarObjeto(){
    const objeto ={
        nombre:this.state.nombre,
        lugar:this.state.lugar,
        fecha: this.state.fecha,
        hora: this.state.hora,
        estado: this.state.estado,
       // costo: this.state.costo,
        //tipo: this.state.tipo,
        organizadores: this.state.organizadores
    }
    return JSON.stringify(objeto);
}
onSubmit (e) {
  fetch ('https://rijhn09.pythonanywhere.com/evento/crear', {
      method: 'POST',
      headers: {
         'authorization':`Token ${global.SampleVar}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
          },
      body: this.generarObjeto()
  })
  .then(res => res.json())
  .then(res => {
    if (res.success) {
      alert('Creado.')
      }
  });
  
  this.props.history.push(`/vereventos`)
}

}
export default CrearEventos
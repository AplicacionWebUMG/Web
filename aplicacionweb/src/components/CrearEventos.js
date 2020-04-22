import React, {Component} from 'react';
import Places from './Places';
import MapContainer from './GoogleMaps';


class CrearEventos extends Component{
    constructor(...props) {
        super(...props);

        this.onSubmit = this.onSubmit.bind (this); 
        this.fileInput =React.createRef();

            this.state = {
                afiche: null,
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



render(){
    return(
        
        <div>
            <div class="header bg-primary pb-6">
                <div class="container-fluid">
                    <div class="header-body">
                    <div class="row align-items-center py-4">
                        <div class="col-lg-6 col-7">
                        <h6 class="h2 text-white d-inline-block mb-0">Agregar evento</h6>
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
                <form onSubmit={this.onSubmit.bind(this)}>
                  <h6 class="heading-small text-muted mb-4">Informacion del evento</h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" htmlFor="nombre-evento">Nombre del evento</label>
                          <input type="text" id="input-evento" class="form-control" placeholder="Nombre del evento" value={this.state.nombre} onChange={this.NombreInputChange.bind(this)}/>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" htmlFor="input-cover">Cover</label>
                          <input type="file" id="afiche"  class="form-control" ref={this.fileInput}  />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" htmlFor="input-fecha">Fecha</label>
                          <input type="date" id="input-fecha" className="form-control"  value={this.state.fecha} onChange={this.FechaInputChange.bind(this)}/>
                        </div>
                      </div>
                      <div class="col-lg-2">
                        <div class="form-group">
                          <label class="form-control-label" htmlFor="input-hora">Hora</label>
                          <input type="time" id="input-hora" className="form-control"  value={this.state.hora} onChange={this.HoraInputChange.bind(this)}/>
                        </div>
                      </div>
                      <div class="col-lg-2">
                        <div class="form-group">
                          <label class="form-control-label" htmlFor="input-evento">Estado del evento</label>
                          <select className="form-control" id="estadoEvento" value={this.state.estado} onChange={this.EstadoInputChange.bind(this)} >
                            <option value={0} >Activo</option>
                            <option value={1} >Inactivo</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="form-control-label" htmlFor="input-organizadores">Organizadores</label>
                          <input id="input-organizadores" className="form-control" placeholder="Promusa Eventos" type="text" value={this.state.organizadores} onChange={this.OrganizadoresInputChange.bind(this)}/>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label class="form-control-label" htmlFor="input-lugar">Lugar</label>
                        <input type="text" id="input-lugar" className="form-control" placeholder="Ingrese la direccion" value={this.state.lugar} onChange={this.LugarInputChange.bind(this)}/>
                      </div>
                    </div> 
                  
                    {/* <!--- Implementacion de google maps--> */}
                    <div class="row">
                      <div class="col">
                        <div class="card border-0">
                          <div id="map-default" class="map-canvas"  > <MapContainer></MapContainer></div>
                        </div>
                      </div>
                    </div>
                    <div class="col text-right">
                     
                    </div>
                    <button type="submit" className="btn btn-lg btn-warning">Guardar Evento</button>
                </form>
 
                  <hr class="my-4" />
                <form>
                  <div class="card-body">
                  <h6 class="heading-small text-muted mb-4">Informacion del evento</h6>
                  <div class="pl-lg-4">
               
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label class="form-control-label" for="label-evento">Evento</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                            <option value="">San Marcos Evento</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label class="form-control-label"  for="label-localidad ">Localidad</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                            <option>Oro</option>
                            <option>Platino</option>
                            <option>General</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label class="form-control-label" for="input-asientos">Asientos</label>
                          <input type="text" id="input-asientos" class="form-control" required />
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="form-group">
                          <label class="form-control-label" for="input-costo">Costo</label>
                          <input type="number" id="input-costo" class="form-control" placeholder="Q."/>
                        </div>
                      </div>
                    </div>
                </div>
                  </div>
                  <button type="submit" className="btn btn-lg btn-warning">Guardar localidad</button> 
                </form>
                <div class="col text-right">
                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
     
                <footer className="footer pt-0">
                </footer>
            </div>
        </div>
        </div>
    )
}
fileInput(e){
    this.setState({
        afiche: e.target.value
   }) 
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
        afiche:this.state.afiche,
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
    
    alert(
        `Selected file - ${this.fileInput.current.files[0].name}`
      );
}

}
export default CrearEventos
import React, {Component} from 'react';

class CrearEventos extends Component{
    constructor(...props) {
        super(...props);

            this.state = {
                nombre: "",
                fecha: "",
                hora: "",
                lugar: "",
                tipo: 0,
                asientos: "",
                estado: 0,
                organizadores: "",
                costo: 0
    }
}
render(){
    return(
        <div>
            <form onSubmit={this.onSubmit.bind(this)}>

            <div class="container-fluid mt--6">
                <div class="row">
                    <div class="col">
                         <div class="card">
            
                             <div class="table-responsive">
                                 <div class="card-body">   
                                    <form>
                                        <h6 class="heading-small text-muted mb-4">Informacion del evento</h6>
                                        
                                            <div class="pl-lg-4">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <label class="form-control-label" for="nombre-evento">Nombre del evento</label>
                                                            <input type="text" id="nombre" class="form-control" placeholder="Nombre del evento" value={this.state.nombre} onChange={this.NombreInputChange.bind(this)} />  

                                                        </div>
                                                        {/* <div class="col-lg-6">
                                                            <div class="form-group">
                                                                <label class="form-control-label" for="input-fecha">fecha</label>
                                                                <input type="datetime-local" id="fecha" class="form-control"  value={this.state.fecha} onChange={this.FechaInputChange.bind(this)}/>
                                                            </div>
                                                        </div> */}
                                                        <div class="col-lg-4">
                                                            <div class="form-group">
                                                                <label class="form-control-label" for="input-lugar">Lugar</label>
                                                                <input type="text" id="lugar" class="form-control" placeholder="Cayala-Ciudad de Guatemala" value={this.state.lugar} onChange={this.LugarInputChange.bind(this)}/>
                                                            </div>
                                                        </div>

                                                        {/* <div class="col-lg-4">
                                                            <div class="form-group">
                                                                <label class="form-control-label" for="input-date">Estado del evento</label>
                                                                <select className="form-control" id="estado" value={this.state.estado} onChange={this.EstadoInputChange.bind(this)} >
                                                                    <option value={1} >asiento libre</option>
                                                                    <option value={3} >asiento ocupado</option>
                                                                </select>
                                                            </div>
                                                         </div>     */}
                                                    </div>
                                                </div>
                                            </div>
                                            <hr class="my-4" />
                                            <h6 class="heading-small text-muted mb-4">Localidadees</h6>
                                            <div class="row">
                                                {/* <div class="col-lg-4">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="input-tipo">Tipo</label>
                                                        <select className="form-control" id="tipo" value={this.state.tipo} onChange={this.TipoInputChange.bind(this)} >
                                                            <option value={1} >1</option>
                                                            <option value={3} >3</option>
                                                            <option value={5} >5</option>
                                                        </select>
                                                    </div>
                                                </div> */}
                                                {/* <div class="col-lg-4">
                                                    <div class="form-group">
                                                        <label class="form-control-label" for="input-costo">Costo</label>
                                                        <input type="number" id="costo" class="form-control" placeholder="Q."  value={this.state.costo} onChange={this.CostoInputChange.bind(this)}/>
                                                    </div>
                                                </div> */}
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label class="form-control-label" for="input-organizadores">Organizadores</label>
                                                            <input id="organizadores" class="form-control" placeholder="Promusa Eventos" type="text" value={this.state.Organizadores} onChange={this.OrganizadoresInputChange.bind(this)}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </form>
                  
                                 </div>
        
                             </div>
                        </div>
                    </div>
                </div>

                <footer class="footer pt-0">
                </footer>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
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
// FechaInputChange(e){
//     this.setState({
//         fecha: e.target.value
//     })
// }
// EstadoInputChange(e){
//     this.setState({
//         estado: e.target.value
//     })
// }
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
        //fecha: this.state.fecha,
        //estado: this.state.estado,
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
    e.preventDefault();
}

}
export default CrearEventos
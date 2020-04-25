import React, { Component } from 'react';


class Localidades extends Component{

    constructor(...props) {
        super(...props);

        this.onSubmit = this.onSubmit.bind (this); 
      
            this.state = {
                localidad:"",
                asientos:[{estado:1}],
                costo:0,
    }
  
}

render(){
    return(
        <div >
         <form onSubmit={this.onSubmit.bind(this)}>
        
        <hr class="my-4" />
       
        <div class="card-body">
        <h6 class="heading-small text-muted mb-4">Informacion de las localidades</h6>
        <div class="pl-lg-4">
       
        <div class="row">
            <div class="col-lg-3">
            <div class="form-group">
                <label class="form-control-label" htmlFor="label-evento">Evento</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <option value="">San Marcos Evento</option>
                </select>
            </div>
            </div>
            <div class="col-lg-3">
            <div class="form-group">
                <label class="form-control-label"  htmlFor="label-localidad ">Localidad</label>
                <select class="form-control" id="exampleFormControlSelect2"  value={this.state.localidad} onChange={this.LocalidadInputChange.bind(this)}>
                <option value={1}>General</option>               
                <option value={3}>Oro</option>
                <option value={5}>Platino</option>
               
                </select>
            </div>
            </div>
            <div class="col-lg-3">
            <div class="form-group">
                <label class="form-control-label" htmlFor="input-asientos">Asientos</label>
                <input type="text" id="input-asientos" class="form-control" placeholder="Asientos"  value={this.state.asientos.estado} onChange={this.AsientosInputChange.bind(this)}/>
            </div>
            </div>
            <div class="col-lg-3">
            <div class="form-group">
                <label class="form-control-label" htmlFor="input-costo">Costo</label>
                <input type="number" id="input-costo" class="form-control" placeholder="Q."  value={this.state.costo} onChange={this.CostoInputChange.bind(this)} />
            </div>
            </div>
      </div>
      </div>
      </div>
         <div className="col text-right">
          <button type="submit" className="btn btn-lg btn-warning">Guardar Localidad</button>
         </div>
        </form>
        </div>
    )
}


LocalidadInputChange(e){
    this.setState({
        localidad: e.target.value
    })
}
AsientosInputChange(e){
    this.setState({
        asientos:{
            estado: e.target.value
        }
    })
}
CostoInputChange(e){
    this.setState({
        costo: e.target.value
    })
}

generarObjeto(){
    const objeto ={
        localidad:this.state.localidad,
        costo:this.state.costo,
        asientos:[
            this.state.asientos.estado
        ]
    }
    return JSON.stringify(objeto);
}

onSubmit (e) {
    fetch ('https://rijhn09.pythonanywhere.com/localidad', {
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
    
  
}

}
export default Localidades
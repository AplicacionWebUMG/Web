import React, {Component} from 'react';

class EliminarEvento extends Component {
    constructor(...props) {
        super(...props);

        this.state = {
            id: "",
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit.bind(this)} >
                    <div className="form-group">
                        <label htmlFor="nombre">Número Correlativo</label>
                        <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" value={this.state.id} onChange={this.IDInputChange.bind(this)} />
                        <small id="emailHelp" className="form-text text-muted">Número ID del evento a borrar.</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        )
    }

    IDInputChange(e){
        this.setState({
            id: e.target.value
        })
    }

    onSubmit (e) {
        fetch (`https://rijhn09.pythonanywhere.com/evento/borrar/${this.state.id}`, {
            method: 'DELETE',
            headers: {
              
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
                },
        })
        .then(res => {
          if (res.success) { // exito
            alert('Eliminado.')
            }
        });
        
    }
}

export default EliminarEvento;
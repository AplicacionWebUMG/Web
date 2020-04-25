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
                {/* <!-- Botón para eliminar--> */}
                
            </div>
        )
    }

 

    onSubmit (id) {
        fetch (`https://rijhn09.pythonanywhere.com/evento/borrar/${id}`, {
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
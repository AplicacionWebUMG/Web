import React, { Component } from 'react';
//import ListEventos from './ListEventos';
import CrearEventos from'./CrearEventos';
class Eventos extends Component{

render(){
    return(
        <div>
            {/*<ListEventos ></ListEventos>*/}
            
            <CrearEventos></CrearEventos>
        </div>

    )
}
}

export default Eventos
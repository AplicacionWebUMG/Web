import React, { Component } from 'react';

//import ListEventos from './ListEventos';
import CrearEventos from'./CrearEventos';
import ListEventos from './ListEventos';

class Eventos extends Component{

render(){
    return(
        <div>

            {/*<ListEventos ></ListEventos>*/}
            
            <CrearEventos></CrearEventos>

            <ListEventos ></ListEventos>

        </div>

    )
}
}

export default Eventos
import React, { Component } from 'react';
import Usuarios from '../ficheros/usuarios.json';

class ListUsuarios extends Component{

    constructor(...props){
        super(...props)
        this.state={usuarios:[]}
       
    }

    
    
render(){
    
    return(

        <div>
            <div><h1>Usuarios</h1></div>
          <div>
          {
              Usuarios.usuarios.map(item =>{
              return <h1>{item.username}</h1>
              })
              
          }
          </div>
        </div>
        
    )
}
}

export default ListUsuarios
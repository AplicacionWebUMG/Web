import React, { Component } from 'react';


class Usuarios extends Component{

    constructor(...props){
        super(...props)
        this.state={usuarios:[]}
       
    }

    componentDidMount(){
        fetch('./ficheros/usuarios.json')
        .then(response => {return response.json()})
        .then(usuarios => {this.setState({usuarios: usuarios})})
        
    }
    
render(){
    
    return(

        <div>
            <div><h1>Usuarios</h1></div>
            {
                 this.state.usuarios.map(item =>{
                            return(
                                <div>
                                    <table>
                                        <tbody> 
                                            <tr>
                                                <th> {item.id}  </th>
                                                <th> {item.username} </th>
                                                <th> {item.email} </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )
                        })
                    }
        </div>
        
    )
}
}

export default Usuarios
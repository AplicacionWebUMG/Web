import React, { Component } from 'react';


class ListUsuarios extends Component{

    constructor(...props){
        super(...props)
        this.state={usuarios:[]}
       
    }

    componentDidMount(){
        fetch('./ficheros/usuarios.json')
        .then(response => {return response.json()})
        .then(usuarios => {this.setState({usuarios: usuarios.usuarios})})
    }
    
render(){
    
    return(

        <div>
            <h1>Usuarios</h1>
            {
                        this.state.usuarios.map(users => {
                            return(
                                <div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th> {users.id}. </th>
                                                <th> {users.username} </th>
                                                <th> {users.email} </th>
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

export default ListUsuarios
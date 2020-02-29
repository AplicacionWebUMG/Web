import React, { Component } from 'react';


class ListEventos extends Component{
    
    constructor(...props){
        super(...props)
        this.state={eventos:[]}
    }
    componentDidMount(){
        fetch('./ficheros/Eventos.json')
        .then(response=>{return response.json()})
        .then(eventos =>{this.setState({eventos: eventos.eventos})})
         
    }
    render(){
        return(
            <div>
                <h1> Eventos</h1>
                 {
                     this.state.eventos.map(events =>{
                        return(
                            <div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th> {events.id}. </th>
                                                <th> {events.nombre} </th>
                                                <th> {events.afiche} </th>
                                                <th> {events.fecha} </th>
                                                <th> {events.hora} </th>
                                                <th> {events.lugar} </th>
                                                <th> {events.disponible} </th>
                                               


                                              
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

export default ListEventos
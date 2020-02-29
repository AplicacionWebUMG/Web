import React, { Component } from 'react';


class ListPagos extends Component{

    constructor(...props){
        super(...props)
        this.state={Pagos:[]}
       
    }

    componentDidMount(){
        fetch('./ficheros/pagos.json')
        .then(response => {return response.json()})
        .then(pagos => {this.setState({pagos: pagos.pagos})})
    }

    render(){
    
        return(
    
            <div>
                <h1>Pagos</h1>
                {
                            this.state.pagos.map(pay => {
                                return(
                                    <div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th> {pay.id}. </th>
                                                    <th> {pay.tipo} </th>
                                                    <th> {pay.total} </th>
                                                    <th> {pay.cancelar}. </th>
                                                    <th> {pay.pagado} </th>
                                                    <th> {pay.usuario} </th>
                                                 
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
    
    export default ListPagos


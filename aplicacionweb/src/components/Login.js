import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    constructor()
    {
        super();
        this.state={
            username: null,
            password: null,
            login: false,
            store: null
        }
    }
     login()
    {
         fetch('https://rijhn09.pythonanywhere.com/login/',{
           method:"POST",
           body:JSON.stringify(this.state),
           headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        }).then((response)=>{
            response.json().then((result)=>{
                console.warn("result",result);
                localStorage.setItem('login',JSON.stringify({
                    login:true,
                }))
                this.setState({
                    token:result.token
                })
                
                //const autorizacion=result.token
                //alert(autorizacion)
                if (this.state.token) {
                    //alert('Bienvenido: '+this.state.username);   
                    //this.props.navigation.navigate('Eventos',{nombre:this.state.pokemon})
                
                    this.props.history.push(`/mensaje/${this.state.username}/${this.state.token}`)
                   
                 }
                 else
                 {
                     alert("Usuario no existe",);
                 }
            })
        })
        
         
        
        
        
    }
    
    render() {
        return (
            
            <div className="col-md-4 offset-md-3" >
        <div className="card card-body">
           <center> <h4>Login</h4></center>
           
                <center><div className="form-group">
                    <input type="text" placeholder="Username" onChange={(event)=>{this.setState({username:event.target.value})}} />
                </div></center>    
                <center><div className="form-group">
                    <input type="text" placeholder="Password" onChange={(event)=>{this.setState({password:event.target.value})}} />
                </div></center> 
                    
                    
                    <center>
                        <Link  className="btn btn-danger" onClick={()=>{this.login()}}>
                        Logearse
                        </Link>
                    </center>
                    <center>
                        <br/>
                        <Link to={`/crearusuario`}>
                        Sing Up 
                        </Link>
                    </center>
            </div>
            </div>
        )
    }
}
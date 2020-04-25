import React, { Component } from 'react';
import Map2 from './SimpleMap';

class Map extends Component{
    constructor(...props) {
        super(...props);


       

            this.state = {
          
    
                lugar: "",
                
    }
  
}
datoLugar = (lugar) => {
    this.setState({
      lugar
    })
  }
render(){
    return(
        <div >
         
        <Map2 datoLugar={this.datoLugar}/>
        <p>{this.state.lugar}</p>
        </div>
    )
}
}
export default Map
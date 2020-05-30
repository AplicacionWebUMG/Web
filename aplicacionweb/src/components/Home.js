import React, { Component } from 'react';
import StaticSite from './Router'
import { Link } from 'react-router-dom'
class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
        Token: this.props.match.params.token,
    }
    const { match: { params } } = this.props;
  console.log(params.token)
}
componentDidMount(){
  var token =this.props.match.params.token;
  var token=JSON.stringify(token)
  let Token=JSON.parse(token)
  global.SampleVar=Token
  console.log(Token)
}
render(){
    return(
        <div >
          <div className="header">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="./assets/img/media/uno.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./assets/img/media/dos.png" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="./assets/img/media/trers.png" alt="Third slide"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                
              </a>
            </div>
          </div>
        </div>

    )
}
}
export default Home
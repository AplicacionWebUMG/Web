import React, { Component } from 'react';


class Login extends Component{ 

    constructor(...props){
      super(...props)
      
    }
 
render(){
    return(
        <div>
           
            <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
                <img className="mb-4" src="./img/log.png" alt="logo" width="400" height="400"/>
              <form className="form-signin">
                <div className="form-label-group">
                  <input type="text" class="form-control" placeholder="Usuario" required autofocus/>
                </div>
  
                <div className="form-label-group">
                  <input type="password" class="form-control" placeholder="Password" required/>

                </div>
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Ingresar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>

    )
}
}
export default Login
import React from 'react';
import Home from './Home';
import Usuarios from './Usuarios';
import Eventos from './Eventos';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

  const StaticSite = () => (
      <Router>
       <div>
       <h1>Events</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/usuarios">Usuarios</Link>
                </li>
                <li>
                    <Link to="/eventos">Eventos</Link>
                </li>
            </ul>
        </nav>
        <Route path="/home" component={Home} />
        <Route path="/usuarios" component={Usuarios} />
        <Route path="/eventos" component={Eventos} />
           </div>`
      </Router>
      
  )


  export default StaticSite
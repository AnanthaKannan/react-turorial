import React, { useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import {routes} from './router'
import { RouteActive } from './hooksComponent/RouteActive';
import { ErrorPg } from './pages/ErrorPg';

function App() {

return(
  <Router>
      <div className="container">
        <div className="d-flex flex-wrap">
           {
            routes.map(route => <span className="p-3"><Link to={route.PATH}>{route.PATH}</Link></span>)
          }

            {/* <RouteActive 
              activeOnlyWhenExact={true}
              to="/"
              label="/" /> */}
          {/* {
            routes.map((route) =>{
              return(
                <RouteActive 
                activeOnlyWhenExact = {true}
                to={route.PATH}
                label={route.PATH} />
              )
            })
          } */}
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/websocket">Dashboard</Link>
          </li> */}
        </div>

        <hr />

        <Switch>

        {/* <NavLink to="/Form">About</NavLink> */}

        {
          routes.map((route) => {
             return <Route path={route.PATH} exact >
                  { route.COMPONENT }
              </Route>
          })
        }
       
        <Route path="*">
          <ErrorPg />
          </Route>

          {/* <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </div>
    </Router>
)
}

export default App;

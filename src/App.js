import React, { useReducer, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import {routes} from './router'
import Chk from './Comp/Chk';
import { initalState, reducer, CountContext } from './hook/BasicContext';

function App() {

  const [count, dispatch] = useReducer(reducer ,initalState);

return(
  <Router>
  
      <div className="container-fluid">
        <div className="d-flex">
        {/* <div className="border-right pr-3 mr-3">
          {
            routes.map(route => <div className=""><Link to={route.PATH}>{route.PATH}</Link></div>)
          }
        </div> */}

        <br />
        <div>
        <CountContext.Provider value={{countState:count, countDispatch: dispatch}}>
        <Switch>

        {/* <NavLink to="/Form">About</NavLink> */}

        {
          routes.map((route) => {
             return <Route key={route.PATH} path={route.PATH} >
                  { route.COMPONENT }
              </Route>
          })
        }
       
        {/* <Route path="*">
          <ErrorPg />
          </Route> */}

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
        </CountContext.Provider> 
        </div>
      </div>
      </div>
    </Router>
)
}

export default App;

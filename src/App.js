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
        <div className='row'>
        <div className="col-md-1 border-right p-0 bg-dark">
          {
            routes.map(route => <div className=""><Link to={route.PATH}>{route.PATH}</Link></div>)
          }
        </div>

        <br />
        <div className='col-md-11 p-0'>
        <CountContext.Provider value={{countState:count, countDispatch: dispatch}}>
        <Switch>


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

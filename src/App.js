import React, { useReducer, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {routes} from './router'

function App() {

  const initalState = 0;
  const [count, dispatch] = useReducer((state, action)=>{
      switch (action) {
          case 'inc':return state + 1;
          case 'dec':return state - 1;
          case 'reset': return initalState;
          default: return state;
      }
  }, initalState);

return(
  <Router>
      <div className="container">
        <div className="d-flex flex-wrap">
          {/* {
            routes.map(route => <span className="p-3"><Link to={route.PATH}>{route.PATH}</Link></span>)
          } */}
        </div>

        <hr />

        <Switch>
        {
          routes.map((route) => {
             return <Route key={route.PATH} path={route.PATH} >
                  { route.COMPONENT }
              </Route>
          })
        }
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

import React from 'react'

export const UserContext = React.createContext();
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;


// to create global state
export const CountContext = React.createContext();
export const initalState = 0;
export  const reducer = (state, action)=>{
      switch (action) {
          case 'inc':return state + 1;
          case 'dec':return state - 1;
          case 'reset': return initalState;
          default: return state;
      }
  };
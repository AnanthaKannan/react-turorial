import React, { useReducer } from 'react';
import './App.css';
import Websoket from './websoket/websoket';
import ReplaceTxt from './replace/ReplaceTxt';
// import ClassClick from './component/ClassClick';
// import FunctionClick from './component/FunctionClick';
// import EventBinding from './component/EventBinding';
// import ParentComponent from './component/ParentComponent';
// import ConditionalRendering from './component/ConditionalRendering';
// import ListRendering from './component/ListRendering';
// import Styling from './styling/Styling';
// import Form from './component/Form';
// import ConditionalyRun from './hooksComponent/ConditionalyRun';
// import MouseMove from './hooksComponent/MouseMove';
// import ConponentUnmount from './hooksComponent/ConponentUnmount';

// import HookCounter from './hooksComponent/HookCounter';
// import HookObject from './hooksComponent/HookObject';
// import HookArray from './hooksComponent/HookArray';
// import FetchData from './hooksComponent/FetchData';
// import FetchDataButton from './hooksComponent/FetchDataButton';
// import Context from './hooksComponent/context/Context';
// import Reducer from './hooksComponent/Reducer';
// import ReducerTwo from './hooksComponent/ReducerTwo';
// import GlobalState from './hooksComponent/globalState/GlobalState';
// import GlobalStateA from './hooksComponent/globalState/GlobalStateA';
// import GlobalStateB from './hooksComponent/globalState/GlobalStateB';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

function App() {

  const initalState = 0;
  const [count, dispatch] = useReducer((state, action)=>{
      switch (action) {
          case 'inc':return state + 1;
          case 'dec':return state - 1;
          case 'reset': return initalState;
          default: return state;
      }
  }, initalState )

  return (
    <div className="App" >
    <ReplaceTxt />
    {/* <Websoket /> */}
    {/* <ConponentUnmount /> */}
    {/* <MouseMove /> */}
    {/* <ConditionalyRun /> */}
      {/* <Form /> */}
        {/* <Styling /> */}
        {/* <ListRendering /> */}
        {/* <ConditionalRendering /> */}
        {/* <ParentComponent /> */}
        {/* <ClassClick/> */}
         {/* <FunctionClick /> */}
         {/* <EventBinding /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterThree /> */}

      {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }} >
    <GlobalState />
    <GlobalStateA />
    <GlobalStateB />
    </CountContext.Provider> */}

      {/* <UserContext.Provider value={'kannan'} age={24}>
          <ChannelContext.Provider value={'rapid'} >
          <Context />
          </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <Reducer /> */}
      {/* <ReducerTwo /> */}

      {/* <FetchDataButton /> */}
      {/* <FetchData /> */}
      {/* <HookArray /> */}
      {/* <HookCounter />
      <HookObject /> */}
        {/* <Styling />
        <ListRendering />
        <ConditionalRendering />
        <ParentComponent />
        <ClassClick/>
         <FunctionClick />
         <EventBinding /> */}
    </div>
  );
}

export default App;

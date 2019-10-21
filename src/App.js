import React from 'react';
import './App.css';
import ClassClick from './component/ClassClick';
import FunctionClick from './component/FunctionClick';
import EventBinding from './component/EventBinding';
import ParentComponent from './component/ParentComponent';
import ConditionalRendering from './component/ConditionalRendering';
import ListRendering from './component/ListRendering';
import Styling from './styling/Styling';
import Form from './component/Form';
import ConditionalyRun from './hooksComponent/ConditionalyRun';
import MouseMove from './hooksComponent/MouseMove';
import ConponentUnmount from './hooksComponent/ConponentUnmount';

import HookCounter from './hooksComponent/HookCounter';
import HookObject from './hooksComponent/HookObject';
import HookArray from './hooksComponent/HookArray';
import FetchData from './hooksComponent/FetchData';
import FetchDataButton from './hooksComponent/FetchDataButton';
import Context from './hooksComponent/context/Context';
import Reducer from './hooksComponent/Reducer';
import ReducerTwo from './hooksComponent/ReducerTwo';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App" >
    <ConponentUnmount />
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

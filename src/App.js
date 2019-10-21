import React from 'react';
import './App.css';
import ClassClick from './component/ClassClick';
import FunctionClick from './component/FunctionClick';
import EventBinding from './component/EventBinding';
import ParentComponent from './component/ParentComponent';
import ConditionalRendering from './component/ConditionalRendering';
import ListRendering from './component/ListRendering';
import Styling from './styling/Styling';
import HookCounter from './hooksComponent/HookCounter';
import HookObject from './hooksComponent/HookObject';
import HookArray from './hooksComponent/HookArray';

function App() {
  return (
    <div className="App" >
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

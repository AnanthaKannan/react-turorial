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
import HookCounterThree from './hooksComponent/HookCounterThree';

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

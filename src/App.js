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
import ConditionalyRun from './hooks/ConditionalyRun';
import MouseMove from './hooks/MouseMove';
import ConponentUnmount from './hooks/ConponentUnmount';


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
    </div>
  );
}

export default App;

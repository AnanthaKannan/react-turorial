import React from 'react'
import Websoket from "./websoket/websoket";
import MouseMove from "./hooksComponent/MouseMove";
import ConditionalyRun from "./hooksComponent/ConditionalyRun";
import Form from './component/Form';
import Styling from './styling/Styling';
import ListRendering from './component/ListRendering';
import ConditionalRendering from './component/ConditionalRendering';
import ParentComponent from './component/ParentComponent';
import ClassClick from './component/ClassClick';
import FunctionClick from './component/FunctionClick';
import EventBinding from './component/EventBinding';
import HookCounter from './hooksComponent/HookCounter';
import Reducer from './hooksComponent/Reducer';
import ReducerTwo from './hooksComponent/ReducerTwo';
import FetchDataButton from './hooksComponent/FetchDataButton';
import FetchData from './hooksComponent/FetchData';
import HookArray from './hooksComponent/HookArray';
import HookObject from './hooksComponent/HookObject';

export const routes = [
    {
    COMPONENT: <Websoket />,
    PATH:'/Websoket'
    },
    {
        COMPONENT: <MouseMove />,
        PATH:'/MouseMove' 
    },
    {
        COMPONENT:<ConditionalyRun />,
        PATH:'/ConditionalyRun'
    },
    {
        COMPONENT:<Form />,
        PATH:'/Form'
    },
    {
        COMPONENT:<Styling />,
        PATH:'/Styling'
    },
    {
        COMPONENT:<ListRendering />,
        PATH:'/ListRendering'
    },
    {
        COMPONENT:<ParentComponent />,
        PATH:'/ParentComponent'
    },
    {
        COMPONENT:<ClassClick />,
        PATH:'/ClassClick'
    },
    {
        COMPONENT:<FunctionClick />,
        PATH:'/FunctionClick'
    },
    {
        COMPONENT:<EventBinding />,
        PATH:'/EventBinding'
    },
    {
        COMPONENT:<HookCounter />,
        PATH:'/HookCounter'
    },
    {
        COMPONENT:<Reducer />,
        PATH:'/Reducer'
    },
    {
        COMPONENT:<ReducerTwo />,
        PATH:'/ReducerTwo'
    },
    {
        COMPONENT:<FetchDataButton />,
        PATH:'/FetchDataButton'
    },
    {
        COMPONENT:<FetchData />,
        PATH:'/FetchData'
    },
    {
        COMPONENT:<HookArray />,
        PATH:'/HookArray'
    },
    {
        COMPONENT:<HookCounter />,
        PATH:'/HookCounter'
    },
    {
        COMPONENT:<HookObject />,
        PATH:'/HookObject'
    },
    {
        COMPONENT:<Styling />,
        PATH:'/Styling'
    },
    {
        COMPONENT:<ConditionalRendering />,
        PATH:'/ConditionalRendering'
    },
    {
        COMPONENT:<ParentComponent />,
        PATH:'/ParentComponent'
    },
    {
        COMPONENT:<ClassClick />,
        PATH:'/ClassClick'
    },
    {
        COMPONENT:<FunctionClick />,
        PATH:'/FunctionClick'
    },
    {
        COMPONENT:<EventBinding />,
        PATH:'/EventBinding'
    },

    
]
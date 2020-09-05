import React, {createContext, useReducer } from 'react'
import MouseMove from "./hooksComponent/MouseMove";
import Styling from './styling/Styling';
import ListRendering from './component/ListRendering';
import ConditionalRendering from './component/ConditionalRendering';
import ParentComponent from './component/ParentComponent';
import EventBinding from './component/EventBinding';
import Reducer from './hooksComponent/Reducer';
import ReducerTwo from './hooksComponent/ReducerTwo';
import FetchDataButton from './hooksComponent/FetchDataButton';
import FetchData from './hooksComponent/FetchData';
import HookArray from './hooksComponent/HookArray';
import HookObject from './hooksComponent/HookObject';
import AnimationEff from './Comp/animationEff/AnimationEff';
import Chk from './Comp/Chk';
import Context from './hooksComponent/context/Context';
import FormFormik from './practical/FormFormik'
// import GlobalState from './hooksComponent/globalState/GlobalState';
import { UserProvider } from './hook/BasicContext';
import Check from './check/Check';
import Icons from './practical/Icons';
import APIcall from './practical/APIcall';

export const routes = [

    {
        COMPONENT:  <Chk />,
        PATH:'/chk'
    }
    
]
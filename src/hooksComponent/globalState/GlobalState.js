import React, { useContext } from 'react'
import {CountContext} from '../../hook/BasicContext';

const GlobalState = () => {

    const {countState, countDispatch } = useContext(CountContext);
    return (
        <div>
            <h1>GlobalState</h1>
            <div> count { countState } </div>
            <button onClick={()=> countDispatch('inc')} > inc</button>
            <button onClick={()=> countDispatch('dec')} > dec </button>
            <button onClick={()=> countDispatch('reset')} > reset </button>
        </div>
    )
}

export default GlobalState

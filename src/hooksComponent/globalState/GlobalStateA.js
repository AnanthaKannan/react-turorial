import React, { useContext } from 'react'
import { CountContext } from '../../App';

const GlobalStateA = () => {

    const countContext = useContext(CountContext);
    console.log('countContext', countContext);
    return (
        <div>
            <h1>GlobalState A</h1>
            <div> count { countContext.countState } </div>
            <button onClick={()=> countContext.countDispatch('inc')} > inc</button>
            <button onClick={()=> countContext.countDispatch('dec')} > dec </button>
            <button onClick={()=> countContext.countDispatch('reset')} > reset </button>
        </div>
    )
}

export default GlobalStateA

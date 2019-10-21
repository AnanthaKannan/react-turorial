import React, { useReducer } from 'react'

const Reducer = () => {
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
        <div>
            <div> count { count } </div>
            <button onClick={()=> dispatch('inc')} > inc</button>
            <button onClick={()=> dispatch('dec')} > dec </button>
            <button onClick={()=> dispatch('reset')} > reset </button>
        </div>
    )
}

export default Reducer

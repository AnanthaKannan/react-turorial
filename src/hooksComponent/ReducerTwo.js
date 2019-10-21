import React, { useReducer } from 'react'

const ReducerTwo = () => {

    const initalState = {
        firstCount:0,
        secountCount:10
    }

    const[count, dispatch ] = useReducer((state, action) =>{
        switch (action.type) {
            case 'fInc': return { ...state, firstCount: state.firstCount + action.value  };
            case 'fDec': return { ...state, firstCount: state.firstCount - action.value};
            case 'sInc': return { ...state, secountCount: state.secountCount + action.value };
            case 'sDec': return { ...state, secountCount: state.secountCount - action.value };
            case 'reset': return initalState;
            default: return state;
        }

    }, initalState)

    return (
        <div>
            <div> firstCount { count.firstCount }  secountCount { count.secountCount }</div>
            <button onClick={()=> dispatch({type:'fInc', value: 1})} > First inc </button>
            <button onClick={()=> dispatch({ type:'fDec', value: 1})} > first dec </button>
            <button onClick={()=> dispatch({ type:'sInc', value: 1})} > secound inc </button>
            <button onClick={()=> dispatch({ type:'sDec', value: 1})} > secound dec </button>
            <button onClick={()=> dispatch({type:'reset'})}> reset </button>
        </div>
    )
}

export default ReducerTwo

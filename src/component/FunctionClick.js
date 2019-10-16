import React from 'react'

function FunctionClick() {

   function callMe(){
        console.log("callme funciton called")
    }

    return (
        <div>
            <h5> Function Click</h5>
            <button onClick={ callMe }>Click</button>
        </div>
    )
}

export default FunctionClick

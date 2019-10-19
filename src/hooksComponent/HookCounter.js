import React, { useState} from 'react'

const HookCounter = () => {
  
    const [count, setCount ] = useState(0);
    
    const incrementFive = () => {
        console.log(setCount)
    }
    
    return (
        <div>
            <button onClick={ ()=> setCount( count + 1 ) } > count { count } </button>
            <button onClick={()=> incrementFive() } > Increment 5 </button>
        </div>
    )
}

export default HookCounter

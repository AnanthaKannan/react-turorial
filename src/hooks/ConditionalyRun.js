import React, { useState, useEffect} from 'react'

const ConditionalyRun = () => {

    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    // Only call when count value setstate
    useEffect(() =>{
        document.title = `my count is ${count} ${name}`;
    }, [count])

    // working like component did mount 
    // useEffect(() =>{
    //     document.title = `my count is ${count} ${name}`;
    // }, [])


    return (
        <div>
            <input onChange={(e) => setName(e.target.value) } />
            <button onClick={ ()=> setCount(count + 1) } > click me to increment { count } </button>
        </div>
    )
}

export default ConditionalyRun

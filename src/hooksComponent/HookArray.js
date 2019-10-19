import React, { useState} from 'react'

const HookArray = () => {

    const [item, setItem] = useState([]);

    const addArray = () => {
        setItem([...item, { id:item.length,
                     value: Math.floor(Math.random() * 10) + 1 }
                ])
    }
    

    return (
        <div>

            <button onClick={addArray} > add array </button>

            <ul>
                {
                    item.map((obj) => <li key={obj.id}> { obj.value } </li>)
                }
            </ul>
        </div>
    )
}

export default HookArray

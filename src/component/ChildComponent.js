import React from 'react'

const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={ () => props.hadler('hello') } > chlid button</button>
        </div>
    )
}

export default ChildComponent

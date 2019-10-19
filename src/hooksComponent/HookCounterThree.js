import React, { useState } from 'react'

const HookCounterThree = () => {

    const [ name, setName ] = useState({firstName:'', lastName:''});

    const handleFirstName = (e) =>{
        setName({...name, firstName:e.target.value})
    }

    const handleLastName = (e) =>{
        setName({ ...name, lastName: e.target.value })
    }
 
    return (
        <div>
          <input onChange={ handleFirstName } value={ name.firstName } />
          <input onChange={ handleLastName } value={ name.lastName } />
          <h2> { JSON.stringify(name)} </h2>
        </div>
    )
}

export default HookCounterThree

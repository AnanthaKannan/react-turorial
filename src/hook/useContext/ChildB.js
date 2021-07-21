import React, { useContext } from 'react'
import  {userContext}  from './BaseContext'

export default function ChildB() {

    const userName = useContext(userContext)
    return (
        <div>
            Child B
           <h4>
           context value  {userName }
           </h4>
        </div>
    )
}

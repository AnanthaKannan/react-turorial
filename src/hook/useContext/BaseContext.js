import React, { createContext } from 'react'
import ChildA from './ChildA'


export const userContext = createContext()

 function BaseContext() {
    return (
        <div>
            parent component
            <userContext.Provider value="Kannan">
                <ChildA />
            </userContext.Provider>
           
        </div>
    )
}

export default BaseContext
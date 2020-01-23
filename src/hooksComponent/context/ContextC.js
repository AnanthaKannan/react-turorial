import React, { useContext } from 'react'
import {UserContext, UserConsumer } from '../../hook/BasicContext'

const ContextC = () => {
    const user = useContext(UserContext)
    console.log("UserContext", user)
      return (
          <div>
        
        <p>fist way with a simple way</p>
      <h5>{ JSON.stringify(user)}</h5>
  
      
        <p>secound way</p>
        <UserConsumer>
        {props => {
            return <h5>{ JSON.stringify(props) }</h5>
          }}
        </UserConsumer>
  
          </div>
      )
  
}

export default ContextC

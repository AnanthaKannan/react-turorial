import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../../router';

const ContextC = () => {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    console.log(user)

    return (
        <div>
            <p>Context</p>
            <h1> { user } - { channel } </h1>
        </div>
    )
}

export default ContextC

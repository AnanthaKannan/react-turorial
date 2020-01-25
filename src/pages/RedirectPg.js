import React from 'react'
import { Redirect } from "react-router-dom";

export const RedirectPg = (props) => {

    const websoket = () =>{
        // console.log(props);
        // props.history.push('/posts/');
        console.log(props)

        // alert();
    //    return <Redirect to="/ConditionalRendering" />
    }

    const form = () =>{
        // alert();
    }

    return (
        <div>
            <h5>Click button to redirect</h5>
            <button onClick={websoket}>Websoket</button>
            <button onClick={form}>Form</button>
        </div>
    )
}

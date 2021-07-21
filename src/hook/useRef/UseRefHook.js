import React, { useRef, useEffect } from 'react'
import UseRefTimer from './UseRefTimer';

export default function UseRefHook() {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    },[])

    return (
        <div>
            <input ref={inputRef} type='text' />

            <UseRefTimer />
        </div>
    )
}

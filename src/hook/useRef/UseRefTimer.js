import React, { useEffect, useRef, useState } from 'react'

export default function UseRefTimer() {

    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(perVal => perVal + 1)
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        }
    }, [])

    return (
        <div>
            <br/>
            <h1>Timer {timer}</h1>
            <button onClick={() => clearInterval(intervalRef.current)} >Clear Timer</button>
        </div>
    )
}

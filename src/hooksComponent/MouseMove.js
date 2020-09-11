import React , { useState, useEffect} from 'react'
import sha256 from 'sha256'

const MouseMove = () => {


    const [position, setPosition] = useState({ x:null, y:null })
    
    useEffect(() =>{
        window.addEventListener('mousemove', logMousePosition);

        return () =>{
            console.log('component unMounting code');
            window.removeEventListener('mousemove', logMousePosition);
        }

    },[])

    const logMousePosition = (e) => {
        setPosition({ x:e.clientX, y:e.clientX });
        console.log('logmouse position');
        const res = sha256('hello');
        console.log('res', res);
    }

    return (
        <div>
            <h1> X: { position.x} </h1>
            <h1> Y: { position.y} </h1>
        </div>
    )
}

export default MouseMove

import React, { useEffect } from 'react'
import './animatedEyes.scss'
export default function AnimatedEyes() {

    const eyeBall = (event) => {
        const eyes = document.querySelectorAll('.eye');
        // console.log('eyes', eyes)
        eyes.forEach((eye) => {
            const x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
            const y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
            const radian = Math.atan2(event.pageX - x, event.pageY - y);
            const rot = (radian * (180 / Math.PI) * -1) + 270;
            // console.log('x', x, 'y', y, 'radian', radian)
            // eyes.style.transform = `rotate(${rot} deg)`
        })
    }

    useEffect(() =>{
        window.addEventListener('mousemove', eyeBall);

        return () =>{
            console.log('component unMounting code');
            window.removeEventListener('mousemove', eyeBall);
        }

    },[])

    return (
        <div className='container-fluid AnimatedEyes'>
            <div className="face">
                <div className='eyes'>
                    <span className='eye'></span>
                    <span className='eye'></span>
                </div>
            </div>

            <div className="face">
                <div className='eyes'>
                    <span className='eye'></span>
                    <span className='eye'></span>
                </div>
            </div>

            <div className="face">
                <div className='eyes'>
                    <span className='eye'></span>
                    <span className='eye'></span>
                </div>
            </div>

        </div>
    )
}

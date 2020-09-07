import React, { useState } from 'react'
import './ClockA.scss'

export default function ClockA() {

    const [clock_, setClock_] = useState({ hours: 0, minutes: 0, seconds: 0 })

    const clock = () => {
        const d = new Date();
        const hours = d.getHours() - 12;
        setClock_({
            hours: hours < 12 ? `0${hours}` : hours,
            minutes: d.getMinutes(),
            seconds: d.getSeconds()
        })
    }

    useState(() => {
        setInterval(() => {
            clock()
        }, 1000);
        clock()
    }, []);



    return (
        <div className='container-fluid ClockA'>
            <div id='clock'>
                <h2>The time is now</h2>
                <div id='time'>
                    <div> <span id='hours'> {clock_.hours}</span> <span>Hours</span> </div>
                    <div> <span id='minutes'>{clock_.minutes}</span> <span>Minutes</span> </div>
                    <div> <span id='seconds'> {clock_.seconds}</span> <span>Seconds</span> </div>
                </div>
            </div>
        </div>
    )
}

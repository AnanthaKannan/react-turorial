import React from 'react'
import './AnalogClock.scss'

export default function AnalogClock() {
    return (
        <div className='AnalogClock container-fluid'>
            <div className='clock'>
                <div className='hour'>
                    <div className='hr' id='hr'></div>
                </div>
                <div className='min'>
                    <div className='mn' id='mn'></div>
                </div>
                <div className='sec'>
                    <div className='sc' id='sc'></div>
                </div>
            </div>
        </div>
    )
}

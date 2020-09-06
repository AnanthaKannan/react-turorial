import React from 'react'
import './CardA.scss'

export default function CardA() {
    return (
        <div className='cardA container-fluid'>
            <div className="row">

                <div className='col-md-4 card-container'>
                    <div className='cards'>
                        <div className='circles'>
                            <h2>01</h2>
                        </div>
                        <div className="contents">
                            <p>CSS animations is a proposed module for Cascading Style
                                Sheets that allows the animation of HTML
                        document elements using CSS.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 card-container'>
                    <div className='cards'>
                        <div className='circles'>
                            <h2>02</h2>
                        </div>
                        <div className="contents">
                            <p>CSS animations is a proposed module for Cascading Style
                                Sheets that allows the animation of HTML
                        document elements using CSS.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>

                <div className='col-md-4 card-container'>
                    <div className='cards'>
                        <div className='circles'>
                            <h2>03</h2>
                        </div>
                        <div className="contents">
                            <p>CSS animations is a proposed module for Cascading Style
                                Sheets that allows the animation of HTML
                        document elements using CSS.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

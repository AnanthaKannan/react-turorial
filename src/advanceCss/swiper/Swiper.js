import React from 'react'
import './Swiper.scss'

export default function Swiper() {
    return (
        <div className='cardB container-fluid'>
            <div className='row'>
                <div className='card-container col-md-4'>
                    <div className='cards'>
                        <div className='box'>
                            <div className='content'>
                                <h2>01</h2>
                                <h3>Card One</h3>
                                <p>CSS animations is a proposed module for Cascading Style Sheets
                            that allows the animation of HTML document elements using CSS.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-container col-md-4'>
                    <div className='cards'>
                        <div className='box'>
                            <div className='content'>
                                <h2>02</h2>
                                <h3>Card Two</h3>
                                <p>CSS animations is a proposed module for Cascading Style Sheets
                            that allows the animation of HTML document elements using CSS.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card-container col-md-4'>
                    <div className='cards'>
                        <div className='box'>
                            <div className='content'>
                                <h2>03</h2>
                                <h3>Card Three</h3>
                                <p>CSS animations is a proposed module for Cascading Style Sheets
                            that allows the animation of HTML document elements using CSS.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

import React, { useState} from 'react'

import './websoket.css'
const Websoket = () => {

    const [commandOne, setcommandOne] = useState("");
    const [commandTwo, setCommandTwo] = useState("");

    const changeOne = (e) => {
        setcommandOne(e.target.value);
        console.log('sdf', commandOne)
    }

    const changeTwo = (e) => {
        setCommandTwo(e.target.value)
        console.log('sdf', commandOne)
    }
    
    

    return (
        <div className='bg-light'>
        <div className='container'>
        <br/><br/>   
            <div className='row'>
                <div className='col-md-6'>
                    <div onChange={(e)=> changeOne(e) } 
                    className='text-left area bg-white' contentEditable="true" placeholder="I look like a textarea" >

       {/* <span className='error'>  sdsdfsd </span>
my contant is here */}
                    </div>
                </div>
                <div className='col-md-6'>
                    <div onChange={(e)=> changeTwo(e) }  
                    className='text-left area bg-white' contentEditable="true" placeholder="I look like a textarea" >
                   
                    </div>
                </div>
            </div>
            <br/><br/>   
        </div>
        </div>
    )
}

export default Websoket

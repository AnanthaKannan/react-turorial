import React from 'react';
import style from './style.module.css';
import './style.css';

const heading ={
    fontSize: '22px',
    color:'blue'
}

const Styling = () => {
    return (
        <div>
            <h1 className="error"> ERROR </h1>
            <h1 className={(true) ? 'error' : ''}>ERROR with condition</h1>
            <h1 style={ heading }> internal css </h1>
            <h1 className={ style.errorSet }> css module </h1>
        </div>
    )
}

export default Styling

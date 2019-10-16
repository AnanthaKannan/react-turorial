import React from 'react'
import ListRenderingChild from './ListRenderingChild';

const ListRendering = () => {
    let names = ['anan', 'kanna', 'sree', 'hello'];
    const nameList = names.map((name) => <span key={name}> { name } </span>)
    const listChild = names.map((name) => <ListRenderingChild key={name} name={ name } /> )
    return (
        <div>
            List rendering using three methods
            <div>
                {
                    names.map((name) => <span key={name} >{name}</span>)
                }
            </div>
            <div> { nameList } </div>
            <div> { listChild } </div>
            <br />
        </div>
    )
}

export default ListRendering



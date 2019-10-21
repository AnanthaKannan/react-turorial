import React, { useState, useEffect } from 'react'
import axios from 'axios';

const FetchDataButton = () => {

    const [id, setId] = useState(1);
    const [post, setPost] = useState({})
    const [idFormButtonClick, setIdFormButtonClick] = useState(1);

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFormButtonClick}`)
        .then(response =>{
            console.log(response);
            setPost(response.data)
        })
        .catch(error =>{
            console.log(error)
        }) 
    }, [idFormButtonClick]);

   function handleClick(){
        setIdFormButtonClick(id);
    }

    return (
        <div>
            <input value={id} onChange={(e)=> setId(e.target.value)} />
            <button onClick={()=> handleClick()} > Click </button>
            <h1> { post.title } </h1>
        </div>
    )
}

export default FetchDataButton

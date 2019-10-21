import React, { useState, useEffect } from 'react';
import axios from 'axios'

const FetchData = () => {
    const [post, setPost] = useState([]);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) =>{
            console.log(response);
            setPost(response.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    }, [])
    return (
        <div>
            <ul>
                {
                    post.map(obj => <li>{ obj.title }</li>)
                }
            </ul>
        </div>
    )
}

export default FetchData

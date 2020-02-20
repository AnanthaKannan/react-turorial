import React, {useState, useEffect} from 'react'

import { concatData } from "./conflict"

export default function Check() {

    const [concat, setconcat] = useState([]);

    useEffect(() =>{
        setconcat(concatData())
    },[])

    const changes = (text, index, status) =>{

            concat[index].text_a = text;
            concat[index].text_b = ""
            console.log(concat)
        setconcat([...concat])
    }

    return (
        <div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>user a</th>
                        <th>conflict</th>
                        <th>user b</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        concat.map((obj, index) =>{
                                return(
                                    <tr>
                                    <td> { obj.text_a} </td>
                                    <td> 
                                        {
                                            (obj.text_b) &&
                                            (obj.text_a !== obj.text_b) &&
                                            <p className="m-0 px-5"> 
                                            <span onClick={ ()=> changes(obj.text_b, index, 'accept')} >accept</span>
                                            <span className="mx-5" onClick={ ()=> changes(obj.text_a, index, 'reject')}>reject</span>
                                            <span onClick={ ()=> changes(`${obj.text_a} ${obj.text_b}`, index, 'both')}>both</span>
                                             </p>
                                        }
                                    </td>
                                    <td> {obj.text_b} </td>
                                </tr>
                                )
                        })
                    }
       
                </tbody>
            </table>
        </div>
    )
}



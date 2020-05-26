import React, { useState } from 'react'
import service from '../service/admin.service';

export default function APIcall() {

    const [apiData, setapiData] = useState({})

    const post = async() =>{
        const data =  {
            "adminName":"ananth text",
            "age":25,
            "email":"sree.kannan@rapidqube.com",
            "phone":"9042141018"
        }
        const result = await service.addAdmin(data);
        console.log(result);
        setapiData(result);
    }

    const get = async() =>{
        const result = await service.getAdmin();
        console.log(result)
        setapiData(result)
    }

    const getAdminByMail = async() =>{
        const data = { email :"sree.kannan@rapidqube.com" }
        const result = await service.getAdminByMail(data);
        console.log(result)
        setapiData(result)
    }

    const updateAdminByMail = async() =>{
        const data = { 
            newMailId:"sreeananthakannan@rapidqube.com",
            oldMailid:"sree.kannan@rapidqube.com"
         }
        const result = await service.updateAdminByMail(data);
        console.log(result)
        setapiData(result)
    }

    const deletAdminById = async() => { 
        const data = { _id:"5eb66a9e4d3c6a0017a51fcb"}
        const result = await service.deletAdminById(data);
        console.log(result)
        setapiData(result)
    }

    return (
        <div>
             <button onClick={()=>post()} >Post AddAdmin</button>
             <button onClick={()=>get()} >get GetAdmin</button>
             <button onClick={()=>getAdminByMail()} >get getAdminByMail</button>
             <button onClick={()=>updateAdminByMail()} >update updateAdminByMail</button>
             <button onClick={()=>deletAdminById()} >delete deletAdminById</button>
             <div style={{ margin: '1rem 0' }} className="ml-5">
                <pre style={{ background: '#f6f8fa', fontSize: '.65rem', padding: '.5rem', }} >
                    <strong>Output</strong> = {' '}
                    {JSON.stringify(apiData, null, 2)}
                </pre>
                </div>
        </div>
    )
}

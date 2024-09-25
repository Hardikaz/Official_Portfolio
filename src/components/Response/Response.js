import React from 'react'
import ResponseTable from './ResponseTable'
import { useState,useEffect } from 'react'
import './Response.css'
const Response = () => {

    const [responses,setResponses]=useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/response').then(response => {
            response.json().then(responses=>{
                setResponses(responses);
            });
        });
    },[]);

  return (
     <>
     <div className='ResponseTable'>
     
        {responses.length==0 && <h1>No Responses Yet !</h1>}
        {responses.length>0 && responses.map(response=>(
        <ResponseTable key={response._id} {...response} />        ))}
        </div>
     </>
  )
}

export default Response;

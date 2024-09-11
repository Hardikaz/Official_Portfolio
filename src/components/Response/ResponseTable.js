import React from 'react'
import './Response.css'

const ResponseTable = ({fname,lname,email,msg,_id}) => {

   async function handleClick(){
     
   try{
        const response=await fetch('http://localhost:5000/delete',{
          method:'DELETE',
           headers:{
            "Content-Type":"application/json",
           },
           body:JSON.stringify({email}), 
        })

        if(response.ok) alert("Deleted successfully!");

        else alert("Deletion failed");
    }
    catch(error)
    {
      console.log(error.message);
    }
  }
  return (
    
        <div className='ResponseTable-info'>
          <div className='ResponseTable-info-1'>
          <h1>{fname+" "+lname}</h1>
          </div>
          <div className='ResponseTable-info-2'>
          <p>{email}</p>
          <p>{msg}</p>
          </div>
          <div className='DeleteTable' onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28"><path fill="currentColor" d="M11.5 6h5a2.5 2.5 0 0 0-5 0M10 6a4 4 0 0 1 8 0h6.25a.75.75 0 0 1 0 1.5h-1.31l-1.217 14.603A4.25 4.25 0 0 1 17.488 26h-6.976a4.25 4.25 0 0 1-4.235-3.897L5.06 7.5H3.75a.75.75 0 0 1 0-1.5zM7.772 21.978a2.75 2.75 0 0 0 2.74 2.522h6.976a2.75 2.75 0 0 0 2.74-2.522L21.436 7.5H6.565zM11.75 11a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75m5.25.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0z"/></svg>

          </div>
        </div> 
        

  )
}

export default ResponseTable
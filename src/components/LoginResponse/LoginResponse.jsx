import React,{useState,useContext} from 'react';
import { UserContext } from '../../UserContext';
import "./LoginResponse.css"
import { useNavigate } from 'react-router-dom';

const LoginResponse = () => {

   const[email,setEmail]=useState("");
   const[password,setPassword]=useState("");
   const{setAdmin}=useContext(UserContext);

  const navigate=useNavigate();

  async function guestLogin(){
    setAdmin(null);
    navigate('/response');
  }

   async function handleSubmit(ev){
    ev.preventDefault();

  try{
    const response=await fetch('http://localhost:5000/login-response',{
      method: 'POST',
      body: JSON.stringify({email,password}),
      headers: {'Content-Type':'application/json'},
  });

  const data=await response.json();

  if(response.ok)
  {
    setAdmin(data);
    alert('Admin login successful');
    navigate('/response');
  }

  else{
    alert('Wrong credentials')
  }
}
catch(e){
  alert(e.message);
}
}
//   if(response.ok)
//   {
//     navigate('/response')
//     alert("Alright")
//   }
//   else{
//     alert('Wrong credentials')
//   }
// }
  

  return (
    <div className="Login-response-page">
        
           <form action='#' method='POST' className='form'>
           <p style={{"font-size":"30px","margin-bottom":"10px"}}>Admin Login</p>
           
           <ul>
            <li>
            <label>Email id :</label>
            <input 
            type='email' 
            name='email'
            value={email}
            onChange={(ev)=>setEmail(ev.target.value)}
            />
            </li>

            <li>
            <label>Password :</label>
            <input
            type='password' 
            name='password'
            value={password}
            onChange={(ev)=>setPassword(ev.target.value)}
            />
            </li>
           
           </ul>
           <button className='loginResponseBtn' onClick={handleSubmit}>Submit</button>
           <p>Login as <span style={{"color":"#0788ff","cursor":"grab"}} onClick={guestLogin}>GUEST</span></p>
           </form>

           
        
    </div>
  )
}

export default LoginResponse
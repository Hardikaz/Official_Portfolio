import React from 'react'
import "./AboutMe.css"
import Myskills from "../Myskills/Myskills.jsx"
import Img from "../../assets/sb.jpg"
const Aboutme = () => {
  return (
    <>
      <div className="AboutMe-page">
        <div className="AboutMe-page-left">
          <img src={Img}></img>
        </div>
        
        <div className="AboutMe-page-right">
        
        <div className="AboutMe-page-right-heading">ABOUT ME</div>

        <div className="AboutMe-page-right-para"><p>I am Hardik Sharma, a second-year student at DIT University studying BTech Computer Science and Engineering. I have keen interest in Web Development and programming languages like C, Java and JavaScript.</p>
        
        <p>
         In addition to strong problem-solving abilities, I am well-versed in data structures and algorithms. I don't hesitate to face new challenges and am always eager to learn new technology which are newly introduced in the growing IT world.
         </p>
         </div>

        <div className="AboutMe-page-right-info">
        <div className="AboutMe-page-right-info item">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
	      <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"></path>
        </svg> Age: 20
        </div>

        <div className="AboutMe-page-right-info item">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
	<path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"></path>
</svg> Email: sharmahardikaz@gmail.com
        </div>

        <div className="AboutMe-page-right-info item">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
	      <path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z"></path>
        </svg> College: Dehradun Institute of Engineering (DIT University) 
        </div>

        <div className="AboutMe-page-right-info item">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512">
	      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"></path>
	      <circle cx={256} cy={192} r={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32}></circle>
        </svg> Location: Lucknow, Uttar Pradesh, India
        </div>

        <div className="AboutMe-page-right-info item">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512">
	      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"></path>
	      <circle cx={256} cy={192} r={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32}></circle>
        </svg> Location: Ahmedabad, Gujarat, India
        </div>
        </div>

        </div>
        
      </div>

      <Myskills />
    </>
  )
}

export default Aboutme
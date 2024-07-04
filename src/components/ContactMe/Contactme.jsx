import React from 'react'
import "./contactpage.css"
const Contactme = () => {
  return (
    <>
      <div className="contactPage">
       <div className="contactPage-container">
       
        <div className="contactPage-left">
         
         <div className="contactPage-left-icons">
         <div className="contactPage-left-heading">
          Lets's Connect
         </div>
         <div className="contactPage-left-para">
          Hey ya let's build something together! Feel free to connect with your amazing ideas which we can implement together or if you need me regarding any project. Thanks!!! 
         </div>
         {/* <div className="left-icons-item">
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	       <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"></path>
         </svg>
         </div>

         <div className="left-icons-item">
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
	       <path fill="currentColor" d="m221.59 160.3l-47.24-21.17a14 14 0 0 0-13.28 1.22a5 5 0 0 0-.56.42l-24.69 21a1.88 1.88 0 0 1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91 1.91 0 0 1 0-1.68l21.07-25a6 6 0 0 0 .42-.58a14 14 0 0 0 1.12-13.27L95.73 34.49a14 14 0 0 0-14.56-8.38A54.24 54.24 0 0 0 34 80c0 78.3 63.7 142 142 142a54.25 54.25 0 0 0 53.89-47.17a14 14 0 0 0-8.3-14.53M176 210c-71.68 0-130-58.32-130-130a42.23 42.23 0 0 1 36.67-42h.23a2 2 0 0 1 1.84 1.31l21.1 47.11a2 2 0 0 1 0 1.67l-21.11 25.06a5 5 0 0 0-.43.57a14 14 0 0 0-.91 13.73c8.87 18.16 27.17 36.32 45.53 45.19a14 14 0 0 0 13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92 1.92 0 0 1 1.6-.1l47.25 21.17a2 2 0 0 1 1.21 2A42.24 42.24 0 0 1 176 210"></path>
         </svg>
         </div> */}
         <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220409.61870640467!2d77.8770494215199!3d30.325353814763336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1678710126158!5m2!1sen!2sin"  referrerpolicy="no-referrer-when-downgrade" alt="Map" height="200px" width="500px"></iframe>
            </div>
         </div>
        </div>
        <div className="contactPage-right">
        <div className="contactPage-right-form">
          <form action='#' method="POST" className="form">
          <ul className="contactPage-form-list">
          <div className="form-name-section">
           <li><label>First Name* : </label>
           <input type="text" placeholder="John"></input>
           </li> 

           <li><label>Last Name : </label>
           <input type="text" placeholder="Doe"></input>
           </li> 
           </div>
           <li>
            <label>Email* :</label>
            <input type="email" placeholder="johndoe@gmail.com"></input>
           </li>

           <li>
            <label>Write your ideas here :</label>
            <textarea rows="4" cols="50" placeholder="lorem ipsum sit amet">
           </textarea>
           </li>
           <button type="submit">Submit</button>
           </ul>
          </form>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Contactme
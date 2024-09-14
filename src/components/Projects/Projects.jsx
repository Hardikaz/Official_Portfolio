import React,{useState} from 'react'
import Projectcard from "./Projectcard"
import ProjectViewPage from './ProjectViewPage'
import img1 from '../../assets/weatherapp.png'
import img2 from '../../assets/githubapp.png'
import img3 from '../../assets/calculatorapp.png'
import img4 from '../../assets/FrontEnd.png'
import img5 from '../../assets/dashboard.png'
import "./Projects.css"


const Projects = () => {
 
  const[selectedCard,setSelectCard]=useState(null);

  const title1='Weather App';
  const para1='HTML,CSS,JavaScript,Open Weather API';
  

  const title2='Github Username App';
  const para2='HTML,CSS,JavaScript, Github Username API';

  const title3='Calculator';
  const para3='HTML,CSS,ReactJs,UseContext Hook'

  const title4='Startup Portfolio';
  const para4='HTML,CSS,ReactJs'

  const title5='Erp Clone';
  const para5='HTML,CSS,JavaScript'

  //  <Projectcard src={img1} title={title1} para={para1} handleView={handleView}/>
  const projects = [
    { src:img1, title: title1, para: para1, 
      description: 'This weather app allows users to input a location and view real-time weather conditions, including temperature in Celsius, wind speed, and humidity. The interface is enhanced with attractive weather symbols and dynamic backgrounds that change based on the current weather, offering an engaging and visually appealing experience.',
      type: 'FrontEnd and API',
      language:para1 ,
      liveUrl:'https://hardikaz.github.io/Weather-App/',
      sourceUrl:'https://github.com/Hardikaz/Weather-App'},
     
      { src:img2, title: title2, para: para2, 
        description: 'This GitHub user info app provides detailed information about a specified GitHub user, including their company, followers, following, avatar, and bio. It features a sleek UI with a link to the users GitHub profile for easy access.' ,
        type: 'FrontEnd and API',
        language: para2,
        liveUrl:'https://hardikaz.github.io/Weather-App/',
        sourceUrl:'https://github.com/Hardikaz/Weather-App'},

     { src:img3, title: title3, para: para3,
       description: 'This React-based calculator performs all standard mathematical operations, utilizing React hooks and dispatch for efficient state management. It features a clean UI and stores previously calculated values for quick reference and enhanced user experience.',
       type: 'FrontEnd', language: para3,
       liveUrl:'https://hardikaz.github.io/CalculatorJs/',
       sourceUrl:'https://github.com/Hardikaz/CalculatorJs' },

    { src:img4, title: title4, para: para4, 
      description: 'Developed a portfolio for a startup using ReactJS and various ReactJS libraries for animations, enhancing user experience. Utilized React Router DOM for seamless navigation, with a strong emphasis on creating an engaging, user-friendly interface.',
      type: 'FrontEnd (ReactJs $ UI / UX)', language: para4,
      liveUrl:'https://hardikaz.github.io/PUDI/',
      sourceUrl:'https://github.com/Hardikaz/PUDI'},
    
    { src:img5, title: title5, para: para5,
      description: 'Developed a simple clone of the college ERP system, replicating its user interface and core functionalities. This project included features like  attendance tracking, and grade viewing, mirroring the original systems design and layout. The goal was to create a basic, fully functional version with the same UI for familiar user interaction, focusing on essential administrative tasks.',type:'FrontEnd (UI / UX)' , language:para5+',Preloader' ,
      liveUrl:'https://hardikaz.github.io/DashBoard/',
      sourceUrl: 'https://github.com/Hardikaz/DashBoard'}
  ];

  function handleView(card)
  {
    setSelectCard(card);
  }
  function closeLightbox()
  {
    setSelectCard(null);
  }



  return (
    <>
      <div className="MyProjectPage">
      <div className="MyProject-heading marginleft-20">MY WORK</div>
      <div className="MyProject-para marginleft-20">Here are my recent projects</div>
      <div className="MyProjects-container marginleft-20">
        {/* <Projectcard src={img1} title={title1} para={para1} handleView={handleView}/>
        <Projectcard src={img2} title={title2} para={para2} handleView={handleView}/>
        <Projectcard src={img3} title={title3} para={para3} handleView={handleView}/>
        <Projectcard src={img4} title={title4} para={para4} handleView={handleView}/>
        <Projectcard src={img5} title={title5} para={para5} handleView={handleView}/> */}

        {projects.map((project) => (
        <Projectcard card={project} onViewClick={handleView} />
      ))}
        {selectedCard &&  <ProjectViewPage card={selectedCard} onClose={closeLightbox} />}
      </div>
      </div>
      {/* <ProjectViewPage src={img1} title={title1} para={para1}/> */}
    </>
  )
}

export default Projects
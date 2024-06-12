import React from 'react'
import Projectcard from "./Projectcard"
import img1 from "../../assets/weatherapp.png"
import img2 from "../../assets/githubapp.png"
import img3 from "../../assets/calculatorapp.png"
import img4 from "../../assets/FrontEnd.png"
import img5 from "../../assets/dashboard.png"
import "./Projects.css"
const Projects = () => {
  const title1="Weather App";
  const para1="HTML,CSS,JavaScript,Open Weather API";

  const title2="Github Username App";
  const para2="HTML,CSS,JavaScript, Github Username API"

  const title3="Calculator";
  const para3="HTML,CSS,ReactJs,UseContext Hook"

  const title4="FrontEnd Project";
  const para4="HTML,CSS,ReactJs"

  const title5="Erp Clone";
  const para5="HTML,CSS,JavaScript"

  return (
    <>
      <div className="MyProjectPage">
      <div className="MyProject-heading marginleft-20">MY WORK</div>
      <div className="MyProject-para marginleft-20">Here are my recent projects</div>
      <div className="MyProjects-container marginleft-20">
        <Projectcard src={img1} title={title1} para={para1}/>
        <Projectcard src={img2} title={title2} para={para2}/>
        <Projectcard src={img3} title={title3} para={para3}/>
        <Projectcard src={img4} title={title4} para={para4}/>
        <Projectcard src={img5} title={title5} para={para5}/>
      </div>
      </div>
    </>
  )
}

export default Projects
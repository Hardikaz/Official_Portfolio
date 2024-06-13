import React from 'react'
import Expcard from "./Experiencecard"
import img1 from "../../assets/arnold.jpg"
import "./Experience.css"
const Experience = () => {
  const para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Mi eget mauris pharetra et ultrices neque. Velit dignissim sodales ut eu sem integer vitae justo eget. Blandit cursus risus at ultrices mi. Sed turpis tincidunt id aliquet risus feugiat. Eget duis at tellus at urna condimentum mattis. Orci dapibus ultrices in iaculis nunc sed augue lacus. Diam quam nulla porttitor massa id. Eu non diam phasellus vestibulum lorem sed risus ultricies. Magna eget est lorem ipsum dolor sit amet. Morbi tristique senectus et netus et malesuada fames. Amet aliquam id diam maecenas ultricies. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Ac placerat vestibulum lectus mauris ultrices eros. Dui ut ornare lectus sit."
  return (
    <>
      <div className="Experiencepage">
      <div className="Experiencepage-heading marginleft-20">EXPERIENCE</div>
      <div className="Experiencepage-para marginleft-20">Work experience and skill</div>
      <div className="Experiencepage-container marginleft-20">
        
        <Expcard src={img1} heading={"Morgan Stanley"} para={para}/>

        <Expcard src={img1} heading={"Morgan Stanley"} para={para}/>
        
        <Expcard src={img1} heading={"Morgan Stanley"} para={para}/>

        <Expcard src={img1} heading={"Morgan Stanley"} para={para}/>
        
        <Expcard src={img1} heading={"Morgan Stanley"} para={para}/>

        <Expcard src={img1} heading={"Morgan Stanley"} para={para}/>
      </div>
      </div>
    </>
  )
}

export default Experience
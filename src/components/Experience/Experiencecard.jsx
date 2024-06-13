import React from 'react'
import "./Experiencecard.css"
const Experiencecard = (props) => {
  return (
   <>
    <div className="Exp-card">
        <>
            <div className="Exp-card-left">
             <div className="Exp-card-left-img">
                <img src={props.src}/>
             </div>
             <div className="Exp-card-left-info marginleft-20">
                <p className="p1">Front End Team</p>
                <p className="p2">Remote</p>
                <p className="p3">2021-2025</p>
             </div>
            </div>
            <div className="Exp-card-right">
                <div className="Exp-card-right-heading p1">{props.heading}</div>
                <div className="Exp-card-right-para">
                {props.para}
                </div>
            </div>
        </>
    </div>
   </>
  )
}

export default Experiencecard
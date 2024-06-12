import React from 'react'
import "./Projectcard.css"
const Projectcard = (props) => {
  return (
    <>
        <div className="Projectcard">
             <div className="Projectcard-img">
                <img src={props.src}/>
            </div>
            
            <div className="Projectcard-title">
                {props.title}
            </div>
            <div className="Projectcard-para">
                {props.para}
            </div>
            <div className="Projectcard-buttons">
              <button>View</button>
              <button>Live</button>
            </div>
        </div>
    </>
  )
}

export default Projectcard
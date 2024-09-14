import React from 'react'
import "./Projectcard.css"
import ProjectViewPage from './ProjectViewPage'

const Projectcard = ({card,onViewClick}) => {
  return (
    <>
        <div className="Projectcard">
             <div className="Projectcard-img">
                <img src={card.src}/>
            </div>
            
            <div className="Projectcard-title">
                {card.title}
            </div>
            <div className="Projectcard-para">
                {card.para}
            </div>
            
            <div className="Projectcard-buttons">
              <button className="projectcard-viewbtn" onClick={()=>onViewClick(card)}>View</button>
              <button className="projectcard-livebtn">Live</button>
            </div>
        </div>
    </>
  )
}

export default Projectcard
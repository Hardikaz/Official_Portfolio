import React from 'react'
// import img1 from "../../assets/weatherapp.png"
import './ProjectViewPage.css'

const ProjectViewPage = ({card,onClose}) => {
  return (
    <>
        <div className="ProjectViewPage"  onClick={onClose}>
         <div className="ProjectViewPage-Box">
            <div className='ProjectViewPage-Box-left'>
                <img src={card.src}/>
            </div>
            <div className='projectView-Box-right'>
                <p className='projectView-Box-heading'>{card.title}</p>
                <p style={{"margin-top":"20px"}}>{card.description}</p>

                <div className='projectView-Box-right-grid'>
                    <p style={{"font-weight": "bold","margin":"5px"}}>Type :</p>
                    <p style={{"margin":"5px"}}>{card.type}</p>

                    <p style={{"font-weight": "bold","margin":"5px"}}>Language :</p>
                    <p style={{"margin":"5px"}}>{card.language}</p>

                    <p style={{"font-weight": "bold","margin":"5px"}}>Live URL :</p>
                    <p style={{"margin":"5px"}}><a href={card.liveUrl} target='/'>{card.liveUrl}</a></p>

                    <p style={{"font-weight": "bold","margin":"5px"}}>Source Code :</p>
                    <p style={{"margin":"5px"}}>{card.sourceUrl}</p>
                    
                </div>
            </div>
         </div>
        </div>
    </>
  )
}

export default ProjectViewPage
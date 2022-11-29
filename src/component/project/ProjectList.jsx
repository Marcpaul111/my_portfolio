import { useState } from 'react';
import {IoIosArrowDropdown, IoIosArrowDropup} from 'react-icons/io'
import './project.css'

export const ProjectList = (props) => {

    const [expandCard, setExpandCard] = useState(false);

    const colapseCard = () => {
        setExpandCard(!expandCard) 
    }

    return (
        <div className="projects-container">

             <div className="project-card">
                <h5>{props.name}</h5>
                <p onClick={colapseCard}>{expandCard ? <IoIosArrowDropup size={17} color = 'blue'/> : <IoIosArrowDropdown size={17} color = 'blue'/>  }</p>
             </div>

            {expandCard ? (<p>{props.description}</p>) : (<p>{props.description.substring(0, 100)}<strong>  ...Read more</strong></p>)}
             

             <div className="row">
                {props.techUsed && props.techUsed.map((tech, index) => 
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>

                            <div className='tech-used'>
                                <p>{tech.techName}</p>
                            </div>
                            
                        </div>     
                )}
             </div>

             <div className="demo-btn">
                <a target='_' href={props.link}>Live Demo</a>
             </div>

        </div>
       
    )
}
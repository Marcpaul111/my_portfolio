import React from 'react'
import './sidebarItems.css'
import me from '../../assets/myPhoto.jpg'
import {
        FcHome,
        FcContacts,
        FcNightPortrait
    } from 'react-icons/fc'
import {GiStack, GiGraduateCap} from 'react-icons/gi'
import {MdComputer} from 'react-icons/md'
import {Link} from 'react-scroll'



const SidebarItems = (props) => {
  return (
    <React.Fragment>
        {props.toggleSidebar ? ( 
        <div className="nav-items">
            <div className="profile-image">
                <img src={me} alt="me" />
            </div>

            <ul>
                <li className='nav-item'>
                    <Link to='home'
                    spy={true} 
                    smooth={true}
                    duration={400}
                    >
                        <FcHome size={25}/> Home
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='about'
                     spy={true} 
                     smooth={true}
                     duration={100}
                     offset={-100}
                     >
                        <FcNightPortrait size={25}/> About
                    </Link>  
                </li>

                <li className='nav-item'>
                    <Link to='tech-stack'
                     spy={true} 
                     smooth={true}
                     duration={100}
                     offset={-100}
                     >
                        <GiStack size={25} color='blue'/> Tech Stack
                    </Link>
                </li>  

                <li className='nav-item'>
                    <Link to='projects'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >
                        <MdComputer size={25} color='red'/> Projects
                    </Link>
                </li>  

                <li className='nav-item'>
                    <Link to='education' 
                        spy={true} 
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                        <GiGraduateCap size={25} color='yellow'/> Education
                    </Link>
                </li>  
                
                <li className='nav-item'>
                    <Link to='contact' 
                        spy={true} 
                        smooth={true}
                        duration={100}
                        offset={-100}
                            >
                        <FcContacts size={25}/> Contact
                    </Link>
                </li>  

            </ul>
        </div>) : (
        <div className='toggle-icons-only'>
            <ul>
                <li className='nav-item'>
                    <Link to='home'
                    spy={true} 
                    smooth={true}
                    duration={100}
                    offset={-100}
                    >
                        <FcHome size={25}/>
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='about'
                     spy={true} 
                     smooth={true}
                     duration={100}
                    offset={-100}
                     >
                        <FcNightPortrait size={25}/> 
                    </Link>  
                </li>
                
                <li className='nav-item'>
                    <Link to='tech-stack'
                     spy={true} 
                     smooth={true}
                     duration={400}
                     >
                        <GiStack size={25} color='blue'/>
                    </Link>
                </li>    

                <li className='nav-item'>
                    <Link to='projects'
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        offset={-100}
                        >
                        <MdComputer size={25} color='red'/> 
                    </Link>
                </li>  

                <li className='nav-item'>
                    <Link to='education' 
                        spy={true} 
                        smooth={true}
                        duration={100}
                        offset={-100}
                        >
                        <GiGraduateCap size={25} color='yellow'/>
                    </Link>
                </li>    
                
                <li className='nav-item'>
                    <Link to='contact' 
                        spy={true} 
                        smooth={true}
                        duration={100}
                        offset={-100}
                            >
                        <FcContacts size={25}/> 
                    </Link>
                </li>    
            </ul>


        </div>
        )};
      

    </React.Fragment>
  )
}

export default SidebarItems
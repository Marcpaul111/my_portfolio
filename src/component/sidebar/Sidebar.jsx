import React, {useState} from 'react'
import './sidebar.css'
import Home from '../home/Home'
import SidebarItems from './SidebarItems'
import {BsChevronCompactRight, BsChevronCompactLeft} from 'react-icons/bs'


const Sidebar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false)

    const toggler = () => {
        setToggleSidebar(!toggleSidebar)
    }
  return (
    <div className='container-fluid sidebar-section'>

        <div className={toggleSidebar ? 'expand-sidebar sidebar':"sidebar"}>
            <div className="toggle-expand-collapse">
                <p onClick={toggler} >
                    {toggleSidebar ? (<BsChevronCompactLeft size={25}/>) : 
                    (<BsChevronCompactRight size={25}/>)}
                </p>
            </div>

            <SidebarItems toggleSidebar={toggleSidebar}/>
        </div>

        <div className="container-fluid">
            <Home />
        </div>

    </div>
  )
}

export default Sidebar
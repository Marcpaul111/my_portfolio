import React, { useState } from "react";
import "./mobileNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcHome, FcContacts, FcNightPortrait } from "react-icons/fc";
import { GiStack, GiGraduateCap } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { Link } from "react-scroll";

const MobileNav = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const collapseMenu = () => {
        setOpenMenu(!openMenu)
    }

  return (
    <div className="mobile-navbar">
      <div className="navbar-header">
        <GiHamburgerMenu size={25} color="white"  onClick={collapseMenu}/>
      </div>

        {openMenu ? (<div className="nav-items-container">
        <ul>
          <li className="nav-item-mobile">
            <Link to="home" spy={true} smooth={true} duration={400}>
              <FcHome size={25} /> Home
            </Link>
          </li>

          <li className="nav-item-mobile">
            <Link
              to="about"
              spy={true}
              smooth={true} 
              duration={100}
              offset={-100}
            >
              <FcNightPortrait size={25} /> About
            </Link>
          </li>

          <li className="nav-item-mobile">
            <Link
              to="tech-stack"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <GiStack size={25} color="blue" /> Tech Stack
            </Link>
          </li>

          <li className="nav-item-mobile">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <MdComputer size={25} color="red" /> Projects
            </Link>
          </li>

          <li className="nav-item-mobile">
            <Link
              to="education"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <GiGraduateCap size={25} color="yellow" /> Education
            </Link>
          </li>

          <li className="nav-item-mobile">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcContacts size={25} /> Contact
            </Link>
          </li>
        </ul>
      </div>) : (<div></div>)}



    </div>
  );
};

export default MobileNav;

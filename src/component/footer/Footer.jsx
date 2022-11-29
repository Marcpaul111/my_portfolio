import React from 'react'
import './footer.css'
import FooterLogo from '../../assets/logo.png'
import {AiFillGithub,
        AiFillFacebook,
        AiFillLinkedin
} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='container footer-section'>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center logo-container">
                <a href="" className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'>
                    <img src={FooterLogo} alt="logo" />
                </a>
                <span class="mb-3  text-muted text-center">© 2022 Marco Lazaro</span>
            </div>
            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-muted" href="#">
                <AiFillFacebook size={30}/>
                </a></li>
                <li class="ms-3"><a class="text-muted" href="#">
                <AiFillLinkedin size={30}/>
                </a></li>
                <li class="ms-3"><a class="text-muted" href="#">
                <AiFillGithub size={30}/>
                </a></li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer
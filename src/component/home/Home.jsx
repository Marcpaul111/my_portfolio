import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect';
import CV from '../../assets/MyCV.pdf'

const Home = () => {
  return (
    <div className='container-fluid home' id='home'>
      
      <div className="container home-content">
        
          <h1 >Hi! I'm Marco</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  'Fullstack developer',
                   'MERN stack developer',
                   'Web developer'
                  ],
                autoStart: true,
                loop: true,
                delay: 5
              }}
            />
          </h2>
          <div className="button-action">
           <a href="" ><span>Hire me</span></a>
           <a href={CV} download="Marco_CV"><span>Download CV</span></a>
          </div>
      </div>

    </div>
  )
}

export default Home
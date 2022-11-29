import React from 'react'
import './About.css'
import mypic from '../../assets/me.jpg'


const About = () => {
  return (
    <div className='container about-section' >

        <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-center ">

                <div className="about-image " id='about'>
                    <img src={mypic} alt="me" className='my-5'/>
                </div>

            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="about-details">
                    <h3>About me</h3>
                    <span className='line'></span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nam rerum veniam adipisci quisquam officia cum, suscipit labore, inventore ipsum unde ex ratione dolorem laudantium! In eius, cum ipsum vel quas consequatur saepe magni at aspernatur quod voluptas repellat, molestias nostrum expedita quae corporis eveniet modi consectetur. Exercitationem veritatis iste nemo obcaecati. Atque doloribus cum facilis optio ea alias quasi voluptas consequuntur modi, autem, laudantium dignissimos reprehenderit tempora? Sed, veritatis!</p>
                </div>
            </div>
        </div>
         
    </div>
  )
}

export default About
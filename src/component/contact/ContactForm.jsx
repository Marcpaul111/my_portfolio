import React from 'react'
import './contact.css'
import ContactImage from '../../assets/Contact.jpg'

const ContactForm = () => {
  return (
    <div className="container contact-section" id='contact'>
         <div className="section-title">
            <h4>Contact Me</h4>
            <span className='line'></span>
         </div>

         <div className="row text-center">

            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">

                <div className="contact-image text-center">

                    <img src={ContactImage} alt="contact_image" />

                </div>
            </div>

            <div className='col-xl-7 col-lg-7 col-md-7 col-sm-7 form-section'>

                <div className="contact-form">
                    <div className="text-center">
                        <h4>Contact Form</h4>
                        <form action="">
                            <label htmlFor="name" className='text-start'>Name </label>
                            <input type="text" name='name' />
                            
                            <label htmlFor="email" className='text-start'>Email </label>
                            <input type="text" name='email' />
                            
                            <label htmlFor="name" className='text-start'>Name </label>
                            <input type="text" name='name' />

                            <label htmlFor="mobile" className='text-start'>Mobile</label>
                            <input type="number" name='mobile'/>

                            <label htmlFor="message" className='text-start'>Your message:</label>
                            <textarea name="message" id="message" cols="5" rows="4" ></textarea>
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                </div>
                
            </div>

         </div>
    </div>
   
  )
}

export default ContactForm
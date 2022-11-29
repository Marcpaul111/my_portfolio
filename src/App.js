import React from 'react'
import About from './component/about/About'
import Sidebar from './component/sidebar/Sidebar'
import Techstack from './component/techstack/Techstack'
import Project from './component/project/Project'
import Education from './component/education/Education'
import ContactForm from './component/contact/ContactForm'
import ScrollToTop from "react-scroll-to-top";
import Footer from './component/footer/Footer'
import MobileNav from './component/sidebar/mobile-view/MobileNav'


const App = () => {
  return (
    <div>
       <MobileNav />
       <Sidebar />
       <About />
       <Techstack />
       <Project />
       <Education />
       <ContactForm />
       <Footer />
       <ScrollToTop smooth
       top={500}
       color='white'
       style={{backgroundColor: '#B05E27'}}/>
    </div>
  )
}

export default App
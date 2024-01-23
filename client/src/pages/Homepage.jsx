import { useState } from 'react'
import Feature from './Home page/Feature';
import 'swiper/css';
import Testimonial from './Home page/Testimonial';
import Faq from './Home page/Faq';
// import FaqMobile from './pages/FaqMobile';
import Navbar from './Home page/Nav';
import Hero from './Home page/Hero';
import Scrolltext from './Home page/Scrolltext';
import Mainfeature from './Home page/Mainfeature';



function Homepage() {
  return (
    <>
     <div className="homepage">
      <Hero/>
      <Scrolltext/>
      <Feature/>
      <Mainfeature/>
      <Testimonial/>
      <Faq/>

     </div>
    </>
  )
}

export default Homepage
import React from 'react'
import Home from './Components/HomePage/Home'
import About from './Components/AboutSection/About'
import Projects from './Components/ProjectSection/Projects'
import Contact from './Components/ContactSection/Contact'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './Navbar'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,  
      once: false,      
      easing: "ease-in",
      mirror:true,
    });
    
  }, []);

  return (
    <div>
      <Navbar />
      <Home/>
      <About />
      <Projects />
      <Contact/>

    </div>
  )
}

export default App

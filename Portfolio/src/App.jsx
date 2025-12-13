import React from 'react'
import Home from './Components/HomePage/Home'
import About from './Components/AboutSection/About'
import Projects from './Components/ProjectSection/Projects'
import Contact from './Components/ContactSection/Contact'




import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,   // animation duration
      once: false,       // animation happens only once
      easing: "ease-in-out",
      mirror:true,
    });
    
  }, []);



  return (
    <div>
      <Home/>
      <About />
      <Projects />
      <Contact/>

    </div>
  )
}

export default App

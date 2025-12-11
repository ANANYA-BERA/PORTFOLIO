import React from 'react'
import Home from './Components/HomePage/Home'
import About from './Components/AboutSection/About'
import Projects from './Components/ProjectSection/Projects'
import Contact from './Components/ContactSection/Contact'


const App = () => {
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

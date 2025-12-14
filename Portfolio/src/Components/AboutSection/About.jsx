import React from 'react'
import AboutText from './AboutText'
import Skills from './Skills'
import AboutImage from './AboutImage'

const About = () => {
  return (
    <div className='font-serif'>
    <div className=' flex justify-between  pr-10'>
      <AboutText />
      <AboutImage />
    </div> 
      <div>
        <Skills />
      </div> 
        
    
  </div>
    
  )
}

export default About

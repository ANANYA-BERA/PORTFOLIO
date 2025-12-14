import React from 'react'
import AboutText from './AboutText'
import Education from './Education'
import Skills from './Skills'
import AboutImage from './AboutImage'

const About = () => {
  return (
    <div className='px-10 pb-10 font-serif'>
    <div className=' flex gap-10'>
      <AboutText />
      <AboutImage />
      
    </div>
      <div className='flex gap-10'>
        <Education />
        <Skills />
      </div> 

  </div>
    
  )
}

export default About

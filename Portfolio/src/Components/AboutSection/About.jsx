import React from 'react'
import AboutText from './AboutText'
import Education from './Education'
import Skills from './Skills'

const About = () => {
  return (
    <div className='px-13 py-8 font-serif'>
      <AboutText />
      <div className='flex gap-10'>
        <Education />
        <Skills />
      </div>
    </div>
  )
}

export default About

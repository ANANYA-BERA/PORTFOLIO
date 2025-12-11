import React from 'react'
import AboutText from './AboutText'
import Education from './education'
import Skills from './Skills'

const About = () => {
  return (
    <div className='h-screen bg-neutral-50 px-13 py-4'>
      <AboutText />
      <div className='flex gap-10'>
        <Education />
        <Skills />
      </div>
    </div>
  )
}

export default About

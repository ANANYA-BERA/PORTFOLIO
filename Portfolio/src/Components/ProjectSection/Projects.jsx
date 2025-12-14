import React from 'react'
import ProjectGrid from './ProjectGrid'

const Projects = () => {
  return (
    <div className='h-screen text-center px-10 py-8 font-serif'>
      <h2 className='text-3xl font-bold text-[#410307]'>My Works</h2>
      <div>
        <ProjectGrid />
      </div>
    </div>
  )
}

export default Projects

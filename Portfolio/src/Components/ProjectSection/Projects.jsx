import React from 'react'
import ProjectGrid from './ProjectGrid'

const Projects = () => {
  return (
    <div className='h-screen text-center px-10 py-8 font-serif bg-[#410307]'>
      <h2 className='text-3xl font-bold text-amber-50'>My Works</h2>
      <div>
        <ProjectGrid />
      </div>
    </div>
  )
}

export default Projects

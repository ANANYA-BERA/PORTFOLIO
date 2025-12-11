import React from 'react'
import ProjectGrid from './ProjectGrid'

const Projects = () => {
  return (
    <div className='bg-neutral-50 h-screen text-center px-10 py-8'>
      <h2 className='text-3xl font-bold text-rose-500'>My Works</h2>
      <div>
        <ProjectGrid />
      </div>
    </div>
  )
}

export default Projects

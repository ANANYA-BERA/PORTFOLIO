import React from 'react'
import Socials from './Socials'

const HeroRight = () => {
  return (
    <div className='flex flex-row justify-between pl-10 py-5 pr-4 w-2/3 items-center'>
      <div className='flex flex-col justify-center py-10'>
        <p className='text-[#884841] font-bold text-2xl'>Hi, It's Ananya</p>
        <h1 className=' text-[#594333] text-6xl font-bold font-serif tracking-tighter py-5'> <span className='text-[#520309]'>Front</span>-end Developer</h1>
         <button data-aos='fade-up' className='btn text-[#f9f4f2] bg-[#884841]  transition durstion-300 ease-in-out hover:-translate-y-2 hover:scale-120'>Dounload CV</button>
      </div>
      <div>
        <Socials />
      </div>
    </div>
  )
}

export default HeroRight

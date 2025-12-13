import React from 'react'
import Socials from './Socials'

const HeroRight = () => {
  return (
    <div className='flex flex-row justify-between pl-10 py-5 pr-4 w-2/3 items-center'>
      <div className='flex flex-col justify-center py-10'>
        <h2 className='text-[#636a81] font-bold text-2xl'>Hi, It's Ananya</h2>
        <span className='tracking-tight HText font-serif'> <span className='text-rose-600'>Front</span>end Developer</span>
        <button className='btn transition durstion-300 ease-in-outhover:-translate-y-2 hover:scale-120'>Dounload CV</button>
      </div>
      <div>
        <Socials />
      </div>
    </div>
  )
}

export default HeroRight

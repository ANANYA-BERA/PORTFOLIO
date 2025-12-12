import React from 'react'

const HeroRight = () => {
  return (
    <div className='flex flex-col w-2/3 justify-center px-20 '>
      <h2 className='text-[#636a81] font-bold text-2xl' data-aos="fade-right" >Hi, It's Ananya</h2>
      <span data-aos='zoom-in' className='tracking-tight HText '> <span className='text-rose-600'>Front</span>end Developer</span>
      <button data-aos='slide-up' className='btn transition durstion-300 ease-in-outhover:-translate-y-2 hover:scale-120'>Dounload CV</button>
    </div>
  )
}

export default HeroRight

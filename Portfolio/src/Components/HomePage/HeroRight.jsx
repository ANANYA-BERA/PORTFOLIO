import React from 'react'

const HeroRight = () => {
  return (
    <div className='flex flex-col w-2/3 justify-center px-20 '>
      <h2 className='text-[#5f517b] font-bold text-2xl' data-aos="fade-right" >Hi, It's Ananya</h2>
      <span className='tracking-tight HText' data-aos='zoom-in' > <span className='text-rose-500'>Front</span>end Developer</span>
      <button className='btn transition durstion-300 ease-in-outhover:-translate-y-2 hover:scale-120'  data-aos='slide-up'>Dounload CV</button>
    </div>
  )
}

export default HeroRight

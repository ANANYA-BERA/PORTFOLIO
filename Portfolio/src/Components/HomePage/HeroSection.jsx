import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const HeroSection = () => {
  return (
    <div className='flex justify-between px-20 py-10 gap-10 h-[80vh] items-center'>
      <HeroLeft/>
      <HeroRight/>
    </div>
  )
}

export default HeroSection

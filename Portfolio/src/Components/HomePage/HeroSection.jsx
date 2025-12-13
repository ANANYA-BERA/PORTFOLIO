import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const HeroSection = () => {
  return (
    <div className='flex px-5 py-20 gap-10 items-center'>
      <HeroLeft/>
      <HeroRight/>
    </div>
  )
}

export default HeroSection

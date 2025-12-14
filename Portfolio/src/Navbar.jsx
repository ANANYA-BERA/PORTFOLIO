import React from 'react'

const Navbar = () => {
  return (
    
    <div className='items-center justify-between flex px-6 py-4 text-center bg-[#fff4e4] sticky top-0 z-50'>
      <h1 className='text-[15px] text-[#884841] font-bold'>Ananya.</h1>  
      <div className='gap-5 text-lg font-medium flex items-center cursor-pointer  text-[#884841]'>
      <a className='px-5 py-1 rounded-xl hover:text-[#360005]'>About</a>
      <a className='px-5 py-1 rounded-xl hover:text-[#360005]'>Projects</a>
      <a className='px-5 py-1 rounded-xl hover:text-[#360005]'>Contact</a>
      </div>  
    </div>
    

  )
}

export default Navbar

import React from 'react'

const Navbar = () => {
  return (
    
    <div className='items-center justify-between flex px-6 py-4 text-center bg-[#f9f4f2] sticky top-0 z-50'>
      <h1 className='text-[15px] text-[#856265] font-bold'>Ananya.</h1>  
      <div className='gap-5 text-lg font-medium flex items-center cursor-pointer text-[#360005]'>
      <a className='px-5 py-1 rounded-xl hover:text-[#856265]'>About</a>
      <a className='px-5 py-1 rounded-xl hover:text-[#856265]'>Projects</a>
      <a className='px-5 py-1 rounded-xl hover:text-[#856265]'>Contact</a>
      </div>  
    </div>
    

  )
}

export default Navbar

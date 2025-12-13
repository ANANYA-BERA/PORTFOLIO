import React from 'react'

const Navbar = () => {
  return (
    
    <div className='items-center justify-between flex px-6 py-5 text-center'>
      <h1 className='text-[15px] text-[#856551] font-bold'>Ananya.</h1>  
      <div className='gap-5 text-lg font-medium flex items-center cursor-pointer text-[#31231b]'>
      <a className='px-5 py-1 rounded-xl hover:bg-rose-100 hover:text-rose-600'>About</a>
      <a className='px-5 py-1 rounded-xl hover:bg-rose-100 hover:text-rose-600'>Projects</a>
      <a className='px-5 py-1 rounded-xl hover:bg-rose-100 hover:text-rose-600'>Contact</a>
      </div>  
    </div>
    

  )
}

export default Navbar

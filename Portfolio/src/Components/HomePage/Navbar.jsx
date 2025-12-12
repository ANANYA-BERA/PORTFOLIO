import React from 'react'

const Navbar = () => {
  return (
    <div className='' >
    <div className='items-center justify-between flex px-6 py-4 text-center'>
      <h1 className='text-[15px] text-[#646a81] font-bold'>Ananya.</h1>  
      <div className='justify-between text-lg font-medium flex items-center cursor-pointer'>
      <a className='px-5 py-1 rounded-xl text-[#212842] hover:bg-rose-100 hover:text-rose-600'>About</a>
      <a className='px-5 py-1 rounded-xl text-[#212842] hover:bg-rose-100 hover:text-rose-600'>Projects</a>
      <a className='px-5 py-1 rounded-xl text-[#212842] hover:bg-rose-100 hover:text-rose-600'>Contact</a>
      </div>  
    </div>
    </div>

  )
}

export default Navbar

import React from 'react'

const Navbar = () => {
  return (
    <div className='items-center justify-between flex px-10 py-3 bg-blue-950 shadow-amber-50'>
      <h1 className='text-2xl uppercase text-gray-100 tracking-wider'>Ananya</h1>  
      <div className='justify-between'>
      <a className='text-xm px-5 py-2 text-gray-300 m-5 rounded-lg bg-gray-900'>About</a>
      <a className='text-xm px-5 py-2 rounded-2xl text-gray-300 m-5'>Projects</a>
      <a className='text-xm px-5 py-2 rounded-2xl text-gray-300 m-5'>Contact</a>
      </div>  
    </div>
  )
}

export default Navbar

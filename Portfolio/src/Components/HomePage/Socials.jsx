import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";

const Socials = () => {
  return (
    <div className='text-xl flex flex-col gap-10 pr-3 text-[#884841]' data-aos='slide-left'>
      <a href="https://github.com/username" target="_blank" className=" p-1 rounded-full border-2 border-[#dbc1b2] hover:text-[#594333]  transition durstion-600 ease-in-out hover:-translate-y-2 hover:scale-120">
        <FaGithub />
      </a>

      <a href="https://linkedin.com/in/username" target="_blank" className="p-1 rounded-full border-2  border-[#dbc1b2] hover:text-[#594333] transition durstion-600 ease-in-out hover:-translate-y-2 hover:scale-120">
        <FaLinkedin />
      </a>

      <a href="https://instagram.com/username" target="_blank" className="p-1 rounded-full border-2  border-[#dbc1b2] hover:text-[#594333] transition durstion-600 ease-in-out hover:-translate-y-2 hover:scale-120">
        <FaInstagram />
      </a>

    </div>
  )
}

export default Socials

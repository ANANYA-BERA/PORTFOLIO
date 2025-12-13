import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";


const Socials = () => {
  return (
    <div className='py-10 px-3 flex flex-col gap-10 rounded-4xl border-2 border-[#9c806e] text-xl' data-aos='slide-left'>
      <a href="https://github.com/username" target="_blank" className="hover:text-gray-900 text-[#4d3e35] transition durstion-600 ease-in-outhover:-translate-y-2 hover:scale-120">
        <FaGithub />
      </a>

      <a href="https://linkedin.com/in/username" target="_blank" className="hover:text-blue-600 text-[#4d3e35] transition durstion-600 ease-in-outhover:-translate-y-2 hover:scale-120">
        <FaLinkedin />
      </a>

      <a href="https://instagram.com/username" target="_blank" className="hover:text-fuchsia-700 text-[#4d3e35] transition durstion-600 ease-in-outhover:-translate-y-5 hover:scale-120">
        <FaInstagram />
      </a>

    </div>
  )
}

export default Socials

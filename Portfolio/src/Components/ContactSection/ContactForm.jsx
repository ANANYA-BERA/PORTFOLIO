import React from 'react'

const ContactForm = () => {
  return (
    <div className='w-1/2 py-10 px-20' >
      <form>
        <div data-aos='fade-up' className='flex flex-row gap-5 border-b-[1.5px] border-[#e8d8c3] mb-8'>
          <label className='text-[#fff8ef] pb-1 text-xm'>
            Full Name
          </label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            className='w-[75%] outline-none text-[#fdfcfa] font-medium' 
          />
        </div>

        <div data-aos='fade-up' className='flex flex-row gap-5 border-b-[1.5px] border-[#e8d8c3] mb-8'>
          <label className='text-[#fff8ef] pb-1 text-xm'>
            Email
          </label>
          <input
            id="eamil"
            name="email"
            type="email"
            className='w-[75%] outline-none text-[#fdfcfa] font-medium' 
          />
        </div>

        <div data-aos='fade-up' className='flex flex-row gap-5 border-b-2 border-[#e8d8c3] mb-8'>
          <label className='text-[#fff8ef] pb-1 text-xm'>
            Message
          </label>
          <input
            id="message"
            name="message"
            type="text"
            className='w-[75%] outline-none text-[#fdfcfa] font-medium' 
          />
        </div>

        <div className='ml-63 mt-15'>
        <button data-aos='zoom-in' className='btn bg-[#fff7f2] text-[#31231b] tracking-tight transition durstion-300 ease-in-outhover:-translate-y-2 hover:scale-120 '>Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm

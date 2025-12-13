import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <div className=" bg-amber-50 px-10 py-10 w-1/2">
      <form action="#" method="POST" className="mx-auto mt-5 flex flex-col justify-center">
        
          <div className='flex flex-row gap-5 items-baseline-last'>
            <label htmlFor="name" className="text-sm/6 font-semibold text-[#212842]">
              Full Name
            </label>
            <div className="mt-1">
              <input
                id="fullname"
                name="fullname"
                type="text"
                className=" w-xs text-lg border-b-[1.5px] text-[#212842]"
              />
            </div>
          </div>
          
          
          
          <div className="flex flex-row gap-5 items-baseline-last">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-[#212842]">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className='w-xs text-lg border-b-[1.5px] text-[#212842]'
               />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-[#212842]">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={2}
               className="block w-full rounded-md bg-orange-50 px-3.5 py-1 text-base text-[#212842] outline-1 -outline-offset-1 outline-[#212842] placeholder:text-stone-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#767d96]"
                defaultValue={''}
              />
            </div>
          </div>
          
        
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="mb-5 bg-rose-400 text-white text-lg font-semibold rounded-xl py-2 px-10 transition durstion-300 ease-in-outhover:-translate-y-1 hover:scale-110"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ContactForm

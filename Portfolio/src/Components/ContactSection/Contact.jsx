import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Contact() {
  return (
    <div className="isolate gradient px-85 py-9 m-10 rounded-3xl">
      <div className=" text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-rose-50 ">Contacts </h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-5 flex flex-col justify-center">
        
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
              Full Name
            </label>
            <div className="mt-1">
              <input
                id="fullname"
                name="fullname"
                type="text"
                className="block w-full rounded-md bg-white/5 px-3.5 py-1 text-base text-white outline-1 -outline-offset-1 outline-rose-100 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-200"
              />
            </div>
          </div>
          
          
          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3.5 py-1 text-base text-white outline-1 -outline-offset-1 outline-rose-100 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-200"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={2}
                className="block w-full rounded-md bg-white/5 px-3.5 py-1 text-base text-white outline-1 -outline-offset-1 outline-rose-100 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-200"
                defaultValue={''}
              />
            </div>
          </div>
          
        
        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className=" bg-rose-500 text-white text-lg font-semibold rounded-xl py-2 px-10 transition durstion-300 ease-in-outhover:-translate-y-1 hover:scale-110"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}

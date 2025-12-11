import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Contact() {
  return (
    <div className="isolate bg-rose-50 px-85 py-6 m-10 rounded-3xl shadow">
      <div className=" text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-rose-500 ">Contacts </h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-5 flex flex-col justify-center">
        
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-violet-600">
              Full Name
            </label>
            <div className="mt-1">
              <input
                id="fullname"
                name="fullname"
                type="text"
                placeholder='Your name'
                className="block w-full rounded-md bg-purple-100 px-3.5 py-1 text-base text-violet-600 outline-1 -outline-offset-1 outline-purple-600 placeholder:text-stone-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-300"
              />
            </div>
          </div>
          
          
          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-violet-600">
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder='example@gmail.com'
                className="block w-full rounded-md bg-purple-100 px-3.5 py-1 text-base text-violet-600 outline-1 -outline-offset-1 outline-purple-600 placeholder:text-stone-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-300"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-violet-600">
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={2}
                className="block w-full rounded-md bg-purple-100 px-3.5 py-1 text-base text-violet-600 outline-1 -outline-offset-1 outline-purple-600 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-300"
                defaultValue={''}
              />
            </div>
          </div>
          
        
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className=" bg-rose-400 text-white text-lg font-semibold rounded-xl py-2 px-10 transition durstion-300 ease-in-outhover:-translate-y-1 hover:scale-110"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}

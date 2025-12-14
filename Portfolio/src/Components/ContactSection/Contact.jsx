import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Footer from './Footer'
import ContactForm from './ContactForm'
import ContactText from './ContactText'

export default function Contact() {
  return (
    <div className='bg-[#360005] p-5'>
      <div className=' flex flex-row pb-10 gap-10 items-center px-10'>
        <ContactText />
        <ContactForm />
      </div>
    <Footer />
    </div>


  )
}

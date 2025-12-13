import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Footer from './Footer'
import ContactForm from './ContactForm'
import ContactText from './ContactText'

export default function Contact() {
  return (
    <div className=' bg-[#9f8e81] p-10 font-mono'>
      <div className=' flex flex-row pb-10 gap-30 items-center'>
        <ContactText />
        <ContactForm />
      </div>
    <Footer />
    </div>


  )
}

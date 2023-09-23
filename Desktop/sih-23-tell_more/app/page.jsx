import ContactForm from '@/components/ContactForm';
//import {FaEnvelope, FaInstagram, FaPhoneAlt, FaMapMarked} from "react-icons/fa"
//import { FaTwitter, FaFacebook} from 'react-icons/fa';
export default function Home() {

  return (
  <div className='home'>
     <div className="p-4 max-w-3xl mx-auto" id='page'>
        <h1 className="text-4xl font-bold">Tell Us More!!</h1>
        <p>Please fill in the form below</p>
        <ContactForm/>
      </div>
  </div>);
  
}

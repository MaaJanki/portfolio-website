import React from 'react'
import Nav from '../components/nav'
import Contactprofile from '../img/interview-image.jpg'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import Footer from './footer';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div className='bg-white'>
      <Helmet>
      <title>Shiv_Raj - contact</title>
    </Helmet>
      <Nav />
      <div className='w-full md:hidden block  h-auto mt-2'><img className='w-32 h-32 mx-auto rounded-full object-top  object-cover' src={Contactprofile} alt="" /></div>
      <div className='sm:w-[100%] h-full  relative  md:hidden block'>
            <div className='socialmedialinks w-full'>
              <h2 className='text-black text-center mr-2 mt-2 font-bold'>Social Media Links</h2>
              <div className='socialicon w-full justify-center  p-3 flex gap-6'>
                <a href="https://github.com/shivraut24" className='w-10 h-10 bg-blue-400  rounded flex items-center justify-center transition-all hover:bg-black hover:text-white text-black' target="_blank"><GitHubIcon className='socialiconlist ' /></a>
                <a href="https://www.linkedin.com/in/shiv-raut-73aa11254/" className='w-10 h-10 bg-blue-400 rounded flex items-center justify-center transition-all hover:bg-blue-900 hover:text-white text-blue-900' target="_blank"><LinkedInIcon className='socialiconlist' /></a>
                <a href="https://wa.me/9779825823297?text=Welcome%20to%20Shiv%20Raj%20account" className='w-10 h-10 bg-blue-400  rounded flex items-center justify-center transition-all hover:text-white text-green-900' target="_blank"><WhatsAppIcon className='socialiconlist' /></a>
                <a href="https://www.facebook.com/shiv.raja.9404" className='w-10 h-10 bg-blue-400  rounded flex items-center justify-center transition-all hover:bg-blue-900 hover:text-white text-blue-900' target="_blank"><FacebookIcon className='socialiconlist' /></a>
              </div>
            </div>
          </div>

      <div className='w-full max-h-max flex flex-col gap-5 mt-2'>
        <div className='md:w-[80%] w-[95%] h-fit bg-gray-300 flex backdrop-blur-[10px] mx-auto rounded '>
          <div className='w-[65%] h-full flex  '>
            <div className='w-[250px] md:block hidden h-[200px]'><img className='w-[100%] h-[100%] object-top  object-cover' src={Contactprofile} alt="" /></div>
            <div className='w-full h-full  flex'>

              <div className='w-8 h-[200px] bg-blue-300 rounded-md px-2 flex flex-col gap-4 pt-4 items-center text-blue-900'>
                <p> <EmailIcon /> </p>
                <p><PhoneIcon /></p>
                <p><LocationOnIcon /></p>
              </div>

              <div className='w-full h-[200px] ml-2  flex flex-col gap-4 pt-4 text-black'>
                <p>shivrajraut74@gmail.com</p>
                <p>+9779825823297</p>
                <p>Laxminiya Gaupalika-7 Dhanusha <br /> province-02 Nepal</p>
              </div>

            </div>
          </div>
          
          <div className='md:w-[35%] h-full relative md:block hidden'>
            <div className="designshape"></div>
            <div className='socialmedialinks  absolute z-10 w-full'>
              <h2 className='text-white text-right mr-2 mt-2 font-bold'>Social Media Links</h2>
              <div className='socialicon w-full justify-end bg-red-100 p-3 flex gap-6'>
                <a href="https://github.com/shivraut24" className='w-10 h-10 bg-white rounded flex items-center justify-center transition-all hover:bg-black hover:text-white text-black' target="_blank"><GitHubIcon className='socialiconlist ' /></a>
                <a href="https://www.linkedin.com/in/shiv-raut-73aa11254/" className='w-10 h-10 bg-white rounded flex items-center justify-center transition-all hover:bg-blue-900 hover:text-white text-blue-900' target="_blank"><LinkedInIcon className='socialiconlist' /></a>
                <a href="https://wa.me/9779825823297?text=Welcome%20to%20Shiv%20Raj%20account" className='w-10 h-10 bg-white rounded flex items-center justify-center transition-all hover:bg-green-500 hover:text-white text-green-500' target="_blank"><WhatsAppIcon className='socialiconlist' /></a>
                <a href="https://www.facebook.com/shiv.raja.9404" className='w-10 h-10 bg-white rounded flex items-center justify-center transition-all hover:bg-blue-900 hover:text-white text-blue-900' target="_blank"><FacebookIcon className='socialiconlist' /></a>
              </div>
              <h1 className='nameplate text-4xl relative uppercase font-extrabold text-white pt-4 pl-8'>Shiv raj raut</h1>
            </div>
          </div>

        </div>
        <div className='md:w-[80%] w-[95%] h-fit bg-gray-300 mb-8 flex backdrop-blur-[10px] mx-auto rounded '>
          <div className='formcontainer md:w-1/2 w-full '>
            <form action="" className='w-full p-3 flex flex-col gap-2 text-black'>
              <h1 className='text-center text-2xl font-bold'>Leave Your Message Here!</h1>
              <div className="formgroup w-full">
                <label className="formlabel" for="name">Name</label><br />
                <input className="forminput w-full rounded focus:border-red-600 focus:border-[1px] py-1 px-4 outline-none" type="text" id="name" name="name" />
              </div>

              <div className="formgroup">
                <label className="formlabel" for="email">Email</label><br />
                <input className="forminput w-full rounded focus:border-red-600 focus:border-[1px] py-1 px-4 outline-none" type="email" id="email" name="email" />
              </div>

              <div className="formgroup">
                <label className="formlabel" for="phoneno">Phone No</label><br />
                <input className="forminput w-full rounded focus:border-red-600 focus:border-[1px] py-1 px-4 outline-none" type="text" id="phoneno" name="phoneno" />
              </div>

              <div className="formgroup">
                <label className="formlabel" for="message">Message</label><br />
                <textarea placeholder='leave your message.........' className="forminput w-full rounded focus:border-red-600 focus:border-[1px] bg-white py-1 px-4 outline-none" type="text" id="message" name="message" />
              </div>

              <div className="formgroup">
                <button className='bg-red-600 p-2 rounded text-white hover:bg-red-800'>Send Message</button>
              </div>
            </form>
          </div>
          <div className='contactinfo w-1/2 p-4  bg-red-100 rounded md:block hidden'>
          <h1 className='text-center text-2xl font-bold'>Info.</h1>
            <p className='mt-4 text-justify text-gray-600'>
              As a dedicated Computer Engineering professional, I bring a deep passion for technology and a robust skill set honed through years of experience in the industry. My expertise spans software development, systems architecture, and innovative problem-solving, enabling me to craft efficient and scalable solutions. Whether it's designing cutting-edge applications, optimizing complex systems, or exploring the latest advancements in technology, I am committed to delivering excellence in every project I undertake. Let's connect and collaborate on building the future of technology together
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Contact

import React from 'react'
import Nav from '../components/nav'
import Interview from '../img/interview-image.jpg'
import { Helmet } from 'react-helmet';

const About = () => {
  return (

    <div className="h-screen w-screen bg-myColor-navcolor ">
        <Helmet>
      <title>Shiv_Raj - about</title>
     </Helmet>

         <Nav/>
      <div className="container  text-black">
 
        {/* Main Content */}
        <main className="md:flex h-full mt-12 lg:mt-32  px-8 justify-center items-center">
          {/* Left Column */}
          <div className="md:w-1/2 w-full md:pr-8 ">
            <div className="relative">
              <div className="absolute md:-top-4 md-left-4 md:w-64 md:h-64  rounded md:rounded-full opacity-20"></div>
              <img src={Interview} alt=""

                className="w-72 h-72 object-cover object-top rounded-full relative z-10 mx-auto"
              />
            </div>
           
          </div>
          {/* Right Column */}
          <div className="md:w-1/2 w-full ">
          <div className='flex justify-center items-center lg:flex lg:justify-start lg:items-start  flex-col'>
            <h1 className="md:text-6xl text-2xl  font-bold mt-4 w-fill">About Me.</h1>
            <div className='w-16 mb-4 h-1  bg-red-500'></div>
          </div>
            <p className="md:text-xl text-md mb-8 text-justify">
              I’m a Computer Engineering student with a passion for technology and development. Skilled in HTML, CSS, JavaScript, React, and Flutter, I create engaging and efficient web and mobile applications. I thrive on learning and tackling new challenges, aiming to innovate and contribute to impactful projects.
            </p>
          </div>
        </main>
        
        
      </div>
    </div>
  )
}

export default About

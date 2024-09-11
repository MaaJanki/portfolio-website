import React from 'react'
import Nav from '../components/nav'
import Interview from '../img/interview-image.jpg'
const About = () => {
  return (

    <div className=" min-h-screen bg-myColor-navcolor ">
<Nav/>

      <div className="container mx-auto px-4">
 
        {/* Main Content */}
        <main className="md:flex mt-8 ">
          {/* Left Column */}
          <div className="md:w-1/2 w-full md:pr-8 ">
            <div className="relative">
              <div className="absolute md:-top-4 md-left-4 md:w-64 md:h-64  rounded md:rounded-full opacity-20"></div>
              <img src={Interview} alt=""

                className="w-72 h-72 object-cover rounded md:rounded-full relative z-10 mx-auto"
              />
            </div>
           
          </div>
          {/* Right Column */}
          <div className="md:w-1/2 w-full">
            <h1 className="md:text-6xl text-xl text-center font-bold mt-4">About Me.</h1>
            <p className="md:text-xl text-md mb-8 text-justify">
              I’m a Computer Engineering student with a passion for technology and development. Skilled in HTML, CSS, JavaScript, React, and Flutter, I create engaging and efficient web and mobile applications. I thrive on learning and tackling new challenges, aiming to innovate and contribute to impactful projects.
            </p>
          </div>
        </main>
        <div className="absolute bottom-20 left-1/2">
          
        </div>
        
      </div>
    </div>
  )
}

export default About

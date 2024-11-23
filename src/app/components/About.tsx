import React from 'react'
import Image from 'next/image'


const About = () => {
  return (
    <div id='About'>
        <section className="text-white body-font bg-black">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image
        className="object-cover object-center rounded mx-auto w-[13rem]  "
        alt="hero"
        width={300}
        height={500}
        src={require("../../../public/logo pic/newpp.jpg")}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#ee8bd5] ">
        About Me
        
      </h1>
      <p className="mb-8 leading-relaxed">
      Hi I am  Mehak! A web developer and UI/ UX Designer with 5 years of experience 
     Thank you for visiting my website and getting to know me better
     with a passion for problem solving and creativity i love building dynamic web application. 
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#ee8bd5] border-0 py-2 px-6 focus:outline-none hover:bg-[#863a7b] rounded text-lg">
          View CV
        </button>
        
      </div>
    </div>
  </div>
</section>

      
    </div>
  )
}

export default About

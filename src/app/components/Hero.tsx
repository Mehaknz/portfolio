"use client";
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

const Hero = () => {
  return (
    
        <section className="text-white bg-black bg-fixed ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h2 className=' title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>Hello <br />
      its me Mehak Naz
      
      </h2>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#ee8bd5]">
        I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Web developer', 'UI/UX Designer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className='w-[150]'></div>
      <p className="mb-8 leading-relaxed">
      Hi I am  Mehak! A web developer and UI/ UX Designer with 5 years of experience 
     Thank you for visiting my website and getting to know me better
     with a passion for problem solving and creativity i love building dynamic web application. 
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"} >
        <button className="inline-flex text-white bg-[#ee8bd5] border-0 py-2 px-6 focus:outline-none hover:bg-[#863a7b] rounded text-lg">
          Contact Me
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15rem] "
        alt="hero"
        width={300}
        height={500}
        src={require("../../../public/logo pic/newpp.jpg")}
      />
    </div>
  </div>
</section>

      
    
  )
}

export default Hero

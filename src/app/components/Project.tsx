import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
  return (
    <div id='Project'>
      <section className="text-gray-600 body-font bg-black">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        Projects
      </h1>
    
    </div>
    <div className="flex flex-wrap -m-5 mt-9">
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/logo pic/ecomweb.jpeg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-[#ee8bd5] mb-1">
              E-Commerce Website
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Website
            </h1>
            <p className="leading-relaxed">
            This is an E-Commerce Website.
            </p>
            <Link href={"c:\Users\pc\Desktop\picweb\web.jpg"} >

            <p className="leading-relaxed  text-[#ee8bd5] hover:underline">
            view projects
            </p>
            </Link>

          </div>
        </div>
      </div>


      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative ">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/logo pic/restu.jpeg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-[#ee8bd5] mb-1">
              Resturent
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Website
            </h1>
            <p className="leading-relaxed">
            This is a Resturent Website.
            </p>
            <Link href={"c:\Users\pc\Desktop\picweb\web.jpg"} >

            <p className="leading-relaxed  text-[#ee8bd5] hover:underline">
            view projects
            </p>
            </Link>
            

  
        
      

          </div>
        </div>
      </div>


      
    
    </div>
  </div>
</section>

    </div>
  )
}

export default Project

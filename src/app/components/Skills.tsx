import React from 'react'

import {FaHtml5 } from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {TbBrandJavascript } from 'react-icons/tb'

const Skills = () => {
  return (
    <div id='skills'>
        <section className="text-gray-600 body-font bg-black">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      {/* <h2 className="text-xl text-[#0cc4c4] tracking-widest font-medium title-font mb-1">
        Skills
      </h2> */}
      <h1 className="sm:text-3xl text-4xl font-medium title-font text-white">
       Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#f75f28] text-white flex-shrink-0">
            <div className='text-xl font-bold'><FaHtml5 /></div>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              html 
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-0.5 w-full bg-gray-500 rounded-xl'>

            </div>
            
              <div className='absolute bg-[#ee8bd5] h-1 rounded-xl w-[24.5%]'>
                
              </div>
              <div>
              <p className='font-bold text-white text-right'>100%</p>

            </div>
        
           
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#2e78c7] text-white flex-shrink-0">
            <div className='text-xl font-bold'><FaCss3Alt /></div>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-0.5 w-full bg-gray-500 rounded-xl'>

            </div>
            
              <div className='absolute bg-[#ee8bd5] h-1 rounded-xl w-[18%]'>
                
              </div>
              <div>
              <p className='font-bold text-white text-right'>80%</p>

            </div>
        
           
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#f5e618] text-white flex-shrink-0">
            <div className='text-xl font-bold'><TbBrandJavascript /></div>
            </div>
            <h2 className="text-white text-lg title-font font-medium">
              Javascript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-0.5 w-full bg-gray-500 rounded-xl'>

            </div>
            
              <div className='absolute bg-[#ee8bd5] h-1 rounded-xl w-[15%]'>
                
              </div>
              <div>
              <p className='font-bold text-white text-right'>60%</p>

            </div>
        
           
          </div>
        </div>
      </div>
   
    
    </div>

   
  </div>

 
</section>

      
    </div>
  )
}

export default Skills

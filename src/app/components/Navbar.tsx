
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='bg-[rgb(11,17,22)] z-50 sticky top-0'>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    <Image  src={require("../../../public/logo pic/logom.webp")} alt="logo pic" width={100} height={100}  />
      <span className="ml-3 text-xl">Mehak's Portfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white">
      <Link href={"/"} className="mr-5 hover:text-[#ee8bd5]">Home</Link>
      <Link href={"#About"} className="mr-5 hover:text-[#ee8bd5]">About</Link>
      <Link href={"#skills"} className="mr-5 hover:text-[#ee8bd5]">skills</Link>
      <Link href={"#Project"} className="mr-5 hover:text-[#ee8bd5]">projects</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-[#ee8bd5]">Contact</Link>
    </nav>
    <a href="/logo pic/cv2.jpg.pdf" className="h-36 w-24" download>
  <button className="inline-flex text-white items-center bg-[#ee8bd5] border-0 py-1 px-3 focus:outline-none hover:bg-[#863a7b] rounded text-base mt-4 md:mt-0">
    Download
    <FaCloudDownloadAlt />
  </button>
</a>
  </div>
</header>

      
    </div>
  )
}

export default Navbar

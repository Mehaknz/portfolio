import React from 'react'

const Contact = () => {
  return (
    <div id='Contact'>
  
        <section className="text-gray-600 body-font relative bg-black">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl ml-[30rem] font-medium text-white ">
        Contact 
        
      </h1>
      </div>
   
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-black rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
   
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14483.341294426651!2d67.04780358407191!3d24.835304620526284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c3765cb8f1f%3A0x1fdb63938983f474!2sD.H.A.%20Phase%202%20Phase%202%20Defence%20Housing%20Authority%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2075500%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731262507776!5m2!1sen!2s"
        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-black relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            DHA Phase 2 karachi
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-grey-900 leading-relaxed">mnaz97125@email.com</a>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">0345555</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-black flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-blue-500 text-lg mb-1 font-medium title-font">
        Contact
      </h2>
      <p className="leading-relaxed mb-5 text-white">
        feel free to Contact me
      </p>
      <div className="relative mb-3">
        <label htmlFor="name" className="leading-7 text-sm text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
        send message
      </button>
    
    </div>
  </div>
</section>

      
    </div>
  )
}

export default Contact




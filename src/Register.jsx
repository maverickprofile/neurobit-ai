import React from "react";

const Register = () => {
  return (
    <section 
      className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 lg:px-20 
      bg-[radial-gradient(circle,_#1E1D21_0%,_#18181A_100%)]
      bg-[url('./register bg_cleanup (1).jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Left Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-4xl font-bold text-white mb-4">
          Get a Demo Call from NeuroBit AI
        </h2>
        <p className="text-[#AFAFAF] text-lg">
          Experience the power of NeuroBit AI’s advanced voice assistant by scheduling a personalized demo call. 
          Simply fill out the form, and our intelligent virtual assistant will connect with you to demonstrate its 
          natural conversation abilities and how it can enhance your business operations.
        </p>
      </div>

      {/* Right Form Section with Google Form */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <div className="bg-[#DADADA] p-6 rounded-lg shadow-md max-w-lg mx-auto">
          {/* Google Form Embed */}
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSca3NiIBuir-7xR7mVV_J1yyZucIqCU2co4unMZpZgUX_7BYg/viewform?embedded=true" 
            width="100%" 
            height="600" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0" 
            className="rounded-lg"
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Register;

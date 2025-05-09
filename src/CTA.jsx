import React from "react";

const CallToAction = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-gray-100 rounded-2xl w-full max-w-5xl py-12 px-6 sm:px-12 text-center shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        Supercharge Your Communication with AI!
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
        Join over users leveraging AI-powered voice assistance for seamless conversations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md flex items-center gap-2">
            Get Started <span className="ml-1">&#8594;</span>
          </button> */}
          <a href="#register">
          <button className="bg-white border border-gray-300 hover:border-gray-400 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-sm">
            Talk to an Expert
          </button>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

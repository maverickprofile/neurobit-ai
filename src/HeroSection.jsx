import React from "react";
import './styles/hero.css'; // Import your CSS file for custom styles

const Hero = () => {
  return (
    <section className="hero relative flex flex-col items-center justify-center text-center min-h-screen pt-20 px-4 bg-white">
      
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <video 
          className="w-full h-full object-cover opacity-80"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/550090217397c11ed0ecc5e1fbd77694.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Fade Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-snug sm:leading-tight text-center">
          Revolutionize Your{" "}
          <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#2fabe0_0%,_#f187f5_100%)]">
            Operations
          </span>{" "}
          with AI Voice and Chat Solutions
        </h1>

        <p className="text-base sm:text-lg mt-4">
          Discover the new way to build, test, deploy, and monitor production-ready AI voice agents at scale.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
        <a href="#register"><button className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-md font-medium transition duration-300 hover:bg-gray-800">
            TRY FOR FREE
          </button></a>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

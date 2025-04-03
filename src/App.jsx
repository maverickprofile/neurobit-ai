import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css';
import Navbar from './Navbar'; // Import Navbar component
import HeroSection from './HeroSection'; // Import HeroSection component
import Features from './Features'; // Import Features component
import Register from './Register'; // Import Register component
import Howitworks from './Howitworks'; // Import Howitworks component
import MoreFeatures from './MoreFeatures';
import Pricing from './Pricing'; // Import Pricing component
import FAQ from './FAQ';
import CTA from './CTA'; // Import CTA component
import Footer from './Footer'; // Import Footer component

function App() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />
      
      {/* Main Content */}
      <HeroSection />

      {/* Feature Component */}
      <Features />

      {/* Register Component */}
      <Register />

      {/* How it works Component */}
      <Howitworks />

      {/* More Features Component */}
      <MoreFeatures />

      {/* Pricing Component */}
      <Pricing />

      {/* FAQ Component */}
      <FAQ />

      {/* Contact Us Component */}
      <CTA />

      {/* Add your Contact Us component here */}

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default App;

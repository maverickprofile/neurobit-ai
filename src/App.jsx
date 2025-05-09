import { useEffect } from 'react';
// import './styles/chatbot-theme.css'; // keep this if you want extra styles
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Features from './Features';
import Register from './Register';
import Howitworks from './Howitworks';
import MoreFeatures from './MoreFeatures';
import Pricing from './Pricing';
import FAQ from './FAQ';
import CTA from './CTA';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Register />
      <Howitworks />
      <MoreFeatures />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
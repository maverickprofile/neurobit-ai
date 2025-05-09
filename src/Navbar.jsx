import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/neurobit_ai_logo-removebg-preview (1).png"
              alt="Logo"
              className="h-10 mr-2"
              style={{ transform: "scale(1.3)" }}
            />
            <a href="#" className="text-xl font-semibold text-gray-800">
              Neurobit AI
            </a>
          </div>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex space-x-10 mx-auto">
            <a href="#features" className="text-black hover:text-gray-500 font-medium">
              Features
            </a>
            <a href="#pricing" className="text-black hover:text-gray-500 font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-black hover:text-gray-500 font-medium">
              FAQ
            </a>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <a href="#register">
              <button className="bg-black hover:bg-gray-600 text-white px-5 py-2 rounded-[5px] text-sm font-semibold transition">
                CONTACT US
              </button>
            </a>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                className="h-6 w-6 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 space-y-3 shadow-md">
          <a href="#features" className="block text-gray-700 hover:text-orange-500 font-medium">
            Features
          </a>
          <a href="#pricing" className="block text-gray-700 hover:text-orange-500 font-medium">
            Pricing
          </a>
          <a href="#faq" className="block text-gray-700 hover:text-orange-500 font-medium">
            FAQ
          </a>
          <a href="#register">
            <button className="mt-3 w-full bg-black hover:bg-gray-600 text-white px-4 py-2 rounded-[10px] font-medium transition">
              CONTACT US
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

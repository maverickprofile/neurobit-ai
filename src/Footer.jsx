import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div>
              <h2 className="text-white text-2xl font-bold">Neurobit AI</h2>
              <p className="mt-2">Subscribe to our newsletter for product updates</p>
            </div>
            <div className="mt-4 md:mt-0">
              <form className="flex items-center border border-gray-600 rounded-full overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 outline-none w-48 sm:w-64"
                />
                <button className="bg-white text-gray-900 px-5 py-2 font-semibold rounded-full">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-10 text-sm">
            {/* <div>
              <h3 className="text-white font-semibold">Company</h3>
              <ul className="mt-3 space-y-2">
                <li>About Us</li>
                <li>Launch YC</li>
                <li>Product Hunt</li>
                <li>Careers</li>
              </ul>
            </div> */}

            <div>
              <h3 className="text-white font-semibold">Industries</h3>
              <ul className="mt-3 space-y-2">
                <li>Healthcare</li>
                <li>Financial Services</li>
                <li>Insurance</li>
                <li>Home Services</li>
                <li>Logistics</li>
                <li>Retail & Consumer Goods</li>
                <li>Travel & Hospitality</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold">Use Cases</h3>
              <ul className="mt-3 space-y-2">
                <li>Lead Qualification</li>
                <li>Customer Support</li>
                <li>Receptionists</li>
                <li>Dispatch Service</li>
              </ul>
            </div>

            {/* <div>
              <h3 className="text-white font-semibold">Ecosystem</h3>
              <ul className="mt-3 space-y-2">
                <li>Certified Partners</li>
                <li>Creator Partners</li>
                <li>APP Partners</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold">Case Studies</h3>
              <ul className="mt-3 space-y-2">
                <li>Doxy Me</li>
                <li>Everise</li>
                <li>AccioJob</li>
                <li>GiftHealth</li>
                <li>Inbounds</li>
              </ul>
            </div> */}
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4 mt-8">
            <a href="#" className="text-gray-400 hover:text-white">🔗 Discord</a>
            <a href="#" className="text-gray-400 hover:text-white">🔗 X</a>
            <a href="#" className="text-gray-400 hover:text-white">🔗 LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white">🔗 YouTube</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Navbar;

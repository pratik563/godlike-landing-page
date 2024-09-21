import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white text-black fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Godlike</h1>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-gray-500">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-500">
              Solutions
            </a>
            <a href="#" className="hover:text-gray-500">
              Community
            </a>
            <a href="#" className="hover:text-gray-500">
              Resources
            </a>
            <a href="#" className="hover:text-gray-500">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-500">
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-gray-300 text-black px-4 py-2 rounded">
              Sign In
            </button>
            <button className="bg-black text-white px-4 py-2 rounded">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

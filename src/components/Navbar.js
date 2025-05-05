
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
     
      <header className="bg-black p-4 flex items-center justify-between sticky top-0 z-50 shadow-xl">
        <div>
          <Link to="/" className="block px-4 py-2 text-sm font-medium text-white ">
            <h1 className="text-xl font-bold">News99</h1>
          </Link>
        </div>

      
        <button onClick={toggleSidebar} className="md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        
        <nav className="hidden md:flex space-x-4">
          {["business", "entertainment", "health", "science", "sports", "technology"].map((category) => (
     
              <div key={category} className="group rounded-md hover:bg-gray-700 transition">
              <Link
                to={`/${category}`}
                className="block px-4 py-2 text-sm font-medium text-white transition-all duration-200 group-hover:text-lg"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            </div>
          
          ))}
        </nav>
      </header>

 
      <div
        className={`fixed inset-0 left-0 -w-64 bg-black text-white shadow transform transition-transform duration-300 z-50 md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={closeSidebar} className="text-gray-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col text-gray p-4 space-y-2">
          {["business", "entertainment", "health", "science", "sports", "technology"].map((category) => (
            <Link
              key={category}
              to={`/${category}`}
              onClick={closeSidebar}
              className="text-white hover:bg-gray-100 p-2 rounded"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          ))}
        </nav>
      </div>

      
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Navbar;

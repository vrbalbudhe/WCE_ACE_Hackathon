import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-[#ffffff] border-b border-gray-300 flex items-center px-4 justify-between">
      {/* Left section */}
      <div className="flex items-center space-x-4">
        {/* Menu Icon */}
        <svg
          className="w-5 h-5 text-gray-600 hover:text-gray-600 cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M3 12h18M3 6h18M3 18h18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
            <span className="text-white text-sm font-medium">H</span>
          </div>
          <span className="text-gray-800 font-medium">Hackathon</span>
        </div>
      </div>

      {/* Center section */}
      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          {/* Search Icon */}
          <svg
            className="w-4 h-4 text-gray-800 absolute left-3 top-2.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path
              d="M21 21l-4.35-4.35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-white text-gray-800 border-2 border-gray-300 outline-none ring-0 placeholder-gray-500 pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        {/* Users Icon */}
        <svg
          className="w-5 h-5 text-gray-800 hover:text-gray-600 cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>

        {/* Bell Icon */}
        <svg
          className="w-5 h-5 text-gray-800 hover:text-gray-600 cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>

        {/* Settings Icon */}
        <svg
          className="w-5 h-5 text-gray-800 hover:text-gray-600 cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>

        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">US</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

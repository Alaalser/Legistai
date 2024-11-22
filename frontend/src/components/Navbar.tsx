import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white shadow px-6 py-4">
      <div className="text-xl font-bold text-gray-800">LEGISTAI</div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        />
        <div className="flex items-center space-x-2">
          <img
            src="/user-placeholder.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>Arun Singh</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

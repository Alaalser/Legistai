import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <div className="flex items-center w-full px-1">
        <div className="relative w-full">
     
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full border rounded-lg bg-gray-100 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <select className="px-3 py-2 bg-gray-100 rounded-md text-sm focus:outline-none">
          <option>ENG</option>
          <option>ESP</option>
        </select>

        <button className="relative">
          <span className="material-icons text-gray-600">notifications</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* User Info */}
        <div className="flex items-center space-x-2">
          <img
            src="/avatar.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">Arun Singh</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [userID, setUserID] = useState<string | null>(null);

  useEffect(() => {
    const storedUserID = localStorage.getItem("userID");
    setUserID(storedUserID);
  }, []);

  return (
    <div className="bg-white w-64 h-screen shadow-md flex flex-col">
      <div className="p-6">
        <img src="/logo.png" alt="Legistai Logo" className="w-24" />
        <h1 className="mt-4 text-lg font-bold text-gray-800">Welcome to the Legistai!</h1>
      </div>
      <nav className="flex-1 mt-6">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
              Dashboard
            </Link>
          </li>
          <li>
            {userID ? (
              <Link
                href={`/profile/${userID}`}
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                Profile
              </Link>
            ) : (
              <span className="flex items-center px-4 py-2 text-gray-400 rounded-md cursor-not-allowed">
                <span className="material-icons mr-3">person</span>
                Profile
              </span>
            )}
          </li>
          <li>
            <Link href="/calendar" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
              Calendar
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-auto p-4">
        <button className="bg-teal-500 text-white w-full py-2 rounded-md hover:bg-teal-600">
          Start New Chat
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

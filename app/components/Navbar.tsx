import React from "react";
import Image from "next/image"; // We'll use this for your logo

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* You can replace this text with your logo Image */}
        <div className="text-2xl font-bold text-blue-600">bluekite</div>
        <div className="space-x-4">
          <a href="#features" className="text-gray-700 hover:text-blue-600">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-600">
            How It Works
          </a>
          <a
            href="#download"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}

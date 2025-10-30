import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 text-center text-gray-600">
        <p>© {new Date().getFullYear()} bluekite. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="/privacy" className="hover:text-blue-600">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-blue-600">
            Terms of Service
          </a>
          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

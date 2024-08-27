import React from 'react';
import { Link } from 'react-router-dom';
// Import a custom CSS file for the Navbar styles

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <Link to="/" className="text-white text-lg font-custom">
          The NBA's Top 100 Players
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
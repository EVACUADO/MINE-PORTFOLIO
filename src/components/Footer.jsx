import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Clark Gil A. Evacuado. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer
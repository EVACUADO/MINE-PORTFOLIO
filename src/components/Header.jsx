import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            smooth={true}
            className="text-2xl font-bold cursor-pointer"
          >
            ClarkDev
          </Link>
          <div className="hidden md:flex space-x-8">
            {['About', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                className={`cursor-pointer ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                } hover:text-blue-500 transition`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header
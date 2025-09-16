import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#mission', label: 'Mission' },
    { href: '#services', label: 'Services' },
    { href: '#programs', label: 'Programs' },
    { href: '#impact', label: 'Impact' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-800" />
            <span className="text-xl font-bold text-blue-800">Akina Ties</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-200 font-medium">
            Donate Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-200 font-medium w-fit mt-4">
                Donate Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
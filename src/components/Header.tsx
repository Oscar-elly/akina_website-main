import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/akina-logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    {
      label: 'About Us',
      submenu: [
        { href: '/about#our-journey', label: 'Our Journey' },
        { href: '/about#akina-warriors', label: 'Akina Warriors' },
        { href: '/about#our-future-goals', label: 'Our Future Goals' }
      ]
    },
    { href: '/what-we-do', label: 'What We Do' },
    { href: '/how-to-help', label: 'How to Help' },
    { href: '/our-stories', label: 'Our Stories' },
    { href: '/sponsorship', label: 'Sponsorship' },
    { href: '/#contact', label: 'Contact Us' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-akina-white/60 backdrop-blur-lg z-50 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 max-w-screen-xl mx-auto">
          <Link to="/" className="flex items-center space-x-4 flex-shrink-0">
            <img src={logo} alt="Akina Ties Logo" className="h-20 w-auto" />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold text-akina-purple leading-tight">Akina Ties</span>
              <span className="text-base font-medium text-akina-purple -mt-1 leading-tight">Australia Inc</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8 whitespace-nowrap">
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.label} className="relative group">
                  <button className="text-akina-brown hover:text-akina-purple transition-colors duration-200 font-medium">
                    {link.label}
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        to={sublink.href}
                        className="block px-4 py-2 text-akina-brown hover:bg-akina-purple hover:text-white transition-colors duration-200"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-akina-brown hover:text-akina-purple transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <Link
            to="/donate"
            className="hidden md:block bg-akina-brown text-akina-white px-6 py-2 rounded-full hover:bg-akina-orange transition-colors duration-200 font-medium flex-shrink-0"
          >
            Donate Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-akina-brown"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-akina-brown">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) =>
                link.submenu ? (
                  <div key={link.label} className="flex flex-col space-y-2">
                    <span className="text-akina-brown font-medium py-2">{link.label}</span>
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        to={sublink.href}
                        className="text-akina-brown hover:text-akina-purple transition-colors duration-200 font-medium py-1 pl-4"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-akina-brown hover:text-akina-purple transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                to="/donate"
                className="bg-akina-purple text-akina-white px-6 py-2 rounded-full hover:bg-akina-orange transition-colors duration-200 font-medium w-fit mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

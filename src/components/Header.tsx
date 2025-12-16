import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ImageWithWatermark from './ImageWithWatermark';
import logo from '../assets/akina-logo.png';

interface NavLink {
  href?: string;
  label: string;
  submenu?: NavLink[];
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling to anchor sections
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      
      if (location.pathname !== path) {
        navigate(path);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    {
      label: 'About Us',
      submenu: [
        { href: '/about#our-journey', label: 'Our Journey' },
        { href: '/about#akina-warriors', label: 'Akina Warriors' },
        { href: '/about#our-future-goals', label: 'Our Future Goals' }
      ]
    },
    {
      label: 'What We Do',
      submenu: [
        { href: '/what-we-do#akina-ties-haven-programs', label: 'Akina Ties Programs' },
        { href: '/what-we-do#heart4change-programs', label: 'Heart4Change Programs' }
      ]
    },
    { href: '/how-to-help', label: 'How to Help' },
    { href: '/our-stories', label: 'Our Stories' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/sponsorship', label: 'Sponsorship' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md' 
        : 'bg-white/80 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 max-w-7xl mx-auto">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 flex-shrink-0 transition-transform hover:scale-105 duration-200"
          >
            <ImageWithWatermark src={logo} alt="Akina Ties Logo" className="h-16 w-auto" />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold text-akina-purple leading-tight">Akina Ties</span>
              {/* <span className="text-sm font-medium text-akina-purple/80 leading-tight">Australia Inc</span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center items-center space-x-1 xl:space-x-2">
            {navLinks.map((link: NavLink) =>
              link.submenu ? (
                <div key={link.label} className="relative group">
                  <button className="px-3 py-2 text-akina-brown hover:text-akina-purple transition-all duration-200 font-medium rounded-lg hover:bg-akina-purple/5">
                    {link.label}
                  </button>
                  <div className="absolute left-0 mt-1 w-56 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 border border-gray-100">
                    <div className="py-2">
                      {link.submenu.map((sublink: NavLink) => (
                        <button
                          key={sublink.href}
                          onClick={() => handleNavClick(sublink.href || '#')}
                          className="block w-full text-left px-4 py-2.5 text-sm text-akina-brown hover:bg-akina-purple hover:text-white transition-colors duration-200"
                        >
                          {sublink.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href || '#')}
                  className="px-3 py-2 text-akina-brown hover:text-akina-purple transition-all duration-200 font-medium rounded-lg hover:bg-akina-purple/5"
                >
                  {link.label}
                </button>
              )
            )}
          </nav>

          <Link
            to="/donate"
            className="hidden lg:block bg-gradient-to-r from-akina-purple to-akina-purple/90 text-white px-6 py-2.5 rounded-full hover:from-akina-orange hover:to-akina-orange/90 transition-all duration-300 font-medium flex-shrink-0 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Donate Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-akina-brown hover:bg-akina-purple/10 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link: NavLink) =>
                link.submenu ? (
                  <div key={link.label} className="flex flex-col">
                    <span className="text-akina-brown font-semibold py-2.5 px-2">{link.label}</span>
                    <div className="pl-4 space-y-1">
                      {link.submenu.map((sublink: NavLink) => (
                        <button
                          key={sublink.href}
                          onClick={() => handleNavClick(sublink.href || '#')}
                          className="block w-full text-left text-akina-brown hover:text-akina-purple hover:bg-akina-purple/5 transition-colors duration-200 font-medium py-2 px-2 rounded-lg"
                        >
                          {sublink.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href || '#')}
                    className="text-left text-akina-brown hover:text-akina-purple hover:bg-akina-purple/5 transition-colors duration-200 font-medium py-2.5 px-2 rounded-lg"
                  >
                    {link.label}
                  </button>
                )
              )}
              <Link
                to="/donate"
                className="bg-gradient-to-r from-akina-purple to-akina-purple/90 text-white px-6 py-3 rounded-full hover:from-akina-orange hover:to-akina-orange/90 transition-all duration-300 font-medium text-center mt-4 shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
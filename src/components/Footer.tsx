import React from 'react';
import { Heart, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-akina-purple to-purple-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-akina-orange" />
              <span className="text-xl font-bold">Akina Ties</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Supporting and empowering children, women, and youth to be the driving force of social change in their communities across Western Kenya.
            </p> 
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link to="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-gray-300 hover:text-akina-orange transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-gray-300 hover:text-akina-orange transition-colors duration-200">
                About Us
              </Link>
              <Link to="/what-we-do" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-gray-300 hover:text-akina-orange transition-colors duration-200">
                What We Do
              </Link>
              <Link to="/how-to-help" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-gray-300 hover:text-akina-orange transition-colors duration-200">
                How to Help
              </Link>
              <Link to="/our-stories" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-gray-300 hover:text-akina-orange transition-colors duration-200">
                Our Stories
              </Link>
              <Link to="/sponsorship" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-gray-300 hover:text-akina-orange transition-colors duration-200">
                Sponsorship
              </Link>
              <Link to="/#contact" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-gray-300 hover:text-akina-orange transition-colors duration-200">
                Contact Us
              </Link>
              
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Kisii, Western Kenya</p>
              <p>enquiry@akinaties.org</p>
              <p>akinaties@gmail.com</p> 
            </div>
          </div>

          {/* How to Help & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">How to Help</h3>
            <div className="space-y-2 text-sm">
              <Link to="/donate" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-gray-300 hover:text-akina-orange transition-colors duration-200 block">
                Donate Now
              </Link>
              <Link to="/how-to-help" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-gray-300 hover:text-akina-orange transition-colors duration-200 block">
                Volunteer
              </Link>
              <Link to="/sponsorship" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-gray-300 hover:text-akina-orange transition-colors duration-200 block">
                Become a Sponsor
              </Link>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/AkinaTiesAustraliaInc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-akina-orange transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/akinaties"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-akina-orange transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="mailto:enquiry@akinaties.org"
                  className="text-gray-300 hover:text-akina-orange transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="tel:0724118379"
                  className="text-gray-300 hover:text-akina-orange transition-colors duration-200"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Akina Ties Inc. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              ABN: 16 425 204 607
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

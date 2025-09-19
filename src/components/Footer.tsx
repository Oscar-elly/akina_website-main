import React from 'react';
import { Heart, Facebook, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-akina-brown text-akina-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-akina-orange" />
              <span className="text-2xl font-bold">Akina Ties</span>
            </div>
            <p className="text-akina-white mb-6 leading-relaxed">
              Supporting and empowering children, women, and youth to be the driving force of social change in their communities across Western Kenya.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/AkinaTiesAustraliaInc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-akina-white hover:text-akina-orange transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="mailto:enquiry@akinaties.org"
                className="text-akina-white hover:text-akina-orange transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:0724118379"
                className="text-akina-white hover:text-akina-orange transition-colors duration-200"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-akina-white hover:text-akina-orange transition-colors duration-200">About Us</a></li>
              <li><a href="#mission" className="text-akina-white hover:text-akina-orange transition-colors duration-200">Mission & Vision</a></li>
              <li><a href="#services" className="text-akina-white hover:text-akina-orange transition-colors duration-200">Services</a></li>
              <li><a href="#programs" className="text-akina-white hover:text-akina-orange transition-colors duration-200">Programs</a></li>
              <li><a href="#impact" className="text-akina-white hover:text-akina-orange transition-colors duration-200">Our Impact</a></li>
              <li>
                <Link to="/admin/login" className="text-akina-white hover:text-akina-orange transition-colors duration-200">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-akina-white">
              <p>Kisii, Western Kenya</p>
              <p>Phone: 0724118379</p>
              <p>enquiry@akinaties.org</p>
              <p>akinaties@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-akina-brown mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-akina-white text-sm">
              © 2025 Akina Ties Inc. All rights reserved.
            </p>
            <p className="text-akina-white text-sm mt-4 md:mt-0">
              Transforming Lives, Changing Destinies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

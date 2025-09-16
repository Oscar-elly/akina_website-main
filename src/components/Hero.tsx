import React from 'react';
import { ArrowRight, Shield, Users, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 text-white pt-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Communities,
            <span className="text-orange-400"> Protecting Children</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            Supporting orphans, vulnerable children, and women affected by violence, HIV/AIDS, and neglect in Western Kenya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2">
              <span>Support Our Mission</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200">
              Learn More
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Shield className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Crisis Accommodation</h3>
              <p className="text-blue-200">Safe haven for women and children fleeing violence</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Programs</h3>
              <p className="text-blue-200">Education and empowerment initiatives</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Legal Support</h3>
              <p className="text-blue-200">Justice and protection for the vulnerable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
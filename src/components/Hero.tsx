import React from 'react';
import { ArrowRight, Shield, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundSlideshow from './BackgroundSlideshow';

const Hero: React.FC = () => {
  return (
    <section className="relative text-akina-white pt-20">
      <BackgroundSlideshow />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Shield className="h-12 w-12 text-akina-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Crisis Accommodation</h3>
              <p className="text-akina-orange/80">Safe haven for women and children fleeing violence</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-akina-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Programs</h3>
              <p className="text-akina-orange/80">Education and empowerment initiatives</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-akina-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Legal Support</h3>
              <p className="text-akina-orange/80">Justice and protection for the vulnerable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

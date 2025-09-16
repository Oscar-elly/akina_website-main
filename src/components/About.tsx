import React from 'react';
import { MapPin, Users, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Akina (Swahili for family) Ties provides crisis accommodation and a range of community education programs in the Kisii, Nyamira, and Migori areas of Western Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/8488817/pexels-photo-8488817.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Children in Kenya"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Focus</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our crisis accommodation and programs are aimed at improving the lives of orphans, vulnerable children, and women and youth affected by violence, HIV/AIDS, and neglect.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-blue-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Service Areas</h4>
                  <p className="text-gray-600">Kisii, Nyamira, and Migori Counties</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-blue-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Who We Serve</h4>
                  <p className="text-gray-600">Orphans, vulnerable children, women, and youth</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-blue-800 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Our Impact</h4>
                  <p className="text-gray-600">Breaking cycles of violence, poverty, and discrimination</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Eye, Target, Star } from 'lucide-react';

const Mission: React.FC = () => {
  const values = [
    'Integrity',
    'Accountability',
    'Diligence',
    'Perseverance',
    'Discipline'
  ];

  return (
    <section id="mission" className="py-20 bg-akina-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-akina-purple mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-akina-brown">Guided by our core values and unwavering commitment to change</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-akina-white rounded-xl shadow-lg p-8">
              <Eye className="h-12 w-12 text-akina-purple mb-6" />
              <h3 className="text-2xl font-bold text-akina-purple mb-4">Our Vision</h3>
              <p className="text-akina-brown leading-relaxed text-lg">
                A future in which children and women are free from abuse, discrimination and poverty and are treated equally in all aspects of life.
              </p>
            </div>

            <div className="bg-akina-white rounded-xl shadow-lg p-8">
              <Target className="h-12 w-12 text-akina-brown mb-6" />
              <h3 className="text-2xl font-bold text-akina-purple mb-4">Our Mission</h3>
              <p className="text-akina-brown leading-relaxed mb-4">
                Supporting and empowering Children, Women, and Youth to be the driving force of social change in their communities by:
              </p>
              <ul className="space-y-2 text-akina-brown">
                <li className="flex items-start space-x-2">
                  <span className="h-2 w-2 bg-akina-brown rounded-full mt-2 flex-shrink-0"></span>
                  <span>Providing a safe living environment that offers education, therapy, and legal support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="h-2 w-2 bg-akina-brown rounded-full mt-2 flex-shrink-0"></span>
                  <span>Organizing economic empowerment and leadership programs in the community</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="h-2 w-2 bg-akina-brown rounded-full mt-2 flex-shrink-0"></span>
                  <span>Promoting and protecting fundamental human rights of children, women, and youth</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-akina-orange to-akina-orange rounded-xl p-8 text-akina-white">
            <div className="flex items-center justify-center mb-6">
              <Star className="h-12 w-12 text-akina-white" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-6">Our Core Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-akina-white/20 backdrop-blur-sm rounded-lg p-4 hover:bg-akina-white/30 transition-colors duration-200">
                    <span className="font-semibold text-lg">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

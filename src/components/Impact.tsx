import React from 'react';
import { TrendingUp, Users, GraduationCap, Heart } from 'lucide-react';

const Impact: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '2,000+',
      label: 'Girls Reached',
      description: 'Through Girlie Camp programs',
      color: 'text-akina-orange'
    },
    {
      icon: GraduationCap,
      number: '83%',
      label: 'School Enrollment',
      description: 'Improvement in girl enrollment',
      color: 'text-akina-purple'
    },
    {
      icon: TrendingUp,
      number: '85%',
      label: 'Secondary Transition',
      description: 'Up from 30% in our community',
      color: 'text-akina-brown'
    },
    {
      icon: Heart,
      number: '10,000+',
      label: 'Children Supported',
      description: 'Through No Sex4Pads program',
      color: 'text-akina-brown'
    }
  ];

  const achievements = [
    '3,000+ women empowered through Boundaries workshops',
    '55+ students sponsored through education programs',
    '5,000+ people received medical health support',
    '50 grannies supported with food and care',
    '3,600+ meals provided to families',
    '1,200 Christmas hampers distributed'
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-r from-akina-purple to-akina-brown text-akina-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
          <p className="text-xl text-akina-orange">
            Transforming lives and communities across Western Kenya through dedicated service and programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-akina-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-akina-white/20 transition-colors duration-200">
                  <Icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-akina-orange">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-akina-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3">
                <Heart className="h-5 w-5 text-akina-orange mt-1 flex-shrink-0" />
                <span className="text-akina-orange">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Since 2012</h3>
          <p className="text-xl text-akina-orange mb-8">
            Over a decade of dedicated service to vulnerable communities in Western Kenya
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-akina-orange hover:bg-akina-brown text-akina-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200"
          >
            Join Our Mission
          </button>
        </div>
      </div>
    </section>
  );
};

export default Impact;

import React from 'react';
import { Home, Scale, Shield } from 'lucide-react';
import backgroundImage2 from '../assets/background_image2.png';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Akina Ties Haven - Crisis Accommodation Centre',
      description: 'A safe and highly secure place where women and children can live completely free from violence and start the road to recovery.',
      features: [
        'Accommodation for up to 15 women and children',
        'Court-ordered commitment periods of 6-12 months',
        'Rehabilitative and reintegration services',
        'Long-term care when reintegration is not possible'
      ],
      stats: [
        '50% children with psychotic parents, neglected children, teenage mothers',
        '50% minors who have been defiled/raped'
      ]
    },
    {
      icon: Scale,
      title: 'Legal Support',
      description: 'Comprehensive legal services under the Best Interest of the Child, The Sexual Offences Act, and the Children Act.',
      features: [
        'Community sensitization on child protection laws',
        'Legal representation for vulnerable children',
        'Justice advocacy for sexual abuse cases',
        'Rights protection and enforcement'
      ],
      stats: []
    }
  ];

  return (
    <section id="services" className="py-20 bg-akina-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-akina-purple mb-6">Our Core Services</h2>
          <p className="text-xl text-akina-brown">
            Providing immediate safety, legal protection, and comprehensive support for vulnerable individuals
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-akina-purple p-3 rounded-lg">
                        <Icon className="h-8 w-8 text-akina-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-akina-purple">{service.title}</h3>
                    </div>
                    <p className="text-akina-brown mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Shield className="h-5 w-5 text-akina-brown mt-0.5 flex-shrink-0" />
                          <span className="text-akina-brown">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <img
                      src={index === 0 ? backgroundImage2 : "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800"}
                      alt={service.title}
                      className="rounded-lg shadow-lg w-full"
                    />
                    {service.stats.length > 0 && (
                      <div className="mt-6 space-y-3">
                        {service.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="bg-akina-white p-4 rounded-lg shadow">
                            <p className="text-akina-brown font-medium">{stat}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

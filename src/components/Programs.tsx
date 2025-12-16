import React from 'react';
import { Link } from 'react-router-dom';
import { Users, GraduationCap, Heart, Gift, Home, Scale, Droplet, Baby, BookHeart } from 'lucide-react';

const Programs: React.FC = () => {
  const havenPrograms = [
    {
      icon: Home,
      title: 'Safe Haven',
      description: 'Immediate refuge and protection for women and children escaping domestic violence and abuse',
      impact: '$50 AUD covers daily operational costs for one resident for a week',
      color: 'bg-akina-brown'
    },
    {
      icon: GraduationCap,
      title: 'Education & Scholarship Program',
      description: 'Quality education, school supplies, uniforms, and transportation for children in our care',
      impact: '$35 AUD covers school fees and supplies for one child for an entire year',
      color: 'bg-akina-purple'
    },
    {
      icon: Users,
      title: 'Safe Integration Program',
      description: 'Emotional support and integration services into safe communities and homes',
      impact: 'Ongoing support to ensure safety and continued education',
      color: 'bg-akina-orange'
    },
    {
      icon: Scale,
      title: 'Legal Representation',
      description: 'Legal aid support for sexually abused minors and women seeking shelter and protection',
      impact: '$30 AUD helps support this program for extended stays',
      color: 'bg-akina-brown'
    },
    {
      icon: Droplet,
      title: 'No Sex 4 Pads',
      description: 'Providing sanitary towels, panties, painkillers, and menstrual health education',
      impact: '$25 AUD per year on an individual across Kisii and Nyamira counties',
      color: 'bg-akina-purple'
    },
    {
      icon: Baby,
      title: 'Teen Mom Program',
      description: 'Support for pregnant and parenting teens to finish high school and get to college',
      impact: 'Comprehensive program including prenatal care, parenting classes, and career counseling',
      color: 'bg-akina-orange'
    }
  ];

  const heart4changePrograms = [
    {
      icon: BookHeart,
      title: 'Boundaries Program',
      description: 'Training women on setting boundaries to preserve values, conserve energy, and enhance well-being',
      impact: '$30 AUD impacts the lives of many single moms and widows',
      color: 'bg-akina-purple'
    },
    {
      icon: Heart,
      title: 'Girlie Camp',
      description: 'Alternative Right of Passage ending Female Genital Mutilation in Kisii, Nyamira, and Migori Counties',
      impact: 'Over 2,000 girls (ages 11-15) reached in the past 9 years',
      color: 'bg-akina-orange'
    },
    {
      icon: Heart,
      title: 'Feed a Granny Program',
      description: 'Supporting abandoned elderly with food, medical care, and housing',
      impact: '50 grannies in program, 3,600+ meals provided, 1,200 Christmas hampers',
      color: 'bg-akina-brown'
    },
    {
      icon: Gift,
      title: 'Christmas Hamper',
      description: 'Distributing Christmas hampers to vulnerable families, single mothers, and the elderly',
      impact: 'Each hamper costs $40 AUD and helps families celebrate with dignity',
      color: 'bg-akina-purple'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-akina-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Akina Ties Haven Programs */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-akina-purple mb-4">Akina Ties Haven Programs</h3>
            <p className="text-lg text-akina-brown max-w-3xl mx-auto">
              We provide a safe and highly secure place where women and children can live completely free from violence and start the road to recovery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {havenPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="bg-akina-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                  <div className={`${program.color} p-3 rounded-lg w-fit mb-4`}>
                    <Icon className="h-8 w-8 text-akina-white" />
                  </div>
                  <h3 className="text-xl font-bold text-akina-purple mb-3">{program.title}</h3>
                  <p className="text-akina-brown mb-4 leading-relaxed">{program.description}</p>
                  <div className="bg-akina-white p-4 rounded-lg">
                    <p className="text-sm font-semibold text-akina-brown">{program.impact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Heart4Change Programs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-akina-purple mb-4">Heart4Change Programs</h3>
            <p className="text-lg text-akina-brown max-w-3xl mx-auto">
              Heart4Change Programs are specially designed to empower the local community through education and empowerment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heart4changePrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="bg-akina-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                  <div className={`${program.color} p-3 rounded-lg w-fit mb-4`}>
                    <Icon className="h-8 w-8 text-akina-white" />
                  </div>
                  <h3 className="text-xl font-bold text-akina-purple mb-3">{program.title}</h3>
                  <p className="text-akina-brown mb-4 leading-relaxed">{program.description}</p>
                  <div className="bg-akina-white p-4 rounded-lg">
                    <p className="text-sm font-semibold text-akina-brown">{program.impact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mb-12">
          <Link to="/what-we-do" className="text-akina-purple hover:text-akina-orange transition-colors duration-200 text-lg font-semibold">
            Learn more about our programs...
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-akina-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-akina-purple mb-6">Women's Empowerment</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="h-2 w-2 bg-akina-purple rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-akina-brown">"Boundaries" workshops for over 3,000 women in Kisii</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="h-2 w-2 bg-akina-purple rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-akina-brown">Information on economic empowerment programs</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="h-2 w-2 bg-akina-purple rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-akina-brown">Linking women with supporting organizations</span>
              </li>
            </ul>
          </div>

          <div className="bg-akina-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-akina-purple mb-6">Scholarship Program</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="h-2 w-2 bg-akina-brown rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-akina-brown">Over 55 students sponsored through all education levels</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="h-2 w-2 bg-akina-brown rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-akina-brown">More than 2,000 learners received exam supplies</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="h-2 w-2 bg-akina-brown rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-akina-brown">Focus on bright, needy students unable to afford education</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;

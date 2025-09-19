import React from 'react';
import { Users, GraduationCap, Heart, Stethoscope, Gift } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      icon: Users,
      title: 'Girlie Camp - Alternative Right of Passage',
      description: 'Ending Female Genital Mutilation in Kisii, Nyamira, and Migori Counties',
      impact: 'Over 2,000 girls (ages 11-15) reached in the past 9 years',
      color: 'bg-akina-orange'
    },
    {
      icon: GraduationCap,
      title: 'Mentorship & Education',
      description: 'Supporting school enrollment and transition rates',
      impact: '83% improvement in girl school enrollment, 30% to 85% secondary school transition',
      color: 'bg-akina-purple'
    },
    {
      icon: Heart,
      title: 'No Sex4Pads Program',
      description: 'Providing sanitary towels and menstrual health education',
      impact: '10,000 boys and girls benefited across Kisii and Nyamira since 2014',
      color: 'bg-akina-brown'
    },
    {
      icon: Stethoscope,
      title: 'Health & Hygiene Programs (WASH)',
      description: 'Medical care, cancer screening, and health support',
      impact: 'Over 5,000 people received medical health support in 3 years',
      color: 'bg-akina-purple'
    },
    {
      icon: Gift,
      title: 'Feed a Granny Program',
      description: 'Supporting abandoned elderly with food, medical care, and housing',
      impact: '50 grannies in program, 3,600+ meals provided, 1,200 Christmas hampers',
      color: 'bg-akina-orange'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-akina-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-akina-purple mb-6">Heart4Change Programs</h2>
          <p className="text-xl text-akina-brown">
            Specially designed programs aimed at empowering the local community through education, empowerment, and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => {
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

import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, GraduationCap, Users, Scale, Droplet, Baby, BookHeart, Gift, Home } from 'lucide-react';
import ImageWithWatermark from './ImageWithWatermark';
import girlieCampImg from '../assets/girlie camp.avif';
import feedAGrannyImg from '../assets/feed a granny.avif';
import teenMomImg from '../assets/teen mom.png';
import noSex4PadsImg from '../assets/No Sex 4 pads.avif';
import integrationImg from '../assets/intergration.avif';
import schoolingImg from '../assets/schooling.jpg';
import thehavenImg from '../assets/the haven.jpg';
import legalRepImg from '../assets/legal representaton.avif';
import christmasImg from '../assets/christmas hamper.jpg';
import boundariesImg from '../assets/boundaries.jpeg';

const WhatWeDo: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when component mounts or location changes
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const programs = {
    haven: [
      {
        id: 'safe-haven',
        title: 'Safe Haven',
        icon: Home,
        image: thehavenImg,
        description: 'Our Safe Haven provides immediate refuge and protection for women and children escaping domestic violence and abuse. We offer 24/7 security, counseling, and a nurturing environment where survivors can begin their healing journey. The program includes trauma-informed care and support to rebuild lives free from fear.',
        additionalInfo: 'Each resident receives comprehensive support including medical care, psychological counseling, and legal assistance. With $50 AUD, you help cover daily operational costs for one resident for a week.',
        donateText: 'Donate',
        color: 'blue'
      },
      {
        id: 'schooling',
        title: 'Education & Scholarship Program',
        icon: GraduationCap,
        image: schoolingImg,
        description: 'Education is key to breaking the cycle of poverty and violence. Our Schooling Program ensures that children in our care receive quality education, school supplies, uniforms, and transportation. We partner with local schools and provide tutoring support to help children catch up and excel academically.',
        additionalInfo: 'Since 2015, we\'ve supported over 500 children through their educational journey. A donation of $35 AUD covers school fees and supplies for one child in primary school for an entire year and $700 AUD for highscool per year.',
        donateText: 'Donate',
        color: 'purple'
      },
      {
        id: 'safe-integration',
        title: 'Safe Integration Program',
        icon: Users,
        image: integrationImg,
        description: 'We offer emotional support and integration services into safe communities and homes. We maintain contact with the children to ensure that they are safe, they are provided for and continue going to school. Our program helps families rebuild their lives with dignity and security.',
        additionalInfo: 'Through community partnerships and ongoing support, we ensure successful reintegration and long-term stability for our residents.',
        donateText: null,
        color: 'teal'
      },
      {
        id: 'legal-representation',
        title: 'Legal Representation',
        icon: Scale,
        image: legalRepImg,
        description: 'We offer legal aid support to the sexually abused minors and women who come to us for shelter and protection. So far we have successfully got justice for 80% of girls in our care. Even though we are supposed to seek for pro bono services, they are not easy to find and even if we do find them they are not totally free. A substantial amount is needed to have our clients represented in court by lawyers.',
        additionalInfo: 'Some of these girls are abandoned by their own mothers and relatives because they testified against their perpetrator. They will stay longer with us with a donation of $30 you will help us support this program.',
        donateText: 'Donate',
        color: 'orange'
      },
      {
        id: 'no-sex-4-pads',
        title: 'No Sex 4 Pads',
        icon: Droplet,
        image: noSex4PadsImg,
        description: 'Providing sanitary towels, panties, painkillers for girls, and a boxer and vest for boys as we sensitize the girls and boys on Menstrual Health and Hygiene - these have seen 10,000 boys and girls benefit across Kisii and Nyamira counties since 2014. This costs $25AUD per year on an individual.',
        additionalInfo: null,
        donateText: 'Donate',
        color: 'pink'
      },
      {
        id: 'teen-mom',
        title: 'Teen Mom Program',
        icon: Baby,
        image: teenMomImg,
        description: 'We offer support for pregnant and parenting teens to learn how to be the person and the parent they want to be. We help them finish their high school and also get to college, providing childcare, counseling, and educational support to break the cycle of teen pregnancy.',
        additionalInfo: 'Our comprehensive program includes prenatal care, parenting classes, and career counseling to ensure young mothers have the tools they need for a bright future.',
        donateText: 'Donate',
        color: 'rose'
      }
    ],
    heart4change: [
      {
        id: 'boundaries',
        title: 'Boundaries Program',
        icon: BookHeart,
        image: boundariesImg,
        description: 'Boundaries are the limits or the line we set with others to show what we find acceptable and unacceptable. Our boundaries reflect our values and priorities. Many women avoid boundaries because they think it will keep them from getting closer to others or it will mean they have to give up being generous care taker they like to be.',
        additionalInfo: 'In our boundaries session which we conduct each year, we train women how to preserve their values and priorities, conserve their energy and time and avoid burn out and enhance their well being. With $30 Aud, you will make a huge impact of improving the lives of many of our single moms and widows. You can also donate your time and prayers and together, we will partner to make a lasting change in their lives.',
        donateText: 'Donate',
        color: 'indigo'
      },
      {
        id: 'girlie-camp',
        title: 'Girlie Camp',
        icon: Heart,
        image: girlieCampImg,
        description: '(Alternative Right of Passage) program. Akina Ties has run Girlie Camps in the past 9 years reaching over 2000 girls between the ages of 11-15 years old in Kisii, Nyamira and Migori Counties. This program is held every school holiday and is aimed at ending Female Genital Mutilation/c (FGM) where it\'s a catalyst for early marriages, teen pregnancy, and dropping out of school. This program costs $35AUD per girl on an annual basis.',
        additionalInfo: null,
        donateText: 'Support us by donating',
        color: 'pink'
      },
      {
        id: 'feed-a-granny',
        title: 'Feed a Granny Program',
        icon: Heart,
        image: feedAGrannyImg,
        description: 'We have since 2012 been involved in reaching out to abandoned grannies in their homesteads, giving them food hampers each month, taking them to the hospital, cleaning their homes, and building better homes for those who do not have them. So far, I have 50 grannies and single mothers in our program and provided more than 3,600 meals to these families and it costs us approximately $35AUD per granny per year. Help us support this program by donating.',
        additionalInfo: null,
        donateText: 'Donate',
        color: 'amber'
      },
      {
        id: 'christmas-hamper',
        title: 'Christmas Hamper',
        icon: Gift,
        image: christmasImg,
        description: 'At Christmas we distribute Christmas Hampers to vulnerable families, single mothers and the elderly to ensure they have food, warm clothing and small gifts to celebrate the season with dignity. Each hamper typically contains basic groceries, a warm blanket, and a selection of essential supplies.',
        additionalInfo: 'Since starting seasonal hampers we have helped numerous households feel supported during the holidays. A gift of $40AUD funds a full hamper for one family and helps us source and deliver it safely to those most in need.',
        donateText: 'Donate for a Hamper',
        color: 'red'
      }
    ]
  };

  const colorClasses: { [key: string]: string } = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    teal: 'from-teal-500 to-teal-600',
    orange: 'from-orange-500 to-orange-600',
    pink: 'from-pink-500 to-pink-600',
    rose: 'from-rose-500 to-rose-600',
    indigo: 'from-indigo-500 to-indigo-600',
    amber: 'from-amber-500 to-amber-600',
    red: 'from-red-500 to-red-600'
  };

  const iconBgClasses: { [key: string]: string } = {
    blue: 'bg-blue-50',
    purple: 'bg-purple-50',
    teal: 'bg-teal-50',
    orange: 'bg-orange-50',
    pink: 'bg-pink-50',
    rose: 'bg-rose-50',
    indigo: 'bg-indigo-50',
    amber: 'bg-amber-50',
    red: 'bg-red-50'
  };

  const iconColorClasses: { [key: string]: string } = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    teal: 'text-teal-600',
    orange: 'text-orange-600',
    pink: 'text-pink-600',
    rose: 'text-rose-600',
    indigo: 'text-indigo-600',
    amber: 'text-amber-600',
    red: 'text-red-600'
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-akina-purple to-akina-orange bg-clip-text text-transparent">
            What We Do
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Akina Ties offers a range of programs designed to empower the local community, focusing on education and empowerment in the face of sexual and gender-based violence. Our programs address self-worth, decision-making, and economic empowerment to equip participants with the skills to make them and their communities self-reliant.
          </p>
        </div>

        {/* Akina Ties Haven Programs */}
        <div id="akina-ties-haven-programs" className="scroll-mt-24 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Akina Ties Programs</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide a safe and highly secure place where women and children can live completely free from violence and start the road to recovery. We offer rehabilitative and reintegration services. We are situated in Kisii in the western area of Kenya.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                With a donation of $50AUD, the Haven running costs which includes School Fees, Food, Clothing, Medical Bills, wages and utilities will be catered for.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:gap-10">
            {programs.haven.map((program, index) => {
              const Icon = program.icon;
              return (
                <div 
                  key={program.id}
                  className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex`}
                >
                  {/* Decorative gradient border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses[program.color]} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10"></div>
                    <ImageWithWatermark
                      src={program.image}
                      alt={program.title}
                      className="w-full h-64 lg:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Floating Icon */}
                    <div className={`absolute top-6 left-6 ${iconBgClasses[program.color]} backdrop-blur-sm rounded-2xl p-4 shadow-xl z-20 transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${iconColorClasses[program.color]}`} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-akina-purple transition-colors duration-300">
                        {program.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4 text-base">
                        {program.description}
                      </p>
                      {program.additionalInfo && (
                        <p className="text-gray-600 leading-relaxed text-sm bg-gray-50 p-4 rounded-xl border-l-4 border-akina-purple">
                          {program.additionalInfo}
                        </p>
                      )}
                    </div>

                    {program.donateText && (
                      <div className="mt-6">
                        <Link to="/donate">
                          <button className={`group/btn inline-flex items-center justify-center bg-gradient-to-r ${colorClasses[program.color]} text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                            <span>{program.donateText}</span>
                            <svg className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Heart4Change Programs */}
        <div id="heart4change-programs" className="scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Heart4Change Empowerment Programs</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Heart4Change Programs are specially designed to empower the local community, focusing on education and empowerment in the face of sexual and gender-based violence.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-10">
            {programs.heart4change.map((program, index) => {
              const Icon = program.icon;
              return (
                <div 
                  key={program.id}
                  className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex flex-col lg:flex`}
                >
                  {/* Decorative gradient border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses[program.color]} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Image Section */}
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10"></div>
                    <ImageWithWatermark
                      src={program.image}
                      alt={program.title}
                      className="w-full h-64 lg:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Floating Icon */}
                    <div className={`absolute top-6 left-6 ${iconBgClasses[program.color]} backdrop-blur-sm rounded-2xl p-4 shadow-xl z-20 transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${iconColorClasses[program.color]}`} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-akina-purple transition-colors duration-300">
                        {program.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4 text-base">
                        {program.description}
                      </p>
                      {program.additionalInfo && (
                        <p className="text-gray-600 leading-relaxed text-sm bg-gray-50 p-4 rounded-xl border-l-4 border-akina-orange">
                          {program.additionalInfo}
                        </p>
                      )}
                    </div>

                    {program.donateText && (
                      <div className="mt-6">
                        <Link to="/donate">
                          <button className={`group/btn inline-flex items-center justify-center bg-gradient-to-r ${colorClasses[program.color]} text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                            <span>{program.donateText}</span>
                            <svg className="ml-2 w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

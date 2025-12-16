import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Shield, Target, Droplets, Home, BookOpen, Briefcase, Heart } from 'lucide-react';
import LilianMarwa from '../assets/Lilian Marwa.avif';
import Mary from '../assets/Mary.avif';
import Jenny from '../assets/Jenny.avif';
import Aburi from '../assets/Aburi.avif';
import Dennis from '../assets/Dennis.avif';
import Noel from '../assets/Noel.avif';
import Sarah from '../assets/Sarah.avif';
import ImageWithWatermark from './ImageWithWatermark';

const About: React.FC = () => {
  const location = useLocation();
  const [expandedProfiles, setExpandedProfiles] = useState<Set<number>>(new Set());

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

  const existingAboutContent = (
    <section id="about-full" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
      
        {/* Our Journey Section - Updated with Progressive History */}
        <div id="our-journey" className="scroll-mt-24 relative">
          {/* Hero Header */}
          <div className="text-center mb-12">
            <h3 className="text-6xl font-bold bg-gradient-to-r from-akina-purple to-akina-orange bg-clip-text text-transparent mb-4 animate-fade-in">
              The Heart and Soul of Akina Ties
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Journey of Empowerment and Sanctuary - The story of Jenny, Mary, and Lilian's mission to empower vulnerable women and children in Kenya
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-akina-purple via-blue-400 to-akina-orange hidden lg:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2010 - Jenny's Visit to Kenya */}
              <div className="relative flex items-center lg:justify-start">
                <div className="lg:w-1/2 lg:pr-12 w-full">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-akina-purple/20 border-2 border-akina-purple/20">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-akina-purple to-akina-orange flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                        2010
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-gray-900">Jenny's Visit to Kenya</h4>
                        <p className="text-sm text-akina-purple font-medium">A Spark of Compassion</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-akina-purple/10 to-akina-orange/10 flex items-center justify-center animate-bounce-slow">
                        <Heart className="h-12 w-12 text-akina-purple" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Her heart was touched by the suffering of women and children due to poverty and abuse, sparking the initial idea for action. Meanwhile, Mary established the area's first baby orphanage, laying the foundation for years of dedicated service to vulnerable children.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-lg z-10"></div>
              </div>

              {/* 2011 - Founding of Heart4Change */}
              <div className="relative flex items-center lg:justify-end">
                <div className="lg:w-1/2 lg:pl-12 w-full">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-akina-purple/20 border-2 border-akina-purple/20">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-akina-purple to-akina-orange flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                        2011
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-gray-900">Heart4Change</h4>
                        <p className="text-sm text-akina-purple font-medium">The Beginning of Change</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-6">
                      <div className="grid grid-cols-3 gap-2">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-8 h-8 rounded-lg bg-gradient-to-br from-akina-purple/20 to-akina-orange/20 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Jenny, together with Mary (who established the area's first baby orphanage in 2010) and Lilian, started the organization to empower local women. This marked the beginning of a transformative journey that would grow into Akina Ties.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10"></div>
              </div>

              {/* Early Days - Akina Ties Established */}
              <div className="relative flex items-center lg:justify-start">
                <div className="lg:w-1/2 lg:pr-12 w-full">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-akina-purple/20 border-2 border-akina-purple/20">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-akina-purple to-akina-orange flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        Early Days
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-gray-900">Akina Ties Established</h4>
                        <p className="text-sm text-akina-purple font-medium">A Sanctuary is Born</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative w-24 h-24">
                        <div className="absolute inset-0 bg-gradient-to-br from-akina-purple/20 to-akina-orange/20 rounded-2xl animate-pulse"></div>
                        <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center">
                          <Home className="h-10 w-10 text-akina-purple" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Established to provide sanctuary for children and women affected by gender-based violence. Lilian moved to Kisii and began living with the rescued children, dedicating her life to their care and protection.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-akina-purple border-4 border-white shadow-lg z-10"></div>
              </div>

              {/* 2014-Present - MHH Program */}
              <div className="relative flex items-center lg:justify-end">
                <div className="lg:w-1/2 lg:pl-12 w-full">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-akina-purple/20 border-2 border-akina-purple/20">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-akina-purple to-akina-orange flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        2014
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-gray-900">Menstrual Health Program</h4>
                        <p className="text-sm text-akina-purple font-medium">Dignity and Education</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-akina-purple/10 to-akina-orange/10 flex items-center justify-center">
                        <Heart className="h-10 w-10 text-akina-purple" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      10,000+ boys and girls across Kisii and Nyamira counties benefit from sensitization and the provision of essential hygiene packs (sanitary towels, panties, boxers/vests, painkillers).
                    </p>
                    <div className="bg-gradient-to-r from-akina-purple/10 to-akina-orange/10 rounded-xl p-4">
                      <p className="text-center font-bold text-akina-purple">10,000+ youth supported</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow-lg z-10"></div>
              </div>

              {/* 2015-Present - Schooling Program */}
              <div className="relative flex items-center lg:justify-start">
                <div className="lg:w-1/2 lg:pr-12 w-full">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-akina-purple/20 border-2 border-akina-purple/20">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-akina-purple to-akina-orange flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        2015
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-gray-900">The Schooling Program</h4>
                        <p className="text-sm text-akina-purple font-medium">Breaking the Cycle</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-akina-purple/10 to-akina-orange/10 flex items-center justify-center">
                        <BookOpen className="h-10 w-10 text-akina-purple" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Over 500 children supported through their educational journey, ensuring access to quality education, school supplies, uniforms, and tutoring to break the cycle of poverty.
                    </p>
                    <div className="bg-gradient-to-r from-akina-purple/10 to-akina-orange/10 rounded-xl p-4">
                      <p className="text-center font-bold text-akina-purple">500+ children educated</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10"></div>
              </div>

              {/* Past 9 Years - Girlie Camps */}
              <div className="relative flex items-center lg:justify-end">
                <div className="lg:w-1/2 lg:pl-12 w-full">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-akina-purple/20 border-2 border-akina-purple/20">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-akina-purple to-akina-orange flex items-center justify-center text-white font-bold shadow-lg">
                        <Target className="h-10 w-10" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-gray-900">Girlie Camps</h4>
                        <p className="text-sm text-akina-purple font-medium">Alternative Rite of Passage</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-6">
                      <div className="grid grid-cols-4 gap-3">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-akina-purple/20 to-akina-orange/20 flex items-center justify-center text-akina-purple font-bold animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}>
                            ♀
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Reaching over 2,000 girls (ages 11-15) in Kisii, Nyamira, and Migori Counties, held every school holiday to combat Female Genital Mutilation (FGM), child marriage, teen pregnancy, and school dropout rates.
                    </p>
                    <div className="bg-gradient-to-r from-akina-purple/10 to-akina-orange/10 rounded-xl p-4">
                      <p className="text-center font-bold text-akina-purple">2,000+ girls empowered</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-akina-purple border-4 border-white shadow-lg z-10"></div>
              </div>

              {/* Ongoing - Boundaries Program */}
              <div className="relative flex items-center lg:justify-start">
                <div className="lg:w-1/2 lg:pr-12 w-full">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-akina-purple/20 border-2 border-akina-purple/20">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-akina-purple to-akina-orange flex items-center justify-center text-white font-bold shadow-lg">
                        <Shield className="h-10 w-10" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-gray-900">The "Boundaries" Program</h4>
                        <p className="text-sm text-akina-purple font-medium">Setting Healthy Limits</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-6 space-x-2">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-akina-purple/10 to-akina-orange/10 flex items-center justify-center transform hover:rotate-12 transition-transform">
                        <Shield className="h-8 w-8 text-akina-purple" />
                      </div>
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-akina-purple/10 to-akina-orange/10 flex items-center justify-center transform hover:rotate-12 transition-transform">
                        <Heart className="h-8 w-8 text-akina-purple" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Training women on setting limits to preserve their values, conserve energy/time, and avoid burnout. Expanded from Nakuru women's prison to churches in Kisii and Mombasa.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow-lg z-10"></div>
              </div>

              {/* Ongoing - Mentorship and Leadership */}
              <div className="relative flex items-center lg:justify-end">
                <div className="lg:w-1/2 lg:pl-12 w-full">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-akina-purple/20 border-2 border-akina-purple/20">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-akina-purple to-akina-orange flex items-center justify-center text-white font-bold shadow-lg">
                        <Target className="h-10 w-10" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-gray-900">Mentorship Programs</h4>
                        <p className="text-sm text-akina-purple font-medium">Building Future Leaders</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-akina-purple/10 to-akina-orange/10 flex items-center justify-center">
                        <Heart className="h-10 w-10 text-akina-purple" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Combating FGM, child marriage, and school dropout rates in Abagusii and Kuria communities; provides empowerment, hygiene packs, and Christmas hampers.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10"></div>
              </div>

              {/* Recent - The Safe Haven */}
              <div className="relative flex items-center lg:justify-start">
                <div className="lg:w-1/2 lg:pr-12 w-full">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-green-200 border-2 border-green-100">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold shadow-lg">
                        <Home className="h-10 w-10" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-gray-900">The Safe Haven</h4>
                        <p className="text-sm text-green-600 font-medium">Permanent Sanctuary</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex space-x-3">
                        <div className="w-16 h-20 bg-gradient-to-b from-green-300 to-green-400 rounded-t-lg animate-bounce"></div>
                        <div className="w-20 h-24 bg-gradient-to-b from-green-400 to-green-500 rounded-t-lg animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-16 h-20 bg-gradient-to-b from-green-300 to-green-400 rounded-t-lg animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Built with the support of Kate and Noel Doyle OAM ("Grandma and Pa"), providing 24/7 security, immediate refuge, and a customized home for women and children escaping domestic violence and abuse.
                    </p>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4">
                      <p className="text-center font-bold text-green-600">A beacon of hope and safety</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow-lg z-10"></div>
              </div>

              {/* Ongoing - Comprehensive Support */}
              <div className="relative flex items-center lg:justify-end">
                <div className="lg:w-1/2 lg:pl-12 w-full">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-akina-purple/20 border-2 border-akina-purple/20">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-akina-purple to-akina-orange flex items-center justify-center text-white font-bold shadow-lg">
                        <Heart className="h-10 w-10" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-gray-900">Resident Support</h4>
                        <p className="text-sm text-akina-purple font-medium">Holistic Care</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-akina-purple/10 to-akina-orange/10 flex items-center justify-center">
                        <Shield className="h-10 w-10 text-akina-purple" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Includes medical care, psychological counseling, and legal assistance. The organization has successfully secured justice for 80% of the sexually abused girls in its care.
                    </p>
                    <div className="bg-gradient-to-r from-akina-purple/10 to-akina-orange/10 rounded-xl p-4">
                      <p className="text-center font-bold text-akina-purple">80% justice success rate</p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-akina-purple border-4 border-white shadow-lg z-10"></div>
              </div>

              {/* Ongoing - Teen Support */}
              <div className="relative flex items-center lg:justify-start">
                <div className="lg:w-1/2 lg:pr-12 w-full">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-akina-purple/20 border-2 border-akina-purple/20">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-akina-purple to-akina-orange flex items-center justify-center text-white font-bold shadow-lg">
                        <Heart className="h-10 w-10" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-gray-900">Teen Parent Support</h4>
                        <p className="text-sm text-akina-purple font-medium">Breaking the Cycle</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-akina-purple/10 to-akina-orange/10 flex items-center justify-center">
                        <BookOpen className="h-10 w-10 text-akina-purple" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      A comprehensive program providing prenatal care, parenting classes, childcare, and educational support to help young mothers finish high school and college, breaking the cycle of teen pregnancy.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10"></div>
              </div>

              {/* Ongoing - Akina Ties Australia */}
              <div className="relative flex items-center lg:justify-end">
                <div className="lg:w-1/2 lg:pl-12 w-full">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-blue-200 border-2 border-blue-100">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
                        <Briefcase className="h-10 w-10" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-2xl font-bold text-gray-900">Akina Ties Australia</h4>
                        <p className="text-sm text-blue-600 font-medium">Global Support Network</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full border-4 border-blue-300 flex items-center justify-center animate-spin-slow">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                            <Heart className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Formed as a volunteer-run nonprofit to raise vital funds, with all donations administered by volunteers and sent directly to Kenya.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10"></div>
              </div>

              {/* Today - Continuing Impact */}
              <div className="relative flex items-center justify-center">
                <div className="w-full max-w-2xl">
                  <div className="bg-gradient-to-r from-akina-purple via-blue-500 to-akina-orange rounded-3xl shadow-2xl p-12 text-center text-white transform hover:scale-105 transition-all duration-500">
                    <div className="mb-6">
                      <div className="inline-flex w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm items-center justify-center mb-4">
                        <Heart className="h-12 w-12 text-white animate-pulse" />
                      </div>
                      <h4 className="text-4xl font-bold mb-2">Today & Beyond</h4>
                      <p className="text-xl opacity-90">Transforming Lives Daily</p>
                    </div>
                    <p className="text-lg leading-relaxed mb-6">
                      Akina Ties continues to transform lives, offering shelter, support, and hope for a future where all children can grow up safe, loved, and empowered.
                    </p>
                    <div className="flex items-center justify-center space-x-8">
                      <div>
                        <p className="text-3xl font-bold">10,000+</p>
                        <p className="text-sm opacity-90">Youth Supported</p>
                      </div>
                      <div className="h-12 w-px bg-white/30"></div>
                      <div>
                        <p className="text-3xl font-bold">500+</p>
                        <p className="text-sm opacity-90">Children Educated</p>
                      </div>
                      <div className="h-12 w-px bg-white/30"></div>
                      <div>
                        <p className="text-3xl font-bold">∞</p>
                        <p className="text-sm opacity-90">Hope Created</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-akina-purple to-akina-orange border-4 border-white shadow-lg z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Akina Warriors Section */}
        <div id="akina-warriors" className="scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mr-4 shadow-md">
                <Shield className="h-8 w-8 text-akina-purple" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900">Akina Warriors</h3>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              Meet the dedicated team behind Akina Ties, each bringing unique skills and passion to our mission of supporting vulnerable children and women in Kenya.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 0,
                  name: "Lilian Marwa",
                  title: "Co-Founder & Director",
                  img: LilianMarwa,
                  bio: `Lilian is the living heart and soul of Akina Ties, who is selflessly dedicated to the Akina Ties children and her community. Lilian is a trained administrator and has a passion for social work. Between 2015 and 2022, she worked as a Personal Assistant and project coordinator to the spouses of Kisii and Nyamira County governors. Prior to that, she was employed with the Directorate of Industrial Training(now NITA) as an industrial attachment officer and later on worked as a social worker  and a community point person at Mission in Action, Nakuru Baby Orphanage. She is currently pursuing a Bachelors Degree in Theology at the University of Eastern Africa Baraton, a passion to be a bible worker since when she was 19 years old is being fulfiled at 43 years old, a testimony that when God has called you He has and will never stop until you yield. Lilian is mother, counsellor, advocate and dedicated defender of the Akina Ties children and women `
                },
                {
                  id: 1,
                  name: "Mary Summerscales",
                  title: "Co-Founder & Director.",
                  img: Mary,
                  bio: "Mary moved to Kenya in 2010 to establish and run the first baby orphanage in the area. Ten years later Mary was Mum (literally) to 130 children ranging from newborn to sixteen years of age. Living and working in Kenya has given Mary first-hand knowledge and understanding of the poverty, human and social challenges so many families, especially women and children, face daily. While living in Kenya, Mary met Akina Ties' founder and a great friendship formed which continues to date. Mary and Lilian worked together both in the orphanage and on community projects. A promise they made to a dying mother is now being fulfilled by Akina Ties that continues to care and bring hope and love to the children. For personal reasons Mary returned to Australia after ten years in Kenya and has supported Akina Ties since then. Mary is a qualified case manager currently working in youth services and living in Queensland Australia with her husband and their two fur babies, Jellybean and China."
                },
                {
                  id: 2,
                  name: "Durdica Jenny Dearling",
                  title: "Co-Founder & Director",
                  img: Jenny,
                  bio: "Jenny visited Kenya in 2010 and her heart was touched by the many women and children she met who were suffering because of poverty and abuse. In 2011, Jenny (together with Mary and Lilian) started Heart4Change to empower local women. Akina Ties emerged from this initial organization. Jenny has worked as a support worker in a women's refuge for the last 20 years. She is a mother of two, nana to four(who are the light of her life) and lives together with her husband Ken in West Queensland Australia."
                },
                {
                  id: 4,
                  name: "Aburi Mosero",
                  title: "Secretary.",
                  img: Aburi,
                  bio: "Aburi Mosero or Wakili, as we commonly call her, is a passionate lawyer with a keen eye on various fields of the law, especially children, human rights and Gender. We at Akina Ties are honored to have her on board as one of our Akina Warriors. Being a rescue centre that often deals with legal issues in respect of the children that we take in, Aburi is always here to make the requisite follow-up in ensuring that the legal needs of our children are covered. Aburi joined the Akina family in 2022 as a volunteer and over time has shown and continues to show her dedication in helping Akina Ties as a whole. Her passion is to see a future in which children and women are free from abuse, discrimination and poverty and are able to well represented to get justice when needed."  
                },
                {
                  id: 5,
                  name: "Dennis Bergquist",
                  title: "Board Member",
                  img: Dennis,
                  bio: "A fourth-generation Swedish America from a rural Midwest Minnesota Community of 950. Raised on a family farm, learned the value of work ethic with an appreciation to help the less fortunate of the world. Traveled 52 countries as a humanitarian volunteering to make a difference in the lives of those he met Domestically and Internationally. A retired faculty member of Ridgewater College, Hutchinson, Minnesota. The founder of Bergquist and Associates Global and the Bergquist Foundation with the motto \"Making a Difference Globally.\" The author of \"Milk to Missions\" A Rotarian, four-time Paul Harris Fellow and Presidentelect of the Tucson Kino Rotary Club. An Akina Ties board member serving to make a difference for young people who deserve respect, an education, with a future to make a difference in the lives of others less fortunate."
                },
                {
                  id: 6,
                  name: "Noel and Kate Doyle",
                  title: "",
                  img: Noel,
                  bio: "Kate and Noel Doyle who are fondly know as 'grandma and grandpa', have generously dedicated their support to Akina Ties over the past 10 years. Words can not explain how amazing these 2 beautiful souls are, but their actions alone have changed many lives for the better. Thank you grandma and grandpa, know you are loved dearly by your Akina Ties family."
                },
                {
                  id: 7,
                  name: "Sarah Roseborg",
                  title: "",
                  img: Sarah,
                  bio: "Sarah is always willing to offer advice and was an amazing help when Akina Ties Australia Inc. was set up.  Her dedication to the children of Kenya is unquestionable and a true inspiration. The world needs more Angels like Sarah. Thank you Sarah for always making yourself available when we need advice."
                }
              ].map((warrior) => (
                <div key={warrior.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1">
                  <div className="p-6 text-center">
                    <div className="relative inline-block mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-akina-purple to-akina-orange rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <ImageWithWatermark
                        src={warrior.img}
                        alt={warrior.name}
                        className="relative w-28 h-28 rounded-full mx-auto object-cover border-4 border-white shadow-md"
                      />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">{warrior.name}</h4>
                    {warrior.title && <p className="text-sm text-akina-purple mb-4 font-medium">{warrior.title}</p>}
                    <button
                      onClick={() => {
                        const newExpanded = new Set(expandedProfiles);
                        if (newExpanded.has(warrior.id)) {
                          newExpanded.delete(warrior.id);
                        } else {
                          newExpanded.add(warrior.id);
                        }
                        setExpandedProfiles(newExpanded);
                      }}
                      className="bg-gradient-to-r from-akina-purple to-akina-purple/90 text-white px-6 py-2.5 rounded-full hover:from-akina-orange hover:to-akina-orange/90 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      {expandedProfiles.has(warrior.id) ? 'Hide Profile' : 'Read Profile'}
                    </button>
                    {expandedProfiles.has(warrior.id) && (
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <p className="text-gray-700 text-sm leading-relaxed text-left">{warrior.bio}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Future Goals Section */}
        <div id="our-future-goals" className="scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mr-4 shadow-md">
                <Target className="h-8 w-8 text-akina-orange" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900">Our Future Goals</h3>
            </div>
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700 mb-12">
              <p className="leading-relaxed text-center text-xl">The day to day running of Akina Ties is costly.</p>
              <p className="leading-relaxed text-center text-xl">However there are other vital infrastructure, education and health needs both at Akina Ties Haven and in the local Kisii community which need addressing urgently. We have several important projects in the pipeline to meet these needs head on.</p>
            </div>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-4">You can donate directly to these projects via the donate page.</p>
              <Link to="/donate#top" className="bg-gradient-to-r from-akina-purple to-akina-orange text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium shadow-md hover:scale-105 inline-block">
                Donate Now
              </Link>
            </div>
            <div className="space-y-8">
              {[
                {
                  icon: Droplets,
                  title: "Clean Water",
                  description: "Akina Ties haven does not have fresh water on tap. All water is either carried from the water source or (if no rain in three days) purchased at great expense to the organization. We desperately need to sink our own boreholes so that the children and local community can have access to a source of safe, clean drinking water.",
                  color: "blue"
                },
                {
                  icon: BookOpen,
                  title: "Preschool for vulnerable children",
                  description: "Education is such an important part of breaking the cycle of poverty. Many families in the local area are not able to afford sending their children to preschool prior to them attending local public schools. We plan to build a first class preschool that will give vulnerable children access to the best start to their education.",
                  color: "orange"
                },
                {
                  icon: Heart,
                  title: "Health Centre",
                  description: "The Kisii community does not have adequate and affordable basic health services for local people. In particular there is insufficient pre-natal and post-natal support for pregnant mothers and insufficient health services for people suffering from malaria. We would like to set up our own income generating health centre staffed by qualified medical professionals to provide local people with quality health care at affordable rates.",
                  color: "red"
                },
                {
                  icon: Briefcase,
                  title: "Enterprise Centre",
                  description: "One of the issues surrounding gender based violence is the inability of women to be economically independent. We would like to build an Enterprise Centre where local women and young girls could be taught skills and knowledge to allow them to lead more independent, fulfilling and empowering lives. Skills taught at the centre will include soap making, weaving, beading, tailoring and cooking to allow women to set up home enterprises, as well as basic business management and book keeping training to support them in their endevours.",
                  color: "green"
                },
              ].map((goal, idx) => (
                <div key={idx} className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-white to-gray-50 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`flex-shrink-0 w-14 h-14 bg-${goal.color}-100 rounded-xl flex items-center justify-center shadow-sm`}>
                    <goal.icon className={`h-7 w-7 text-${goal.color}-600`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{goal.title}</h4>
                    <p className="text-gray-700 leading-relaxed">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mt-12 text-center font-medium">
              Watch this space and our social media pages to find out how you can support these fantastic projects!
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  return existingAboutContent;
};

export default About;
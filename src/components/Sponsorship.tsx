import React from 'react';
import { Heart, Users, BookOpen, Mail, CreditCard, CheckCircle } from 'lucide-react';

const Sponsorship: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-sm font-medium text-gray-700">Make a Difference Today</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6 leading-tight">
            Sponsor a Child
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
            Your sponsorship provides hope, education, and a brighter future for children in need.
          </p>
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            <div className="relative group">
              <img src="/assets/background_image1.png" alt="Child 1" className="w-28 h-28 rounded-full object-cover shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="relative group">
              <img src="/assets/background_image2.png" alt="Child 2" className="w-28 h-28 rounded-full object-cover shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="relative group">
              <img src="/assets/background_image3.png" alt="Child 3" className="w-28 h-28 rounded-full object-cover shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 transform hover:from-purple-700 hover:to-pink-700">
            Start Sponsoring Today
          </button>
        </div>

        {/* Impact Cards */} 
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Safe Haven</h3>
            <p className="text-gray-600 leading-relaxed">
              Children find safety and stability in our care facilities, transitioning to loving families while maintaining connections to their roots.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Education</h3>
            <p className="text-gray-600 leading-relaxed">
              Every child receives education, either in mainstream schools or through our qualified teachers at the haven.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Comprehensive Care</h3>
            <p className="text-gray-600 leading-relaxed">
              $50 monthly sponsorship covers food, shelter, clothing, healthcare, and emotional support for children and women.
            </p>
          </div>
        </div>

        {/* What You Get */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Your Sponsorship Journey</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Welcome Package</h3>
              <p className="text-gray-600">Receive detailed information, photos, and a welcome letter about your sponsored child.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Recognition Wall</h3>
              <p className="text-gray-600">Your name proudly displayed on our acknowledgment wall honoring our supporters.</p>
            </div>
            <div className="text-center group md:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">Regular updates and our commitment to answer all your questions about the program.</p>
            </div>
          </div>
        </div>

        {/* How to Get Started */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">How to Sponsor in 3 Easy Steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Fill Application</h3>
              <p className="leading-relaxed">Complete the sponsorship form with your details and mailing address for application delivery.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Set Up Payment</h3>
              <p className="leading-relaxed">Choose our secure payment system or PayPal for easy, recurring monthly contributions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Make an Impact</h3>
              <p className="leading-relaxed">Receive your welcome package and start changing a child's life immediately.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-white text-purple-600 px-12 py-4 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Begin Your Sponsorship
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Children in Our Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/assets/feel-good-fiver.png" alt="Children learning" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Learning & Growing</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/assets/background_image4.png" alt="Child smiling" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Finding Hope</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/assets/background_image5.png" alt="Group activity" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Building Futures</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src="/assets/general-donation.png" alt="Community support" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Together Stronger</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;

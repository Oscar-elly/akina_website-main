import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, Mail, CreditCard, CheckCircle, ChevronDown, ChevronUp, HandHeart, Megaphone, Calendar, DollarSign, ArrowRight } from 'lucide-react';

const HowToHelp: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I make a donation?",
      answer: "Donations can be made online through our secure payment system, via PayPal, or by bank transfer. Visit our Donations page for details."
    },
    {
      question: "Can I sponsor a child?",
      answer: "Yes, you can sponsor a child by filling out our sponsorship application form. Your sponsorship provides food, shelter, clothing, healthcare, education, and emotional support."
    },
    {
      question: "What volunteer opportunities are available?",
      answer: "We welcome volunteers for program facilitation, administrative support, community outreach, event coordination, and content creation. Contact us to discuss opportunities."
    },
    {
      question: "How can I advocate for your cause?",
      answer: "You can advocate by raising awareness in your community, partnering with us for joint programs, or sharing our mission on social media."
    },
    {
      question: "How do I participate in fundraising events?",
      answer: "We organize various fundraising events throughout the year. Contact us to learn about upcoming events and how you can participate."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 py-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8">
          <Heart className="w-5 h-5 text-red-500" />
          <span className="text-sm font-medium text-gray-700">Make a Difference Today</span>
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent mb-6 leading-tight">
          How to Help
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
          Your support makes a difference. Here are some ways you can help us continue our mission to support vulnerable children and women.
        </p>
      </div>

      {/* Ways to Help Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-20">
        {/* Donation Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Make a Donation</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Your generosity helps us continue our mission to support vulnerable children and women in our community. Every contribution, no matter the size, makes a real impact.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Support food, shelter, education, and healthcare</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Tax-deductible contributions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Secure online and offline payment options</span>
                </div>
              </div>
              <Link to="/donate">
                <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Donate Now <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>
              </Link>
            </div>
            <div className="relative">
              <img src="/src/assets/general-donation.png" alt="Donation" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Sponsorship Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Sponsor a Child</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sponsorship provides ongoing care and education for children in need. Your monthly contribution ensures a child receives food, shelter, healthcare, and educational support.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>$50 monthly covers comprehensive care</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Receive updates and photos of your sponsored child</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Tax-deductible sponsorship</span>
                </div>
              </div>
              <Link to="/sponsorship">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Start Sponsoring <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <img src="/src/assets/background_image1.png" alt="Sponsorship" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Volunteer Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <HandHeart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Volunteer Your Time</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Join our team of dedicated volunteers who make a difference every day. We welcome individuals with various skills and backgrounds to support our initiatives.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span>Program facilitation and mentorship</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span>Administrative and organizational support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span>Community outreach and awareness</span>
                </div>
              </div>
              <Link to="/contact">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Volunteer Now <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>
              </Link>
            </div>
            <div className="relative">
              <img src="/src/assets/background_image2.png" alt="Volunteering" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Advocate Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Megaphone className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Advocate for Our Cause</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Raise awareness and advocate for our cause in your community. Help us amplify our message and attract more support for vulnerable children and women.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span>Share our mission on social media</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span>Organize awareness campaigns</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span>Partner with us for joint initiatives</span>
                </div>
              </div>
              <Link to="/contact">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Partner With Us <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <img src="/src/assets/background_image3.png" alt="Advocacy" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Fundraising Events Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Participate in Events</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Join our fundraising events and campaigns throughout the year. These events bring our community together and raise essential funds for our programs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span>Annual charity runs and walks</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span>Community fundraising dinners</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500" />
                  <span>Online and offline campaigns</span>
                </div>
              </div>
              <Link to="/contact">
                <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Get Involved <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>
              </Link>
            </div>
            <div className="relative">
              <img src="/src/assets/background_image4.png" alt="Events" className="w-full h-96 object-cover rounded-2xl shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default HowToHelp;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, CheckCircle, ChevronDown, ChevronUp, HandHeart, Megaphone, Calendar, DollarSign, ArrowRight, Users, Target } from 'lucide-react';
import generalDonation from '../assets/general-donation.png';
import backgroundImage1 from '../assets/background_image1.jpg';
import volunteering2 from '../assets/volunteering2.jpg';
import legalrepresentation from '../assets/legal representaton.avif';
import backgroundImage4 from '../assets/girlie camp2.jpg';
import VolunteerModal from './VolunteerModal';
import PartnershipModal from './PartnershipModal';
import EventsModal from './EventsModal';

const HowToHelp: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isPartnershipModalOpen, setIsPartnershipModalOpen] = useState(false);
  const [isEventsModalOpen, setIsEventsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const helpOptions = [
    {
      id: 1,
      title: "Make a Donation",
      description: "Your generosity helps provide food, shelter, education, and healthcare for vulnerable children and women.",
      icon: DollarSign,
      iconColor: "text-akina-orange",
      gradient: "from-akina-orange to-akina-orange",
      buttonColor: "bg-gradient-to-r from-akina-orange to-akina-orange hover:from-akina-orange hover:to-akina-orange",
      image: generalDonation,
      link: "/donate",
      features: [
        "Secure online and offline payments",
        "Tax-deductible contributions",
        "Immediate impact on lives"
      ]
    },
    {
      id: 2,
      title: "Sponsor a Child",
      description: "Provide ongoing care and education for a child in need. Your monthly contribution ensures comprehensive support.",
      icon: Users,
      iconColor: "text-akina-purple",
      gradient: "from-akina-purple to-akina-purple",
      buttonColor: "bg-gradient-to-r from-akina-purple to-akina-purple hover:from-akina-purple hover:to-akina-purple",
      image: backgroundImage1,
      link: "/sponsorship",
      features: [
        "$50 monthly covers comprehensive care",
        "Receive updates and photos",
        "Make a long-term difference"
      ]
    },
    {
      id: 3,
      title: "Volunteer",
      description: "Join our dedicated team and make a difference through mentorship, support, and community outreach.",
      icon: HandHeart,
      iconColor: "text-akina-orange",
      gradient: "from-akina-orange to-akina-orange",
      buttonColor: "bg-gradient-to-r from-akina-orange to-akina-orange hover:from-akina-orange hover:to-akina-orange",
      image: volunteering2,
      action: () => setIsVolunteerModalOpen(true),
      features: [
        "Program facilitation",
        "Administrative support",
        "Community outreach"
      ]
    },
    {
      id: 4,
      title: "Advocate",
      description: "Amplify our message and help us reach more people through awareness campaigns and partnerships.",
      icon: Megaphone,
      iconColor: "text-akina-purple",
      gradient: "from-akina-purple to-akina-purple",
      buttonColor: "bg-gradient-to-r from-akina-purple to-akina-purple hover:from-akina-purple hover:to-akina-purple",
      image: legalrepresentation,
      action: () => setIsPartnershipModalOpen(true),
      features: [
        "Social media campaigns",
        "Community partnerships",
        "Awareness events"
      ]
    },
    {
      id: 5,
      title: "Join Events",
      description: "Participate in our fundraising events that bring communities together for a great cause.",
      icon: Calendar,
      iconColor: "text-akina-purple",
      gradient: "from-akina-purple to-akina-purple",
      buttonColor: "bg-gradient-to-r from-akina-purple to-akina-purple hover:from-akina-purple hover:to-akina-purple",
      image: backgroundImage4,
      action: () => setIsEventsModalOpen(true),
      features: [
        "Charity runs and walks",
        "Community dinners",
        "Online campaigns"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-akina-white via-akina-purple/10 to-akina-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-akina-purple/5 via-transparent to-akina-orange/5"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-akina-purple via-akina-orange to-akina-brown bg-clip-text text-transparent">
              How You Can Help
            </span>
          </h1>

          <p className="text-xl text-akina-brown max-w-2xl mx-auto mb-10 leading-relaxed">
            Choose your way to make a meaningful impact. Every contribution matters in our mission to support vulnerable children and women.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 px-4 py-2 bg-akina-white rounded-full shadow-sm">
              <Target className="w-4 h-4 text-akina-orange" />
              <span className="text-sm font-medium">Direct Impact</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-akina-white rounded-full shadow-sm">
              <Users className="w-4 h-4 text-akina-purple" />
              <span className="text-sm font-medium">Community Driven</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-akina-white rounded-full shadow-sm">
              <Heart className="w-4 h-4 text-akina-orange" />
              <span className="text-sm font-medium">Heart-centered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ways to Help Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpOptions.map((option, index) => (
            <div
              key={option.id}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                hoveredCard === option.id ? 'ring-2 ring-akina-purple' : ''
              }`}
              onMouseEnter={() => setHoveredCard(option.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`relative bg-white p-3 rounded-2xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${option.gradient} opacity-10 rounded-2xl`}></div>
                    <option.icon className={`w-6 h-6 ${option.iconColor}`} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-akina-brown mb-3">{option.title}</h3>
                <p className="text-akina-brown mb-4 leading-relaxed">{option.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-akina-orange mt-1 flex-shrink-0" />
                      <span className="text-sm text-akina-brown">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                {option.link ? (
                  <Link to={option.link}>
                    <button
                      className={`w-full ${option.buttonColor} text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={option.action}
                    className={`w-full ${option.buttonColor} text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${option.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-20 mb-16">
          <div className="bg-gradient-to-r from-akina-purple/5 to-akina-orange/5 rounded-3xl p-8 shadow-inner">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-akina-purple mb-2">500+</div>
                <div className="text-akina-brown">Children Helped</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-akina-orange mb-2">200+</div>
                <div className="text-akina-brown">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-akina-purple mb-2">50+</div>
                <div className="text-akina-brown">Events Hosted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-akina-orange mb-2">$1M+</div>
                <div className="text-akina-brown">Funds Raised</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section (Unchanged per request) */}
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

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-akina-purple to-akina-orange text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of people who are already part of our community creating positive change.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donate">
              <button className="bg-akina-white text-akina-purple hover:bg-akina-white/90 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Donate Now
              </button>
            </Link>
            <button
              onClick={() => setIsVolunteerModalOpen(true)}
              className="bg-transparent border-2 border-akina-white text-akina-white hover:bg-akina-white/10 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Volunteer Today
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {isVolunteerModalOpen && <VolunteerModal isOpen={isVolunteerModalOpen} onClose={() => setIsVolunteerModalOpen(false)} />}
      {isPartnershipModalOpen && <PartnershipModal isOpen={isPartnershipModalOpen} onClose={() => setIsPartnershipModalOpen(false)} />}
      {isEventsModalOpen && <EventsModal isOpen={isEventsModalOpen} onClose={() => setIsEventsModalOpen(false)} />}
    </div>
  );
};

export default HowToHelp;
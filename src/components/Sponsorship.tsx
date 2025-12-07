import React, { useState } from 'react';
import {
  Heart, Users, BookOpen, Mail, CheckCircle, X,
  User, MapPin, DollarSign, ChevronDown, ChevronUp,
  Gift, Calendar, Shield, Smile, Star, Award, Send
} from 'lucide-react';
import child1 from '../assets/child1.jpg';
import child2 from '../assets/child2.jpg';
import child3 from '../assets/child3.jpg';
import menstrualHygiene from '../assets/menstrual hiegene.jpg';
import promotingMenstrualHygiene from '../assets/promoting menstrual hiegene.jpg';
import birthdays from '../assets/birthdays.png';
import childrenLearning from '../assets/children learning.avif';
import childrenPlaying from '../assets/children playing.avif';

const svgUrl = 'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E';

interface SponsorshipFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  amount: string;
  message: string;
}

const Sponsorship: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<SponsorshipFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    amount: '50',
    message: ''
  });

  const sponsorshipFaqs = [
    {
      question: "How do I sponsor a child?",
      answer: "You can sponsor a child by filling out our sponsorship application form on the website. Once submitted, our team will contact you with details and next steps."
    },
    {
      question: "What does my sponsorship provide?",
      answer: "Your sponsorship provides food, shelter, clothing, healthcare, education, and emotional support for a child in need."
    },
    {
      question: "Can I communicate with my sponsored child?",
      answer: "Yes! Sponsors receive regular updates and can send letters or gifts to their sponsored child through our program."
    },
    {
      question: "How long does sponsorship last?",
      answer: "Sponsorship is typically ongoing, but you may choose to end your sponsorship at any time by notifying us."
    },
    {
      question: "Can I visit my sponsored child?",
      answer: "Visits are possible and encouraged, but must be arranged in advance with our team to ensure the safety and privacy of all children."
    },
    {
      question: "Is my sponsorship tax-deductible?",
      answer: "Yes, all sponsorship contributions are tax-deductible. You will receive an annual statement for your records."
    },
    {
      question: "How do I change my payment method?",
      answer: "Contact our support team to update your payment information or switch to a different payment method."
    },
    {
      question: "What happens if I miss a payment?",
      answer: "If you miss a payment, our team will reach out to you to resolve the issue. The child's support will not be interrupted immediately."
    }
  ];

  const steps = [
    { number: 1, title: "Apply", description: "Complete the simple form" },
    { number: 2, title: "Match", description: "Get matched with a child" },
    { number: 3, title: "Connect", description: "Receive welcome package" },
    { number: 4, title: "Impact", description: "See your impact monthly" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Create email content
      const subject = 'Child Sponsorship Application - Akina Ties';
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
City: ${formData.city}
State: ${formData.state}
Zip Code: ${formData.zipCode}
Monthly Amount: $${formData.amount}

Additional Message:
${formData.message}

---
This sponsorship application was submitted through the Akina Ties website.
      `.trim();

      // Open email client
      const mailtoLink = `mailto:enquiry@akinaties.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');

      // Show success message
      setSubmitSuccess(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setShowForm(false);
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          amount: '50',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${svgUrl})` }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Sponsor a Child,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Change a Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Join our community of sponsors providing hope, education, and a brighter tomorrow
            </p>

            {/* Child Avatars */}
            <div className="flex justify-center gap-6 mb-12">
              {[child1, child2, child3].map((child, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <div className="relative">
                    <img 
                      src={child} 
                      alt={`Child ${index + 1}`}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-purple-700 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    Needs Sponsor
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="group bg-white text-purple-700 px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
            >
              <Heart className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Start Sponsoring Today
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Smile className="w-8 h-8" />, value: "500+", label: "Children Sponsored" },
            { icon: <BookOpen className="w-8 h-8" />, value: "98%", label: "School Attendance" },
            { icon: <Heart className="w-8 h-8" />, value: "10+", label: "Years of Impact" },
            { icon: <Award className="w-8 h-8" />, value: "100%", label: "Secure Payments" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-xl">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsorship Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Sponsorship Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to start making a lasting impact
            </p>
          </div>

          {/* Steps */}
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div 
                    className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center ${activeStep >= index ? 'ring-2 ring-purple-500' : ''}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${activeStep >= index ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      <div className="text-2xl font-bold">{step.number}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Provide */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Your Sponsorship Provides</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every $50 makes a significant difference in a child's life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                icon: <BookOpen className="w-8 h-8" />, 
                title: "Quality Education", 
                description: "Access to schools, learning materials, and qualified teachers",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                icon: <Heart className="w-8 h-8" />, 
                title: "Healthcare & Nutrition", 
                description: "Regular medical checkups, nutritious meals, and hygiene products",
                color: "from-green-500 to-emerald-500"
              },
              { 
                icon: <Shield className="w-8 h-8" />, 
                title: "Safe Environment", 
                description: "Secure shelter, emotional support, and loving care",
                color: "from-purple-500 to-pink-500"
              },
              { 
                icon: <Gift className="w-8 h-8" />, 
                title: "Special Celebrations", 
                description: "Birthday parties, holiday gifts, and memorable experiences",
                color: "from-orange-500 to-yellow-500"
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                title: "Family Support", 
                description: "Counseling and resources for family reunification",
                color: "from-red-500 to-pink-500"
              },
              { 
                icon: <Calendar className="w-8 h-8" />, 
                title: "Monthly Updates", 
                description: "Regular progress reports, photos, and letters",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Smiles We've Created</h2>
            <p className="text-xl text-gray-600">Witness the joy your sponsorship brings</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { src: menstrualHygiene, alt: "Menstrual hygiene support" },
              { src: promotingMenstrualHygiene, alt: "Education and hygiene packs" },
              { src: birthdays, alt: "Birthday celebrations" },
              { src: childrenLearning, alt: "Children learning and growing" },
              { src: childrenPlaying, alt: "Happy children playing" }
            ].map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl aspect-square group cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Star className="w-5 h-5 mb-2" fill="white" />
                    <p className="font-semibold">Making a Difference</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about sponsoring</p>
          </div>

          <div className="space-y-4">
            {sponsorshipFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  </div>
                  {openFAQ === index ? (
                    <ChevronUp className="h-6 w-6 text-purple-600" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 group"
        >
          <Heart className="w-6 h-6 group-hover:animate-pulse" />
          <span className="hidden md:inline font-semibold">Sponsor a Child</span>
        </button>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-t-3xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Begin Your Sponsorship</h2>
                  <p className="text-purple-100">Join thousands changing children's lives</p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 hover:rotate-90"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Success Message */}
            {submitSuccess ? (
              <div className="p-12 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Application Submitted!</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Your sponsorship application has been received. Check your email for next steps.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 max-w-md mx-auto">
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-green-600" />
                    <div className="text-left">
                      <p className="font-semibold text-gray-800">Next Steps</p>
                      <p className="text-sm text-gray-600">We'll contact you within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8">
                <div className="space-y-8">
                  {/* Personal Info */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                      <User className="w-6 h-6 text-purple-600" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                          placeholder="email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Monthly Amount *
                        </label>
                        <div className="relative">
                          <select
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none appearance-none bg-white"
                          >
                            <option value="50">$50 per month</option>
                            <option value="75">$75 per month</option>
                            <option value="100">$100 per month</option>
                            <option value="150">$150 per month</option>
                            <option value="200">$200 per month</option>
                          </select>
                          <DollarSign className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-purple-600" />
                      Mailing Address
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                          placeholder="123 Main Street"
                        />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                            placeholder="State"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Zip Code *</label>
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                            placeholder="Zip Code"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Personal Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none resize-none"
                      placeholder="Share why you want to sponsor a child..."
                    />
                  </div>

                  {/* Info Box */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-xl">
                        <Heart className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">What happens next?</h4>
                        <ul className="text-gray-600 space-y-2">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Instant confirmation email</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Child matching within 48 hours</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Welcome package shipped to you</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>First update in 2 weeks</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Application
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sponsorship;
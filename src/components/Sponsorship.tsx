import React, { useState } from 'react';
import { Heart, Users, BookOpen, Mail, CreditCard, CheckCircle, X, User, Phone, MapPin, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';
import child1 from '../assets/child1.jpg';
import child2 from '../assets/child2.jpg';
import child3 from '../assets/child3.jpg';
import menstrualHygiene from '../assets/menstrual hiegene.jpg';
import promotingMenstrualHygiene from '../assets/promoting menstrual hiegene.jpg';
import birthdays from '../assets/birthdays.png';
import childrenLearning from '../assets/children learning.avif';
import childrenPlaying from '../assets/children playing.avif';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
    window.location.href = mailtoLink;

    // Show success message
    setSubmitSuccess(true);
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

    setIsSubmitting(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-sm font-medium text-gray-700">Make a Difference Today</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-akina-purple via-akina-orange to-akina-brown bg-clip-text text-transparent mb-6 leading-tight">
            Sponsor a Child
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
            Your sponsorship provides hope, education, and a brighter future for children in need.
          </p>
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            <div className="relative group">
              <img src={child1} alt="Child 1" className="w-28 h-28 rounded-full object-cover shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="relative group">
              <img src={child2} alt="Child 2" className="w-28 h-28 rounded-full object-cover shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="relative group">
              <img src={child3} alt="Child 3" className="w-28 h-28 rounded-full object-cover shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-akina-purple to-akina-orange text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 transform"
          >
            Start Sponsoring Today
          </button>
        </div>

        {/* Impact Cards */} 
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-gradient-to-r from-akina-purple to-akina-orange rounded-2xl flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Safe Haven</h3>
            <p className="text-gray-600 leading-relaxed">
              Children find safety and stability in our care facilities, transitioning to loving families while maintaining connections to their roots.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-gradient-to-r from-akina-orange to-akina-brown rounded-2xl flex items-center justify-center mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Education</h3>
            <p className="text-gray-600 leading-relaxed">
              Every child receives education, either in mainstream schools or through our qualified teachers at the haven.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-gradient-to-r from-akina-brown to-akina-purple rounded-2xl flex items-center justify-center mb-6">
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
          <div className="w-20 h-20 bg-gradient-to-r from-akina-purple to-akina-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Mail className="w-10 h-10 text-white" />
          </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Welcome Package</h3>
              <p className="text-gray-600">Receive detailed information, photos, and a welcome letter about your sponsored child.</p>
            </div>
            <div className="text-center group">
          <div className="w-20 h-20 bg-gradient-to-r from-akina-orange to-akina-brown rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Users className="w-10 h-10 text-white" />
          </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Recognition Wall</h3>
              <p className="text-gray-600">Your name proudly displayed on our acknowledgment wall honoring our supporters.</p>
            </div>
            <div className="text-center group md:col-span-2 lg:col-span-1">
          <div className="w-20 h-20 bg-gradient-to-r from-akina-brown to-akina-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">Regular updates and our commitment to answer all your questions about the program.</p>
            </div>
          </div>
        </div>

        {/* How to Get Started */}
        <div className="bg-gradient-to-r from-akina-purple to-akina-orange rounded-3xl p-12 text-white shadow-2xl mb-20">
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
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-akina-purple px-12 py-4 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Begin Your Sponsorship
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Children in Our Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src={menstrualHygiene} alt="Provision of reusable sanitary towels and changing rooms for girls" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Menstrual Hygiene</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src={promotingMenstrualHygiene} alt="Menstrual hygiene and education pack" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Education Pack</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src={birthdays} alt="Birthdays" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Birthdays</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src={childrenLearning} alt="Children smiling" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Children Smiling</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img src={childrenPlaying} alt="Children playing" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Children Playing</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-akina-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-akina-purple mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {sponsorshipFaqs.map((faq, index) => (
              <div key={index} className="border border-akina-brown/20 rounded-lg">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-akina-brown/5 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-akina-purple">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-akina-purple" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-akina-purple" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-akina-brown">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform transition-all animate-in zoom-in duration-300">
            <div className="sticky top-0 bg-gradient-to-r from-akina-purple to-akina-orange text-white p-8 rounded-t-3xl flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold mb-2">Start Your Sponsorship Journey</h2>
                <p className="text-blue-100">Fill out the form below to begin making a difference</p>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 hover:rotate-90"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h3>
                <p className="text-lg text-gray-600">Your sponsorship application has been received. We'll contact you soon with more details.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <User className="w-4 h-4 text-blue-600" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <Mail className="w-4 h-4 text-blue-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <Phone className="w-4 h-4 text-blue-600" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <DollarSign className="w-4 h-4 text-blue-600" />
                      Monthly Amount
                    </label>
                    <select
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    >
                      <option value="50">$50/month</option>
                      <option value="75">$75/month</option>
                      <option value="100">$100/month</option>
                      <option value="150">$150/month</option>
                      <option value="200">$200/month</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="New York"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="NY"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Zip Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="10001"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Additional Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    placeholder="Tell us why you want to sponsor a child..."
                  />
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-100">
                  <div className="flex items-start gap-3">
                    <Heart className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">What Happens Next?</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• We'll review your application within 24 hours</li>
                        <li>• You'll receive a welcome package with child information</li>
                        <li>• Set up your secure monthly payment method</li>
                        <li>• Start receiving updates about your sponsored child</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
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
                    className="flex-1 bg-gradient-to-r from-akina-purple to-akina-orange text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Submitting...
                      </span>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Sponsorship;


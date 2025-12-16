import React, { useState, useRef } from 'react';
import { Building2, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import akinaAngels from '../assets/akina-angels.png';
import generalDonation from '../assets/general-donation.png';
import feelGoodFiver from '../assets/feel-good-fiver.png';
import ImageWithWatermark from './ImageWithWatermark';

const Donation: React.FC = () => {
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState('');

  // Success message state
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Ref for email form
  const emailFormRef = useRef<HTMLDivElement>(null);

  // Function to parse amount from selectedAmount (e.g., '$50' -> '50')

  // Function to scroll to email form
  const scrollToEmailForm = () => {
    if (emailFormRef.current) {
      emailFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "How can I make a donation?",
      answer: "Donations can be made by bank transfer. Visit our Donations page for details."
    },
    {
      question: "Can I make a one-time or recurring donation?",
      answer: "Yes, you can choose to make a one-time donation or set up a recurring monthly contribution."
    },
    {
      question: "Where does my donation go?",
      answer: "Your donation supports our programs, including food, shelter, education, healthcare, and community outreach for children and women in need."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, all donations are tax-deductible. You will receive a receipt for your contribution."
    },
    {
      question: "Can I donate items instead of money?",
      answer: "We accept donations of items such as clothing, school supplies, and non-perishable food. Please contact us to arrange a drop-off."
    },
    {
      question: "How do I get a receipt for my donation?",
      answer: "Receipts are automatically emailed to you after your donation is processed. Contact us if you need a duplicate."
    },
    {
      question: "Can I dedicate my donation to someone?",
      answer: "Yes, you can dedicate your donation in honor or memory of someone. Please indicate this when making your donation."
    },
    {
      question: "Who can I contact for more information?",
      answer: "For any inquiries about donations, email us at enquiry@akina.org or use the contact form on our website."
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Donation Request - ${emailForm.amount}`;
    const body = `Name: ${emailForm.name}\nEmail: ${emailForm.email}\nAmount: ${emailForm.amount}\nMessage: ${emailForm.message}`;
    const mailtoLink = `mailto:enquiry@akinaties.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setShowSuccessMessage(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailForm({
      ...emailForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="top" className="min-h-screen bg-akina-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Removed Back to Home button */}

          <h1 className="text-4xl font-bold text-akina-purple mb-6">Make a Donation</h1>

          {/* New Donation Options Section */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="border rounded-lg p-6 shadow-md">
              <ImageWithWatermark
                src={akinaAngels}
                alt="Akina Ties Angels"
                className="mx-auto mb-4 w-24 h-24 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">Akina Ties Angels</h3>
              <p className="mb-4 text-sm text-gray-700">
                To sponsor Akina Ties Haven by funding day to day essentials or Sponsoring a child.
              </p>
              <button
                type="button"
                onClick={() => { setSelectedAmount('$50'); setShowModal(true); }}
                className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-200"
              >
                $50 a month
              </button>
            </div>

            <div className="border rounded-lg p-6 shadow-md">
              <ImageWithWatermark
                src={generalDonation}
                alt="General Donation"
                className="mx-auto mb-4 w-24 h-24 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">General Donation!</h3>
              <p className="mb-4 text-sm text-gray-700">
                You can donate to the Akina Ties project and your funds will be allocated to the area of the cause that requires the most critical support at the time of your contribution.
              </p>
              <button
                type="button"
                onClick={() => { setSelectedAmount(''); setShowModal(true); }}
                className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-200"
              >
                Donate
              </button>
            </div>

            <div className="border rounded-lg p-6 shadow-md">
              <ImageWithWatermark
                src={feelGoodFiver}
                alt="Feel Good Fiver"
                className="mx-auto mb-4 w-24 h-24 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">Feel Good Tenner!</h3>
              <p className="mb-4 text-sm text-gray-700">
                To supply fun developmental toys and activities swimming to the Akina Ties Haven children
              </p>
              <button
                type="button"
                onClick={() => { setSelectedAmount('$10'); setShowModal(true); }}
                className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-200"
              >
                $10 Donation
              </button>
            </div>
          </div>

          <p className="text-xl text-akina-brown mb-12">
            Your generosity helps us continue our mission to support vulnerable children and women in our community.
          </p>

          {/* Payment Options */}
          <div className="mb-12 grid grid-cols-1 lg:grid-cols-1 gap-8">
            {/* Bank Transfer */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 text-white">
              <div className="flex items-center mb-6">
                <Building2 className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Bank Transfer</h2>
              </div>
              <p className="mb-6">
                Donate via bank transfer. Contact us for details.
              </p>
              <button
                onClick={scrollToEmailForm}
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Request Bank Details
              </button>
            </div>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                <h2 className="text-2xl font-bold text-akina-purple mb-4">Choose Payment Method for Donation of {selectedAmount}</h2>
                <div className="space-y-4">
                  <button
                    onClick={() => { setShowModal(false); scrollToEmailForm(); setEmailForm(prev => ({ ...prev, amount: selectedAmount })); }}
                    className="w-full bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
                  >
                    Bank Transfer
                  </button>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-4 w-full bg-gray-300 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-400 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Email Request Form */}
          <div ref={emailFormRef} className="mt-16 bg-akina-brown/10 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Mail className="h-8 w-8 text-akina-purple mr-3" />
              <h2 className="text-2xl font-bold text-akina-purple">Request Payment Details</h2>
            </div>
            <p className="text-akina-brown mb-8">
              Fill out the form below to request payment details or discuss donation options with our team.
            </p>

            {showSuccessMessage && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you for your interest! Your email has been sent. Please be patient as we respond within 24-48 hours.
              </div>
            )}

            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-akina-purple mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={emailForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-akina-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-akina-purple"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-akina-purple mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={emailForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-akina-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-akina-purple"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-akina-purple mb-2">
                  Donation Amount (Optional)
                </label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  value={emailForm.amount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-akina-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-akina-purple"
                  placeholder="e.g., $100 or KES 5000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-akina-purple mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={emailForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-akina-brown/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-akina-purple"
                  placeholder="Tell us about your donation or any questions you have..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-akina-purple text-white px-8 py-3 rounded-full font-semibold hover:bg-akina-brown transition-colors duration-200"
              >
                Send Request
              </button>
            </form>
          </div>

          {/* FAQ Section */} 
          <div className="mt-16 bg-akina-white rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-bold text-akina-purple mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
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
      </div>
    </div>
  );
};

export default Donation;

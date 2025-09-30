import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Building2, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Donation: React.FC = () => {
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    amount: '',
    message: ''
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How can I make a donation?',
      answer: 'You can make a donation through our Donate page using PayPal or bank transfer options.'
    },
    {
      question: 'How do I become a volunteer?',
      answer: 'Visit our Contact page and fill out the volunteer application form to get involved.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve Kisii, Nyamira, and Migori counties in Western Kenya.'
    },
    {
      question: 'How can I sponsor a child or program?',
      answer: 'Please contact us at enquiry@akinaties.org to learn more about sponsorship opportunities.'
    },
    {
      question: 'Where can I find news and updates?',
      answer: 'Check our News page regularly for the latest information and success stories.'
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Donation Request - ${emailForm.amount}`;
    const body = `Name: ${emailForm.name}\nEmail: ${emailForm.email}\nAmount: ${emailForm.amount}\nMessage: ${emailForm.message}`;
    const mailtoLink = `mailto:enquiry@akinaties.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailForm({
      ...emailForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-akina-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-akina-purple hover:text-akina-brown transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-akina-purple mb-6">Make a Donation</h1>
          <p className="text-xl text-akina-brown mb-12">
            Your generosity helps us continue our mission to support vulnerable children and women in our community.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* PayPal Option */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 text-white">
              <div className="flex items-center mb-6">
                <CreditCard className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">PayPal</h2>
              </div>
              <p className="mb-6">
                Make a secure donation through PayPal. Your contribution will be processed instantly and safely.
              </p>
              <a
                href="https://www.paypal.com/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Donate with PayPal
              </a>
            </div>

            {/* Bank Transfer Option */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-8 text-white">
              <div className="flex items-center mb-6">
                <Building2 className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Bank Transfer</h2>
              </div>
              <p className="mb-6">
                Prefer to donate via bank transfer? Contact us for our banking details.
              </p>
              <button
                onClick={() => window.location.href = 'mailto:enquiry@akinaties.org?subject=Bank Transfer Donation Request'}
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Request Bank Details
              </button>
            </div>
          </div>

          {/* Email Request Form */}
          <div className="mt-16 bg-akina-brown/10 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Mail className="h-8 w-8 text-akina-purple mr-3" />
              <h2 className="text-2xl font-bold text-akina-purple">Request Payment Details</h2>
            </div>
            <p className="text-akina-brown mb-8">
              Fill out the form below to request payment details or discuss donation options with our team.
            </p>

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

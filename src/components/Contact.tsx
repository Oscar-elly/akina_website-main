import React from 'react';
import { Phone, Mail, MapPin, Facebook, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-700">
            Ready to make a difference? Contact us to learn more about our programs or how you can help
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-800 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-700">0724118379</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-800 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-700">enquiry@akinaties.org</p>
                  <p className="text-gray-700">akinaties@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-800 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-700">Kisii, Western Kenya</p>
                  <p className="text-gray-600">Serving Kisii, Nyamira, and Migori Counties</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Facebook className="h-6 w-6 text-blue-800 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Social Media</h4>
                  <a
                    href="https://www.facebook.com/AkinaTiesAustraliaInc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                  >
                    <span>Facebook Profile</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Contact Person</h4>
              <p className="text-gray-700">
                <strong>Lilian Marwa</strong><br />
                President, Akina Ties Inc.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">How You Can Help</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                <h4 className="text-xl font-bold mb-3">Make a Donation</h4>
                <p className="mb-4">Your contribution directly impacts the lives of vulnerable children and women in our community.</p>
                <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Donate Now
                </button>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                <h4 className="text-xl font-bold mb-3">Volunteer</h4>
                <p className="mb-4">Join our team of dedicated volunteers and make a direct impact in our community programs.</p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Get Involved
                </button>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
                <h4 className="text-xl font-bold mb-3">Partner With Us</h4>
                <p className="mb-4">Organizations and institutions can partner with us to expand our reach and impact.</p>
                <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
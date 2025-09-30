import React, { useState } from 'react';
import { Mail, MapPin, Facebook, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import VolunteerModal from './VolunteerModal';
import PartnershipModal from './PartnershipModal';

const Contact: React.FC = () => {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isPartnershipModalOpen, setIsPartnershipModalOpen] = useState(false);

  return (
    <section id="contact" className="py-20 bg-akina-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-akina-purple mb-6">Get in Touch</h2>
          <p className="text-xl text-akina-brown">
            Ready to make a difference? Contact us to learn more about our programs or how you can help
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-akina-purple mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-akina-purple mt-1" />
                <div>
                  <h4 className="font-semibold text-akina-purple">Email</h4>
                  <p className="text-akina-brown">enquiry@akinaties.org</p>
                  <p className="text-akina-brown">akinaties@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-akina-purple mt-1" />
                <div>
                  <h4 className="font-semibold text-akina-purple">Location</h4>
                  <p className="text-akina-brown">Kisii, Western Kenya</p>
                  <p className="text-akina-brown">Serving Kisii, Nyamira, and Migori Counties</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Facebook className="h-6 w-6 text-akina-purple mt-1" />
                <div>
                  <h4 className="font-semibold text-akina-purple">Social Media</h4>
                  <a
                    href="https://www.facebook.com/AkinaTiesAustraliaInc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-akina-brown hover:text-akina-purple flex items-center space-x-1"
                  >
                    <span>Facebook Profile</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-akina-purple mb-8">How You Can Help</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-akina-brown to-akina-brown rounded-lg p-6 text-akina-white">
                <h4 className="text-xl font-bold mb-3">Make a Donation</h4>
                <p className="mb-4">Your contribution directly impacts the lives of vulnerable children and women in our community.</p>
                <Link
                  to="/donate"
                  className="bg-akina-white text-akina-brown px-6 py-3 rounded-full font-semibold hover:bg-akina-white/80 transition-colors duration-200"
                >
                  Donate Now
                </Link>
              </div>

              <div className="bg-gradient-to-r from-akina-purple to-akina-purple rounded-lg p-6 text-akina-white">
                <h4 className="text-xl font-bold mb-3">Volunteer</h4>
                <p className="mb-4">Join our team of dedicated volunteers and make a direct impact in our community programs.</p>
                <button
                  onClick={() => setIsVolunteerModalOpen(true)}
                  className="bg-akina-white text-akina-purple px-6 py-3 rounded-full font-semibold hover:bg-akina-white/80 transition-colors duration-200"
                >
                  Get Involved
                </button>
              </div>

              <div className="bg-gradient-to-r from-akina-orange to-akina-orange rounded-lg p-6 text-akina-white">
                <h4 className="text-xl font-bold mb-3">Partner With Us</h4>
                <p className="mb-4">Organizations and institutions can partner with us to expand our reach and impact.</p>
                <button
                  onClick={() => setIsPartnershipModalOpen(true)}
                  className="bg-akina-white text-akina-orange px-6 py-3 rounded-full font-semibold hover:bg-akina-white/80 transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modals */}
        <VolunteerModal
          isOpen={isVolunteerModalOpen}
          onClose={() => setIsVolunteerModalOpen(false)}
        />
        <PartnershipModal
          isOpen={isPartnershipModalOpen}
          onClose={() => setIsPartnershipModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default Contact;

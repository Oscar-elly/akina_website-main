import React, { useState } from 'react';
import { X, Mail, Phone, User, MessageSquare } from 'lucide-react';

interface EventsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EventsModal: React.FC<EventsModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    eventInterest: '',
    availability: '',
    contribution: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email content
    const subject = 'Event Participation Application - Akina Ties';
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}

Event Interest: ${formData.eventInterest}

Availability: ${formData.availability}

How would you like to contribute: ${formData.contribution}

---
This event participation application was submitted through the Akina Ties website.
    `.trim();

    // Open email client
    const mailtoLink = `mailto:enquiry@akinaties.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);

    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      eventInterest: '',
      availability: '',
      contribution: ''
    });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-akina-purple">Event Participation Application</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mb-6">
            <p className="text-akina-brown mb-4">
              Join our fundraising events and campaigns to support vulnerable children and women in Western Kenya.
            </p>
            <div className="bg-akina-orange/10 p-4 rounded-lg">
              <h3 className="font-semibold text-akina-purple mb-2">Event Opportunities:</h3>
              <ul className="text-sm text-akina-brown space-y-1">
                <li>• Annual charity runs and walks</li>
                <li>• Community fundraising dinners</li>
                <li>• Online and offline campaigns</li>
                <li>• Garage sales and bazaars</li>
                <li>• Awareness and education events</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-akina-brown mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akina-purple focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-akina-brown mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akina-purple focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-akina-brown mb-1">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akina-purple focus:border-transparent"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-akina-brown mb-1">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akina-purple focus:border-transparent"
                  placeholder="City, Country"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-akina-brown mb-1">
                Event Interest *
              </label>
              <select
                name="eventInterest"
                value={formData.eventInterest}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akina-purple focus:border-transparent"
              >
                <option value="">Select event type</option>
                <option value="Charity Runs/Walks">Charity Runs/Walks</option>
                <option value="Fundraising Dinners">Fundraising Dinners</option>
                <option value="Online Campaigns">Online Campaigns</option>
                <option value="Garage Sales">Garage Sales</option>
                <option value="Awareness Events">Awareness Events</option>
                <option value="All Events">All Events</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-akina-brown mb-1">
                Availability *
              </label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akina-purple focus:border-transparent"
              >
                <option value="">Select your availability</option>
                <option value="Weekdays">Weekdays</option>
                <option value="Weekends">Weekends</option>
                <option value="Evenings">Evenings</option>
                <option value="Flexible">Flexible</option>
                <option value="One-time Events">One-time Events</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-akina-brown mb-1">
                How would you like to contribute? *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <textarea
                  name="contribution"
                  value={formData.contribution}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akina-purple focus:border-transparent"
                  placeholder="Tell us how you'd like to help with events (e.g., organizing, volunteering, sponsoring, etc.)..."
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-akina-purple text-white rounded-md hover:bg-akina-purple/90 transition-colors duration-200"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventsModal;

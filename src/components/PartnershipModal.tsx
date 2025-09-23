import React, { useState } from 'react';
import { X, Mail, Phone, Building, User, MessageSquare, Globe } from 'lucide-react';

interface PartnershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PartnershipModal: React.FC<PartnershipModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    organizationType: '',
    partnershipType: '',
    description: '',
    resources: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email content
    const subject = 'Partnership Inquiry - Akina Ties';
    const body = `
Organization: ${formData.organizationName}
Contact Person: ${formData.contactPerson}
Email: ${formData.email}
Phone: ${formData.phone}
Website: ${formData.website}

Organization Type: ${formData.organizationType}

Proposed Partnership: ${formData.partnershipType}

Description: ${formData.description}

Resources/Expertise: ${formData.resources}

---
This partnership inquiry was submitted through the Akina Ties website.
    `.trim();

    // Open email client
    const mailtoLink = `mailto:enquiry@akinaties.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);

    // Reset form and close modal
    setFormData({
      organizationName: '',
      contactPerson: '',
      email: '',
      phone: '',
      website: '',
      organizationType: '',
      partnershipType: '',
      description: '',
      resources: ''
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
            <h2 className="text-2xl font-bold text-akina-purple">Partnership Inquiry</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mb-6">
            <p className="text-akina-brown mb-4">
              Partner with Akina Ties to expand our reach and impact in supporting vulnerable children and women across Western Kenya.
            </p>
            <div className="bg-akina-brown/10 p-4 rounded-lg">
              <h3 className="font-semibold text-akina-purple mb-2">Partnership Opportunities:</h3>
              <ul className="text-sm text-akina-brown space-y-1">
                <li>• Joint program implementation and funding</li>
                <li>• Resource sharing and capacity building</li>
                <li>• Technical expertise and knowledge transfer</li>
                <li>• Community development and outreach programs</li>
                <li>• Research and evaluation partnerships</li>
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-akina-brown mb-1">
                  Organization Name *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akina-purple focus:border-transparent"
                    placeholder="Your organization name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-akina-brown mb-1">
                  Contact Person *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akina-purple focus:border-transparent"
                    placeholder="Full name"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    placeholder="contact@organization.com"
                  />
                </div>
              </div>

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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-akina-brown mb-1">
                  Website
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akina-purple focus:border-transparent"
                    placeholder="https://www.organization.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-akina-brown mb-1">
                  Organization Type *
                </label>
                <select
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akina-purple focus:border-transparent"
                >
                  <option value="">Select organization type</option>
                  <option value="Non-Profit Organization">Non-Profit Organization</option>
                  <option value="Corporation">Corporation</option>
                  <option value="Educational Institution">Educational Institution</option>
                  <option value="Healthcare Organization">Healthcare Organization</option>
                  <option value="Government Agency">Government Agency</option>
                  <option value="Foundation">Foundation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-akina-brown mb-1">
                Type of Partnership Interest *
              </label>
              <select
                name="partnershipType"
                value={formData.partnershipType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akina-purple focus:border-transparent"
              >
                <option value="">Select partnership type</option>
                <option value="Program Funding">Program Funding</option>
                <option value="Joint Program Implementation">Joint Program Implementation</option>
                <option value="Resource Sharing">Resource Sharing</option>
                <option value="Technical Expertise">Technical Expertise</option>
                <option value="Capacity Building">Capacity Building</option>
                <option value="Research & Evaluation">Research & Evaluation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-akina-brown mb-1">
                Brief Description of Your Organization *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akina-purple focus:border-transparent"
                placeholder="Tell us about your organization's mission, focus areas, and current work..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-akina-brown mb-1">
                Resources or Expertise You Can Offer
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <textarea
                  name="resources"
                  value={formData.resources}
                  onChange={handleChange}
                  rows={3}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-akina-purple focus:border-transparent"
                  placeholder="Describe the resources, expertise, or support you can provide..."
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
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnershipModal;

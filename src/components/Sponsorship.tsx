import React from 'react';

const Sponsorship: React.FC = () => {
  return (
    <section className="py-20 bg-akina-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-akina-purple mb-6">Sponsorship Opportunities</h2>
          <p className="text-xl text-akina-brown mb-8">
            Partner with Akina Ties to make a lasting impact in the lives of vulnerable children and women in Western Kenya.
          </p>
          <p className="text-akina-brown mb-6">
            Our sponsorship programs provide vital support for education, healthcare, and community empowerment initiatives.
          </p>
          <ul className="list-disc list-inside text-akina-brown space-y-3 text-left max-w-xl mx-auto">
            <li>Child Sponsorship: Support a child’s education, health, and well-being.</li>
            <li>Program Sponsorship: Fund specific community programs and projects.</li>
            <li>Event Sponsorship: Partner with us for fundraising and awareness events.</li>
            <li>Corporate Sponsorship: Collaborate with your organization to create social impact.</li>
          </ul>
          <p className="text-akina-brown mt-8">
            To learn more about sponsorship opportunities, please contact us at <a href="mailto:enquiry@akinaties.org" className="text-akina-purple underline">enquiry@akinaties.org</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;

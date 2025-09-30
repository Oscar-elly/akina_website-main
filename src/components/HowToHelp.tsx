import React from 'react';

const HowToHelp: React.FC = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-8">How to Help</h1>
      <p className="mb-6">
        Your support makes a difference. Here are some ways you can help us continue our mission:
      </p>
      <ul className="list-disc list-inside space-y-4 text-lg">
        <li>Make a donation to support our programs and services</li>
        <li>Sponsor a child to provide ongoing care and education</li>
        <li>Volunteer your time and skills to assist with our initiatives</li>
        <li>Advocate for our cause and raise awareness in your community</li>
        <li>Participate in fundraising events and campaigns</li>
      </ul>
    </section>
  );
};

export default HowToHelp;

import React from 'react';

const WhatWeDo: React.FC = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-8">What We Do</h1>
      <p className="mb-6">
        We provide crisis accommodation, community education programs, and support services aimed at improving the lives of orphans, vulnerable children, women, and youth affected by violence, HIV/AIDS, and neglect in Western Kenya.
      </p>
      <ul className="list-disc list-inside space-y-4 text-lg">
        <li>Crisis accommodation for women and children fleeing violence</li>
        <li>Community empowerment and education initiatives</li>
        <li>Legal support and advocacy for vulnerable populations</li>
        <li>Health and wellness programs</li>
        <li>Economic empowerment and skills training</li>
      </ul>
    </section>
  );
};

export default WhatWeDo;

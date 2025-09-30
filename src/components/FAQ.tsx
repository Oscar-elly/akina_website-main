import React from 'react';

const FAQ: React.FC = () => {
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

  return (
    <section className="py-20 bg-akina-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-akina-purple mb-6">Frequently Asked Questions</h2>
          <div className="text-left space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold text-akina-brown mb-2">{faq.question}</h3>
                <p className="text-akina-brown">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

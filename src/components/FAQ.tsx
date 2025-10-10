import React from 'react';

const sponsorshipFaqs = [
  {
    question: "How do I sponsor a child?",
    answer: "You can sponsor a child by filling out our sponsorship application form on the website. Once submitted, our team will contact you with details and next steps."
  },
  {
    question: "What does my sponsorship provide?",
    answer: "Your sponsorship provides food, shelter, clothing, healthcare, education, and emotional support for a child in need."
  },
  {
    question: "Can I communicate with my sponsored child?",
    answer: "Yes! Sponsors receive regular updates and can send letters or gifts to their sponsored child through our program."
  },
  {
    question: "How long does sponsorship last?",
    answer: "Sponsorship is typically ongoing, but you may choose to end your sponsorship at any time by notifying us."
  },
  {
    question: "Can I visit my sponsored child?",
    answer: "Visits are possible and encouraged, but must be arranged in advance with our team to ensure the safety and privacy of all children."
  },
  {
    question: "Is my sponsorship tax-deductible?",
    answer: "Yes, all sponsorship contributions are tax-deductible. You will receive an annual statement for your records."
  },
  {
    question: "How do I change my payment method?",
    answer: "Contact our support team to update your payment information or switch to a different payment method."
  },
  {
    question: "What happens if I miss a payment?",
    answer: "If you miss a payment, our team will reach out to you to resolve the issue. The child's support will not be interrupted immediately."
  }
];

const donationFaqs = [
  {
    question: "How can I make a donation?",
    answer: "Donations can be made online through our secure payment system, via PayPal, or by bank transfer. Visit our Donations page for details."
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
    answer: "For any inquiries about donations, email us at info@akina.org or use the contact form on our website."
  }
];

const FAQ: React.FC = () => (
  <section className="max-w-4xl mx-auto py-16 px-4">
    <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Sponsorship FAQs</h2>
        {sponsorshipFaqs.map((faq, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Donation FAQs</h2>
        {donationFaqs.map((faq, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
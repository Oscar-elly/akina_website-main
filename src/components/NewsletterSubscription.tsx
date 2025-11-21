import React, { useState } from 'react';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="bg-akina-purple py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive updates on our programs, success stories, and ways you can help make a difference.
        </p>

        {isSubscribed ? (
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg inline-block">
            <p className="font-semibold">Thank you for subscribing!</p>
            <p>You'll receive our latest updates soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/70 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-akina-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSubscription;

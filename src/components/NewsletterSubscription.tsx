import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletters/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });
      if (response.ok) {
        setMessage('Thank you for subscribing to our newsletter!');
        setEmail('');
        setName('');
      } else {
        setMessage('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <section className="py-20 bg-akina-purple text-akina-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-16 w-16 mx-auto mb-6 text-akina-orange" />
          <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8">
            Stay updated with the latest news, events, and success stories from Akina Ties.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg text-akina-brown"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg text-akina-brown"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-akina-orange hover:bg-akina-brown text-akina-white px-8 py-3 rounded-full font-semibold transition-colors duration-200"
            >
              Subscribe Now
            </button>
          </form>
          {message && <p className="mt-4 text-lg">{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;

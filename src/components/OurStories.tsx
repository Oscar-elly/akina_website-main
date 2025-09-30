import React from 'react';
import NewsletterSubscription from './NewsletterSubscription';

const newsArticles = [
  {
    title: 'Akina Ties Launches New Health & Hygiene Program',
    date: 'August 15, 2024',
    summary: 'We are excited to announce the launch of our new Health & Hygiene program aimed at providing medical care, cancer screening, and health support to vulnerable communities in Kisii and Nyamira counties.',
    link: '#'
  },
  {
    title: 'Successful Completion of Girlie Camp 2024',
    date: 'July 10, 2024',
    summary: 'Over 2000 girls participated in the 2024 Girlie Camp, an alternative rite of passage program that educates and empowers young girls to end Female Genital Mutilation in Kisii, Nyamira, and Migori counties.',
    link: '#'
  },
  {
    title: 'Feed a Granny Program Provides 3600+ Meals',
    date: 'June 5, 2024',
    summary: 'Our Feed a Granny program has provided over 3600 meals and 1200 Christmas hampers to abandoned elderly women, ensuring they receive food, medical care, and housing support.',
    link: '#'
  }
];

const OurStories: React.FC = () => {
  return (
    <div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8 text-akina-purple">Our Stories</h1>
        <p className="mb-6 text-akina-brown">
          Read inspiring stories from the children, women, and communities we serve. Learn how your support is changing lives and creating lasting impact.
        </p>
        {/* Placeholder for stories content */}
        <div className="space-y-8 mb-16">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-akina-purple">Story Title 1</h2>
            <p className="text-akina-brown">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, faucibus erat at, cursus lorem.
            </p>
          </article>
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-akina-purple">Story Title 2</h2>
            <p className="text-akina-brown">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </article>
        </div>

        {/* Latest News & Updates */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-akina-purple mb-6 text-center">Latest News & Updates</h2>
          <p className="text-xl text-akina-brown mb-8 text-center">
            Stay informed about the latest developments, events, and success stories from Akina Ties.
          </p>
          <div className="space-y-12 text-left">
            {newsArticles.map((article, index) => (
              <article key={index} className="border-b border-akina-brown pb-6">
                <h3 className="text-2xl font-semibold text-akina-purple mb-2">{article.title}</h3>
                <p className="text-sm text-akina-brown mb-2">{article.date}</p>
                <p className="text-akina-brown mb-2">{article.summary}</p>
                <a href={article.link} className="text-akina-orange hover:underline">
                  Read more
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSubscription />
    </div>
  );
};

export default OurStories;

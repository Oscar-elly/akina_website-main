import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, Heart, Users } from 'lucide-react';
import { articles } from '../data/articles';
import VolunteerModal from './VolunteerModal';
import NewsletterSubscription from './NewsletterSubscription';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  const article = articles.find(a => a.id === parseInt(id || '0'));

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/our-stories"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition-all"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Stories
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    const url = window.location.href;
    const title = article.title;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard!');
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>

          {/* Title and Meta on Left, Category on Right */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
            <div className="flex-1">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight max-w-4xl">
                {article.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/90">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span>{article.author}</span>
                </div>
              </div>
            </div>

            {/* Category Badge on Right */}
            <div className="lg:flex-shrink-0">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                {article.category}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Article Body */}
          <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          {/* Action Buttons */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/donate"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Link>
              <button
                onClick={() => setIsVolunteerModalOpen(true)}
                className="inline-flex items-center px-8 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all hover:scale-105 shadow-lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Volunteer
              </button>
              <button
                onClick={handleShare}
                className="inline-flex items-center px-8 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-all hover:scale-105 shadow-lg"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share Article
              </button>
            </div>
          </div>

          {/* Related Articles or Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Help Us Continue Our Mission
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Your support enables us to create more stories of hope and transformation in communities across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105"
              >
                Make a Donation
              </Link>
              <Link
                to="/our-stories"
                className="px-8 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all hover:scale-105"
              >
                Read More Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <NewsletterSubscription />

      {/* Volunteer Modal */}
      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />
    </div>
  );
};

export default ArticlePage;

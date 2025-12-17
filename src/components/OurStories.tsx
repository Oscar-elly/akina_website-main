import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import julie from '../assets/Julie.avif';
import menstrualHygiene from '../assets/menstrual hiegene.jpg';
import birthdays from '../assets/birthdays.png';
import NewsletterSubscription from './NewsletterSubscription';
import ImageWithWatermark from './ImageWithWatermark';
import { articles } from '../data/articles';
import { Calendar, Heart, Users, ArrowRight } from 'lucide-react';



interface Story {
  id: number;
  title: string;
  image: string;
  alt: string;
  brief: string;
  full: string;
  icon: React.ReactNode;
  color: string;
}

const OurStories: React.FC = () => {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  const [newsDisplayCount, setNewsDisplayCount] = useState(3);

  const stories: Story[] = [
    {
      id: 1,
      title: "Supporting 'Julie' Through Her Medical Journey",
      image: julie,
      alt: "Julie receiving medical care",
      brief: "'Julie' came to us more than a decade ago. Lilian had been approached by her own brother to help a young child who lived on her psychotic mothers back borrowing money on the streets for her medication.",
      full: "As soon as Lilian met the young girl, she was touched with her plight and immediately contacted her then boss the late Lyle Burgoyne, the founder of Kenya Health who immediately sought for help to have this baby taken to Kijabe Hospital for medical attention where Julie's medical Journey started. with the help and support of grandma and pa Kate and Noel Doyle OAM. Julie underwent her first major head construction surgery at Kijabe Hospital. She underwent a hernia surgery then later on a double cleft surgery. This enabled her to start experiencing a normal childhood and attend normal formal education which she was not able to attend before. Her medical Journey still goes on as she is on lifetime consultative medication which costs Akina $2700 a year ($225Aud per month) to purchase. She attends quarter medical review clinic to regulate her medication and also check on her wellness. This cannot be possible without your generous support.",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-pink-50 text-pink-600"
    },
    {
      id: 2,
      title: "Empowering Girls Through Menstrual Hygiene",
      image: menstrualHygiene,
      alt: "Girls receiving menstrual hygiene support",
      brief: "In rural Kenya, our menstrual hygiene program provides reusable and disposable sanitary towels and changing rooms to girls in remote schools, ensuring they can attend classes without fear or embarrassment.",
      full: "In the heart of rural Kenya, where access to basic hygiene products is a luxury, our menstrual hygiene program stands as a beacon of dignity and empowerment. We provide reusable and disposable sanitary towels and dedicated changing rooms to girls in remote schools, ensuring they can attend classes without fear or embarrassment. This initiative not only addresses immediate health needs but also challenges cultural stigmas surrounding menstruation, fostering an environment where girls can thrive academically and personally. By promoting menstrual hygiene in these underserved communities, we're not just supplying products—we're building confidence, reducing absenteeism, preventing teen pregnancies, and paving the way for a generation of educated, empowered women who will be a force of change and lead their communities forward.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: 3,
      title: "Celebrating Life's Milestones",
      image: birthdays,
      alt: "Children celebrating birthdays",
      brief: "Birthdays are more than just dates on a calendar; they're celebrations of survival, growth, and potential for children in our care facilities.",
      full: "Birthdays are more than just dates on a calendar; they're celebrations of survival, growth, and potential. In our care facilities, we transform these special days into moments of joy and belonging for children who have faced unimaginable hardships. From simple cakes baked with love to handmade cards and small gifts, we create memories that remind each child of their worth and the community's commitment to their future. These celebrations extend beyond birthdays, encompassing the everyday moments of learning, playing, and smiling that define childhood. By nurturing these experiences, we're helping children rebuild their sense of normalcy and hope, showing them that despite their past traumas, they are cherished and have a bright future ahead.",
      icon: <Calendar className="w-6 h-6" />,
      color: "bg-orange-50 text-orange-600"
    }
  ];

  const newsArticles = articles;

  const handleStoryToggle = (id: number) => {
    setExpandedStory(expandedStory === id ? null : id);
  };

  const loadMoreNews = () => {
    setNewsDisplayCount(prev => prev + 3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-white pt-20 pb-16 md:py-24" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#7c3aed' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-full relative z-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Stories of Hope & Transformation
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Discover how your support creates lasting impact in the lives of children, women, and communities we serve.
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/10 to-transparent"></div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story) => (
            <div 
              key={story.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithWatermark
                  src={story.image}
                  alt={story.alt}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 ${story.color} p-2 rounded-full`}>
                  {story.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {story.title}
                </h3>
                
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {expandedStory === story.id ? story.full : story.brief}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => handleStoryToggle(story.id)}
                      className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-1 transition-colors"
                    >
                      {expandedStory === story.id ? 'Read less' : 'Read full story'}
                      <ArrowRight className={`w-4 h-4 transition-transform ${expandedStory === story.id ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {story.id === 1 && (
                      <Link
                        to="/donate"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        Support Julie
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Latest News Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Latest News & Updates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed about our latest initiatives, events, and success stories
            </p>
          </div>

          <div className="space-y-6">
            {newsArticles.slice(0, newsDisplayCount).map((article, index) => (
              <article 
                key={index} 
                className="group p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-700 transition-colors">
                        {article.title}
                      </h3>
                      <span className="text-sm text-gray-500 mt-1 md:mt-0">
                        {article.date}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.summary}
                    </p>
                    
                    <Link
                      to={`/article/${article.id}`}
                      className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors"
                    >
                      Read full article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {newsDisplayCount < newsArticles.length && (
            <div className="text-center mt-10 pt-8 border-t border-gray-200">
              <button
                onClick={loadMoreNews}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                Load More Articles
              </button>
              <p className="text-sm text-gray-500 mt-3">
                Showing {newsDisplayCount} of {newsArticles.length} articles
              </p>
            </div>
          )}
        </div>

        {/* Impact Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold">2000+</div>
            <div className="text-sm opacity-90">Girls Empowered</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-pink-500 text-white p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold">3600+</div>
            <div className="text-sm opacity-90">Meals Provided</div>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-purple-500 text-white p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold">10+</div>
            <div className="text-sm opacity-90">Years of Impact</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-blue-500 text-white p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold">3</div>
            <div className="text-sm opacity-90">Counties Served</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your support helps us continue creating stories of hope and transformation every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105"
            >
              Donate Now
            </Link>
            <Link
              to="/volunteer"
              className="px-8 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all hover:scale-105"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSubscription />
    </div>
  );
};

export default OurStories;
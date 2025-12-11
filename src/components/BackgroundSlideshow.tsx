import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import backgroundImage1 from '../assets/background_image1.jpg';
import backgroundImage2 from '../assets/background_image2.jpg';
import backgroundImage3 from '../assets/background_image3.jpg';
import backgroundImage4 from '../assets/background_image4.jpg';

const BackgroundSlideshow: React.FC = () => {
  const slides = [
    {
      image: backgroundImage1,
      text: 'A future free from abuse, discrimination, and poverty.',
    },
    {
      image: backgroundImage2,
      text: 'Providing education, therapy, and legal support.',
    },
    {
      image: backgroundImage3,
      text: 'Economic empowerment and leadership initiatives.',
    },
    {
      image: backgroundImage4,
      text: 'Promoting and protecting fundamental rights.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-900">

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover object-[center_20%]" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 min-h-screen flex items-center">
        <div className="max-w-4xl">

          {/* Heading */}
          <div
            className={`transition-all duration-700 ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-akina-orange mb-6 leading-tight">
              {slides[currentSlide].text}
            </h1>
          </div>

          {/* Tagline */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="inline-block mb-10">
              <p className="text-xl sm:text-2xl font-light text-brown-800 tracking-widest border-l-4 border-akina-orange pl-6">
                LOVE · PROTECT · EMPOWER
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-200 ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <Link
              to="/sponsorship"
              className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 hover:bg-akina-purple hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span>Sponsor a Child</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/donate"
              className="group inline-flex items-center justify-center gap-3 bg-akina-orange text-white hover:bg-orange-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <span>Make a Donation</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/our-stories"
              className="group inline-flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white/50 hover:border-white hover:bg-white/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Discover</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group relative"
              >
                <div
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-16 bg-white'
                      : 'w-8 bg-white/40 group-hover:bg-white/60 group-hover:w-12'
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20 hidden sm:block">
        <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
          <span className="text-white font-medium">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Clean Wavy Separator — No Grid Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50 L1200,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundSlideshow;

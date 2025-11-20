import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="relative w-[95%] max-w-[1400px] h-screen bg-cover bg-center transition-all duration-1000 mx-auto"
      style={{ backgroundImage: `url(${slides[currentSlide].image})`, backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-black/60"></div> {/* Faded overlay for text readability */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-akina-white px-4">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {slides[currentSlide].text}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-akina-orange/80 leading-relaxed">
            LOVE - PROTECT - EMPOWER
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              to="/sponsorship"
              className="bg-akina-purple hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Sponsor a Child
            </Link>
            <Link
              to="/donate"
              className="bg-akina-orange hover:bg-purple-500 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Make a Donation
            </Link>
            <Link
              to="/our-stories"
              className="bg-akina-brown hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Discover
            </Link>
          </div>
        </div>
      </div>
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-akina-orange' : 'bg-akina-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundSlideshow;

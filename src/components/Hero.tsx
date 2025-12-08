import React from 'react';
import backgroundImage1 from '../assets/background_image1.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative text-white pt-20 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage1})` }}>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Akina Ties: We’re on a mission to change the brains of traumatised children.
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-12">
          WE NEED YOUR HELP.
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/sponsorship"
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Sponsor a Child
          </a>
          <a
            href="/donate"
            className="bg-purple-400 hover:bg-purple-500 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Make a Donation
          </a>
          <a
            href="/our-stories"
            className="bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Our Stories
          </a>
 
        </div>
      </div>
    </section>
  );
};

export default Hero;

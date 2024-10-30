import React from 'react';
import { Button } from 'flowbite-react';
import heroImage from './hero-section.jpg';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-800 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center px-4 md:px-8 lg:px-16 py-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to RushJob
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6">
          Find your dream job and advance your career with ease.
        </p>
        <Button color="primary" size="lg" href="#vacancy">
          Explore Vacancies....
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
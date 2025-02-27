import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] sm:h-[60vh] md:h-[60vh] px-6 sm:px-10 md:px-16 py-20 text-center">
      <h1 className="font-bold text-black text-2xl sm:text-3xl md:text-4xl max-w-3xl">
        Empower your future with the courses designed to{' '}
        <span className="text-red-400">fit your choice.</span>
      </h1>
      <p className="mt-4 max-w-xl text-sm sm:text-base md:text-lg">
        We bring together world-class instructors, interactive content, and a supportive
        community to help you achieve your personal and professional goals.
      </p>
      <SearchBar/>
         
    </div>
  );
};

export default Hero;

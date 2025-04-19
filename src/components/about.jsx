import React from 'react';
import Img from './images/image.png';

const PremiumAbout = () => {
  return (
    <section id="about" className="relative bg-gradient-to-b from-black to-gray-900 py-24 overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-red-600/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-red-600/5 blur-3xl"></div>
      
      {/* Section header with premium styling */}
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              About <span className="text-red-600">Me</span>
            </h2>
            <div className="absolute -bottom-4 left-0 right-0 mx-auto w-20 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-10">
        {/* Used max-w-5xl to constrain the overall width for better large screen layout */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-5">
          {/* Left column with fixed 400px image sizing */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-start">
            <div className="relative rounded-lg overflow-hidden shadow-2xl w-full max-w-[400px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent mix-blend-overlay"></div>
              <img
                src={Img}
                alt="Frontend Developer Portrait"
                className="w-full h-auto object-cover relative z-10"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </div>
          </div>
          
          {/* Right column with premium text content */}
          <div className="w-full md:w-3/5">
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Frontend Developer & UI Specialist</h3>
              <div className="h-px w-40 bg-gradient-to-r from-red-600 to-transparent mb-5"></div>
            </div>
            
            <div className="text-gray-300 space-y-4 text-lg font-light leading-relaxed">
              <p>
                I'm Prasannaa, a <span className="text-white font-medium">frontend developer</span> with a passion for creating exceptional digital experiences. I specialize in turning complex design requirements into elegant, accessible, and responsive interfaces that deliver outstanding user experiences.
              </p>
              
              <p>
                My expertise lies in crafting <span className="text-red-500">modern web applications</span> using React and its ecosystem. I'm committed to writing clean, maintainable code that adheres to industry best practices and performance standards. Every pixel matters in my work, as I strive to create interfaces that are not only visually appealing but also functionally robust.
              </p>
            </div>
            
            {/* Premium quote section */}
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <i className="fas fa-quote-right text-red-600/20 text-4xl"></i>
              </div>
              <blockquote className="text-gray-300 italic font-light">
                "I believe that the best frontend development happens at the intersection of technical excellence, design sensitivity, and a deep understanding of user needs."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumAbout;
import React, { useState } from 'react';
import { 
  Paintbrush, 
  Code, 
  Layers, 
  UserCircle, 
  Clock, 
  Flag
} from 'lucide-react';

const Services = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  
  // Using the original services but enhancing the presentation
  const services = [
    {
      id: 1,
      title: "Creative Design",
      description: "Leveraging artistic elements and aesthetic principles to craft visually appealing and engaging user experiences.",
      icon: <Paintbrush size={28} className="text-red-500" />
    },
    {
      id: 2,
      title: "Clean Code",
      description: "Writing code that is well-structured, readable, and maintainable. It involves following coding best practices.",
      icon: <Code size={28} className="text-red-500" />
    },
    {
      id: 3,
      title: "User Interface",
      description: "Creating intuitive and user-friendly designs that prioritize usability, accessibility, and a seamless user experience.",
      icon: <Layers size={28} className="text-red-500" />
    },
    {
      id: 4,
      title: "User Experience",
      description: "Understanding user behaviors, needs, and preferences to create interfaces that are intuitive, efficient, and enjoyable to use.",
      icon: <UserCircle size={28} className="text-red-500" />
    },
    {
      id: 5,
      title: "Fast Support",
      description: "Addressing and resolving user-reported issues or inquiries related to the website or application.",
      icon: <Clock size={28} className="text-red-500" />
    },
    {
      id: 6,
      title: "Branding",
      description: "Creating consistent and cohesive brand experiences through the use of logos, color schemes, typography, and other branding assets.",
      icon: <Flag size={28} className="text-red-500" />
    }
  ];
  
  return (
    <section id="services" className="bg-gradient-to-b from-black to-gray-900 py-24">
      <div className="container mx-auto px-6">
        {/* Premium section header */}
        <div className="mb-16 relative text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
            <span className="text-red-600 font-medium ml-4 tracking-wider uppercase text-sm">My Services</span>
            <div className="w-12 h-1 bg-red-600 rounded-full ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            What I <span className="text-red-600">Offer</span>
          </h2>
        </div>
        
        {/* Premium service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative group"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div 
                className={`bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 h-full transition-all duration-300 border border-transparent ${
                  hoverIndex === index ? 'border-red-600/50 shadow-lg shadow-red-900/10 transform -translate-y-1' : ''
                }`}
              >
                {/* Premium icon container with subtle background */}
                <div className={`mb-8 w-16 h-16 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-inner transition-transform duration-300 ${
                  hoverIndex === index ? 'scale-110' : ''
                }`}>
                  <div className={`transition-transform duration-300 ${
                    hoverIndex === index ? 'rotate-6' : ''
                  }`}>
                    {service.icon}
                  </div>
                </div>
                
                {/* Service title with hover effect */}
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  hoverIndex === index ? 'text-red-500' : 'text-white'
                }`}>
                  {service.title}
                </h3>
                
                {/* Service description */}
                <p className="text-gray-400 text-base leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Accent line that grows on hover */}
                <div className={`w-12 h-px bg-red-600/50 mt-4 transition-all duration-300 ${
                  hoverIndex === index ? 'w-full' : ''
                }`}></div>
              </div>
              
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-6 h-6 transition-opacity duration-300 opacity-0 ${
                hoverIndex === index ? 'opacity-100' : ''
              }`}>
                <div className="absolute top-0 right-0 w-0 h-0 border-t-8 border-r-8 border-red-600 rounded-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
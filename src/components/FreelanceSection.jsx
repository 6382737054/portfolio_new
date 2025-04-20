import React from 'react';
import { Monitor, Code, Smartphone, Globe } from 'lucide-react';

const FreelanceSection = () => {
  const services = [
    {
      icon: <Monitor className="h-12 w-12 text-red-500" />,
      title: "Website Development",
      description: "Custom-built websites that are responsive, fast-loading, and designed to meet your specific business needs."
    },
    {
      icon: <Code className="h-12 w-12 text-red-500" />,
      title: "Frontend Solutions",
      description: "User-friendly interfaces that create seamless experiences for your customers and help drive engagement."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-red-500" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring your digital presence works flawlessly across all devices and screen sizes."
    },
    {
      icon: <Globe className="h-12 w-12 text-red-500" />,
      title: "Complete Web Projects",
      description: "End-to-end web solutions from concept and design to development and deployment."
    }
  ];

  return (
    <section id="freelance" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
            <span className="text-red-600 font-medium mx-4 tracking-wider uppercase text-sm">Freelance Work</span>
            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Available for <span className="text-red-600">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            I offer professional web development services for businesses and individuals looking to establish or enhance their digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-lg h-full"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Availability Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-900/30 to-red-600/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Currently Accepting New Projects</h3>
          <p className="text-gray-300">
            If you're looking for a web developer to bring your ideas to life, I'm here to help.
            Let's create something amazing together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreelanceSection;
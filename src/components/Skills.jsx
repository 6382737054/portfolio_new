import React, { useState } from 'react';
import { 
  Code, 
  FileCode, 
  PenTool, 
  Wind, 
  Gamepad, 
  Box, 
  FileText,
  Smartphone
} from 'lucide-react';

const MinimalistSkills = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  
  // Updated skills with Lucide icons
  const skills = [
    {
      name: "Python",
      icon: () => <Code color="#3776AB" size={36} />,
      color: "#3776AB"  // Python blue
    },
    {
      name: "JavaScript",
      icon: () => <FileCode color="#F7DF1E" size={36} />,
      color: "#F7DF1E"  // JavaScript yellow
    },
    {
      name: "HTML5",
      icon: () => <FileText color="#E34F26" size={36} />,
      color: "#E34F26"  // HTML orange
    },
    {
      name: "CSS3",
      icon: () => <FileText color="#1572B6" size={36} />,
      color: "#1572B6"  // CSS blue
    },
    {
      name: "React.js",
      icon: () => <Code color="#61DAFB" size={36} />,
      color: "#61DAFB"  // React light blue
    },
    {
      name: "Tailwind CSS",
      icon: () => <Wind color="#06B6D4" size={36} />,
      color: "#06B6D4"  // Tailwind teal
    },
    {
      name: "Unreal Engine",
      icon: () => <Gamepad color="#313131" size={36} />,
      color: "#313131"  // Unreal dark gray
    },
    {
      name: "Blender",
      icon: () => <Box color="#F5792A" size={36} />,
      color: "#F5792A"  // Blender orange
    },
    {
      name: "XR Engine",
      icon: () => <Smartphone color="#7B68EE" size={36} />,
      color: "#7B68EE"  // Medium slate blue
    },
    {
      name: "Documentation",
      icon: () => <FileCode color="#A9A9A9" size={36} />,
      color: "#A9A9A9"  // Light gray
    },
    {
      name: "Technical Writing",
      icon: () => <PenTool color="#FFFFFF" size={36} />,
      color: "#FFFFFF"  // White
    }
  ];
  
  return (
    <section id="skills" className="relative bg-[#0a0c14] py-24 overflow-hidden">
      {/* Subtle gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent opacity-50"></div>
      
      {/* Section header with minimalist styling */}
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            My <span className="text-red-600">Skills</span>
          </h2>
        </div>
      </div>
      
      {/* Skills tiles grid - dark minimalist style with colored icons */}
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`relative group`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {/* Dark tile with subtle border - reduced size by 10% */}
                <div className={`bg-[#0f111a] border ${index === hoverIndex ? 'border-red-600' : 'border-gray-800'} rounded-lg overflow-hidden aspect-square shadow-lg transition-all duration-300 transform scale-90 relative`}>
                  {/* Hover light effect - only visible on hover */}
                  {index === hoverIndex && (
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent animate-pulse pointer-events-none z-10"></div>
                  )}
                  
                  {/* Content container */}
                  <div className="w-full h-full flex flex-col items-center justify-center relative p-4">
                    {/* Circular indent with icon - reduced size proportionally */}
                    <div className={`w-20 h-20 rounded-full bg-[#080a12] shadow-inner flex items-center justify-center transition-all duration-300 ${index === hoverIndex ? 'shadow-red-600/30' : ''}`}>
                      {/* Icon component with original brand color */}
                      <div className={`text-3xl transition-transform duration-300 ${index === hoverIndex ? 'scale-110' : ''}`}>
                        {skill.icon()}
                      </div>
                    </div>
                    
                    {/* Skill name below the circle */}
                    <div className="mt-4 text-center">
                      <p className={`text-lg font-medium transition-colors duration-300 ${index === hoverIndex ? 'text-white' : 'text-gray-400'}`}>
                        {skill.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalistSkills;
import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const ExperienceSection = () => {
  const [expandedJob, setExpandedJob] = useState(0);
  
  const experiences = [
    {
      id: 1,
      title: "Software Development Lead (React Js)",
      company: "K Labs Technology & Solutions (P) Ltd",
      duration: "Jan 2025 - Present",
      location: "Chennai, Tamil Nadu, India",
      type: "Hybrid",
      description: "Leading frontend development with React and seamless API integration. Working on high-impact projects that drive digital transformation and improve operational efficiency.",
      achievements: [
        "Developed a digital property tax system for the Tamil Nadu Government, streamlining tax collection and management.",
        "Contributed to the QR-based application for the Greater Chennai Traffic Police, enhancing traffic law enforcement and digital challan processing.",
        "Developed a platform for the Fee Committee of Tamil Nadu, which determines school fees and regulations, ensuring transparency and compliance in the education sector.",
        "Created a digital platform for Bharat Scouts and Guides, improving accessibility and engagement."
      ],
      skills: ["React", "JavaScript", "API Integration", "UI/UX", "Team Leadership"]
    },
    {
      id: 2,
      title: "Software Developer",
      company: "K Labs Technology & Solutions (P) Ltd",
      duration: "Sep 2024 - Jan 2025",
      location: "Chennai, Tamil Nadu, India",
      type: "On-site",
      description: "Built responsive and visually engaging user interfaces that enhance user experience and interaction.",
      achievements: [
        "Created high-quality frontend solutions using HTML, CSS, JavaScript, and React.",
        "Integrated and managed RESTful APIs to ensure seamless communication between client and server.",
        "Collaborated with cross-functional teams to deliver optimized, efficient, and scalable web applications.",
        "Refined user interfaces to bridge the gap between design and functionality."
      ],
      skills: ["HTML", "CSS", "JavaScript", "React", "RESTful APIs"]
    },
    {
      id: 3,
      title: "Associate Software Engineer & Game Developer",
      company: "Wise Work",
      duration: "Nov 2023 - Jun 2024",
      location: "Bengaluru, Karnataka, India",
      type: "Hybrid",
      description: "Specialized in game development using Unreal Engine and Blender, creating immersive digital experiences.",
      achievements: [
        "Developed game environments and assets using Blender for 3D modeling and Unreal Engine for implementation.",
        "Collaborated with design and development teams to create cohesive gaming experiences.",
        "Applied public speaking and team leadership skills in project presentations and team coordination.",
        "Contributed to the full development lifecycle from concept to deployment."
      ],
      skills: ["Unreal Engine", "Blender", "3D Modeling", "Game Development", "Public Speaking", "Team Leadership"]
    },
    {
      id: 4,
      title: "Research Associate",
      company: "Hue Learn",
      duration: "Jul 2022 - Oct 2023",
      location: "Bengaluru, Karnataka, India",
      type: "On-site",
      description: "Conducted research to support educational technology initiatives and learning solutions.",
      achievements: [
        "Researched and analyzed educational technology trends and applications.",
        "Contributed to the development of learning materials and educational content.",
        "Collaborated with educators and developers to create effective learning solutions.",
        "Participated in user testing and feedback collection to improve educational products."
      ],
      skills: ["Research", "Educational Technology", "Content Development", "User Testing"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
            <span className="text-red-600 font-medium mx-4 tracking-wider uppercase text-sm">My Journey</span>
            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Professional <span className="text-red-600">Experience</span>
          </h2>
        </div>
        
        {/* Experience Timeline */}
        <div className="w-[80%] mx-auto">{/* Changed from max-w-4xl to w-[80%] */}
          {experiences.map((job, index) => (
            <div key={job.id} className="mb-8 last:mb-0">
              <div 
                className={`relative border-l-2 ${
                  index === expandedJob ? 'border-red-600' : 'border-gray-800'
                } pl-8 pb-8`}
              >
                {/* Timeline Dot */}
                <div 
                  className={`absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-1/2 ${
                    index === expandedJob ? 'bg-red-600' : 'bg-gray-800'
                  } border-2 border-black`}
                />
                
                {/* Job Card */}
                <div 
                  className={`bg-gray-900 rounded-lg p-6 border ${
                    index === expandedJob ? 'border-red-600/30' : 'border-gray-800'
                  } transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer`}
                  onClick={() => setExpandedJob(index)}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                      <p className="text-red-500 font-medium">{job.company}</p>
                    </div>
                    
                    <div className="flex items-center mt-2 md:mt-0">
                      <Calendar size={16} className="text-gray-400 mr-2" />
                      <span className="text-gray-400 text-sm">{job.duration}</span>
                    </div>
                  </div>
                  
                  {/* Location & Type */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    <div className="flex items-center">
                      <MapPin size={16} className="text-gray-500 mr-2" />
                      <span className="text-gray-400 text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase size={16} className="text-gray-500 mr-2" />
                      <span className="text-gray-400 text-sm">{job.type}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  
                  {/* Expanded Content */}
                  <div className={`transition-all duration-300 overflow-hidden ${
                    index === expandedJob ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {/* Key Achievements */}
                    <div className="mt-2 mb-4">
                      <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex">
                            <ChevronRight size={18} className="text-red-500 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Skills */}
                    <div className="mt-4">
                      <h4 className="text-white font-medium mb-2">Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Toggle Indicator */}
                  <div className="flex justify-center mt-4">
                    <button 
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        index === expandedJob ? 'bg-red-600' : 'bg-gray-800'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedJob(index === expandedJob ? null : index);
                      }}
                    >
                      <ChevronRight 
                        size={16} 
                        className={`text-white transition-transform ${
                          index === expandedJob ? 'rotate-90' : 'rotate-0'
                        }`} 
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
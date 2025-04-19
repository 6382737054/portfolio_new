import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bharat Scouts And Guides Tamil Nadu",
      description: "A full-stack e-commerce website, also includes their history, gallery, events and news feed.",
      image: "/images/scouts.png", // Using path from public folder
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://tnbsg.org/",
    },
    {
      id: 2,
      title: "GCTP",
      description: "Developed QR-based verification system for Greater Chennai Traffic Police to access citizen emergency information and medical alerts.",
      image: "/images/gctp.png", // Using path from public folder
      tags: ["mySQL", "React Js", "Tailwind CSS","Node JS"],
      liveLink: "https://gctp.klabsindia.com/",
    },
    {
      id: 3,
      title: "FEE COMMITTEE",
      description: " A platform for the Fee Committee of Tamil Nadu, which determines school fees and regulations, ensuring transparency and compliance in the education sector",
      image: "/images/fee.png", // Using path from public folder
      tags: ["React", "mySQL", "Express", "Node js"],
      liveLink: "https://feecommittee.klabsindia.com/",
    },
    {
      id: 4,
      title: "PROPERTY TAX",
      description: "Digital property tax system for the Tamil Nadu Government, streamlining tax collection and management.",
      image: "/images/dma.png", // Using path from public folder
      tags: ["React", "Node.js", "mySQL", "Tailwind CSS"],
      liveLink: "https://www.ras-tndma.in/",
    },
    {
      id: 5,
      title: "COE AUTISM",
      description: "A digital platform to represent autism society of Tamil Nadu.",
      image: "/images/coe.png", // Using path from public folder
      tags: ["React", "Node.js", "mySQL", "Tailwind CSS"],
      liveLink: "https://tamilvalarchithapal.klabsindia.com",
    },
    {
      id: 6,
      title: "COE  CMS PANEL",
      description: "A content management platform to manage the content in the  autism society of Tamil Nadu website.",
      image: "/images/cms.png", // Using path from public folder
      tags: ["React", "Node.js", "mySQL", "Tailwind CSS"],
      liveLink: "https://tamilvalarchithapal.klabsindia.com/admin",
    },
  ];

  return (
    <section id="projects" className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my recent work and personal projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-900 rounded-lg overflow-hidden border border-red-900 hover:border-red-600 transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-500 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium bg-red-900/30 text-red-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
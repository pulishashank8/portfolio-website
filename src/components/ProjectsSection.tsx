import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projectsData';
import { Github, ExternalLink } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-6 md:px-12 relative">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    repoLink: string;
    liveLink?: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div 
      className="bg-gray-700 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-gray-300 text-sm mt-2 min-h-[4rem]">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mt-6 flex space-x-4">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200"
          >
            <Github className="w-4 h-4 mr-2" />
            View Code
          </a>
          
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-cyan-500 text-cyan-500 px-4 py-2 rounded-md text-sm hover:bg-cyan-500 hover:text-white transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
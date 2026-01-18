import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, Briefcase, MapPin } from 'lucide-react';
import icon from '../assets/profile.png';

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-transparent flex items-center justify-center px-6 md:px-12 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column (Text) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 uppercase tracking-wide font-medium mb-2">
              Greetings
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Shashank Puli
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              Data Scientist | Data Engineer | Data Analytical Engineer | Data Analyst | Business Intelligence
            </h2>
            <p className="font-bold text-gray-100 mb-8 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Exton, PA (Willing to Relocate) • Seeking Full-Time Roles
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1kikUWnyBU2MZ-Rl_dboi25cN7dtqtmpt/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Download className="w-5 h-5 mr-2" />
                View Resume
              </a>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn-outline cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
            
            {/* Statistics Row */}
            <div className="mt-12 flex flex-wrap justify-start gap-4">
              <StatCard icon={<Briefcase />} value="4+" label="Experience" />
              
            </div>
          </motion.div>
          
          {/* Right Column (Profile Image) */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl">
              <img
                src= {icon}
                alt="Shashank Puli"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({
  icon,
  value,
  label,
}) => {
  return (
    <div className="flex items-center space-x-3 bg-gray-800 px-4 py-3 rounded-lg shadow-lg">
      <div className="text-cyan-400">{icon}</div>
      <div>
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-gray-400 text-sm">{label}</p>
      </div>
    </div>
  );
};

export default HeroSection;
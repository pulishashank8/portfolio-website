import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { internships } from '../data/internshipsData';

const InternshipsSection: React.FC = () => {
  return (
    <section id="internships" className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internships.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${index}`}
              logo={experience.logoUrl}
              company={experience.company}
              title={experience.role}
              status={experience.status}
              dateRange={experience.duration}
              location={experience.location}
              bullets={experience.responsibilities}
              skills={experience.tech}
              accentColor={experience.accentColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  logo: string;
  company: string;
  title: string;
  status: 'Current' | 'Previous';
  dateRange: string;
  location: string;
  bullets: string[];
  skills: string[];
  accentColor: string;
  index: number;
}

const highlightMetrics = (text: string) => {
  const parts = text.split(/(\$[\d.,]+%?|\d+%|\d+\s?(minutes?|minute|hours?|days?|day|weeks?|week|months?|month)|\d+\s?(million|billion|M|B)|\d+\.\d+%?)/gi);
  return parts.map((part, idx) => {
    const isMetric = /^(\$[\d.,]+%?|\d+%|\d+\s?(minutes?|minute|hours?|days?|day|weeks?|week|months?|month)|\d+\s?(million|billion|M|B)|\d+\.\d+%?)$/i.test(part);
    return isMetric ? (
      <span key={idx} className="font-semibold text-white">{part}</span>
    ) : (
      <span key={idx}>{part}</span>
    );
  });
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  logo,
  company,
  title,
  status,
  dateRange,
  location,
  bullets,
  skills,
  accentColor,
  index,
}) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accentColor} opacity-70 blur-xl transition-all duration-300 group-hover:opacity-100 group-hover:blur-2xl`} />

      <div className="relative rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
        <div className="flex items-start justify-between p-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-800 border border-white/10 flex items-center justify-center">
              <img src={logo} alt={company} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white leading-tight">{company}</p>
              <p className="text-gray-300 text-sm leading-tight">{title}</p>
            </div>
          </div>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full border border-white/10 ${
            status === 'Current' ? 'bg-emerald-500/15 text-emerald-200' : 'bg-gray-500/15 text-gray-200'
          }`}>
            {status}
          </span>
        </div>

        <div className="flex items-center gap-4 px-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-cyan-300" />
            <span>{dateRange}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-300" />
            <span>{location}</span>
          </div>
        </div>

        <div className="px-6 py-4">
          <ul className="space-y-3 text-gray-200 leading-relaxed">
            {bullets.map((bullet, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
              >
                <ArrowRight className="w-4 h-4 mt-1 text-cyan-300 flex-shrink-0" />
                <span className="leading-relaxed">{highlightMetrics(bullet)}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="px-6 pb-6 pt-2 flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="rounded-full border border-white/10 bg-gray-800/60 text-gray-100 text-xs px-3 py-1 hover:bg-gray-700/80 transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InternshipsSection;
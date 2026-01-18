import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Paintbrush, 
  Database, 
  Lightbulb 
} from 'lucide-react';

interface ExpertiseItem {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

const ExpertiseSection: React.FC = () => {
  const expertiseItems: ExpertiseItem[] = [
    {
      title: 'ETL Pipeline Development',
      icon: <Code className="text-2xl" />,
      bgColor: 'bg-cyan-100',
      textColor: 'text-gray-800',
    },
    {
      title: 'Cloud Data Engineering',
      icon: <Paintbrush className="text-2xl" />,
      bgColor: 'bg-yellow-100',
      textColor: 'text-gray-800',
    },
    {
      title: 'Big Data Processing',
      icon: <Database className="text-2xl" />,
      bgColor: 'bg-green-100',
      textColor: 'text-gray-800',
    },
    {
      title: 'Data Visualization',
      icon: <Lightbulb className="text-2xl" />,
      bgColor: 'bg-cyan-100',
      textColor: 'text-gray-800',
    },
  ];

  return (
    <section id="expertise" className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Core Expertise
        </motion.h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseItems.map((item, index) => (
            <ExpertiseCard 
              key={index} 
              item={item} 
              index={index} 
            />
          ))}
        </div>
        
        <motion.p 
          className="text-center text-gray-400 mt-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I specialize in designing scalable ETL pipelines, optimizing big data systems, and delivering actionable insights through cloud platforms and interactive dashboards.
        </motion.p>
      </div>
    </section>
  );
};

interface ExpertiseCardProps {
  item: ExpertiseItem;
  index: number;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ item, index }) => {
  return (
    <motion.div
      className={`rounded-2xl p-6 flex items-center space-x-4 shadow-xl hover:scale-105 transition-transform duration-200 ${item.bgColor} ${item.textColor}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="text-cyan-600">
        {item.icon}
      </div>
      <h3 className="text-lg font-medium">{item.title}</h3>
    </motion.div>
  );
};

export default ExpertiseSection;
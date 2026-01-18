import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SpecialStarBackground from './SpecialStarBackground';

const AboutSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Data Science & AI/ML',
      bullets: [
        'Machine Learning',
        'Predictive Modeling',
        'Statistical Analysis',
        'A/B Testing',
        'Anomaly Detection',
        'Feature Engineering',
      ],
      accentColor: 'from-blue-700/50 via-indigo-700/50 to-purple-700/50',
    },
    {
      title: 'Data Engineering & Cloud',
      bullets: [
        'AWS (S3, Glue, Lambda, Redshift, EMR)',
        'Azure (ADF, Databricks, Data Lake)',
        'GCP (BigQuery, Dataflow, Composer)',
        'Snowflake',
        'PySpark',
        'Apache Kafka',
      ],
      accentColor: 'from-cyan-700/50 via-teal-700/50 to-blue-700/50',
    },
    {
      title: 'Data Visualization & BI',
      bullets: [
        'Power BI',
        'Tableau',
        'QuickSight',
        'Looker Studio',
        'Advanced SQL',
        'Excel',
      ],
      accentColor: 'from-emerald-700/50 via-teal-700/50 to-cyan-700/50',
    },
    {
      title: 'Programming & Backend Tools',
      bullets: [
        'Python (Pandas, NumPy)',
        'SQL (Advanced)',
        'Java, Scala',
        'FastAPI, Flask',
        'Docker, Kubernetes',
        'Apache Airflow',
        'dbt',
        'Apache Spark',
      ],
      accentColor: 'from-violet-700/50 via-indigo-700/50 to-blue-700/50',
    },
  ];

  return (
    <section id="about" className="py-16 px-6 md:px-12 relative">
      <SpecialStarBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Full-width About Me Card */}
        <motion.div
          className="mb-12 group relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Enhanced glow effect */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-600/30 via-indigo-600/30 to-violet-600/30 opacity-60 blur-2xl transition-all duration-500 group-hover:opacity-90 group-hover:blur-3xl`} />
          
          {/* Subtle animated border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(14,165,233,0.3)] p-8 md:p-10">
            <div className="space-y-6 text-gray-200 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I am a Data Engineer with 4+ years of experience designing scalable ETL pipelines and data workflows across AWS, GCP, and on-premise platforms. Skilled in Python, SQL, Spark, and Airflow, I specialize in transforming complex datasets into reliable, high-performance solutions.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I have optimized real-time data workflows using Kubernetes and Docker, reducing latency by 30–40%. My expertise includes Snowflake, HBase, and Redshift, where I improved query performance and enabled faster analytics.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Certified in AWS, Azure, and Power BI, I bring strong problem-solving and data visualization skills. I am passionate about turning raw data into actionable insights that empower smarter business decisions.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* My Skills - 4-Column Responsive Grid */}
        <motion.h3
          className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              bullets={category.bullets}
              accentColor={category.accentColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  title: string;
  bullets: string[];
  accentColor: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, bullets, accentColor, index }) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${accentColor} opacity-70 blur-xl transition-all duration-300 group-hover:opacity-100 group-hover:blur-2xl`} />
      <div className="relative rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
        <ul className="space-y-3">
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
              <span className="text-gray-200 text-sm leading-relaxed">{bullet}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default AboutSection;
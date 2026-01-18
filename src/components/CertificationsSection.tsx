import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certificationsData';
import AnimatedBackground from './AnimatedBackground';

const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<{ imageUrl: string; title: string } | null>(null);

  const closeModal = () => setSelectedCert(null);

  return (
    <section id="certifications" className="py-16 px-6 md:px-12 relative">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="section-title text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedCert(cert)}
            >
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="w-full h-48 object-cover hover:opacity-90 transition-opacity duration-200"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-80 z-50 text-2xl"
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={selectedCert.imageUrl}
              alt={selectedCert.title}
              className="w-full h-auto object-contain max-h-[80vh]"
            />

            {/* Title */}
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{selectedCert.title}</h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;

import React, { useEffect, useRef } from 'react';
import '../styles/star-background.css';

const SpecialStarBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stars = Array.from({ length: 30 });

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        containerRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none transition-transform duration-100" 
      id="star-field"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-indigo-950/60 to-slate-950/80" />
      
      {stars.map((_, idx) => (
        <div
          key={idx}
          className="star"
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: `${Math.random() * 4}s, ${Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SpecialStarBackground;

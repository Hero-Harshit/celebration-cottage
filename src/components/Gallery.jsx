import React from 'react';
import { motion } from 'framer-motion';

const Gallery = ({ photos, customStyle = '' }) => {
  if (!photos || photos.length === 0) return null;

  // Ultra-minimalist grid
  let gridClass = 'grid gap-4 md:gap-8 w-full';
  
  if (photos.length === 1) {
    gridClass += ' grid-cols-1 max-w-4xl mx-auto';
  } else if (photos.length === 2) {
    gridClass += ' grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto';
  } else if (photos.length === 3) {
    gridClass += ' grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto';
  } else {
    gridClass += ' grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="w-full">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className={gridClass}
      >
        {photos.map((photo, index) => (
          <motion.figure 
            variants={itemVariants}
            key={index} 
            className={`group relative overflow-hidden aspect-[4/5] bg-[#111111] rounded-xl shadow-2xl shadow-black/50 ${customStyle}`}
          >
            <img 
              src={photo.src} 
              alt={photo.alt || 'Memory'} 
              className="w-full h-full object-cover transition-all duration-[2000ms] ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
              loading="lazy"
            />
            {photo.caption && (
              <figcaption className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <p className="text-white text-sm md:text-base font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                  {photo.caption}
                </p>
              </figcaption>
            )}
          </motion.figure>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;

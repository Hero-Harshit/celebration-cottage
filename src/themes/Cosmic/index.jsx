import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../../components/Gallery';
import Graffiti from '../../components/Graffiti';
import ScratchCard from '../../components/ScratchCard';

const CosmicTheme = ({ config }) => {
  const { recipient, content, photos, features, appearance } = config;
  
  const customStyles = appearance?.styles || {};

  // Ultra-smooth fade up variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.2 }
    }
  };

  return (
    <div className={`relative min-h-screen bg-gradient-to-br from-[#0b001a] to-[#1a0033] text-[#F5F5F7] font-sans selection:bg-fuchsia-500 selection:text-white ${appearance?.backgroundColor || ''} ${appearance?.primaryTextColor || ''}`}>
      {/* Absolute background override for a deep space look */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1c0a3f] to-indigo-950 -z-10" />

      {/* Background Graffiti (Stars work best here!) */}
      <Graffiti type={features.graffiti} color={features.graffitiColor || "#ffffff"} />
      
      {/* Cinematic Hero Section */}
      <section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Deep space nebula glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 mix-blend-screen">
          <div className="w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] bg-fuchsia-600 rounded-full blur-[160px]" />
          <div className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-indigo-500 rounded-full blur-[120px] translate-x-20 -translate-y-20" />
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="z-10 text-center max-w-4xl mx-auto"
        >
          {recipient.introduction && (
            <motion.p 
              variants={fadeUp}
              style={{ color: recipient.introductionColor || undefined }}
              className="text-fuchsia-200/80 text-lg md:text-xl font-medium tracking-widest uppercase mb-6"
            >
              {recipient.introduction}
            </motion.p>
          )}
          
          <motion.h1 
            variants={fadeUp}
            style={{ color: recipient.nameColor || undefined }}
            className={`text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white mb-8 leading-none drop-shadow-[0_0_20px_rgba(217,70,239,0.3)] ${customStyles.nameHeading || ''}`}
          >
            {recipient.name}.
          </motion.h1>

          <motion.h2 
            variants={fadeUp}
            style={{ color: content.headingColor || undefined }}
            className={`text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-fuchsia-50 mb-12 drop-shadow-md ${customStyles.mainHeading || ''}`}
          >
            {content.heading}
          </motion.h2>

          {content.subheading && (
            <motion.p 
              variants={fadeUp}
              style={{ color: content.subheadingColor || undefined }}
              className="text-xl md:text-3xl text-fuchsia-100/70 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
            >
              {content.subheading}
            </motion.p>
          )}
        </motion.div>
      </section>

      {/* Message Section */}
      <section className="py-32 px-6 bg-[#0f0524]/60 backdrop-blur-xl border-y border-fuchsia-500/20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <p 
            style={{ color: content.messageColor || undefined }}
            className={`font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-purple-100 font-light drop-shadow-lg ${customStyles.paragraph || ''}`}>
            "{content.message}"
          </p>
        </motion.div>
      </section>

      {/* Cinematic Gallery */}
      {features.showPhotos && photos && photos.length > 0 && (
        <section className="py-32 px-6 md:px-12 max-w-[100rem] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <Gallery photos={photos} customStyle={customStyles.photos} />
          </motion.div>
        </section>
      )}

      {/* Footer & CTA */}
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-2xl mx-auto space-y-12"
        >
          {content.closing && (
            <motion.p 
              variants={fadeUp}
              style={{ color: content.closingColor || undefined }}
              className="font-serif text-4xl md:text-5xl text-white font-medium drop-shadow-lg"
            >
              {content.closing}
            </motion.p>
          )}

          {features.showButton && content.buttonText && (
            <motion.div variants={fadeUp} className="pt-8">
              <ScratchCard enabled={features.enableScratchCard} text={features.scratchCardText} coverColor="#4c1d95">
              <a 
                href={content.buttonLink || '#'} 
                style={{ color: content.buttonTextColor || undefined }} 
                className={`inline-block px-10 py-4 bg-fuchsia-600 text-white rounded-full font-bold text-lg hover:scale-105 hover:bg-fuchsia-500 shadow-[0_0_25px_rgba(217,70,239,0.4)] transition-all duration-300 ${customStyles.button || ''}`}
              >
                {content.buttonText}
              </a>
              </ScratchCard>
            </motion.div>
          )}
        </motion.div>
      </section>
      
    </div>
  );
};

export default CosmicTheme;

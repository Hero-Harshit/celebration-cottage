import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../../components/Gallery';
import Graffiti from '../../components/Graffiti';
import ScratchCard from '../../components/ScratchCard';

const OliveTheme = ({ config }) => {
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
    <div className={`relative min-h-screen bg-gradient-to-br from-[#1b2403] to-[#455c05] text-[#F5F5F7] font-sans selection:bg-lime-400 selection:text-black ${appearance?.backgroundColor || ''} ${appearance?.primaryTextColor || ''}`}>
      {/* Absolute background override for a deep vibrant yellowish-lime look */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#263302] to-[#5a7804] -z-10" />

      {/* Background Graffiti */}
      <Graffiti type={features.graffiti} color={features.graffitiColor || "#ffffff"} />
      
      {/* Cinematic Hero Section */}
      <section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Subtle lime/yellow glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 mix-blend-screen">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-yellow-400 rounded-full blur-[140px]" />
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
              className="text-lime-200/80 text-lg md:text-xl font-medium tracking-widest uppercase mb-6"
            >
              {recipient.introduction}
            </motion.p>
          )}
          
          <motion.h1 
            variants={fadeUp}
            style={{ color: recipient.nameColor || undefined }}
            className={`text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white mb-8 leading-none drop-shadow-[0_0_20px_rgba(217,249,157,0.3)] ${customStyles.nameHeading || ''}`}
          >
            {recipient.name}.
          </motion.h1>

          <motion.h2 
            variants={fadeUp}
            style={{ color: content.headingColor || undefined }}
            className={`text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-lime-50 mb-12 drop-shadow-md ${customStyles.mainHeading || ''}`}
          >
            {content.heading}
          </motion.h2>

          {content.subheading && (
            <motion.p 
              variants={fadeUp}
              style={{ color: content.subheadingColor || undefined }}
              className="text-xl md:text-3xl text-yellow-100/90 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
            >
              {content.subheading}
            </motion.p>
          )}
        </motion.div>
      </section>

      {/* Message Section */}
      <section className="py-32 px-6 bg-black/40 backdrop-blur-md border-y border-lime-500/30">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <p 
            style={{ color: content.messageColor || undefined }}
            className={`font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-[#f4f7f0] font-light drop-shadow-md ${customStyles.paragraph || ''}`}>
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
              <ScratchCard enabled={features.enableScratchCard} text={features.scratchCardText} coverColor="#65a30d">
              <a 
                href={content.buttonLink || '#'} 
                style={{ color: content.buttonTextColor || undefined }} 
                className={`inline-block px-10 py-4 bg-lime-400 text-black rounded-full font-bold text-lg hover:scale-105 hover:bg-yellow-300 shadow-[0_0_25px_rgba(163,230,53,0.5)] transition-all duration-300 ${customStyles.button || ''}`}
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

export default OliveTheme;

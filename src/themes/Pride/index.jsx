import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../../components/Gallery';
import Graffiti from '../../components/Graffiti';
import ScratchCard from '../../components/ScratchCard';

const PrideTheme = ({ config }) => {
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
    <div 
      className={`relative min-h-screen text-[#F5F5F7] font-sans selection:bg-white selection:text-black ${appearance?.backgroundColor || ''} ${appearance?.primaryTextColor || ''}`}
    >
      {/* Absolute static multi-color gradient background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, #ff2a2a 0%, #ff7a00 20%, #ffc500 40%, #00c541 60%, #0058ff 80%, #8b2ce0 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Dark vignette to ensure text readability over the bright colors */}
      <div className="absolute inset-0 bg-black/20 -z-10" />

      {/* Background Graffiti */}
      <Graffiti type={features.graffiti} color={features.graffitiColor || "#ffffff"} />
      
      {/* Cinematic Hero Section */}
      <section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Soft white center glow for readability */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 mix-blend-overlay">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-white rounded-full blur-[140px]" />
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
              className="text-white/90 text-lg md:text-xl font-medium tracking-widest uppercase mb-6 drop-shadow-md"
            >
              {recipient.introduction}
            </motion.p>
          )}
          
          <motion.h1 
            variants={fadeUp}
            style={{ color: recipient.nameColor || undefined }}
            className={`text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white mb-8 leading-none drop-shadow-xl ${customStyles.nameHeading || ''}`}
          >
            {recipient.name}.
          </motion.h1>

          <motion.h2 
            variants={fadeUp}
            style={{ color: content.headingColor || undefined }}
            className={`text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-12 drop-shadow-md ${customStyles.mainHeading || ''}`}
          >
            {content.heading}
          </motion.h2>

          {content.subheading && (
            <motion.p 
              variants={fadeUp}
              style={{ color: content.subheadingColor || undefined }}
              className="text-xl md:text-3xl text-white/95 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md"
            >
              {content.subheading}
            </motion.p>
          )}
        </motion.div>
      </section>

      {/* Message Section */}
      <section className="py-32 px-6 bg-black/50 backdrop-blur-xl border-y border-white/20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <p 
            style={{ color: content.messageColor || undefined }}
            className={`font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-white font-bold drop-shadow-md ${customStyles.paragraph || ''}`}>
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
              className="font-serif text-4xl md:text-5xl text-white font-semibold drop-shadow-lg"
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
                className={`inline-block px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 ${customStyles.button || ''}`}
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

export default PrideTheme;

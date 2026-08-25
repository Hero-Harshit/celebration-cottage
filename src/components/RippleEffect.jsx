import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RippleEffect = ({ color = "rgba(255, 255, 255, 0.4)" }) => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Don't create ripples on right click
      if (e.button === 2) return;

      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove the ripple after the animation completes (1 second)
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener('mousedown', handleGlobalClick);
    
    // We can also listen to touchstart for instant feedback on mobile, 
    // but typically mousedown is sufficient and prevents double-firing.
    
    return () => {
      window.removeEventListener('mousedown', handleGlobalClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute rounded-full backdrop-blur-sm pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: '100px',
              height: '100px',
              marginTop: '-50px', // center the circle
              marginLeft: '-50px', // center the circle
              border: `2px solid ${color}`,
              boxShadow: `0 0 20px ${color}`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RippleEffect;

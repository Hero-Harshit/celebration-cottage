import React, { useEffect, useRef } from 'react';

const CursorTrail = ({ color = "#ffffff" }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const addParticle = (x, y) => {
      particles.current.push({
        x,
        y,
        size: Math.random() * 3 + 1,
        life: 1,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2 - 0.5, // slight upward drift
      });
    };

    const handleMouseMove = (e) => {
      for (let i = 0; i < 3; i++) {
        addParticle(e.clientX, e.clientY);
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        for (let i = 0; i < 3; i++) {
          addParticle(e.touches[0].clientX, e.touches[0].clientY);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true }); // passive true to not block scroll

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02; // fade out speed
        
        if (p.life <= 0) {
          particles.current.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Convert hex to rgb for rgba usage
        const hex = color.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16) || 255;
        const g = parseInt(hex.substring(2, 4), 16) || 255;
        const b = parseInt(hex.substring(4, 6), 16) || 255;
        
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.life})`;
        // Add a slight glow
        ctx.shadowBlur = 5;
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${p.life})`;
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
};

export default CursorTrail;

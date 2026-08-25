import React, { useRef, useEffect, useState } from 'react';

const ScratchCard = ({ 
  children, 
  text = "Scratch to reveal!", 
  brushSize = 30, 
  finishPercent = 50,
  coverColor = "#333333",
  enabled = true
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [isFinished, setIsFinished] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Handle Resize
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        // Only update if dimensions actually changed significantly to avoid infinite loops
        if (Math.abs(width - dimensions.width) > 2 || Math.abs(height - dimensions.height) > 2) {
            setDimensions({ width, height });
        }
      }
    });
    
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [dimensions.width, dimensions.height]);

  // Setup Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0 || isFinished) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    // Set proper resolution for retina displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;

    // Draw Cover
    ctx.fillStyle = coverColor;
    ctx.fillRect(0, 0, dimensions.width, dimensions.height);

    // Draw Text
    ctx.fillStyle = "#ffffff";
    ctx.font = `bold ${Math.min(dimensions.width * 0.1, 24)}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // Slight shadow for text readability
    ctx.shadowColor = "rgba(0,0,0,0.5)";
    ctx.shadowBlur = 4;
    ctx.fillText(text, dimensions.width / 2, dimensions.height / 2);
    ctx.shadowBlur = 0; // reset
    
    // Prepare for erasing
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = brushSize;
    ctx.globalCompositeOperation = "destination-out";

  }, [dimensions, coverColor, text, brushSize, isFinished]);

  const getPointerPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    // Handle both touch and mouse events
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const checkFinish = () => {
    if (isFinished) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    
    let transparentPixels = 0;
    // Check every 4th pixel (alpha channel), step by 32 to skip pixels for performance
    for (let i = 3; i < pixels.length; i += 32) {
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }
    
    const totalPixelsChecked = pixels.length / 32;
    const percentScratched = (transparentPixels / totalPixelsChecked) * 100;

    if (percentScratched > finishPercent) {
      setIsFinished(true);
    }
  };

  const handlePointerDown = (e) => {
    if (isFinished) return;
    // Prevent default scrolling on touch devices when trying to scratch
    if (e.touches && e.cancelable) e.preventDefault();
    setIsDrawing(true);
    const { x, y } = getPointerPos(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const handlePointerMove = (e) => {
    if (!isDrawing || isFinished) return;
    if (e.touches && e.cancelable) e.preventDefault();
    const { x, y } = getPointerPos(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(x, y);
    ctx.stroke();
    
    // Periodically check if finished
    if (Math.random() < 0.1) {
        checkFinish();
    }
  };

  const handlePointerUp = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    checkFinish();
  };

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <div 
      ref={containerRef} 
      className="relative inline-block w-full"
      style={{ touchAction: 'none' }} // Crucial for preventing scrolling while scratching on mobile
    >
      {/* The Secret Content */}
      <div className={`transition-opacity duration-1000 ${isFinished ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} w-full flex justify-center`}>
        {children}
      </div>

      {/* The Scratch Canvas */}
      {!isFinished && (
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full rounded-full cursor-crosshair z-10"
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
          onTouchCancel={handlePointerUp}
        />
      )}
    </div>
  );
};

export default ScratchCard;

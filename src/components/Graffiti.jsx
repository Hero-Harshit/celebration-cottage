import React from 'react';

const Graffiti = ({ type, color = "#ffffff" }) => {
  if (!type || type === 'none' || (Array.isArray(type) && type.length === 0)) return null;

  // SVG Paths
  const heartPath = <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />;
  
  const cakePaths = (
    <>
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M7 8v3" />
      <path d="M12 8v3" />
      <path d="M17 8v3" />
      <path d="M7 4h.01" strokeWidth="3" />
      <path d="M12 4h.01" strokeWidth="3" />
      <path d="M17 4h.01" strokeWidth="3" />
    </>
  );

  const starPath = <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />;

  const iconMap = {
    hearts: heartPath,
    cakes: cakePaths,
    stars: starPath
  };

  // Determine active icon types to mix
  let activeTypes = [];
  if (type === 'combined') {
    activeTypes = ['hearts', 'cakes', 'stars'];
  } else if (Array.isArray(type)) {
    activeTypes = type.filter(t => iconMap[t]);
  } else if (typeof type === 'string' && iconMap[type]) {
    activeTypes = [type];
  }

  if (activeTypes.length === 0) return null;

  // The 7 pattern slots that give it the chaotic doodle look
  const slots = [
    { transform: "translate(50, 40) rotate(-15)", size: 28, fill: "none", stroke: color, strokeWidth: "1.5" },
    { transform: "translate(150, 20) rotate(25)", size: 14, fill: color, stroke: "none", strokeWidth: "0" },
    { transform: "translate(210, 100) rotate(-10)", size: 20, fill: "none", stroke: color, strokeWidth: "1.5" },
    { transform: "translate(80, 130) rotate(15)", size: 32, fill: color, stroke: "none", strokeWidth: "0" },
    { transform: "translate(180, 190) rotate(-30)", size: 16, fill: "none", stroke: color, strokeWidth: "2" },
    { transform: "translate(30, 200) rotate(10)", size: 10, fill: color, stroke: "none", strokeWidth: "0" },
    { transform: "translate(110, 220) rotate(40)", size: 22, fill: "none", stroke: color, strokeWidth: "1.5" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.06]">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="graffiti-pattern" x="0" y="0" width="250" height="250" patternUnits="userSpaceOnUse">
            {slots.map((slot, index) => {
              // Cycle through the requested active types sequentially to ensure even distribution
              const activeType = activeTypes[index % activeTypes.length];
              const pathData = iconMap[activeType];
              
              return (
                <g key={index} transform={slot.transform}>
                  <svg 
                    width={slot.size} 
                    height={slot.size} 
                    viewBox="0 0 24 24" 
                    fill={slot.fill} 
                    stroke={slot.stroke} 
                    strokeWidth={slot.strokeWidth}
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    {pathData}
                  </svg>
                </g>
              );
            })}
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#graffiti-pattern)" />
      </svg>
    </div>
  );
};

export default Graffiti;

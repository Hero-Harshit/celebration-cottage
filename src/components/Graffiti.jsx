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

  const balloonPaths = (
    <>
      <path d="M12 16c3.314 0 6-3.134 6-7s-2.686-7-6-7-6 3.134-6 7 2.686 7 6 7z" />
      <path d="M10 16l2 2 2-2" />
      <path d="M12 18v4" />
    </>
  );

  const giftPaths = (
    <>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </>
  );

  const musicPaths = (
    <>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </>
  );

  const crownPaths = (
    <>
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z" />
      <path d="M3 20h18" />
    </>
  );

  const grassPaths = (
    <>
      <path d="M12 21c0-5-2-9-5-12M12 21c0-6 2-11 5-15M12 21V10M8 21c0-3-1-5-2-7M16 21c0-4 1-7 2-9" />
    </>
  );

  const moonPhases = [
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />, // Crescent
    <path d="M12 3v18a9 9 0 0 0 0-18z" />, // Half
    <path d="M3 11.21A9 9 0 1 0 12.79 21 7 7 0 0 1 3 11.21z" />, // Opposite Crescent
    <circle cx="12" cy="12" r="9" /> // Full
  ];

  const fishPaths = (
    <>
      <path d="M18 12c-2 4-6 6-10 4-2-1-4-3-4-4s2-3 4-4c4-2 8 0 10 4z" />
      <path d="M4 8l-2 4 2 4" />
      <circle cx="14" cy="11" r="1" />
    </>
  );

  const firePaths = (
    <>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </>
  );

  const rocketPaths = (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  );

  const iconMap = {
    hearts: heartPath,
    cakes: cakePaths,
    stars: starPath,
    balloons: balloonPaths,
    gifts: giftPaths,
    music: musicPaths,
    crowns: crownPaths,
    grass: grassPaths,
    moons: moonPhases,
    fish: fishPaths,
    fire: firePaths,
    rocket: rocketPaths
  };

  // Determine active icon types to mix
  let activeTypes = [];
  if (type === 'combined') {
    activeTypes = ['hearts', 'cakes', 'stars', 'balloons', 'gifts', 'music', 'crowns', 'grass', 'moons', 'fish', 'fire', 'rocket'];
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
              const pathDataOrArray = iconMap[activeType];
              
              // If the icon mapped is an array of variants (like moon phases), pick one deterministically based on slot index
              const pathData = Array.isArray(pathDataOrArray) 
                ? pathDataOrArray[index % pathDataOrArray.length] 
                : pathDataOrArray;
              
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

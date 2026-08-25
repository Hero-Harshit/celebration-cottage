import React from 'react';

const Graffiti = ({ type }) => {
  if (!type || type === 'none') return null;

  // SVG Path for a standard heart (Lucide React Heart)
  const heartPath = "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z";

  if (type === 'hearts') {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.06]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="graffiti-hearts" x="0" y="0" width="250" height="250" patternUnits="userSpaceOnUse">
              {/* Large Outline */}
              <g transform="translate(30, 40) rotate(-15)">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d={heartPath} />
                </svg>
              </g>
              
              {/* Small Filled */}
              <g transform="translate(130, 20) rotate(20)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="none">
                  <path d={heartPath} />
                </svg>
              </g>
              
              {/* Medium Outline */}
              <g transform="translate(200, 80) rotate(-10)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d={heartPath} />
                </svg>
              </g>

              {/* Large Filled */}
              <g transform="translate(80, 140) rotate(15)">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="none">
                  <path d={heartPath} />
                </svg>
              </g>
              
              {/* Small Outline */}
              <g transform="translate(180, 180) rotate(-25)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d={heartPath} />
                </svg>
              </g>
              
              {/* Tiny Filled */}
              <g transform="translate(30, 210) rotate(5)">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white" stroke="none">
                  <path d={heartPath} />
                </svg>
              </g>

              {/* Medium Outline 2 */}
              <g transform="translate(120, 220) rotate(35)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d={heartPath} />
                </svg>
              </g>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#graffiti-hearts)" />
        </svg>
      </div>
    );
  }

  // SVG Paths for a cake (Lucide React Cake)
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

  if (type === 'cakes') {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.06]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="graffiti-cakes" x="0" y="0" width="250" height="250" patternUnits="userSpaceOnUse">
              {/* Large Outline */}
              <g transform="translate(40, 50) rotate(-10)">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {cakePaths}
                </svg>
              </g>
              
              {/* Small Filled */}
              <g transform="translate(140, 30) rotate(15)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  {cakePaths}
                </svg>
              </g>
              
              {/* Medium Outline */}
              <g transform="translate(210, 90) rotate(-20)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {cakePaths}
                </svg>
              </g>

              {/* Large Filled */}
              <g transform="translate(70, 150) rotate(12)">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  {cakePaths}
                </svg>
              </g>
              
              {/* Small Outline */}
              <g transform="translate(170, 190) rotate(-15)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {cakePaths}
                </svg>
              </g>
              
              {/* Tiny Filled */}
              <g transform="translate(20, 220) rotate(8)">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  {cakePaths}
                </svg>
              </g>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#graffiti-cakes)" />
        </svg>
      </div>
    );
  }

  // SVG Path for a star (Lucide React Star)
  const starPath = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";

  if (type === 'stars') {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.06]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="graffiti-stars" x="0" y="0" width="250" height="250" patternUnits="userSpaceOnUse">
              {/* Large Outline */}
              <g transform="translate(50, 40) rotate(-15)">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={starPath} />
                </svg>
              </g>
              
              {/* Small Filled */}
              <g transform="translate(150, 20) rotate(25)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="none">
                  <path d={starPath} />
                </svg>
              </g>
              
              {/* Medium Outline */}
              <g transform="translate(210, 100) rotate(-10)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={starPath} />
                </svg>
              </g>

              {/* Large Filled */}
              <g transform="translate(80, 130) rotate(15)">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="none">
                  <path d={starPath} />
                </svg>
              </g>
              
              {/* Small Outline */}
              <g transform="translate(180, 190) rotate(-30)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={starPath} />
                </svg>
              </g>
              
              {/* Tiny Filled */}
              <g transform="translate(30, 200) rotate(10)">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white" stroke="none">
                  <path d={starPath} />
                </svg>
              </g>

              {/* Medium Outline 2 */}
              <g transform="translate(110, 220) rotate(40)">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={starPath} />
                </svg>
              </g>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#graffiti-stars)" />
        </svg>
      </div>
    );
  }

  // Future expansion for 'combined' will go here
  return null;
};

export default Graffiti;

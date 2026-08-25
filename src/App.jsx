import React from 'react';
import { celebrationConfig } from './config';
import MidnightTheme from './themes/Midnight';
import SunsetTheme from './themes/Sunset';
import RoseTheme from './themes/Rose';
import OceanTheme from './themes/Ocean';
import InfernoTheme from './themes/Inferno';
import ForestTheme from './themes/Forest';
import OliveTheme from './themes/Olive';
import LimeTheme from './themes/Lime';
import PrideTheme from './themes/Pride';
import CosmicTheme from './themes/Cosmic';
import DesertTheme from './themes/Desert';
import ChocolateTheme from './themes/Chocolate';
import CursorTrail from './components/CursorTrail';
import RippleEffect from './components/RippleEffect';

const App = () => {
  // Determine which theme to render based on the configuration
  const renderExperience = () => {
    switch (celebrationConfig.theme) {
      case 'midnight':
        return <MidnightTheme config={celebrationConfig} />;
      case 'sunset':
        return <SunsetTheme config={celebrationConfig} />;
      case 'rose':
        return <RoseTheme config={celebrationConfig} />;
      case 'ocean':
        return <OceanTheme config={celebrationConfig} />;
      case 'inferno':
        return <InfernoTheme config={celebrationConfig} />;
      case 'forest':
        return <ForestTheme config={celebrationConfig} />;
      case 'olive':
        return <OliveTheme config={celebrationConfig} />;
      case 'lime':
        return <LimeTheme config={celebrationConfig} />;
      case 'pride':
        return <PrideTheme config={celebrationConfig} />;
      case 'cosmic':
        return <CosmicTheme config={celebrationConfig} />;
      case 'desert':
        return <DesertTheme config={celebrationConfig} />;
      case 'chocolate':
        return <ChocolateTheme config={celebrationConfig} />;
      default:
        // Fallback or development warning if the theme is invalid
        return (
          <div className="min-h-screen flex items-center justify-center bg-red-50 text-red-800 p-8 text-center">
            <div>
              <h1 className="text-2xl font-bold mb-4">Configuration Error</h1>
              <p>Unknown theme: <strong>{celebrationConfig.theme}</strong></p>
              <p className="mt-2 text-sm">Valid themes are "midnight". Please check src/config.js.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {celebrationConfig.features.enableCursorTrail && (
        <CursorTrail color={celebrationConfig.features.cursorTrailColor || "#ffffff"} />
      )}
      {celebrationConfig.features.enableRippleEffect && (
        <RippleEffect color={celebrationConfig.features.rippleColor || "rgba(255, 255, 255, 0.4)"} />
      )}
      {renderExperience()}
    </>
  );
};

export default App;
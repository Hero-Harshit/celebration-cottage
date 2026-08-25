import React from 'react';
import { celebrationConfig } from './config';
import MidnightTheme from './themes/Midnight';

const App = () => {
  // Determine which theme to render based on the configuration
  const renderExperience = () => {
    switch (celebrationConfig.theme) {
      case 'midnight':
        return <MidnightTheme config={celebrationConfig} />;
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
      {renderExperience()}
    </>
  );
};

export default App;
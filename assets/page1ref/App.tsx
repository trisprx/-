import React, { useState } from 'react';
import Scene from './components/Scene';
import { VortexConfig } from './types';

// Initial Configuration
const INITIAL_CONFIG: VortexConfig = {
  particleCount: 40000, // Reverted to lower count for bloom performance
  speed: 0.2,
  noiseStrength: 0.5,
  twist: 0.5,
  zoom: 1,
  colorA: '#00ffff', // Cyan
  colorB: '#ff00ff', // Magenta
  bloomThreshold: 0.2,
  bloomStrength: 1.5,
  bloomRadius: 0.8,
  system: 0, // Default to Vortex
  autoMorph: false,
};

const App: React.FC = () => {
  const [config] = useState<VortexConfig>(INITIAL_CONFIG);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black text-white">
      <Scene config={config} />
    </div>
  );
};

export default App;
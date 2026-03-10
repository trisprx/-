import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import Vortex from './Vortex';
import { VortexConfig } from '../types';

interface SceneProps {
  config: VortexConfig;
}

const Scene: React.FC<SceneProps> = ({ config }) => {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas
        camera={{ position: [0, 0, 18], fov: 45 }}
        dpr={[1, 2]} // Handle high DPI screens
        gl={{ antialias: false, alpha: false, stencil: false, depth: false }}
      >
        <color attach="background" args={['#000000']} />
        
        <Vortex config={config} />
        
        {/* Post Processing */}
        <EffectComposer disableNormalPass>
           <Bloom 
             luminanceThreshold={config.bloomThreshold} 
             mipmapBlur 
             intensity={config.bloomStrength} 
             radius={config.bloomRadius}
           />
           <Noise opacity={0.05} />
        </EffectComposer>

        {/* Camera Controls - constrained for the best view */}
        <OrbitControls 
          enablePan={false} 
          enableZoom={true} 
          minDistance={5} 
          maxDistance={40}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene;
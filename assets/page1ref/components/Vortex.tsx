
import React, { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { vertexShader, fragmentShader } from './VortexShader';
import { VortexConfig } from '../types';

interface VortexProps {
  config: VortexConfig;
}

const Vortex: React.FC<VortexProps> = ({ config }) => {
  const mesh = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size, viewport, pointer } = useThree();

  const particleCount = config.particleCount;

  // Generate particles
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const randoms = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Spiral distribution
      const r = Math.random() * 10 + 0.5; // Radius
      const theta = Math.random() * Math.PI * 2; // Angle
      const z = (Math.random() - 0.5) * 4; // Thickness

      positions[i * 3] = r * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(theta);
      positions[i * 3 + 2] = z;

      scales[i] = Math.random();
      
      randoms[i * 3] = Math.random();
      randoms[i * 3 + 1] = Math.random();
      randoms[i * 3 + 2] = Math.random();
    }

    return { positions, scales, randoms };
  }, [particleCount]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSpeed: { value: config.speed },
      uTwist: { value: config.twist },
      uNoiseStrength: { value: config.noiseStrength },
      uSystem: { value: config.system },
      uColorA: { value: new THREE.Color(config.colorA) },
      uColorB: { value: new THREE.Color(config.colorB) },
      uMouse: { value: new THREE.Vector2(9999, 9999) }, // Initialize off-screen
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    }),
    [] // Initialize once
  );

  // Update uniforms that change frequently or via config
  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      
      // Interpolate mouse position for smooth interaction
      // Map pointer (-1 to 1) to full World Space dimensions
      const targetX = (pointer.x * viewport.width) / 2;
      const targetY = (pointer.y * viewport.height) / 2;
      
      materialRef.current.uniforms.uMouse.value.lerp(new THREE.Vector2(targetX, targetY), 0.15);
      
      // Handle Auto Morph System Logic
      let currentSystem = materialRef.current.uniforms.uSystem.value;

      if (config.autoMorph) {
          // Slowly evolve the system value. 
          // 0.2 means 5 seconds per full system transition (1.0 distance)
          currentSystem += delta * 0.2;
      } else {
          // Smoothly interpolate to the selected manual system
          // We calculate the shortest path in modulo 4 space to avoid wild rewinds
          const modCurrent = currentSystem % 4.0;
          let diff = config.system - modCurrent;
          
          // Wrap around logic for shortest path
          if (diff > 2.0) diff -= 4.0;
          if (diff < -2.0) diff += 4.0;
          
          const target = currentSystem + diff;
          
          // Use lerp for smooth manual transition
          currentSystem = THREE.MathUtils.lerp(currentSystem, target, 0.05);
      }
      
      materialRef.current.uniforms.uSystem.value = currentSystem;

      // Update config-based uniforms
      materialRef.current.uniforms.uSpeed.value = config.speed;
      materialRef.current.uniforms.uTwist.value = config.twist;
      materialRef.current.uniforms.uNoiseStrength.value = config.noiseStrength;
      // uSystem is handled above
      materialRef.current.uniforms.uColorA.value.set(config.colorA);
      materialRef.current.uniforms.uColorB.value.set(config.colorB);
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aScale"
          count={particleCount}
          array={particles.scales}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          count={particleCount}
          array={particles.randoms}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors={false}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </points>
  );
};

export default Vortex;

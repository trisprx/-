export interface VortexConfig {
  particleCount: number;
  speed: number;
  noiseStrength: number;
  twist: number;
  zoom: number;
  colorA: string;
  colorB: string;
  bloomThreshold: number;
  bloomStrength: number;
  bloomRadius: number;
  system: number; // 0: Vortex, 1: Spiral, 2: Wave, 3: Knot
  autoMorph: boolean;
}

// Fix: Allow 'preset' to be passed as a key to UpdateConfig to resolve type overlap error in App.tsx
export type UpdateConfig = (key: keyof VortexConfig | 'preset', value: number | string | boolean) => void;

export enum PresetType {
  NEBULA = 'NEBULA',
  BLACK_HOLE = 'BLACK_HOLE',
  CYBER_STORM = 'CYBER_STORM',
  GOLDEN_RATIO = 'GOLDEN_RATIO'
}

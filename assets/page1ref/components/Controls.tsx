import React, { useState } from 'react';
import { VortexConfig, UpdateConfig, PresetType } from '../types';

interface ControlsProps {
  config: VortexConfig;
  updateConfig: UpdateConfig;
  fps: number;
}

const ControlGroup = ({ title, children }: { title: string; children?: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3 border-b border-cyan-900 pb-1">
      {title}
    </h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const Slider = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (val: number) => void;
}) => (
  <div className="flex flex-col">
    <div className="flex justify-between text-[10px] text-gray-400 mb-1 font-mono">
      <span>{label}</span>
      <span className="text-cyan-200">{value.toFixed(2)}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer hover:bg-gray-700 accent-cyan-500"
    />
  </div>
);

const ColorPicker = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
}) => (
  <div className="flex items-center justify-between">
    <span className="text-[10px] text-gray-400 font-mono">{label}</span>
    <div className="relative">
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-6 h-6 rounded border border-gray-600 bg-transparent cursor-pointer opacity-0 absolute inset-0 z-10"
      />
      <div 
        className="w-6 h-6 rounded border border-gray-600" 
        style={{ backgroundColor: value }}
      />
    </div>
  </div>
);

const Controls: React.FC<ControlsProps> = ({ config, updateConfig, fps }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <h1 className="text-2xl font-bold text-white tracking-tighter mix-blend-difference font-['JetBrains_Mono']">
          COSMIC<span className="text-cyan-400">.VORTEX</span>
        </h1>
        <div className="text-[10px] font-mono text-gray-400 mt-1 flex gap-4">
          <span>FPS: <span className="text-white">{Math.round(fps)}</span></span>
          <span>PARTICLES: <span className="text-white">{config.particleCount.toLocaleString()}</span></span>
        </div>
      </div>

      <div 
        className={`absolute top-0 right-0 h-full w-80 bg-black/80 backdrop-blur-md border-l border-white/10 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-20`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-0 top-4 -translate-x-full bg-black/80 text-white p-2 border-l border-t border-b border-white/10 rounded-l-md hover:bg-gray-900 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-0' : 'rotate-180'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="p-6 h-full overflow-y-auto">
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              PARAMETER CONTROL
            </h2>
            <p className="text-[10px] text-gray-500 leading-relaxed font-mono">
              Modify the underlying mathematical constants of the generative system. Changes reflect in real-time.
            </p>
          </div>

          <ControlGroup title="Topology">
            <div className="flex justify-between items-center mb-4 bg-gray-900/50 p-2 rounded border border-gray-800">
               <span className="text-[10px] font-mono text-cyan-400">AUTO MORPH</span>
               <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={config.autoMorph}
                    onChange={(e) => updateConfig('autoMorph', e.target.checked)}
                  />
                  <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-600"></div>
                </label>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-2">
              {['VORTEX', 'SPIRAL', 'WAVE', 'KNOT'].map((label, idx) => (
                <button
                  key={label}
                  onClick={() => {
                    updateConfig('system', idx);
                    updateConfig('autoMorph', false); // Stop auto morph when manually selecting
                  }}
                  className={`px-3 py-2 border text-[10px] font-mono transition-all rounded-sm uppercase ${
                    config.system === idx && !config.autoMorph
                      ? 'bg-cyan-900/50 border-cyan-500 text-cyan-400' 
                      : 'bg-gray-900 border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </ControlGroup>

          <ControlGroup title="Motion Physics">
            <Slider
              label="TIME SCALE"
              value={config.speed}
              min={0}
              max={2.0}
              step={0.01}
              onChange={(v) => updateConfig('speed', v)}
            />
            <Slider
              label="MODULATION (Twist/Freq)"
              value={config.twist}
              min={-2.0}
              max={2.0}
              step={0.01}
              onChange={(v) => updateConfig('twist', v)}
            />
            <Slider
              label="CHAOS FACTOR"
              value={config.noiseStrength}
              min={0}
              max={3.0}
              step={0.01}
              onChange={(v) => updateConfig('noiseStrength', v)}
            />
          </ControlGroup>

          <ControlGroup title="Visual Aesthetics">
             <div className="grid grid-cols-2 gap-4 mb-4">
                <ColorPicker
                  label="PRIMARY"
                  value={config.colorA}
                  onChange={(v) => updateConfig('colorA', v)}
                />
                <ColorPicker
                  label="SECONDARY"
                  value={config.colorB}
                  onChange={(v) => updateConfig('colorB', v)}
                />
             </div>
             <Slider
              label="BLOOM INTENSITY"
              value={config.bloomStrength}
              min={0}
              max={3.0}
              step={0.1}
              onChange={(v) => updateConfig('bloomStrength', v)}
            />
             <Slider
              label="BLOOM RADIUS"
              value={config.bloomRadius}
              min={0}
              max={1.5}
              step={0.01}
              onChange={(v) => updateConfig('bloomRadius', v)}
            />
          </ControlGroup>

          <ControlGroup title="Presets">
            <div className="grid grid-cols-2 gap-2">
                {[
                  { id: PresetType.NEBULA, label: 'NEBULA' },
                  { id: PresetType.BLACK_HOLE, label: 'VOID' },
                  { id: PresetType.CYBER_STORM, label: 'CYBER' },
                  { id: PresetType.GOLDEN_RATIO, label: 'GOLDEN' },
                ].map((preset) => (
                    <button
                        key={preset.id}
                        onClick={() => {
                             (updateConfig as any)('preset', preset.id);
                        }}
                        className="px-3 py-2 bg-gray-900 border border-gray-700 text-[10px] text-gray-300 font-mono hover:border-cyan-500 hover:text-cyan-400 transition-all rounded-sm uppercase"
                    >
                        {preset.label}
                    </button>
                ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-800">
               <div className="flex justify-between text-[10px] font-mono text-gray-500">
                  <span>RENDERER</span>
                  <span>WEBGL 2.0</span>
               </div>
               <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-1">
                  <span>LATENCY</span>
                  <span>{(1000/fps).toFixed(1)}ms</span>
               </div>
            </div>
          </ControlGroup>
        </div>
      </div>
    </>
  );
};

export default Controls;
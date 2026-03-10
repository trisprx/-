
// Vertex Shader
export const vertexShader = `
  uniform float uTime;
  uniform float uSpeed;
  uniform float uTwist;
  uniform float uNoiseStrength;
  uniform float uSystem; // Now a float used for mixing
  uniform vec2 uMouse;
  uniform float uPixelRatio;

  attribute float aScale;
  attribute vec3 aRandom;

  varying vec3 vColor;
  varying float vDistance;

  // --- NOISE FUNCTIONS ---
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - 0.5;

    // Permutations
    i = mod289(i);
    vec4 p = permute( permute( permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 0.142857142857; // 1.0/7.0
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  // --- SYSTEM CALCULATION HELPER ---
  vec3 getSystemPos(int systemIdx, vec3 pos, float time) {
      // Base vars
      float r = length(pos.xy);
      float angle = atan(pos.y, pos.x);
      vec3 result = pos;
      
      if (systemIdx == 0) {
          // SYSTEM 0: VORTEX
          float twistAngle = angle + time + (1.0 / (r + 0.1)) * uTwist * 5.0;
          float noiseVal = snoise(vec3(pos.x * 0.5, pos.y * 0.5, time * 0.2)) * uNoiseStrength;
          result.x = r * cos(twistAngle);
          result.y = r * sin(twistAngle);
          result.z = pos.z + noiseVal * 5.0;
      } 
      else if (systemIdx == 1) {
          // SYSTEM 1: SPIRAL GALAXY
          float arms = 3.0 + floor(uTwist * 2.0); 
          float theta = angle + time * 0.5;
          float armPhase = theta * arms;
          float armDist = sin(armPhase + r * (3.0 - uTwist)); 
          float rotation = time * 0.2;
          float finalAngle = angle + rotation + (8.0 / (r + 1.0)) * uTwist;
          float rMod = r + armDist * uNoiseStrength * 1.5;
          result.x = rMod * cos(finalAngle);
          result.y = rMod * sin(finalAngle);
          result.z = pos.z * 0.2 * r + snoise(vec3(pos.xy, time)) * uNoiseStrength * 2.0;
      }
      else if (systemIdx == 2) {
          // SYSTEM 2: CYBER WAVE
          float waveSpeed = time * 2.0;
          float freq = 0.8 + uTwist * 0.5;
          float h = sin(pos.x * 0.5 * freq + waveSpeed) + cos(pos.y * 0.5 * freq + waveSpeed);
          float noise = snoise(vec3(pos.xy * 0.2, time * 0.5));
          result.z = pos.z * 0.1 + (h + noise * uNoiseStrength) * 3.0;
          
          float rot = time * 0.1;
          result.x = pos.x * cos(rot) - pos.y * sin(rot);
          result.y = pos.x * sin(rot) + pos.y * cos(rot);
      }
      else {
          // SYSTEM 3: HARMONIC KNOT
          // Use (3, 2) Trefoil knot as base for stability
          float t = angle * 3.0 + time * 0.5; 
          
          // Fixed topology for centering stability (Trefoil)
          float p = 3.0; 
          float q = 2.0; 
          
          float rTorus = 5.0; // Main radius of the knot
          
          // Use uTwist to modulate thickness instead of topology
          float twistMod = sin(t * 2.0 + uTwist * 5.0) * uTwist;
          
          float rDispersion = (r * 0.3) * (0.5 + uNoiseStrength);
          float tubeThickness = 1.5 + (pos.z * 0.3) + rDispersion + twistMod; 
          
          // Torus Knot Parametric Equations
          float rCombined = rTorus + cos(q * t) * tubeThickness;
          
          result.x = rCombined * cos(p * t);
          result.y = rCombined * sin(p * t);
          result.z = sin(q * t) * tubeThickness * 1.5; 
          
          // Only Rotate Y (Spin) to maintain centered visual stability
          // Removing the tumble (X rotation) ensures it doesn't look like it's wobbling off-center
          float rotY = time * 0.3;
          
          float rx = result.x * cos(rotY) - result.z * sin(rotY);
          float rz = result.x * sin(rotY) + result.z * cos(rotY);
          result.x = rx;
          result.z = rz;
      }
      return result;
  }

  void main() {
    float time = uTime * uSpeed;
    
    // Smooth transition logic
    float systemVal = mod(uSystem, 4.0);
    int sysA = int(floor(systemVal));
    int sysB = int(mod(float(sysA) + 1.0, 4.0));
    float mixFactor = smoothstep(0.0, 1.0, fract(systemVal));
    
    vec3 posA = getSystemPos(sysA, position, time);
    vec3 posB = getSystemPos(sysB, position, time);
    
    vec3 newPos = mix(posA, posB, mixFactor);
    
    // --- ADVANCED MOUSE INTERACTION (GRAVITY WELL) ---
    float dist = distance(newPos.xy, uMouse);
    float radius = 7.0; 
    float strength = smoothstep(radius, 0.0, dist); // 1.0 at center, 0.0 at edge
    
    if (strength > 0.0) {
        vec2 diff = newPos.xy - uMouse;
        
        // 1. Swirl Effect (Rotate around mouse)
        float angle = strength * 2.5; // Stronger rotation at center
        float c = cos(angle);
        float s = sin(angle);
        vec2 swirled = vec2(
            diff.x * c - diff.y * s,
            diff.x * s + diff.y * c
        );
        
        // 2. Magnetic/Bulge Effect
        // Push slightly away to create volume, but pull in rotation
        newPos.xy = uMouse + swirled * (1.0 + strength * 0.2);
        
        // 3. Z-Axis Ripple
        // Create a sine wave ripple expanding from cursor
        float ripple = sin(dist * 3.0 - uTime * 8.0) * strength;
        newPos.z += ripple * 2.0;
        
        // 4. Time/Chaos Distortion
        // Accelerate noise locally
        float localNoise = snoise(vec3(newPos.xy * 0.5, uTime * 3.0));
        newPos += vec3(localNoise) * strength * 0.5;
    }

    vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    gl_PointSize = aScale * uPixelRatio * (60.0 / -mvPosition.z);
    
    // Pass distance for coloring
    vDistance = length(newPos.xy);
  }
`;

// Fragment Shader (Unchanged)
export const fragmentShader = `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  
  varying float vDistance;

  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    float strength = 1.0 - smoothstep(0.0, 0.5, d);
    strength = pow(strength, 2.0);

    vec3 color = mix(uColorA, uColorB, smoothstep(0.0, 15.0, vDistance));
    
    gl_FragColor = vec4(color, strength);

    if (strength < 0.05) discard;
  }
`;

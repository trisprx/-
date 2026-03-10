// Interactive Cosmic Vortex - Generative Art Style
class VortexBackground {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 500; // Increased count for grand feel

        // Mouse interaction
        this.mouse = { x: 0, y: 0, isActive: false };

        // Simulation parameters
        this.centerX = 0;
        this.centerY = 0;

        this.resize();
        this.init();
        this.animate();

        // Event listeners
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        window.addEventListener('mouseenter', () => this.mouse.isActive = true);
        window.addEventListener('mouseleave', () => this.mouse.isActive = false);

        // Mobile touch support
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.handleMouseMove({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY });
            }
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
        // Re-init mainly to respawn particles if screen changes drastically, 
        // or just let them adjust naturally. For now, let's keep them and just update center.
    }

    handleMouseMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
        this.mouse.isActive = true;
    }

    init() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(this.createParticle());
        }
    }

    createParticle() {
        // Start random, but mostly concentrated or spread out
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * Math.max(this.canvas.width, this.canvas.height);

        return {
            x: this.centerX + Math.cos(angle) * radius,
            y: this.centerY + Math.sin(angle) * radius,
            vx: 0,
            vy: 0,
            angle: angle,
            radius: radius,
            // Varying sizes
            size: Math.random() < 0.9 ? Math.random() * 2 : Math.random() * 4 + 2,
            baseSize: Math.random() * 2 + 1,
            // Cosmic colors: Cyan, Purple, Deep Blue, White
            hue: Math.random() < 0.5 ? 200 + Math.random() * 60 : 280 + Math.random() * 60,
            brightness: Math.random() * 50 + 50,
            friction: 0.96,
            gravity: 0.2, // Pull towards center
            life: Math.random() * 100,
            maxLife: 100 + Math.random() * 100
        };
    }

    animate() {
        // Deep trails for "TouchDesigner" style
        this.ctx.fillStyle = 'rgba(5, 5, 10, 0.25)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Interaction Target (Mouse or Center)
        let targetX = this.mouse.isActive ? this.mouse.x : this.centerX;
        let targetY = this.mouse.isActive ? this.mouse.y : this.centerY;

        // If no mouse, maybe drift the center slightly for life
        if (!this.mouse.isActive) {
            const time = Date.now() * 0.0005;
            targetX += Math.sin(time) * 100;
            targetY += Math.cos(time * 0.7) * 50;
        }

        this.particles.forEach(p => {
            // Physics: Spiral attraction to target
            const dx = targetX - p.x;
            const dy = targetY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Tangential force (Spiral)
            // Use cross product logic or rotation matrix to push perpendicular to radius
            const force = 1000 / (dist * dist + 1000); // Stronger when close
            const angleToTarget = Math.atan2(dy, dx);
            const spiralAngle = angleToTarget + Math.PI / 2; // 90 degrees offset for spin

            // Add chaos / "beauty of mathematics" via turbulent noise-like offsets
            // Simple pseudo-noise using sin/cos of position
            const noise = Math.sin(p.x * 0.01) * Math.cos(p.y * 0.01);

            p.vx += Math.cos(spiralAngle) * force * 1.5;
            p.vy += Math.sin(spiralAngle) * force * 1.5;

            // Attraction force
            p.vx += (dx / dist) * 0.05 * (1 + noise);
            p.vy += (dy / dist) * 0.05 * (1 + noise);

            // Mouse Repulsion if very close (interactivity)
            if (dist < 100) {
                p.vx -= (dx / dist) * 0.5;
                p.vy -= (dy / dist) * 0.5;
            }

            // Apply friction
            p.vx *= p.friction;
            p.vy *= p.friction;

            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Respawn particles that get stuck in center or too far
            const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            if (dist < 10 || speed < 0.1) {
                // "Warp" them back out
                const a = Math.random() * Math.PI * 2;
                const r = Math.max(this.canvas.width, this.canvas.height) * 0.7;
                p.x = targetX + Math.cos(a) * r;
                p.y = targetY + Math.sin(a) * r;
                p.vx = (Math.random() - 0.5) * 5;
                p.vy = (Math.random() - 0.5) * 5;
            }

            // Render
            // Color shifts based on speed for "energy" feel
            const speedHueShift = Math.min(speed * 10, 50);
            this.ctx.fillStyle = `hsla(${p.hue + speedHueShift}, 80%, ${p.brightness}%, ${Math.min(speed / 2, 1)})`;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();

            // Optional: Connect lines if really fast or close (for structure)
            // But for grand vortex, tons of particles is better.
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new VortexBackground('vortex-canvas');
    });
} else {
    new VortexBackground('vortex-canvas');
}

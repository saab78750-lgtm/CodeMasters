document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { alpha: true });
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '999999';
    document.body.appendChild(canvas);

    let width, height;
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    let mouse = { x: width / 2, y: height / 2 };
    let isMoving = false;
    let moveTimeout;

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        isMoving = true;
        clearTimeout(moveTimeout);
        moveTimeout = setTimeout(() => isMoving = false, 100);
    });
    
    window.addEventListener('touchmove', (e) => {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        isMoving = true;
        clearTimeout(moveTimeout);
        moveTimeout = setTimeout(() => isMoving = false, 100);
    });

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            const angle = Math.random() * Math.PI * 2;
            const isOrb = Math.random() > 0.8;
            const speed = isOrb ? Math.random() * 0.5 + 0.1 : Math.random() * 3 + 1;
            
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            this.life = 1;
            this.decay = isOrb ? Math.random() * 0.005 + 0.005 : Math.random() * 0.02 + 0.015;
            this.size = isOrb ? Math.random() * 4 + 2 : Math.random() * 2 + 1;
            this.color = Math.random() > 0.5 ? '#38bdf8' : '#7c3aed';
            this.isOrb = isOrb;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life -= this.decay;
        }
        draw(ctx) {
            if (this.life <= 0) return;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.life;
            ctx.shadowBlur = this.isOrb ? 15 : 5;
            ctx.shadowColor = this.color;
            ctx.fill();
        }
    }

    const particles = [];
    let pos = { x: width / 2, y: height / 2 };
    
    // Set initial position immediately on first move to prevent drawing a line from center
    let initialized = false;
    window.addEventListener('mousemove', (e) => {
        if (!initialized) {
            pos.x = mouse.x;
            pos.y = mouse.y;
            initialized = true;
        }
    });

    function animate() {
        // The ultimate fluid fade effect
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
        ctx.fillRect(0, 0, width, height);
        
        ctx.globalCompositeOperation = 'screen';

        // Smooth physics-based chasing
        let dx = mouse.x - pos.x;
        let dy = mouse.y - pos.y;
        
        let prevX = pos.x;
        let prevY = pos.y;
        
        pos.x += dx * 0.25;
        pos.y += dy * 0.25;

        // Draw the glowing comet head and tail
        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(pos.x, pos.y);
            
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            
            // Inner core
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#00f0ff';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#00f0ff';
            ctx.stroke();

            // Outer glowing aura
            ctx.lineWidth = 8;
            ctx.strokeStyle = '#7c3aed';
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#7c3aed';
            ctx.stroke();
            
            // Sometimes spawn spark particles
            if (Math.random() > 0.5) {
                particles.push(new Particle(pos.x, pos.y));
            }
        }

        // Draw and update particles
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw(ctx);
            if (particles[i].life <= 0) {
                particles.splice(i, 1);
            }
        }

        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
        
        requestAnimationFrame(animate);
    }
    animate();
});

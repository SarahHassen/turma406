const canvas = document.getElementById('spiralCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 300; // Increased particle count

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.angle = Math.random() * Math.PI * 2;
        this.radius = Math.random() * Math.min(canvas.width, canvas.height) * 0.8; // Larger radius
        this.speed = 0.005 + Math.random() * 0.01;
        this.size = 2 + Math.random() * 4; // Larger particles
        this.opacity = Math.random();
        this.color = this.getRandomColor();
    }

    getRandomColor() {
        const colors = [
            '#AD29DC', // Red
            '#4ECDC4', // Teal
            '#29C2DC', // Light Blue
            '#F7FFF7', // White
            '#29DC4A'  // Yellow
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.angle += this.speed;
        this.radius -= 0.2;
        if (this.radius < 0) {
            this.reset();
        }
        this.opacity -= 0.002;
        if (this.opacity < 0) {
            this.opacity = 1;
        }
    }

    draw() {
        const x = canvas.width / 2 + this.radius * Math.cos(this.angle);
        const y = canvas.height / 2 + this.radius * Math.sin(this.angle);
        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + Math.floor(this.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
    }
}

function createParticles() {
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 51, 0.1)'; // Dark blue with slight transparency
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

function handleResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', handleResize);

createParticles();
animate();


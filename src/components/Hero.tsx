
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Beaker, ThermometerSun, Atom } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // 3D particle effect 
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let particles: Particle[] = [];
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle class 
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        
        // Color palette: purple, blue, green with varying opacity
        const colors = [
          `rgba(155, 109, 255, ${Math.random() * 0.5 + 0.1})`, // purple
          `rgba(77, 172, 255, ${Math.random() * 0.5 + 0.1})`,  // blue
          `rgba(80, 250, 123, ${Math.random() * 0.5 + 0.1})`,  // green
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Initialize particles
    const init = () => {
      particles = [];
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between particles that are close
      ctx.strokeStyle = 'rgba(155, 109, 255, 0.03)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Background canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-float animate-delay-300">
        <Atom size={80} className="text-alchemist-purple opacity-10" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2 animate-float animate-delay-700">
        <ThermometerSun size={60} className="text-alchemist-blue opacity-10" />
      </div>
      <div className="absolute top-2/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 animate-float animate-delay-500">
        <Beaker size={70} className="text-alchemist-green opacity-10" />
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-8 opacity-0 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center py-1 px-3 rounded-full bg-alchemist-purple/20 border border-alchemist-purple/30">
              <Sparkles size={14} className="text-alchemist-gold mr-2" />
              <span className="text-sm font-medium">Journey into Medieval Science</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medieval font-bold">
              <span className="text-gradient-gold">Alchemist</span> <br />
              <span className="text-gradient-primary">Scientist GPT</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Embark on a mystical journey with our medieval alchemist AI, where ancient wisdom meets modern science through immersive storytelling and interactive experiments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://chatgpt.com/g/g-67d825333a388191b371bba6a29b939f-alchemist-scientist-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-alchemist-purple to-alchemist-blue text-white font-medium text-lg transition-all hover:shadow-lg hover:shadow-alchemist-purple/20 group"
              >
                Begin Your Journey
                <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent border border-alchemist-purple/50 text-white font-medium text-lg hover:bg-alchemist-purple/10 transition-all"
              >
                Discover More
              </a>
            </div>
          </div>
          
          {/* Right side image */}
          <div className="relative h-[450px] w-full opacity-0 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <div className="absolute inset-0 rounded-2xl overflow-hidden glass-panel shadow-neon-purple">
              <div className="absolute inset-0">
                <a href="https://ideogram.ai/assets/image/lossless/response/C4irnciyRNmzJ3dKxTdseg" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://ideogram.ai/assets/image/lossless/response/C4irnciyRNmzJ3dKxTdseg" 
                    alt="Alchemist Scientist GPT" 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <blockquote className="font-medieval text-lg italic text-white">
                  "Greetings, seeker! What alchemical knowledge or mysterious experiment dost thou wish to uncover with me today?"
                </blockquote>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-48 h-48 bg-alchemist-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-5 -left-5 w-32 h-32 bg-alchemist-blue/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

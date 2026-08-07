import React, { useEffect, useRef } from "react";

const HeroBackground = ({ count = 45 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    let animationId;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,

      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,

      radius: Math.random() * 3 + 2,
    }));

    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      // Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.strokeStyle = `rgba(251,191,36,${((150 - dist) / 150) * 0.35})`;

            ctx.lineWidth = 1;

            ctx.beginPath();

            ctx.moveTo(particles[i].x, particles[i].y);

            ctx.lineTo(particles[j].x, particles[j].y);

            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            p.x -= dx * 0.002;
            p.y -= dy * 0.002;

            ctx.strokeStyle = `rgba(255,193,7,${(180 - dist) / 180})`;

            ctx.beginPath();

            ctx.moveTo(p.x, p.y);

            ctx.lineTo(mouse.x, mouse.y);

            ctx.stroke();
          }
        }

        // Glow

        const glow = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 5,
        );

        glow.addColorStop(0, "rgba(251,191,36,.8)");

        glow.addColorStop(1, "rgba(251,191,36,0)");

        ctx.fillStyle = glow;

        ctx.beginPath();

        ctx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2);

        ctx.fill();

        // Particle

        ctx.fillStyle = "#FBBF24";

        ctx.beginPath();

        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener("mousemove", move);

      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        zIndex: -1,
      }}
    />
  );
};

export default HeroBackground;

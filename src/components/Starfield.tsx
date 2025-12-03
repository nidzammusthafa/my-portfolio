"use client";

import { useEffect, useRef } from "react";

class Star {
  angle: number = 0;
  radius: number = 0;
  y: number = 0;
  size: number = 0;
  opacity: number = 0;
  dOpacity: number = 0;
  color: string = "";
  width: number = 0;
  height: number = 0;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.reset(true);
  }

  reset(initial = false) {
    this.angle = Math.random() * Math.PI * 2;
    this.radius =
      Math.random() *
        (this.width > this.height ? this.width : this.height) *
        1.5 +
      100;
    this.y = (Math.random() - 0.5) * this.height * 4;

    this.size = Math.random() * 2 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.3;
    this.dOpacity = (Math.random() - 0.5) * 0.01;

    const colors = ["#ffffff", "#f0f0ff", "#fff0f0", "#e0e0ff", "#ccccff"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  draw(
    ctx: CanvasRenderingContext2D,
    scrollOffset: number,
    rotation: number,
    width: number,
    height: number
  ) {
    this.width = width;
    this.height = height;

    this.opacity += this.dOpacity;
    if (this.opacity > 0.9 || this.opacity < 0.2)
      this.dOpacity = -this.dOpacity;

    const currentAngle = this.angle + rotation * 0.0005;

    const x = Math.cos(currentAngle) * this.radius;
    const z = Math.sin(currentAngle) * this.radius;

    let y = this.y - scrollOffset * 0.5;

    const totalH = height * 4;
    while (y < -totalH / 2) y += totalH;
    while (y > totalH / 2) y -= totalH;

    const fov = 800;
    const cameraZ = -1000;
    const depth = z - cameraZ;

    if (depth < 500) return;

    const scale = fov / depth;

    const sX = width / 2 + x * scale;
    const sY = height / 2 + y * scale;

    if (sX > 0 && sX < width && sY > 0 && sY < height) {
      const projectedSize = this.size * scale;

      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.shadowBlur = projectedSize * 2;
      ctx.shadowColor = this.color;

      ctx.beginPath();
      ctx.arc(sX, sY, projectedSize, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }
  }
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars: Star[] = [];
    const numStars = 800;
    let rotation = 0;
    let animationFrameId: number;

    function resize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function init() {
      resize();
      stars = [];
      for (let i = 0; i < numStars; i++) stars.push(new Star(width, height));
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);
      const scroll = window.scrollY;
      rotation++;
      stars.forEach((star) => star.draw(ctx, scroll, rotation, width, height));
      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener("resize", () => {
      resize();
      stars = [];
      for (let i = 0; i < numStars; i++) stars.push(new Star(width, height));
    });

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="starfield"
      className="absolute inset-0 w-full h-full opacity-60 pointer-events-none mix-blend-screen z-0"
    />
  );
}

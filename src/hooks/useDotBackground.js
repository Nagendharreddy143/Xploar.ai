import { useEffect, useRef } from "react";

const useDotBackground = (canvasId) => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    canvasRef.current = canvas;
    const ctx = canvas.getContext("2d");
    let mouse = { x: undefined, y: undefined };
    let dots = [];

    const setupDots = () => {
      dots = [];
      const dotSpacing = 40;
      for (
        let x = dotSpacing / 2;
        x < canvasRef.current.width + dotSpacing;
        x += dotSpacing
      ) {
        for (
          let y = dotSpacing / 2;
          y < canvasRef.current.height + dotSpacing;
          y += dotSpacing
        ) {
          dots.push({ x, y });
        }
      }
    };

    const resizeCanvas = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      setupDots();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    const draw = () => {
      if (!ctx || !canvasRef.current) return;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      const dotRadius = 1.5;
      const spotlightRadius = 150;

      dots.forEach((dot) => {
        let opacity = 0.1;
        if (mouse.x !== undefined && mouse.y !== undefined) {
          const dx = dot.x - mouse.x;
          const dy = dot.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          opacity = Math.max(0.1, 1 - distance / spotlightRadius);
        }
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(43, 47, 119, ${opacity})`; // Cosmic Indigo
        ctx.fill();
      });
      animationFrameId.current = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();

    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [canvasId]);
};

export default useDotBackground;

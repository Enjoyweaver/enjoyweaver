import React, { useRef, useEffect } from "react";

// Helper function to read a CSS variable
function getCSSVariable(varName) {
  return getComputedStyle(document.documentElement).getPropertyValue(varName);
}

export default function SmokeCursor() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    lastX: 0,
    lastY: 0,
  });

  // Handle mouse movements
  function handleMouseMove(e) {
    // If the mouse is over the navbar or any of its children, skip the effect
    if (e.target.closest("nav")) {
      return;
    }

    const { clientX, clientY } = e;
    const { lastX, lastY } = mouseRef.current;

    // Calculate velocity
    const vx = clientX - lastX;
    const vy = clientY - lastY;

    mouseRef.current.x = clientX;
    mouseRef.current.y = clientY;
    mouseRef.current.vx = vx;
    mouseRef.current.vy = vy;
    mouseRef.current.lastX = clientX;
    mouseRef.current.lastY = clientY;

    // Add new particles
    addParticles(clientX, clientY, vx, vy);
  }

  function addParticles(x, y, vx, vy) {
    // Pull color(s) from your theme variables
    const color1 = getCSSVariable("--effect-1") || "#77d5f7";
    const color2 = getCSSVariable("--effect-2") || "#52f7c8";

    // Increase the count for a thicker effect
    for (let i = 0; i < 6; i++) {
      particlesRef.current.push({
        x,
        y,
        vx: vx * 0.2 + (Math.random() - 0.5) * 1.2,
        vy: vy * 0.2 + (Math.random() - 0.5) * 1.2,
        alpha: 1,
        size: 2 + Math.random() * 8,
        color: Math.random() < 0.5 ? color1.trim() : color2.trim(),
      });
    }
  }

  // The animation loop
  function animate() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;

    // Fade out old frames (trail effect)
    ctx.save();
    ctx.globalAlpha = 0.08;
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillRect(0, 0, width, height);
    ctx.restore();

    // Switch to additive blending for new strokes
    ctx.globalCompositeOperation = "lighter";

    particlesRef.current.forEach((p) => {
      // Update position
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.95;
      p.vy *= 0.95;
      // Fade out faster => less bright
      p.alpha -= 0.02;
    });

    // Draw each particle
    particlesRef.current.forEach((p) => {
      if (p.alpha <= 0) return;

      ctx.save();
      // Halve the alpha to dim it further
      ctx.globalAlpha = p.alpha * 0.5;

      // Use a radial gradient
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
      gradient.addColorStop(0, p.color);
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // Remove dead particles
    particlesRef.current = particlesRef.current.filter((p) => p.alpha > 0);

    // Next frame
    requestAnimationFrame(animate);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    // IMPORTANT: do NOT hide the cursor here
    // pointerEvents: "none" is still okay
    // The default system cursor will show up
    // as long as there's no 'cursor: none' in your CSS.

    window.addEventListener("mousemove", handleMouseMove);

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const canvasStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none", // so clicks pass through
    zIndex: 9999,
    // Don't set cursor: 'none' if you want the mouse pointer visible
  };

  return <canvas ref={canvasRef} style={canvasStyle} />;
}

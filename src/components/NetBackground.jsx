import React, { useEffect, useRef } from "react";

export const NetBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;
    const nodes = [];
    const maxDistance = 150; // max distance to connect nodes

    // Node class for dots
    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.3; // velocity x
        this.vy = (Math.random() - 0.5) * 0.3; // velocity y
        this.radius = 3 + Math.random() * 2;
      }

      move() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 255, 150, 0.8)";
        ctx.fill();
      }
    }

    // Initialize canvas size and nodes
    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      nodes.length = 0;
      const count = Math.floor((width * height) / 10000); // density control

      for (let i = 0; i < count; i++) {
        nodes.push(new Node(Math.random() * width, Math.random() * height));
      }
    };

    // Draw connecting lines
    const connectNodes = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = 1 - dist / maxDistance;
            ctx.strokeStyle = `rgba(0, 255, 150, ${alpha * 0.4})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((node) => {
        node.move();
        node.draw();
      });

      connectNodes();

      animationRef.current = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", () => {
      init();
    });

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none bg-black"
      style={{ backgroundColor: "#000" }}
    />
  );
};

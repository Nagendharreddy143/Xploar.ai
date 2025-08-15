import React, { useState, useRef, useEffect } from "react";
import useAos from "../../hooks/useAos";

// A dedicated component for the interactive 3D-style image
const InteractiveImage = () => {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation based on mouse position from the center
    const rotateY = (mouseX / width - 0.5) * -30; // Max rotation of 15 degrees
    const rotateX = (mouseY / height - 0.5) * 30; // Max rotation of 15 degrees

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    // Reset rotation when mouse leaves
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full flex items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      <img
        src="/aboutUs.png"
        alt="Holographic brain representing artificial intelligence"
        className="w-full max-w-md lg:max-w-lg rounded-3xl transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      />
    </div>
  );
};

const AboutHero = () => {
  useAos();

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column: Text Content */}
          <div className="relative z-10 pt-16 lg:pt-0" data-aos="fade-right">
            <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our Mission: Where{" "}
              <span className="bg-gradient-to-r from-electric-aqua to-neon-lilac bg-clip-text text-transparent">
                Curiosity Meets Clarity
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed">
              We're reimagining education for the AI age, empowering learners to
              explore, personalize, and master knowledge.
            </p>
          </div>

          {/* Right Column: Interactive 3D-style Image */}
          <div
            className="relative h-full w-full min-h-[400px] lg:min-h-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <InteractiveImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

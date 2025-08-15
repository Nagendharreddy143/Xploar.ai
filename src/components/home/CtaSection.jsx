import React, { useState } from "react";
import useAos from "../../hooks/useAos";
import { ArrowRightIcon, SparklesIcon, CheckIcon } from "../common/Icons";

const CtaSection = ({ onOpenModal }) => {
  useAos();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const benefits = [
    "AI-powered study plans",
    "Real-time progress tracking",
    "Expert guidance 24/7",
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-electric-aqua/10 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-neon-lilac/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-6">
        <div
          data-aos="fade-up"
          onMouseMove={handleMouseMove}
          className="relative bg-cosmic-indigo p-8 sm:p-12 lg:p-16 rounded-3xl text-center overflow-hidden border border-electric-aqua/20 group"
        >
          {/* Enhanced Cursor Glow */}
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(74, 227, 181, 0.15), rgba(147, 51, 234, 0.08) 50%, transparent 70%)`,
            }}
          ></div>

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-electric-aqua/5 via-transparent to-neon-lilac/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          {/* Floating sparkles */}
          <div className="absolute top-8 right-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
            <SparklesIcon className="w-6 h-6 text-electric-aqua animate-pulse" />
          </div>
          <div
            className="absolute bottom-8 left-8 opacity-40 group-hover:opacity-80 transition-opacity duration-700"
            style={{ animationDelay: "0.5s" }}
          >
            <SparklesIcon className="w-4 h-4 text-neon-lilac animate-pulse" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-electric-aqua/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 transform transition-all duration-500 hover:scale-105"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <div className="w-2 h-2 bg-electric-aqua rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-electric-aqua">
                Join 10,000+ Success Stories
              </span>
            </div>

            <h2
              className="font-space-grotesk text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight transform transition-all duration-700 group-hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Ready to Turn UPSC Preparation from{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-electric-aqua to-neon-lilac bg-clip-text text-transparent">
                  Overwhelming to Organized?
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-electric-aqua to-neon-lilac rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              </span>
            </h2>

            {/* Benefits list */}
            <div
              className="flex flex-wrap justify-center gap-6 mb-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 transform transition-all duration-500 hover:bg-white/20 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckIcon className="w-4 h-4 text-electric-aqua" />
                  <span className="text-ice-white/90 text-sm font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Main CTA Button */}
            <div
              className="relative inline-block"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <button
                onClick={onOpenModal}
                className="relative px-10 py-5 bg-electric-aqua hover:bg-electric-aqua/90 rounded-2xl font-poppins font-bold text-void-black text-xl transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-electric-aqua/50"
              >
                <span className="flex items-center justify-center gap-3">
                  Join Wait List
                  <ArrowRightIcon className="w-6 h-6" />
                </span>
              </button>
            </div>

            {/* Supporting text */}
            <p
              className="text-ice-white/60 text-sm mt-6 max-w-md mx-auto transform transition-all duration-500 group-hover:text-ice-white/80"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              No credit card required • Start your free trial today
            </p>
          </div>

          {/* Corner decorative elements */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-electric-aqua/30 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-neon-lilac/30 rounded-br-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

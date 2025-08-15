import React from "react";

const HeroSection = ({ onOpenModal }) => {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source
          src="/AI_Learning_Platform_Animation_Request.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag. An inspirational video of
        students studying is playing in the background.
      </video>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-end py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-lg md:max-w-xl text-left">
            {/* Main Heading */}
            <h1 className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-ice-white leading-tight">
              Your UPSC Journey, Guided
              <span className="bg-gradient-to-r from-electric-aqua to-neon-lilac bg-clip-text text-transparent">
                {" "}
                by AI
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 text-lg md:text-xl text-ice-white/90 font-poppins">
              Experience the future of learning with intelligent study plans,
              real-time progress tracking, and adaptive AI support that evolves
              with you.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                onClick={onOpenModal}
                className="bg-electric-aqua text-void-black font-poppins font-bold px-5 py-3 rounded-lg hover:scale-105 transition-transform"
              >
                Join the AI Revolution
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

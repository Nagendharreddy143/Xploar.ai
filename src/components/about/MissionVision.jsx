import React from "react";
import useAos from "../../hooks/useAos";
import LazyVideo from "../common/LazyVideo";

// Importing the new icons from your central file
import { LockClosedIcon, UserMinusIcon, BookOpenIcon } from "../common/Icons";

// Updated and consolidated list of opportunity costs
const opportunityCosts = [
  {
    icon: LockClosedIcon,
    text: "Innovation potential gets trapped in administrative roles.",
  },
  {
    icon: UserMinusIcon,
    text: "Tier-2 and Tier-3 city talent lacks access to quality guidance and efficient resources.",
  },
  {
    icon: BookOpenIcon,
    text: "Rote learning dominates over critical thinking and problem-solving.",
  },
];

const MissionVision = () => {
  useAos();

  return (
    <section id="mission-vision" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column: Video */}
          {/* FIX: Using the robust "padding-top" trick for a guaranteed aspect ratio */}
          <div
            className="lg:col-span-3 relative rounded-xl shadow-2xl overflow-hidden bg-gray-100"
            data-aos="fade-right"
            style={{ paddingTop: "56.25%" }} // 16:9 aspect ratio
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-indigo/5 to-electric-aqua/5"></div>
            <iframe
              src="https://www.youtube.com/embed/NIx5-4zujuA"
              title="Xploar.ai Mission and Vision"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
            {/* Subtle overlay for better video contrast */}
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1)" }}></div>
          </div>

          {/* Right Column: Text content */}
          <div
            className="lg:col-span-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-cosmic-indigo mb-6 leading-tight">
              India has talent everywhere — but opportunity isn't evenly spread.
            </h2>
            <p className="text-lg text-card-text leading-relaxed mb-8">
              We're here to change that with AI-powered guidance that turns curiosity into clarity.
            </p>
            <div className="space-y-6">
              {opportunityCosts.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-electric-aqua/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-electric-aqua" />
                  </div>
                  <p className="text-card-text text-lg mt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

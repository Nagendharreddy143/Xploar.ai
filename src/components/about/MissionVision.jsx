import React from "react";
import useAos from "../../hooks/useAos";

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
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column: Video */}
          {/* FIX: Using the robust "padding-top" trick for a guaranteed aspect ratio */}
          <div
            className="lg:col-span-3 relative rounded-xl shadow-2xl overflow-hidden pt-[56.25%] bg-gray-200"
            data-aos="fade-right"
          >
            <video
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            >
              <source
                src="/AI_Learning_Platform_Animation_Request.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Column: Text content */}
          <div
            className="lg:col-span-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-cosmic-indigo mb-6 leading-tight">
              India has a talent distribution crisis.
            </h2>
            <p className="text-lg text-card-text leading-relaxed mb-8">
              Every year, millions of brilliant minds get funneled into
              traditional competitive exams. While noble, this creates a massive
              opportunity cost:
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

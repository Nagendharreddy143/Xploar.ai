import React from "react";
import useAos from "../../hooks/useAos";

// Importing the modular icons from your central file
import {
  LibraryIcon,
  MapIcon,
  HourglassIcon,
  BatteryHalfIcon,
  CopyIcon,
} from "../common/Icons";

// Data array referencing the imported icon components
const challenges = [
  {
    icon: LibraryIcon,
    title: "Overwhelming Syllabus",
    description: "So much to cover, so little time to master it all.",
  },
  {
    icon: MapIcon,
    title: "Disorganized Resources",
    description: "Finding quality materials often feels like a maze.",
  },
  {
    icon: HourglassIcon,
    title: "Slow Feedback",
    description: "Waiting days for answers slows down your progress.",
  },
  // {
  //   icon: BatteryHalfIcon,
  //   title: "Staying Motivated",
  //   description: "Long hours can drain even the strongest resolve.",
  // },
  // {
  //   icon: CopyIcon,
  //   title: "Generic Study Plans",
  //   description: "One-size-fits-all plans that don't fit your style.",
  // },
];

// Reusable Card component, styled identically to the BenefitCard
const ChallengeCard = ({ icon: Icon, title, description, delay }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={delay}
    className="group relative bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 ease-out hover:border-electric-aqua/50 hover:shadow-lg hover:-translate-y-1"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-electric-aqua/10 rounded-xl flex items-center justify-center group-hover:bg-electric-aqua/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-electric-aqua" />
      </div>
      <h3 className="font-semibold text-lg text-cosmic-indigo group-hover:text-electric-aqua transition-colors duration-300">
        {title}
      </h3>
    </div>
    <p className="text-card-text leading-relaxed">{description}</p>
  </div>
);

// Main Section Component, structured identically to the BenefitsSection
const ChallengeSection = () => {
  useAos();

  return (
    <section
      id="challenge"
      className="py-20 lg:py-24 bg-gradient-to-b from-gray-50/50 to-white"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-cosmic-indigo mb-4">
            The UPSC Prep Struggle is Real
          </h2>
          <p className="text-lg text-card-text">
            Preparing for the civil services exam isn't just about hard work —
            it's about working smart. We help you cut through the noise and
            focus on what truly matters.
          </p>
        </div>

        {/* Cards Grid - now with 5 cards, laid out cleanly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <div
              // This logic ensures the last card is centered on the final row for LG screens
              className={
                challenges.length % 3 === 2 && index === challenges.length - 2
                  ? "lg:col-start-2"
                  : ""
              }
              key={index}
            >
              <ChallengeCard
                icon={challenge.icon}
                title={challenge.title}
                description={challenge.description}
                delay={index * 100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;

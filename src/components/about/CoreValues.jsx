import React from "react";
import useAos from "../../hooks/useAos";

// Importing the correct, modular icons from your central file
import {
  PlanetIcon,
  HeartIcon,
  GlobeIcon,
  RibbonIcon,
  ArrowPathIcon,
} from "../common/Icons";

// Updated data array to reference the imported icon components
const values = [
  {
    icon: PlanetIcon,
    title: "Exploration First",
    color: "electric-aqua",
  },
  {
    icon: HeartIcon,
    title: "AI with Empathy",
    color: "electric-aqua",
  },
  {
    icon: GlobeIcon,
    title: "Borderless Access",
    color: "electric-aqua",
  },
  {
    icon: RibbonIcon,
    title: "True Mastery",
    color: "neon-lilac",
  },
  {
    icon: ArrowPathIcon,
    title: "Real-Time Reflection",
    color: "neon-lilac",
  },
];

// A new, clean card component for each core value
const ValueCard = ({ icon: Icon, title, color, delay }) => {
  const colorClasses = {
    "electric-aqua": "text-electric-aqua",
    "neon-lilac": "text-neon-lilac",
  };

  return (
    <div
      className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div
        className={`w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center ${
          colorClasses[color] || "text-electric-aqua"
        }`}
      >
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="font-poppins text-lg font-semibold text-cosmic-indigo">
        {title}
      </h3>
    </div>
  );
};

const CoreValues = () => {
  useAos();

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-cosmic-indigo">
            The Principles That Guide Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            These values are the foundation of our technology and the core of
            our commitment to every learner.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              color={value.color}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;

import React from "react";
import useAos from "../../hooks/useAos";

// Importing the new icons from your central file
import { TrendingUpIcon, ZapIcon, CheckCircleIcon } from "../common/Icons";

const outcomes = [
  {
    value: "+27%",
    description: "average score lift in 30 days",
    icon: TrendingUpIcon,
    metric: "Score Improvement",
  },
  {
    value: "2x",
    description: "faster coverage of core syllabus",
    icon: ZapIcon,
    metric: "Study Speed",
  },
  {
    value: "90%",
    description: "daily clarity on what to study next",
    icon: CheckCircleIcon,
    metric: "Study Clarity",
  },
];

// A cleaner, more standard card component
const OutcomeCard = ({ value, description, icon: Icon, metric, delay }) => (
  <div
    className="group bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 ease-out hover:border-electric-aqua/50 hover:shadow-lg hover:-translate-y-1"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-electric-aqua/10 rounded-xl flex items-center justify-center group-hover:bg-electric-aqua/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-electric-aqua" />
      </div>
      <h3 className="font-semibold text-lg text-cosmic-indigo">{metric}</h3>
    </div>
    <p className="font-space-grotesk text-5xl font-bold text-cosmic-indigo mb-2">
      {value}
    </p>
    <p className="text-lg text-card-text leading-relaxed">{description}</p>
  </div>
);

const OutcomesSection = () => {
  useAos();

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-cosmic-indigo mb-4">
            Verified Outcomes, Real Results
          </h2>
          <p className="text-lg text-card-text leading-relaxed">
            Our AI-driven approach isn't just theory. It delivers measurable
            improvements for aspirants like you.
          </p>
        </div>

        {/* Outcomes grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {outcomes.map((outcome, index) => (
            <OutcomeCard
              key={index}
              value={outcome.value}
              description={outcome.description}
              icon={outcome.icon}
              metric={outcome.metric}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;

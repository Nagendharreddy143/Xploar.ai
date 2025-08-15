import React from "react";
import useAos from "../../hooks/useAos";

// Assuming these new icons have been added to your central Icons.jsx file
import {
  RoadmapIcon,
  StudyIcon,
  TestIcon,
  EvaluateIcon,
  FixIcon,
} from "../common/Icons";

const features = [
  {
    icon: RoadmapIcon,
    title: "Personalized Roadmap",
    text: "Creates your personalized 100-day roadmap based on your available hours and current level.",
  },
  {
    icon: StudyIcon,
    title: "Daily Study Plan",
    text: "Tells you exactly what to study today with bite-sized, manageable tasks.",
  },
  {
    icon: TestIcon,
    title: "Adaptive Testing",
    text: "Tests you daily with adaptive MCQs that get harder as you improve.",
  },
  {
    icon: EvaluateIcon,
    title: "Mains Evaluation",
    text: "Evaluates your Mains answers like a real examiner with detailed rubric scoring.",
  },
  {
    icon: FixIcon,
    title: "Auto-Fix Weaknesses",
    text: "Fixes your weak areas automatically before they become exam day disasters.",
  },
];

// A new, cleaner card component for individual features
const FeatureItem = ({ icon: Icon, title, text, delay }) => (
  <div
    className="flex items-start gap-4"
    data-aos="fade-left"
    data-aos-delay={delay}
  >
    <div className="w-12 h-12 bg-electric-aqua/10 rounded-xl flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-electric-aqua" />
    </div>
    <div>
      <h3 className="font-semibold text-lg text-cosmic-indigo">{title}</h3>
      <p className="mt-1 text-card-text leading-relaxed">{text}</p>
    </div>
  </div>
);

const AllInOneSection = () => {
  useAos();

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Headline and Description */}
          <div data-aos="fade-right">
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-cosmic-indigo mb-6 leading-tight">
              One Platform That Plans, Teaches, Tests & Fixes Everything
            </h2>
            <p className="text-lg text-card-text leading-relaxed">
              Stop juggling 10 different apps. Xploar.ai is your single AI
              companion for the entire UPSC journey.
            </p>
          </div>

          {/* Right Column: Feature List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                text={feature.text}
                delay={index * 100} // Staggered animation for each item
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllInOneSection;

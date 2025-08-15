import React, { useState } from "react";
import useAos from "../../hooks/useAos";

// Importing the necessary icons from your central file
import {
  TargetIcon,
  ClipboardIcon,
  RocketLaunchIcon,
  ArrowRightIcon, // The new arrow for the journey
} from "../common/Icons";

// Data array for the steps with your provided copy
const steps = [
  {
    icon: TargetIcon,
    title: "Step 1: Tell Us Your Goal",
    description:
      "Days available, hours per day, current syllabus stage. Takes 2 minutes.",
  },
  {
    icon: ClipboardIcon,
    title: "Step 2: Get Your Personalized Plan",
    description:
      "Daily lessons, practice drills, and revision cycles—auto-adjusted if life gets in the way.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Step 3: Learn → Practice → Master",
    description:
      "Our AI identifies your weak spots and keeps drilling them until they become your strengths.",
  },
];

// Reusable Step component for the journey layout
const StepCard = ({
  icon: Icon,
  title,
  description,
  delay,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    className="group flex flex-col text-center items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm w-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    data-aos="fade-up"
    data-aos-delay={delay}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="w-16 h-16 bg-electric-aqua/10 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-electric-aqua/20">
      <Icon className="w-8 h-8 text-electric-aqua" />
    </div>
    <h3 className="font-semibold text-lg text-cosmic-indigo mb-2">{title}</h3>
    <p className="text-card-text leading-relaxed">{description}</p>
  </div>
);

const HowItWorksSection = () => {
  useAos();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50/50"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-cosmic-indigo mb-4">
            From Chaos to Clarity in 3 Simple Steps
          </h2>
          <p className="text-lg text-card-text">
            Transform your UPSC preparation with a streamlined process designed
            to maximize efficiency and results.
          </p>
        </div>

        {/* Journey Layout: Flexbox for horizontal alignment on desktop, stacks on mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Card */}
              <div className="flex-1 max-w-sm">
                <StepCard
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  delay={index * 150}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              </div>

              {/* Arrow Connector (hidden on mobile, and not shown after the last card) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block"
                  data-aos="fade-zoom-in"
                  data-aos-delay={100 + index * 150}
                >
                  <ArrowRightIcon
                    className={`w-12 h-12 transition-colors duration-300 ${
                      hoveredIndex === index
                        ? "text-electric-aqua"
                        : "text-gray-300"
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

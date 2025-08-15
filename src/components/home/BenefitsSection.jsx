import React from "react";
import useAos from "../../hooks/useAos";

// Importing the correct, modular icons from your central file
import {
  LightBulbIcon,
  ChartPieIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UsersIcon,
  ArrowPathIcon,
} from "../common/Icons";

// Data array now uses component references directly
const benefits = [
  {
    icon: LightBulbIcon,
    title: "Clear Learning Path",
    description:
      "No more confusion about what to study next. Get a structured roadmap tailored to your pace.",
  },
  {
    icon: ChartPieIcon,
    title: "Smart Progress Tracking",
    description:
      "See exactly where you stand and what needs attention with detailed analytics.",
  },
  {
    icon: RocketLaunchIcon,
    title: "Consistent Momentum",
    description:
      "Daily goals and streak tracking keep you motivated and moving forward.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Exam Ready Confidence",
    description:
      "Practice with real exam conditions so you walk in prepared and confident.",
  },
  {
    icon: UsersIcon,
    title: "Peer Learning Network",
    description:
      "Connect with fellow aspirants, discuss concepts, and learn together.",
  },
  {
    icon: ArrowPathIcon,
    title: "Effective Retention",
    description:
      "Smart revision schedules ensure you remember what you've learned long-term.",
  },
];

// Reusable Card component for a clean structure
const BenefitCard = ({ icon: Icon, title, description, delay }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={delay}
    className="group relative bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 ease-out hover:border-electric-aqua/50 hover:shadow-lg hover:-translate-y-1"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-electric-aqua/10 rounded-xl flex items-center justify-center group-hover:bg-electric-aqua/20 transition-colors duration-300">
        {/* Using the imported Icon component */}
        <Icon className="w-6 h-6 text-electric-aqua" />
      </div>
      <h3 className="font-semibold text-lg text-cosmic-indigo group-hover:text-electric-aqua transition-colors duration-300">
        {title}
      </h3>
    </div>
    <p className="text-card-text leading-relaxed">{description}</p>
  </div>
);

// Main Section Component
const BenefitsSection = () => {
  // This single hook reliably handles all animations within this component
  useAos();

  return (
    <section
      id="benefits"
      className="py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50/50"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-cosmic-indigo mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-card-text">
            See how our features translate into real benefits for your UPSC
            preparation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 100} // Staggered delay for each card
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

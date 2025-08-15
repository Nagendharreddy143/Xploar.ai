import { useRef } from "react";
import useTimelineAnimation from "../../hooks/useTimelineAnimation";
import FeatureCard from "./FeatureCard";

// Importing the correct, modular icons from your central file
import {
  MapIcon,
  PencilIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  UsersIcon,
  LibraryIcon,
  BoltIcon,
} from "../common/Icons";

// Data array updated with the 7 new game-changing features
const featuresData = [
  {
    icon: MapIcon,
    title: "Journey Builder",
    text: 'Pick a goal like "UPSC Foundation in 100 days." Get a daily, bite-sized plan with auto-revision built in.',
    alignment: "md:justify-end",
    aosAnimation: "fade-left",
  },
  {
    icon: PencilIcon,
    title: "Study Planner",
    text: "Clear tasks, streak counters, and progress percentages. Always know what's next without decision fatigue.",
    alignment: "md:justify-start",
    aosAnimation: "fade-right",
  },
  {
    icon: ShieldCheckIcon,
    title: "AI Mock Tests",
    text: "Daily adaptive MCQs and weekly full-length mocks with instant analytics to prepare you.",
    alignment: "md:justify-end",
    aosAnimation: "fade-left",
  },
  {
    icon: AcademicCapIcon,
    title: "Answer Evaluator (Mains)",
    text: "Upload your answers and get scored on structure, relevance, and depth, just like the real exam.",
    alignment: "md:justify-start",
    aosAnimation: "fade-right",
  },
  {
    icon: UsersIcon,
    title: "Voice Tutor",
    text: "Ask doubts hands-free while commuting. Get crisp, cited explanations in seconds.",
    alignment: "md:justify-end",
    aosAnimation: "fade-left",
  },
  {
    icon: LibraryIcon,
    title: "Current Affairs Nano-Feed",
    text: "Exam-ready updates in 2-minute chunks with built-in recall checks. Stay updated without the overload.",
    alignment: "md:justify-start",
    aosAnimation: "fade-right",
  },
  {
    icon: BoltIcon,
    title: "Debate Mode (ClashPoint)",
    text: "Engage in 1:1 or team debates with AI rubric scoring to build rock-solid argumentation skills.",
    alignment: "md:justify-end",
    aosAnimation: "fade-left",
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const threadRef = useRef(null);

  useTimelineAnimation(threadRef, sectionRef);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-20 lg:py-28 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center" data-aos="fade-up">
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-cosmic-indigo">
            7 Game-Changing Features That UPSC Toppers Wish They Had
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Instead of leaving you alone with books, Xploar.ai becomes your
            personal study companion that guides you every day.
          </p>
        </div>
        <div className="relative mt-16">
          <div
            ref={threadRef}
            id="timeline-thread"
            className="absolute top-0 w-1 bg-gradient-to-b from-electric-aqua to-neon-lilac rounded-full left-1/2 -translate-x-1/2"
            style={{ height: "0%" }}
          ></div>
          <div className="space-y-12 md:space-y-16">
            {featuresData.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                text={feature.text}
                alignment={feature.alignment}
                aosAnimation={feature.aosAnimation}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

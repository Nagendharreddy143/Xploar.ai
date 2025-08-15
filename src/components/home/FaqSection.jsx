import React, { useState } from "react";
// REMOVED: useAos hook is no longer needed
import { PlusIcon, MinusIcon } from "../common/Icons";

const faqData = [
  {
    question: "What exactly is the '100-day foundation' program?",
    answer:
      "A guided plan covering all core GS + CSAT subjects with built-in practice and revision loops. Think of it as your personal UPSC GPS.",
  },
  {
    question: "I'm a complete beginner. Will this work for me?",
    answer:
      "Absolutely. Our AI adapts to your current level and gradually increases difficulty as you improve.",
  },
  {
    question: "How are the questions created? Are they reliable?",
    answer:
      "Expert-curated question banks + AI-generated variants, all reviewed against UPSC marking rubrics and previous year patterns.",
  },
  {
    question: "What if I miss days or need to reschedule?",
    answer:
      "Life happens. Our smart rescheduling keeps your plan realistic and achievable without the guilt.",
  },
  {
    question: "Will this replace my coaching institute?",
    answer:
      "It complements classroom learning with personalization, detailed analytics, and daily consistency that no human teacher can provide at scale.",
  },
  {
    question: "What about refunds and cancellations?",
    answer:
      "Cancel anytime, hassle-free. Our Pro plans are month-to-month with no long-term commitments.",
  },
];

// Reusable Accordion Item component
const FaqItem = ({ question, answer, isOpen, onClick }) => (
  // REMOVED: data-aos attribute
  <div className="border-b border-gray-200 py-6">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left"
    >
      {/* CHANGED: Text color changed to text-void-black */}
      <h3 className="text-lg font-semibold text-void-black">{question}</h3>
      <div className="w-6 h-6 flex-shrink-0 text-electric-aqua">
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
    </button>
    <div
      className={`grid transition-all duration-500 ease-in-out ${
        isOpen
          ? "grid-rows-[1fr] opacity-100 pt-4"
          : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <p className="text-card-text leading-relaxed">{answer}</p>
      </div>
    </div>
  </div>
);

const FaqSection = () => {
  // REMOVED: useAos();
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* REMOVED: data-aos attribute */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* CHANGED: Text color changed to text-void-black */}
          <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-cosmic-indigo mb-4">
            Questions Every Smart UPSC Aspirant Asks
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

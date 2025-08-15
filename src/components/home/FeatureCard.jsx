import React from "react";

const FeatureCard = ({ icon: Icon, title, text, alignment, aosAnimation }) => {
  return (
    <div
      className={`relative flex ${alignment} timeline-item`}
      data-aos={aosAnimation}
    >
      <div className="timeline-card-wrapper md:w-5/12">
        {/* Card styled to match BenefitsSection and ChallengeSection */}
        <div className="group relative bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 ease-out hover:border-electric-aqua/50 hover:shadow-lg hover:-translate-y-1">
          <div className="flex items-start gap-4">
            {/* Icon Wrapper */}
            <div className="w-12 h-12 bg-electric-aqua/10 rounded-xl flex items-center justify-center group-hover:bg-electric-aqua/20 transition-colors duration-300">
              {/* Using the imported Icon component */}
              <Icon className="w-6 h-6 text-electric-aqua" />
            </div>
            {/* Text Content */}
            <div>
              <h3 className="font-semibold text-lg text-cosmic-indigo group-hover:text-electric-aqua transition-colors duration-300">
                {title}
              </h3>
              <p className="mt-1 text-card-text leading-relaxed">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

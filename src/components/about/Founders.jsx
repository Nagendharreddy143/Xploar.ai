import React from "react";
import useAos from "../../hooks/useAos";

// Importing the necessary icons from your central file
import { TwitterIcon, LinkedInIcon } from "../common/Icons";

const FounderCard = () => (
  <div
    className="bg-white rounded-2xl shadow-lg overflow-hidden text-center"
    data-aos="fade-up"
  >
    {/* Founder Image */}
    <img
      src="https://placehold.co/400x400/2B2F77/FFFFFF?text=MNB"
      alt="Photo of Manohar Nayak Barmavath"
      className="w-full h-80 object-cover"
    />

    {/* Founder Details */}
    <div className="p-8">
      <h3 className="font-space-grotesk text-3xl font-bold text-cosmic-indigo">
        Manohar Nayak Barmavath
      </h3>
      <p className="font-poppins font-semibold text-electric-aqua mt-1">
        Founder & CEO
      </p>

      {/* Simplified Bio */}
      <p className="mt-4 text-card-text max-w-md mx-auto">
        A passionate advocate for India's untapped potential, Manohar is a
        talent strategist dedicated to building the next generation of
        innovators.
      </p>

      {/* Social Links */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <a
          href="#"
          className="text-gray-400 hover:text-cosmic-indigo transition-colors"
          aria-label="Twitter"
        >
          <TwitterIcon className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-cosmic-indigo transition-colors"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
);

const Founders = () => {
  useAos();

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2
          className="font-poppins text-3xl lg:text-4xl font-bold text-cosmic-indigo"
          data-aos="fade-up"
        >
          Meet the Founder
        </h2>
        <p
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          The mind behind our mission to redefine learning for a new generation.
        </p>
        <div className="mt-16 max-w-md mx-auto">
          <FounderCard />
        </div>
      </div>
    </section>
  );
};

export default Founders;

import React from "react";
import useAos from "../../hooks/useAos";

const FounderCard = () => (
  <div
    className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row max-w-2xl mx-auto"
    data-aos="fade-up"
  >
    {/* Founder Image */}
    <div className="relative w-full md:w-72 h-72 md:h-64 overflow-hidden">
      <img
        src="/Xploar CEO.png"
        alt="Photo of Manohar Nayak Barmavath"
        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
    </div>

    {/* Founder Details */}
    <div className="p-6 flex flex-col justify-center flex-1">
      <h3 className="font-space-grotesk text-2xl font-bold text-cosmic-indigo text-left">
        Manohar Nayak Barmavath
      </h3>
      <p className="font-poppins font-semibold text-electric-aqua mt-1 text-left text-sm">
        Founder & CEO
      </p>

      {/* Simplified Bio */}
      <p className="mt-3 text-card-text text-left text-sm leading-relaxed">
        A passionate advocate for India's untapped potential, Manohar is a
        talent strategist dedicated to building the next generation of
        innovators.
      </p>
    </div>
  </div>
);

const Founders = () => {
  useAos();

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2
          className="font-poppins text-2xl lg:text-3xl font-bold text-cosmic-indigo"
          data-aos="fade-up"
        >
          Meet the Founder
        </h2>
        <p
          className="mt-3 text-base text-gray-600 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          The mind behind our mission to redefine learning for a new generation.
        </p>
        <div className="mt-12 mx-auto">
          <FounderCard />
        </div>
      </div>
    </section>
  );
};

export default Founders;

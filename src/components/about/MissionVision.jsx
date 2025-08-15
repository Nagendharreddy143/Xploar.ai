const MissionVision = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className="rounded-xl shadow-2xl overflow-hidden"
            data-aos="fade-right"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="/AI_Learning_Platform_Animation_Request.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div data-aos="fade-left" data-aos-delay="100">
            <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-cosmic-indigo">
              Our Mission: Your Lifelong Learning Partner
            </h2>
            <p className="mt-4 text-lg text-card-text">
              To empower learners across the world to explore, personalize, and
              master knowledge through AI-powered tools that adapt to individual
              curiosity, learning styles, and goals.
            </p>
            <p className="mt-6 text-lg text-card-text">
              Our vision is to become the world’s most intelligent and
              exploratory learning platform, where AI becomes your most trusted
              partner in education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

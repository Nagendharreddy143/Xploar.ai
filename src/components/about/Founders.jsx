const founders = [
  {
    name: "Aryan Sharma",
    role: "Co-Founder & CEO",
    bio: "An IIT Delhi alumnus, Aryan believes curiosity is the engine of human progress. He founded Xploar.ai to build a platform where AI empowers you to ask better questions.",
    image: "https://placehold.co/128x128/E2E8F0/4A5568?text=AS",
    borderColor: "border-electric-aqua",
    roleColor: "text-electric-aqua",
    delay: 200,
  },
  {
    name: "Priya Singh",
    role: "Co-Founder & CTO",
    bio: "A machine learning expert from BITS Pilani, Priya is the architect of our intelligent learning engine, making sophisticated technology feel simple and human.",
    image: "https://placehold.co/128x128/E9D5FF/805AD5?text=PS",
    borderColor: "border-neon-lilac",
    roleColor: "text-neon-lilac",
    delay: 300,
  },
];

const Founders = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2
          className="font-poppins text-3xl lg:text-4xl font-bold text-cosmic-indigo"
          data-aos="fade-up"
        >
          Meet the Explorers
        </h2>
        <p
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          The minds behind our mission to redefine learning for a new
          generation.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 justify-center max-w-4xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="bg-gray-50 p-8 rounded-xl"
              data-aos="fade-up"
              data-aos-delay={founder.delay}
            >
              <img
                src={founder.image}
                alt={`Photo of ${founder.name}`}
                className={`w-32 h-32 rounded-full mx-auto shadow-lg border-4 ${founder.borderColor}`}
              />
              <h3 className="mt-6 font-poppins text-2xl font-bold text-cosmic-indigo">
                {founder.name}
              </h3>
              <p className={`mt-1 font-semibold ${founder.roleColor}`}>
                {founder.role}
              </p>
              <p className="mt-4 text-card-text">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
